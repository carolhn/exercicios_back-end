<p>CONFIGURAÇÃO DO NODE<p>

1) criar um pacote node para iniciar uma aplicação
 npm init -y

2) criar o diretorio SRC para deixar a aplicação mais organizada
- dentro do arquivo package.json vamos alterar a rota do "main", e do "start
- caso eu cite um script que seja a a rota do main eu posso colocar (.) pois ele referencia como arquivo main

3) vamos instalar a biblioteca express/ no arquivo package.json vai criar "dependencies"
npm i express

4) vamos instalar o readline-sync1.4/ permite interagir com o terminal
npm i readline-sync1.4

5) criar um .gitignore para nao subir o node modules para git

<p>VAMOS PARA A APLICAÇÃO<p>

1) vamos iniciar importando o redline precisamos criar um arquivo(askName.js)
const readline = require('readline-sync');

2) no nosso index.js vamos importar a função do(askName.js)
const askName = require('./askName');

3) vamos utilizar uma API externa, pra isso precisamos da biblioteca do node-fetch("dependencia")
npm i node-fetch@2

4) vamos criar um arquivo para buscar uma API (npm.js), vamos fazer uma função e exportar ela para o INDEX.JS

5) dentro do INDEX.JS vamos importar o arquivo
const npmService = require('./npm');
- vamos criar uma função onde chamamos o npm, caso retorne um erro ela recebe um console.log

6)