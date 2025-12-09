import '@/src/app/styles/dashInicial.css'
import '@/src/app/styles/create.css';
import Banco from '@/src/libs/banco';
import { criaUserDB } from '@/src/libs/verificacao';
import { redirect } from 'next/navigation';
export interface CreateFormData {
    nome: string;
    email: string;
    senha: string;
}

export default function Create() {

    const criarUser = async (formData: FormData) => {
        'use server';
        
        const novoUser = {
            nome: formData.get('nome') as string,
            email: formData.get('email') as string,
            senha: formData.get('senha') as string,
            confSenha: formData.get('confSenha') as string
        }
        if(novoUser.senha != novoUser.confSenha){
            console.error('Senhas diferentes');
            return;
        }


        const retorno = await criaUserDB(novoUser as CreateFormData);
        if(!retorno){
            redirect('/create');
        }
        redirect('/login');
    }

    return (

        <form action={criarUser} className='cria-user'>
            <h1>Crie sua Conta</h1>
            <div>
                <input type="text" name='nome' placeholder="Nome de Usuário" />
            </div>
            <div>
                <input type="email" name='email' placeholder="Email" />
            </div>
            <div>
                <input type="password" name='senha' placeholder="Senha" />
            </div>
            <div>
                <input type="password" name='confSenha' placeholder="Confirme sua Senha" />
            </div>
            <button type="submit">Registrar</button>
        </form>

    )
}