import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.API_ia,
});

export async function recomendarConteudos(assistidos, desejados) {
    if (assistidos.length === 0 && desejados.length === 0) {
        return;
    }
    const prompt = `
Você é um sistema especialista em análise de comportamento audiovisual e recomendação inteligente de filmes e séries.

Sua tarefa é analisar profundamente o perfil do usuário com base                   nas seguintes listas:
- Filmes assistidos: ${assistidos.join(", ")}
- Filmes desejados: ${desejados.join(", ")}

Siga exatamente as instruções abaixo:

1. **Análise do Perfil**
   - Identifique padrões narrativos, emocionais e estéticos nos filmes assistidos e desejados.
   - Analise preferências de:
     - gêneros
     - ritmo narrativo
     - profundidade emocional
     - estilo visual
     - temas recorrentes (ex: ficção científica, crime psicológico, fantasia, dramas familiares)
     - complexidade do enredo
     - diretores, estúdios ou universos relacionados
   - Detecte também:
     - nivel de tolerância a violência ou suspense
     - preferência por histórias longas ou curtas
     - gosto por finais abertos ou fechados
     - preferência por obras populares ou nichadas
   - Construa mentalmente um “perfil psicológico audiovisual” do usuário.

2. **Recomendação Inteligente**
   - Com base nessa análise profunda, indique:
     - 3 filmes
     - 3 séries
   - As recomendações devem ser:
     - altamente personalizadas ao perfil detectado
     - coerentes entre si
     - complementares às listas já fornecidas
     - evitando títulos que o usuário já assistiu ou demonstrou desinteresse

3. **Formato da Resposta**
   - A resposta deve ser **somente** um JSON no formato:
   {
      "filmes": ["titulo1", "titulo2", "titulo3"],
      "series": ["titulo1", "titulo2", "titulo3"]
   }
   - Não escreva explicações.
   - Não escreva justificativas.
   - Não escreva texto adicional fora do JSON.
   - Não repita títulos já presentes nas listas do usuário.

IMPORTANTISSIMO:
- Devolva SOMENTE o JSON, nada além disso.
`;

    const response = await client.responses.create({
        model: "gpt-4.1",
        input: prompt,
    });

    const texto = response.output[0].content[0].text;

    return JSON.parse(texto);
}
