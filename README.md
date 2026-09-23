# Cinemidia Next

Aplicação web para explorar filmes e séries utilizando a API do TMDB.

O **Cinemidia Next** é uma evolução do projeto [Cinemidia](https://github.com/rafaelottdev/cinemidia), originalmente desenvolvido em Vue.js. Nesta versão, o projeto foi reconstruído com **Next.js, React, TypeScript e Sass**, com foco em uma arquitetura mais moderna, melhor experiência de usuário, performance e qualidade de código.

## Preview

<img width="380" height="200" alt="Captura de tela 2026-09-21 104721" src="https://github.com/user-attachments/assets/f4d57eca-497b-42d1-8309-0bf77361d554" />
<img width="130" height="230" alt="iPhone-14-Pro-393x685" src="https://github.com/user-attachments/assets/1a642ff1-0868-40e7-85ef-4c95c37b69ce" />

## Principais recursos

* Catálogo de filmes e séries
* Página de detalhes de filmes e séries
* Sistema de busca
* Watchlist com persistência no navegador
* Infinite scroll para filmes e séries
* Indicação de itens já adicionados à Watchlist
* Página de lançamentos
* Página de populares
* Trailers integrados
* Loading com Skeleton
* Suspense para carregamento de conteúdo
* Página personalizada para rotas não encontradas
* Indicação da página atual durante a navegação
* Interface responsiva para desktop e mobile

## Tecnologias

### Front-end

* Next.js
* React
* TypeScript
* Sass

### API

* TMDB API

### Qualidade e desenvolvimento

* Biome
* Vitest
* Playwright
* Husky
* Commitlint
* Conventional Commits
* GitHub Actions (CI)

## Performance

O projeto utiliza recursos do Next.js para melhorar o carregamento e a experiência de navegação:

* Server-Side Rendering (SSR)
* Client-Side Rendering (CSR)
* Cache
* Suspense
* Skeleton loading
* Infinite scroll
* Componentização e renderização otimizada

## Qualidade de código

O projeto possui ferramentas e processos para manter um padrão de qualidade durante o desenvolvimento.

### Biome

Utilizado para formatação e análise estática do código, mantendo um padrão consistente no projeto.

### Testes

Os testes são realizados utilizando:

* **Vitest** para testes automatizados
* **Playwright** para testes End-to-End

### CI

O projeto possui uma pipeline de **CI com GitHub Actions**, utilizada para validar o código automaticamente.

### Git Hooks

O **Husky** executa verificações antes dos commits, enquanto o **Commitlint** garante que as mensagens sigam o padrão definido pelo **Conventional Commits**.

### Proteção da branch principal

A branch `main` possui regras para impedir pushes diretos, fazendo com que alterações sejam integradas através do fluxo de Pull Requests.

## Integração com TMDB

O Cinemidia Next utiliza a [TMDB API](https://www.themoviedb.org/documentation/api) para obter informações sobre filmes e séries, incluindo:

* Filmes populares
* Séries populares
* Lançamentos
* Informações detalhadas
* Gêneros
* Trailers
* Imagens e posters

## Instalação

Clone o repositório:

```bash
git clone https://github.com/rafaelottdev/cinemidia-next.git
```

Entre na pasta:

```bash
cd cinemidia-next
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em:

```text
http://localhost:3000
```

A chave da API pode ser obtida através da [TMDB](https://www.themoviedb.org/).

## Evolução do projeto

O Cinemidia Next foi desenvolvido como uma evolução do Cinemidia original, trazendo melhorias significativas em arquitetura, experiência de usuário e qualidade de desenvolvimento.

Entre as principais evoluções estão:

* Migração de Vue.js para Next.js e React
* Migração de JavaScript para TypeScript
* Novo sistema de loading com Skeleton e Suspense
* Sistema de busca funcional
* Páginas individuais para filmes e séries
* Infinite scroll
* Melhorias gerais na interface e responsividade
* Mais informações nos cards
* Watchlist com feedback visual
* SSR, CSR e cache
* Testes automatizados
* CI/CD e validações automatizadas
* Padronização de commits
* Fluxo de desenvolvimento com proteção da branch principal

## Desenvolvido por

**Rafael Ott**

* [LinkedIn](https://www.linkedin.com/in/rafael-ott-8435572b1/)
* [GitHub](https://github.com/rafaelottdev)

## Licença

Projeto desenvolvido para fins educacionais e de portfólio.

Os dados e imagens de filmes e séries são fornecidos pela TMDB e utilizados de acordo com os termos da plataforma.
