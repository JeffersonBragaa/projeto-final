import Image from "next/image";
import bubinaLogo from '@/public/bubina.png';
import Logout from "./logout";
import '@/src/app/styles/header.css';
import { isSessionValid } from "@/src/libs/session";


export default async function Header() {
    const isLogged = await isSessionValid();
    let userEmail: string = "";

    if (isLogged) {
        userEmail = isLogged?.userEmail as string;
    }
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">API TMDB</a></li>
                </ul>
            </nav>
            <div className="header-page">
                <div className="titulo-pag">
                    <Image
                        src={bubinaLogo}
                        alt="Logo bubina"
                        className="img-bubina"
                        width={60}
                        height={60}
                    />
                    <h1><a href={'/dashboard'}>Repositório de filmes</a></h1>
                </div>
                <div className="logout">
                    {isLogged && <Logout />}
                </div>

            </div>
        </header>
    )
}