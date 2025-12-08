import Banco from "@/src/libs/banco";
import Login from "../(auth)/login/page";
import { redirect } from "next/dist/server/api-utils";
import { LoginCredencias } from "../(auth)/login/page";
import { FilmeProps } from "../dashboard/adiciona-assistidos/page";
import Image from "next/image";

export default function Filme(props: FilmeProps) {


    return (
        <div className="filmes-assistidos-cards">
            <h3>{props.nome}</h3>
            <Image src={props.img} alt={props.nome} width={200} height={300} />
            <p>{props.descricao}</p>
        </div>
    )
}