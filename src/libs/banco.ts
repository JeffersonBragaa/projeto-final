import { promises as fs } from 'fs';
import path from 'path';

export async function retornaBanco(arquivo: string):Promise<Array<any>>{
    const db = path.join(process.cwd(), 'src', 'app', 'db', arquivo);
    const dados = await fs.readFile(db, 'utf-8');
    return JSON.parse(dados);
}
export async function escreveBanco(arquivo: string, dados: Array<any>):Promise<void>{
    const db = path.join(process.cwd(), 'src', 'app', 'db', arquivo);
    await fs.writeFile(db, JSON.stringify(dados, null, 2), 'utf-8');
}

const Banco = {
    retornaBanco,
    escreveBanco
}

export default Banco;