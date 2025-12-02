import Banco from "@/src/libs/banco";
import Filme from "../ui/filmes";
import Link from "next/link";
import { retornaId } from "@/src/libs/session";
const bd: string = 'users.json';


export default async function Dashboard(){
    
    const dados = await Banco.retornaBanco(bd);
    const returno = await retornaId(); 
    const usuario = dados.find((u: any) => String(u.id) === String(returno));

    const filmes = usuario.assistidos.map((p: any) => {
        return <Filme {...p} key={p.id} />
    });    
    
    return(
        <>
            <h1>Bem-vindo ao Dashboard</h1>

            <div className="card-assistidos">
                <Link href={'/dashboard/adiciona-assistidos'} className="adiciona-bnt">Adicionar</Link>
                <div>
                    {filmes.length > 0 ? filmes : <p>Nenhum filme assistido ainda.</p>}
                </div>
            </div>
            <div className="card-desejados">
                <Link href={'/dashboard/adiciona-desejados'} className="adiciona-bnt">Adicionar</Link>
            </div>
            <div className="sujestoes">
                <Link href={'/dashboard/create'} className="adiciona-bnt">Adicionar</Link>

            </div>
        </>
    )
}
