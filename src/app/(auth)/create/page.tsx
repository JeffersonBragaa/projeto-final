import '@/src/app/styles/dashInicial.css'
import '@/src/app/styles/create.css'
import Banco from '@/src/libs/banco';
import { criaUserDB } from '@/src/libs/verificacao';
import { redirect } from 'next/navigation';
export interface CreateFormData {
    nome: string;
    email: string;
    senha: string;
}

export default function Create(){
    
    const criarUser = async (formData: FormData) => {
        'use server';

        const novoUser: CreateFormData={
            nome: formData.get('nome') as string,
            email: formData.get('email') as string,
            senha: formData.get('senha') as string,
        }
        // Lógica de criação de usuário aqui
        
        await criaUserDB(novoUser as CreateFormData);
        redirect('/login');
    }
    
    return(
        <main>
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
                <button type="submit">Registrar</button>
            </form>
        </main>
    )
}