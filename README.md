# PokeWiki (Case)

Projeto desenvolvido em [Next.js] + [React] usando a [PokeAPI](https://pokeapi.co/).

## ✨ Funcionalidades

- Listagem de Pokémons com nome, sprite e tipos
- Paginação ("Carregar mais")
- Modal de detalhes com estatísticas, habilidades, altura, peso e cadeia evolutiva
- Favoritar/desfavoritar Pokémons (em localStorage)
- Busca por nome e filtro por tipo
- Lista de favoritos
- Design responsivo e moderno com Tailwind CSS
- Responsividade mobile

## 🚀 Como rodar o projeto

1. **Clone o repositório (Em VS Code ou Terminal CMD):**
   ```bash
   git clone https://github.com/LucaBertog/PokeWiki.git
   cd pokewiki
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 🛠️ Tecnologias & Bibliotecas

- [Next.js App Router](https://nextjs.org/docs/app)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)

## 📌 Observações técnicas

- O estado global de favoritos é persistido no localStorage.
- O projeto é totalmente responsivo e acessível.
- O modal de detalhes exibe todas as informações relevantes do Pokémon, incluindo estatísticas em gráfico de barra e cadeia evolutiva.
- O projeto está em deploy.


## 🌐 Deploy

O projeto está disponível em:  
- [https://poke-wiki-nine.vercel.app](https://poke-wiki-nine.vercel.app)

---

Feito por Lucas Bertoli para Case (https://github.com/LucaBertog)
