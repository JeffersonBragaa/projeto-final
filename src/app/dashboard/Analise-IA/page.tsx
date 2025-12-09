import { procuraFilme } from "@/src/api/apifilme";
import { recomendarConteudos } from "@/src/api/apiIA";
import Banco from "@/src/libs/banco";
import { retornaId } from "@/src/libs/session";
import { FilmeProps } from "../adiciona-assistidos/page";
import '@/src/app/styles/analise-ia.css';
const bd: string = 'users.json';

export default async function AnaliseIA() {

    const dados = await Banco.retornaBanco(bd);
    const returno = await retornaId();
    const usuario = dados.find((u: any) => String(u.id) === String(returno));

    const recomendacoes = await recomendarConteudos(usuario.assistidos, usuario.desejados);

    usuario.sugestoes.filmes = [];
    usuario.sugestoes.series = [];

    console.log(usuario.sugestoes);

    for (let i = 0; i < 3; i++) {
        const filme = await procuraFilme(recomendacoes.filmes[i]);
        const series = await procuraFilme(recomendacoes.series[i]);
        if (filme) {
            const filmeNovo: FilmeProps = {
                id: filme.id,
                nome: filme.nome,
                img: filme.img,
                descricao: filme.descricao,
                avaliacao: filme.avaliacao
            };
            usuario.sugestoes.filmes.push(filmeNovo);
        }
        if (series) {
            const serieNova: FilmeProps = {
                id: series.id,
                nome: series.nome,
                img: series.img,
                descricao: series.descricao,
                avaliacao: series.avaliacao
            };
            usuario.sugestoes.series.push(serieNova);
        }
    }

    await Banco.escreveBanco(bd, dados);

    return (
        <div className="analiseia">
            <h1>Sua Analise Foi Gerada Com Sucesso!!</h1>
            <p>Clique no Botão a Baixo e veja a Atualização no seu Dashboard </p>
            <div className="bnt-dashboard">
                <form action={'/dashboard/'}>
                    <button>Ver Analise</button>
                </form>
            </div>
        </div>
    )
}
