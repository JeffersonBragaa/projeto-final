'use server';

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";


async function openSessionToken(token: string){
    const encodedKey = new TextEncoder().encode(process.env.TOKEN);
  
    try{
        const {payload} = await jwtVerify(token, encodedKey, {
        algorithms: ["HS256"],
        });
        return payload;
    }catch(e){
        console.log('Erro ao verificar session token', e);
    }
    
}

export async function createSessionToken(userId: string, userSenha: string){
    const encodedKey = new TextEncoder().encode(process.env.TOKEN); 
    const expiresAt = Date.now() + 3600;


    //Cria  session. É feita uma "assinatura" do payload
    //Aqui também espeficifamos o algoritmo de criptografia como HS256
    const session = await new SignJWT({userId, userSenha}).setProtectedHeader({
        alg: 'HS256'
    })
    .setExpirationTime('1h') //Define um tempo para expirar
    .sign(encodedKey); //Assina o token

    //Seguindo a documentação do next, precisamos primeiro criar o cookieStore, pois é async
    const cookieStore = await cookies();
    
    //Através da cookieStore conseguimos buscar (get) e salvar (set) cookies no navegador.
    cookieStore.set('session', session, {
        expires: expiresAt * 1000,
        path: '/',
        httpOnly: true
    });
}

export async function isSessionValid(){

    const sessionCookie = (await cookies()).get('session');

    if(sessionCookie)
    {
        const {value} = sessionCookie;
        const session = await openSessionToken(value);
        return session;
    }

    return false;

}

export async function deleteSessionCookie(){

    //Seguindo a documentação do next, precisamos primeiro criar o cookieStore, pois é async
    const cookieStore = await cookies();

    cookieStore.delete('session');

}

export function getUserid(){
    const cockie = cookies().get('session');
    if(cockie){
        return cockie?.value || null; 
    }
}