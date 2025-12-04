import { procuraFilme } from "@/src/api/apifilme";
import Banco from "@/src/libs/banco";
import { retornaId } from "@/src/libs/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface FilmeProps {
    id: string,
    nome: string,
    img: string,
    descricao: string, 
    avaliacao: number
}

const db = 'users.json'
export default function Assistidos() {

    const adicionaAssistidos = async (formData: FormData) => {
        'use server';

        const filme = formData.get('nome') as string;
        const retorno = await procuraFilme(filme);

        if (!retorno) {
            console.error('Nenhum filme encontrado');
            return;
        }

        const novo: FilmeProps = {
            id: retorno.id,
            nome: retorno.nome,
            img: retorno.img,
            descricao: retorno.descricao, 
            avaliacao: retorno.avaliacao
        };

        console.log(JSON.stringify(novo, null, 2));
        
        
        //aqui vai a logica de adicionar o filme no vetor do usuario
        const userId = await retornaId();
        console.log("retornou isso aqui:", userId);
        
        const dbusers = await Banco.retornaBanco(db)
        const usuarioIndex = dbusers.findIndex((u: any) => String(u.id) === String(userId));

        const usuario = dbusers[usuarioIndex]; 
        usuario.assistidos.push(novo); 
        dbusers[usuarioIndex] = usuario;
        await Banco.escreveBanco(db, dbusers)
        
        redirect('/dashboard/')

    };


    return (

        <div>
            <h2>Adicione Filmes Que Você já Assistiu!</h2>

            <form action={adicionaAssistidos}>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Titulo do Filme"
                />
                <button>Adicionar</button>
            </form>
        </div>
    )
}