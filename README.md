# Meteora - Estudo de Caso de E-commerce com React Context API

O Meteora é um projeto de estudo focado na implementação de um carrinho de compras funcional em uma aplicação React, utilizando a Context API para o gerenciamento de estado.

![GIF da aplicação em execução](meteora-app.gif)

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto é demonstrar o uso da `Context API` e do hook `useReducer` para gerenciar o estado global de um carrinho de compras em um e-commerce. As funcionalidades implementadas são centradas nesta experiência.

## 🔨 Funcionalidades Implementadas

- Adicionar produtos ao carrinho a partir da vitrine.
- Aumentar e diminuir a quantidade de cada item no carrinho.
- Remover itens do carrinho.
- Visualizar o carrinho de compras em uma página dedicada.
- Visualizar um resumo da compra com o valor total.

## 🚧 Fora do Escopo (Não implementado)

Para manter o foco no estudo da Context API, várias funcionalidades de um e-commerce completo **não foram implementadas intencionalmente**. Isso inclui:

- **Navegação:** As páginas "Lojas", "Novidades" e "Promoções" não estão funcionais.
- **Busca:** A funcionalidade de busca de produtos não foi implementada.
- **Newsletter:** O formulário de cadastro de e-mail não armazena informações.
- **Finalização de Compra:** Não há um fluxo de checkout ou integração com pagamentos.

## ✔️ Tecnologias e Técnicas Utilizadas

- `React`
- `Vite`
- `JavaScript`
- `Context API` para gerenciamento de estado global.
- `useReducer` para lógica de estado complexa do carrinho.
- `Bootstrap` para estilização e componentes de UI.