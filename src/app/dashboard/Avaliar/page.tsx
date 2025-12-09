import Banco from "@/src/libs/banco";
import { retornaId } from "@/src/libs/session";
import { redirect } from "next/navigation";

const db = 'users.json';

interface EditPageProps {
    searchParams: Promise<{
        id?: string;
    }>
}

export default async function EditFilme({ searchParams }: EditPageProps) {
    const params = await searchParams;
    const filmeId = params.id;

    const userId = await retornaId();
    const dbusers = await Banco.retornaBanco(db);

    const usuarioIndex = dbusers.findIndex(
        (u: any) => String(u.id) === String(userId)
    );

    const usuario = dbusers[usuarioIndex];

    // ---- ENCONTRA FILME EM ASSISTIDOS OU DESEJADOS ----
    let filme: any = null;

    // procura em assistidos
    filme = usuario.assistidos.find((f: any) => String(f.id) === String(filmeId));

    // se não achar, procura em desejados
    if (!filme) {
        filme = usuario.desejados.find((f: any) => String(f.id) === String(filmeId));
    }

    if (!filme) {
        return <h1>Filme não encontrado</h1>;
    }

    // --------- FUNÇÃO DE AVALIAÇÃO (SERVER ACTION) ---------
    const avaliarFilme = async (formData: FormData) => {
        "use server";

        const novaAvaliacao = Number(formData.get("avaliacao"));

        filme.avaliacao = novaAvaliacao;

        // salva no banco
        await Banco.escreveBanco(db, dbusers);

        redirect('/dashboard');
    };

    return (
        <div>
            <h1>Avaliação de Filmes</h1>

            <form action={avaliarFilme} className="avaliacao-filme">
                <div>
                    <input
                        type="number"
                        name="avaliacao"
                        defaultValue={filme.avaliacao ?? ""}
                        min={0}
                        max={10}
                        step={0.1}
                    />
                </div>

                <button type="submit">Avaliar</button>
            </form>
        </div>
    );
}
