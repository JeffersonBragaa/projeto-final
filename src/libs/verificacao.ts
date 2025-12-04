
import { LoginCredencias } from "../app/(auth)/login/page";
import bcrypt from 'bcrypt';
import Banco from '@/src/libs/banco';
import { redirect } from "next/navigation";
import { createSessionToken } from '@/src/libs/session';

export async function criaUserDB(dados: LoginCredencias) {

    const senha = dados.senha;
    const senhacrypto = await bcrypt.hash(senha, 10);
    const user = {
        id: crypto.randomUUID(),
        nome: dados.nome,
        email: dados.email,
        senha: senhacrypto,
        assistidos: [],
        desejados: [],
        sugestoes: {
            filmes: [],
            series: []
        }
    }

    console.log(`criando usuário: ${user.nome} - ${user.email}`);
    const usuariosAtuais = await Banco.retornaBanco('users.json');

    for (let i in usuariosAtuais) {
        if (user.email === usuariosAtuais[i].email) {
            console.error('Usuario já existe');
            return;
        }
    }

    usuariosAtuais.push(user);
    await Banco.escreveBanco('users.json', usuariosAtuais);

    console.log('Usuário criado com sucesso:', user);
    redirect('/login');
}

export async function verificaLogin(dados: LoginCredencias): Promise<Boolean | void> {
    const usuariosAtuais = await Banco.retornaBanco('users.json');
    for (let i in usuariosAtuais) {
        if (dados.email === usuariosAtuais[i].email) {
            const senhaValida = await bcrypt.compare(dados.senha, usuariosAtuais[i].senha);
            if (senhaValida) {
                await createSessionToken(usuariosAtuais[i].id, usuariosAtuais[i].senha);
                redirect('/dashboard');
            } else {
                return false;
            }
        }
    }


}

const Verificacao = {
    criaUserDB,
    verificaLogin
}

export default Verificacao;