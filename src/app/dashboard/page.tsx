import Banco from "@/src/libs/banco";
import Filme from "../ui/filmes";
import Link from "next/link";
import { retornaId } from "@/src/libs/session";
import '@/src/app/styles/dashboard-filmes.css';
import { recomendarConteudos } from '@/src/api/apiIA';
const db: string = 'users.json';


export default async function Dashboard() {

    const dados = await Banco.retornaBanco(db);
    const retorno = await retornaId();
    const usuario = dados.find((u: any) => String(u.id) === String(retorno));

    usuario.assistidos.sort((a: any, b: any) => {
        return b.avaliacao - a.avaliacao; 
    });

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
        <section>

            <h1>Bem-vindo ao Dashboard</h1>
            <div className="principal">

                <div className="adicionar">
                    <Link href={'/dashboard/adiciona-assistidos'} className="adiciona-bnt">Adicionar</Link>
                </div>
                <div className="titulo">
                    <h2>Assistidos</h2>
                </div>
                <div className="colecao">

                    {filmes_assistidos.length > 0 ? filmes_assistidos : <p>Nenhum filme assistido ainda.</p>}

                </div>
            </div>



            <div className="principal">
                <div className="adicionar">
                    <Link href={'/dashboard/adiciona-desejados'} className="adiciona-bnt">Adicionar</Link>
                </div>

                <div className="titulo">
                    <h2>Desejados</h2>
                </div>

                <div className="colecao">

                    {filmes_desejados.length > 0 ? filmes_desejados : <p>Nenhum filme desejado ainda.</p>}

                </div>
            </div>


            <div className="principal">
                <div className="sugestoes">

                </div>
                <div className="filme-titulo">
                    <h2>Sujestões Filmes IA</h2>
                </div>
                <div className="colecao">

                    {filmesIA.length > 0 ? filmesIA : <p>Nenhuma sugestão disponível.</p>}

                </div>

                <div className="serie-titulo">
                    <h2>Sujestões Serie IA</h2>
                </div>
                <div className="colecao">

                    {seriesIA.length > 0 ? seriesIA : <p>Nenhuma sugestão disponível.</p>}

                </div>
                <p>Clique abaixo para gerar sugestões da IA através de uma análise do seu perfil!</p>
                <Link href={'/dashboard/Analise-IA'} className="adiciona-bnt">Gerar Sugestões</Link>
            </div>
        </section>


    )
}
