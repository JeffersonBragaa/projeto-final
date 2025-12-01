import Banco from "@/src/libs/banco";
import Image from "next/image";
import Login from "../(auth)/login/page";
import { redirect } from "next/dist/server/api-utils";
import { LoginCredencias } from "../(auth)/login/page";

export interface FilmesProps {
    id: string;
    titulo: string;
    img: string;
    descricao: string;
}
export default function DashboardPrincipal(props: FilmesProps) {

    const deleteFilmes = async () => {
        'use server'
        const bd: string = 'user.json';
        const userId = dados: LoginCredencias = await Login;
        const users = await Banco.retornaBanco(bd);


        for (let i in users) {
            if (users[i].id === userId) {
                const j = 0
                for (users.[i].filmesAssistidos[j] of users[i].filmesAssistidos)
                    if (users[i].filmesAssistidos[j].id === props.id)
                        users[i].filmesAssistidos.splice(j, 1);
            }
        }
        await Banco.escreveBanco(bd, users);
        redirect('/dashboard');
    }

    return (
        <div className="filmes-assistidos-cards">
            <h2>{props.titulo}</h2>
            <Image
                src={props.img}
                alt={`Imagem do filme ${props.titulo}`}
                width={200}
                height={300}
            />
            <p>{props.descricao}</p>
            <div className="filmes-assistidos-bnts">
                <form action={deleteFilmes}>
                    <button>editar</button>
                    <button className="bnt-deletar">Deletar</button>
                </form>
            </div>
        </div>
    )
}