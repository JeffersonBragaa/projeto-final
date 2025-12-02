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
                <form action="">
                    <button>editar</button>
                    <button className="bnt-deletar">Deletar</button>
                </form>
            </div>
        </div>
    )
}