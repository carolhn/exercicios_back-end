1.0 - INSTALANDO O EXṔRESS
npm install express@4.17

1.1 - INSTALAÇÃO PACOTE NPM DE DECLARAÇÕES DE TYPE
npm install -D @types/express@4.17

1.2 - criar um arquivo com os códigos de status das respostas http
touch statusCodes.ts

1.3 - Vamos criar nesse arquivo um objeto responsável por identificar a numeração relativa às respostas http:
CRIADO O ARQUIVO statusCode.ts

1.4 - CRIAR UM ARQUIVO INDEX NA RAIZ// ADICIONAR INFORMAÇÕES DENTRO
touch index.ts

1.5 - ALTERAR O Package.json
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"

start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
build: executa a compilação do projeto utilizando o TSC.

1.6 - VAMOS EXECUTAR A APLIAÇÃO:
npm start

1.7 - Ao acessarmos no nosso navegador o caminho http://localhost:8000/ conseguimos ver a mensagem da nossa rota / : “Express + TypeScript”.
*** SINAL QUE FOI FEITO TUDO CERTINHO ***


***LIB DE TRATAMENTO DE ERROS***

2.0 - INSTALAÇÃO DE UMA LIB QUE FAZ O TRATAMENTO DOS ERROS
npm install express-async-errors@3.1

import 'express-async-errors'; // IMPORTAÇÃO

2.1 - INSTALAÇÃO DE 2 LIBS PARA TRATAMENTO DE ERROS
npm install restify-errors@8.0 @types/restify-errors@4.3



