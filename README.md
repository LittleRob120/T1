# Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias

## Sobre o Projeto

Este sistema foi desenvolvido para facilitar o cadastro, atualização, consulta e análise de clientes, produtos e serviços de pet shops e clínicas veterinárias. O sistema é totalmente operado por linha de comando (CLI), sem interface gráfica, e cada unidade possui sua própria base de dados em memória.

O projeto foi inspirado pelo crescimento do setor pet no Brasil, que mesmo diante de cenários econômicos adversos, segue em expansão, conforme destacado pelo Instituto Pet Brasil (IPB). O setor apresenta mudanças progressivas nos hábitos das famílias, com aumento nas vendas e destaque para o comércio eletrônico e serviços especializados para animais de estimação.


## Funcionalidades

- **CRUD de Clientes:** Cadastro, atualização, listagem e exclusão de clientes.
- **CRUD de Produtos:** Cadastro, atualização, listagem e exclusão de produtos.
- **CRUD de Serviços:** Cadastro, listagem e exclusão de serviços.
- **Registro de Consumo:** Associação de produtos e serviços consumidos por cada cliente.
- **Listagens Especiais:**
  - Top 10 clientes que mais consumiram (quantidade)
  - Top 5 clientes que mais consumiram em valor
  - Listagem geral dos produtos mais consumidos
  - Listagem geral dos serviços mais consumidos
  - Listagem de consumo por tipo e raça de pet

## Contextualização

> "O instituto destaca que, mesmo com uma fatia ainda baixa, o comércio eletrônico é o canal com maior crescimento no setor, indicando uma mudança progressiva de hábitos das famílias que possuem pet. Nos três primeiros meses de 2022, a alta nas vendas foi de 18%. Já na comparação entre 2022 e 2021, foi de 48%."  
>  
> "Para o presidente do conselho consultivo do IPB, Nelo Marraccini, os números apontam que, apesar do cenário econômico adverso, os brasileiros não deixaram de cuidar dos pets. Por isso, o consumidor deve continuar a comprar produtos para animais de estimação em nas próximas décadas, cuja maior parte é produzida no Brasil."


## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- TypeScript (`npm install -g typescript`)
- ts-node (`npm install -g ts-node`)

## Instalação

Clone o repositório:

npm install

Rodar o projeto:
npx ts-node src/app/main.ts

1 - Cadastrar cliente
2 - Atualizar cliente
3 - Remover cliente
4 - Adicionar pet ao cliente
5 - Cadastrar produto
6 - Atualizar produto
7 - Remover produto
8 - Registrar consumo de produto
9 - Registrar consumo de serviço
10 - Listar top 10 clientes
11 - Listar produtos mais consumidos
12 - Listar serviços mais consumidos
13 - Listar consumo por tipo e raça de pet
14 - Listar top 5 clientes por valor consumido
0 - Sair

Observações Finais
Todos os dados são mantidos em memória durante a execução.
O sistema foi testado com pelo menos 30 clientes e 20 produtos, conforme solicitado.
Para dúvidas ou problemas, consulte o código-fonte ou entre em contato com a equipe de desenvolvimento.
Desenvolvido para a disciplina de Programação Orientada a Objetos - Fatec, 2025.
