import Banco from "@/src/libs/banco";
import Filme from "../ui/filmes";
import Link from "next/link";
const bd: string = 'users.json';


export default async function Dashboard(){
    
    const dados = await Banco.retornaBanco(bd);
    console.log('filmes', dados);
    const filmes = dados.map(p => {
        return <Filme {...p} key={p.id} />
    })
    
    
    return(
        <>
            <h1>Bem-vindo ao Dashboard</h1>

            <div className="card-assistidos">
                <Link href={'/dashboard/adiciona-assistidos'} className="adiciona-bnt">Adicionar</Link>
            </div>
            <div className="card-petendidos">
                <Link href={'/dashboard/create'} className="adiciona-bnt">Adicionar</Link>
            </div>
            <div className="sujestoes">
                <Link href={'/dashboard/create'} className="adiciona-bnt">Adicionar</Link>

            </div>
        </>
    )
}
