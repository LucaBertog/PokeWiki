# PokéWiki

Projeto desenvolvido em [Next.js](https://nextjs.org/) + [React](https://react.dev/) consumindo a [PokeAPI](https://pokeapi.co/).

## ✨ Funcionalidades

- Listagem de Pokémons com nome, sprite e tipos
- Paginação ("Carregar mais")
- Modal de detalhes com estatísticas, habilidades, altura, peso e cadeia evolutiva
- Favoritar/desfavoritar Pokémons (com persistência em localStorage)
- Busca por nome e filtro por tipo
- Lista de favoritos
- Design responsivo e moderno com Tailwind CSS + shadcn/ui
- Acessibilidade nos modais

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/pokewiki.git
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
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)

## 📁 Estrutura de Pastas

```
src/
  app/           # Páginas e layout do Next.js
  components/    # Componentes reutilizáveis (Card, Modal, etc)
  context/       # Contexto global de favoritos
  services/      # Consumo da PokeAPI
  types/         # Tipos TypeScript
```

## 📌 Observações técnicas

- O estado global de favoritos é persistido no localStorage.
- O projeto é totalmente responsivo e acessível.
- O modal de detalhes exibe todas as informações relevantes do Pokémon, incluindo estatísticas em gráfico de barra e cadeia evolutiva.
- O filtro de busca é instantâneo e case-insensitive.
- O botão de favoritos na topbar ainda não navega para a página de favoritos (em breve).

---

Feito por Lucas Bertoli para Case (https://github.com/LucaBertog)
