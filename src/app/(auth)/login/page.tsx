import '@/src/app/styles/dashInicial.css';
import '@/src/app/styles/login.css';
import { verificaLogin } from '@/src/libs/verificacao';
import { redirect } from 'next/navigation';
export interface LoginCredencias {
    nome: string;
    email: string;
    senha: string;
}

export default function Login() {
    
    const realizarLogin = async (formData: FormData) => {
        'use server';   
        const user: LoginCredencias={
            nome: formData.get('nome') as string,
            email: formData.get('email') as string,
            senha: formData.get('senha') as string,            
        }
        // Lógica de autenticação aqui
        
        const retorno = await verificaLogin(user as LoginCredencias);
        console.log('Retorno do login:', retorno);
        redirect('/dashbord');
    }

    return (
        <main>
            <div className="login-user">
                <form action={realizarLogin}>
                    <h1>Login</h1>
                    <input type="email" name='email' placeholder="E-mail" />
                    <input type="password" name='senha' placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </main>
    )
}