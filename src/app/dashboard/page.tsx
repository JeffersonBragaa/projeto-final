import Banco from "@/src/libs/banco";
import Filme from "../ui/filmes";
import Link from "next/link";
import { retornaId } from "@/src/libs/session";
import { recomendarConteudos } from '@/src/api/apiIA';
const bd: string = 'users.json';


export default async function Dashboard() {

    const dados = await Banco.retornaBanco(bd);
    const retorno = await retornaId();
    const usuario = dados.find((u: any) => String(u.id) === String(retorno));

    const filmes_assistidos = usuario.assistidos.map((p: any) => {
        return <Filme {...p} key={p.id} />
    });

    const filmes_desejados = usuario.desejados.map((p: any) => {
        return <Filme {...p} key={p.id} />
    });

    const filmesIA = usuario.sugestoes.filmes.map((p: any) => {
        return <Filme {...p} key={p.id} />
    }); 

    const seriesIA = usuario.sugestoes.series.map((p: any) => {
        return <Filme {...p} key={p.id} />
    });
    return (
        <>
            <h1>Bem-vindo ao Dashboard</h1>

            <div className="card-assistidos">
                <Link href={'/dashboard/adiciona-assistidos'} className="adiciona-bnt">Adicionar</Link>
                <div>
                    {filmes_assistidos.length > 0 ? filmes_assistidos : <p>Nenhum filme assistido ainda.</p>}
                </div>
            </div>
            <div className="card-desejados">
                <Link href={'/dashboard/adiciona-desejados'} className="adiciona-bnt">Adicionar</Link>
                <div>
                    {filmes_desejados.length > 0 ? filmes_desejados : <p>Nenhum filme desejado ainda.</p>}
                </div>
            </div>
            <div className="sujestoes">
                <Link href={'/dashboard/Analise-IA'} className="adiciona-bnt">Consultar a Inteligencia artificial</Link>
                <div>
                    {filmesIA.length > 0 ? filmesIA : <p>Nenhuma sugestão disponível.</p>}
                </div>
                <div>
                    {seriesIA.length > 0 ? seriesIA : <p>Nenhuma sugestão disponível.</p>}
                </div>
            </div>
        </>
    )
}
