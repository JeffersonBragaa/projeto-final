import { procuraFilme } from "@/src/api/apifilme";
import { FilmeProps } from "../adiciona-assistidos/page";
import '@/src/app/styles/adiciona.css';
import Banco from "@/src/libs/banco";
import { retornaId } from "@/src/libs/session";
import { redirect } from "next/navigation";
const db = 'users.json'

export default function Desejados() {

    const adicionaDesejados = async (formData: FormData) => {
        'use server';
        const filme = formData.get('nome') as string;
        const retorno = await procuraFilme(filme);

        if (!retorno) {
            console.error('Nenhum filme encontrado');
            return;
        }
        const novo: FilmeProps = {
            id: retorno.id,
            nome: retorno.nome,
            img: retorno.img,
            descricao: retorno.descricao,
            avaliacao: retorno.avaliacao
        };

        const userId = await retornaId();
        console.log("retornou isso aqui:", userId);

        const dbusers = await Banco.retornaBanco(db);
        const usuarioIndex = dbusers.findIndex((u: any) => String(u.id) === String(userId));

        const usuario = dbusers[usuarioIndex];
        usuario.desejados.push(novo);
        dbusers[usuarioIndex] = usuario;
        await Banco.escreveBanco(db, dbusers);
        redirect('/dashboard');
    
    }

    return (
        <div className="principal-adiciona">
            <h2>Adicione Filmes Que Você Deseja Assistir!</h2>

            <div className="card-adiciona">

                <form action={adicionaDesejados}>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Titulo do Filme"
                    />
                    <div>
                        
                        <button id="bnt-add">Adicionar</button>

                    </div>
                </form>
            </div>
        </div>
    )

}