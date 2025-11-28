import Image from "next/image";
import bubinaLogo from '@/public/bubina.png';
import Logout from "./logout";
import '@/src/app/styles/header.css';

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="https://www.themoviedb.org/">API TMDB</a></li>
                </ul>
            </nav>
            <div className="header-page">
                <Image
                    src={bubinaLogo}
                    alt="Logo bubina"
                    className="img-bubina"
                    width={60}
                    height={60}
                />
                <h1>Repositório de filmes</h1>
            </div>
            <div className="logout">
                <Logout/>
            </div>
        </header>
    )
}