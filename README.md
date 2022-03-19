# SITEWARE SHOES

## O que é o Siteware Shoes?

Uma plataforma de e-commerce focada em calçados onde você pode adicionar seus itens ao carrinho de compras e aproveitar diversas promoções.

## Sumário

- [Tecnologias usadas](#tecnologias-usadas)
- [Como rodar a aplicação localmente](#como-rodar-a-aplicação-localmente)
- [Sobre o JSON Server](#sobre-o-json-server)
- [Aplicação](#aplicação)

## Tecnologias usadas

- [ReactJS](https://reactjs.org/) v17.0.2 - Framework JavaScript
- [TypeScript](https://www.typescriptlang.org/) v4.5.4 - Linguagem tipada baseada em JavaScript
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) v6.2.2 - Roteamento de páginas
- [Styled Components](https://styled-components.com/) v5.3.3 - Biblioteca de estilização React
- [json-server](https://github.com/typicode/json-server) v0.17.0 - Fake API para mocks
- [axios](https://axios-http.com/) v0.26.1 - Biblioteca para requisições HTTP
- [MaterialUI](https://mui.com/) v5.5.1 - Biblioteca de componentes pré-programados

## Como rodar a aplicação localmente

### 1. Clone este repositório

```zsh
git clone git@github.com:ericksilvadev/siteware-shoes.git erick-silva-siteware-shoes
```

### 2. Vá para o diretório **erick-silva-siteware-shoes**

```zsh
cd erick-silva-siteware-shoes
```

### 3. Instale as dependencias

yarn:

```zsh
yarn
```

npm:

```zsh
npm install
```

### 4. Instale o JSON Server

_Mais informações sobre o JSON Server e como o desinstalar [aqui](#sobre-o-json-server)._

```zsh
npm install -g json-server
```

**O servidor rodará por padrão na porta 3000**

### 5. Inicie o JSON Server

```zsh
json-server --watch db.json
```

### 6. Rode a aplicação

yarn:

```zsh
yarn dev
```

npm:

```zsh
npm run dev
```

**A aplocação rodará por padrão na porta 4000**

### 7. Abra no Browser

No seu navegador digite na barra de endereços `http://localhost:4000`

## Sobre o JSON Server

**O JSON Server é uma REST API falsa usada para implementar mocks no Frontend.**

Originalmente o JSON Server iniciará na porta 3000 da sua máquina se ela não estiver ocupada.

### Rotas

**GET '/products'** retornará toda a listagem de produtos cadastrados.

Ex.: `http://localhost:3000/products`

Resposta:

```json
[
  {
    "id": 1,
    "name": "Tênis Nike Revolution 5 - Feminino",
    "category": "shoes",
    "image": "/src/assets/images/shoe-1.png",
    "colors": ["Cinza", "Branco", "Verde", "Preto"],
    "sizes": [36, 38, 40, 42, 44],
    "rating": 4.6,
    "defaultPrice": 319.99,
    "promotionPrice": 219.99,
    "inventory": 10,
    "description": "Com ótimo amortecimento em espuma, o Tênis Nike Masculino Revolution 5 é ideal para os corredores que buscam leveza e conforto",
    "sale": { "pay": "1", "take": 2, "salePrice": 219.99 }
  },
  {...}
]
```

**GET '/products/:id'** retornará o produto com o ID passado no parâmetro da rota.

Ex.: `http://localhost:3000/products/3`

Resposta:

```json
{
  "id": 3,
  "name": "Tênis Undefined - Masculino",
  "category": "shoes",
  "image": "/src/assets/images/shoe-3.png",
  "colors": ["Cinza", "Branco", "Verde", "Preto"],
  "sizes": [36, 38, 40, 42, 44],
  "rating": 5,
  "defaultPrice": 239.99,
  "promotionPrice": 199.99,
  "inventory": 10,
  "description": "Com ótimo amortecimento em espuma, o Tênis Nike Masculino Revolution 5 é ideal para os corredores que buscam leveza e conforto"
},
```

Mais sobre as rotas do JSON Server [aqui](https://github.com/typicode/json-server#routes)

### Como desinstalar

```zsh
npm uninstall -g json-server
```

## Aplicação

### Pagina inicial

![project-home-page](/src/assets/images/siteware-shoes-home.png)

### Detalhes do produto

![project-home-page](/src/assets/images/siteware-shoes-details.png)

### Carrinho

![project-home-page](/src/assets/images/siteware-shoes-checkout.png)
