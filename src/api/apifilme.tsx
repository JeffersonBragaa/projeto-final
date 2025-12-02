import axios from "axios";

export async function procuraFilme(nome: string) {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/search/multi",
            {
                params: {
                    query: nome,
                    include_adult: false,
                    language: "pt-BR",
                    page: 1
                },
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.API_F}`
                }
            }
        );

        const resultados = response.data.results;
        const f = resultados[0]; 

        if (!f) return null;

        return {
            id: f.id,
            nome: f.title || f.name,        
            descricao: f.overview,
            img: `https://image.tmdb.org/t/p/w500${f.poster_path}`,
            avaliacao: f.vote_average,
            tipo: f.media_type         
        };
    } catch (error) {
        console.error("Erro ao buscar no TMDB:", error);
        return null;
    }
}
