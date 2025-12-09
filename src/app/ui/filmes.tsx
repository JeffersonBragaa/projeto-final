import Banco, { escreveBanco } from "@/src/libs/banco";
import Login from "../(auth)/login/page";
import { redirect } from "next/navigation";
import { LoginCredencias } from "../(auth)/login/page";
import { FilmeProps } from "../dashboard/adiciona-assistidos/page";
import Link from "next/link";
import Image from "next/image";
import { retornaId } from "@/src/libs/session";


const db = 'users.json'

export default function Filme(props: FilmeProps) {
    
    const deletarFilme = async () => {
        'use server'

        const idFilme = props.id;
        const userId = await retornaId();
        const dbusers = await Banco.retornaBanco(db);

        const usuarioIndex = dbusers.findIndex(
            (u: any) => String(u.id) === String(userId)
        );

        const usuario = dbusers[usuarioIndex];
        console.log(usuario);
        
        const a = usuario.assistidos.findIndex((p: any) => p.id === idFilme); 
        if(a !== -1)usuario.assistidos.splice(a, 1);
        
        const b = usuario.desejados.findIndex((p: any) => p.id === idFilme); 
        if(b !== -1)usuario.desejados.splice(b, 1);

        const c = usuario.sugestoes.filmes.findIndex((p: any) => p.id === idFilme); 
        if(c !== -1)usuario.sugestoes.filmes.splice(c, 1);

        const d = usuario.sugestoes.series.findIndex((p: any) => p.id === idFilme); 
        if(d !== -1)usuario.sugestoes.series.splice(c, 1);

        await escreveBanco(db, dbusers);

        redirect('/dashboard');
    };

    return (
        <form action={deletarFilme}>
            <div className="filmes-assistidos-cards">
                <h3>{props.nome}</h3>
                <Image src={props.img} alt={props.nome} width={200} height={300} />
                <p>{props.descricao}</p>

                <section className="bnts">

                    <div className='bnt-delete'>
                        <button>✖</button>
                    </div>
                    <div className="bnt-avaliar">
                        <Link href={`/dashboard/Avaliar?id=${props.id}`} className="bnt-avaliar">Avaliar</Link>
                    </div>
                </section>
            </div>
        </form>
    )
}