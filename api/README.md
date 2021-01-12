## Objetivo
Esta é um desafio para testar suas habilidades em React/Nextjs

## Tecnologias necessárias

- Deve ser desenvolvido com React(Framework NextJS).
- Deve utilizar Material UI: https://material-ui-next.com/

Os produtos disponíveis devem ser recuperados através de um mock de API Rest que já existe neste projeto. Você pode  iniciar a api com `yarn run api`

## A missão
o seu objetivo é desenvolver um protótipo de um carrinho de compras, com algumas funcionalidades básicas, o layout deve ser como de um site de vendas convencional, com uma listagem de produtos, e um icone de carrinho de compras no topo do site.


## A tela de listagem de produtos na home deve:
- O icone do carrinho de compras deve exibir uma badge com a quantidade de itens presente no carrinho.
- Exibir ao lado do icone, o valor total da compra;
- Exibir os produtos na listagem com foto, titulo e preço formatado em reais;
- Ao clicar no produto da lista, deve exibir os detalhes de um produto individual;
- Ao clicar em comprar, e o produto não estiver no carrinho, deve ser adicionado;
- Ao clicar em comprar, e o produto ja existir no carrinho, deve ser incrementado em 1;
- Exibir resumo do carrinho

## O carrinho deve:
- Permitir remover itens(remover todos os produtos);
- Ao clicar em aumentar, deve incrementar em 1;
- Ao clicar em diminuir, deve decrementar em 1; Se houver apenas 1 devera remover.
- Ao incrementar, deve validar se o produto ainda possui estoque;
- Exibir o somatório total dos itens incluidos;

## Sugestão de tela:
No repositório existem 2 arquivos: ListaDeProdutos.png e Carrinho.png, porém não é obrigatório segui-los.

