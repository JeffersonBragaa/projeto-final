import Image from "next/image";
import bubinaLogo from '@/public/bubina.png';
import '@/app/styles/header.css'; 
import '@/app/styles/footer.css'

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
        </header>
    )
}