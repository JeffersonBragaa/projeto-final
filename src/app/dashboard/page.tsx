import Banco from "@/src/libs/banco";
import Filme from "../ui/filmes";
const bd: string = 'users.json';
export default async function Dashboard(){
    
    const dados = await Banco.retornaBanco(bd);
    console.log('filmes', dados);
    const filmes = dados.map(p => {
        return < Filme {...p} key={p.id} />
    })
    
    
    return(
        <>
            <h1>Bem-vindo ao Dashboard</h1>

            <div className="card-assistidos">aa</div>
            <div className="card-petendidos">aa</div>
            <div className="sujestoes">aa</div>
        </>
    )
}
