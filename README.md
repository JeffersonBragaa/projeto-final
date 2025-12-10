# 📽️ Repositório Versátil de Filmes e Séries

Um sistema completo para gerenciar filmes e séries assistidos ou desejados — mas indo além de um simples repositório.  
Aqui, uma IA integrada analisa seus gostos, identifica padrões e recomenda automaticamente 3 filmes e 3 séries alinhados ao seu perfil.

O projeto traz funcionalidades de avaliação, ordenação, organização e uma experiência de navegação fluida.

---

## 🚀 Tecnologias Utilizadas

- **Next.js**
- **JavaScript & TypeScript**
- **HTML & CSS**
- **JSON** como banco de dados local
- **API TMDB** (dados oficiais)
- **OpenAI API** (IA para recomendações)
- **JWT** para autenticação
- Middleware do Next.js para rotas privadas

---

## 🧠 Inteligência Artificial Integrada

A IA:

- Lê todos os seus assistidos, desejados e avaliações.
- Identifica padrões no seu comportamento.
- Cria um perfil cinematográfico.
- Gera recomendações estruturadas via OpenAI.

---

## 🔐 Autenticação e Proteção de Rotas

Implementado com:

- JWT assinado com **SignJWT**
- Decodificação com **decodeJwt**
- Cookies HttpOnly
- Middleware protegendo rotas sensíveis
- Sessões seguras por usuário

---

## 📡 Integrações Externas

### TMDB
- Busca dados oficiais de filmes e séries  
- Carrega imagens de alta resolução  
- Mantém o repositório sempre atualizado  

### OpenAI
- Analisa o perfil do usuário  
- Interpreta comportamento cinematográfico  
- Recomenda automaticamente 3 filmes e 3 séries  

---

## 🗃️ Banco de Dados (JSON)

Armazena:

- Usuários  
- Filmes assistidos  
- Filmes desejados  
- Avaliações pessoais  
- Dados utilizados pela IA  

---

## 🧭 Funcionalidades

### 🔹 1. Dashboard Inicial
- Introdução ao site  
- Login e cadastro  

### 🔹 2. Autenticação Completa
- Login  
- Cadastro  
- Middleware para rotas privadas  
- Sessão persistente via JWT  

### 🔹 3. Dashboard Principal
- Listagem completa  
- Adição de assistidos  
- Adição de desejados  
- Avaliação pessoal  
- Ordenação por nota  
- Remoção de itens  
- Interface responsiva  

### 🔹 4. Análise da IA
- Perfil gerado automaticamente  
- Recomendações personalizadas  
- 3 filmes e 3 séries  
- Baseado no comportamento do usuário  

### 🔹 5. Ações Globais
- Logout  
- Retorno ao dashboard  
- Link direto para TMDB  

---

## 📁 Estrutura do Projeto

```
src/
 ├── api/
 ├── app/
 │   ├── (auth)/
 │   │   └── create/
 │   ├── login/
 │   ├── dashboard/
 │   ├── dashboardInicial/
 │   ├── db/
 │   │   └── users.json
 │   ├── page.tsx
 │   └── layout.tsx
 ├── libs/
 │   ├── banco.ts
 │   ├── session.ts
 │   └── verificacao.ts
 ├── styles/
 └── ui/
```

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/JeffersonBragaa/projeto-final.git
```

### 2. Entre no diretório
```bash
cd projeto-final
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Crie o arquivo `.env.local`
Exemplo:

```
TMDB_API_KEY=sua_chave_tmdb
OPENAI_API_KEY=sua_chave_openai
JWT_SECRET=sua_chave_secreta
```

### 5. Execute o projeto
```bash
npm run dev
```

### 6. Acesse no navegador
```
http://localhost:3000
```

---

## 🧪 Roadmap (Melhorias Futuras)

- Migrar JSON para banco real (PostgreSQL ou MongoDB)
- Filtros avançados por gênero  
- Modo escuro  
- Favoritos  
- Perfil público compartilhável  
- App mobile offline  

---

## 📄 Licença

Projeto aberto para estudos e evolução pessoal.