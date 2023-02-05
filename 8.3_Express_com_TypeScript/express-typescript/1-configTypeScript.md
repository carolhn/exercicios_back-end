1 - CONFIGURAÇÃO DO TYSCRIPT NO NODE
npm init -y

1.1 - INSTALAÇÃO DO PACOTE TS NO NPM/ utilizamos como dependência de desenvolvimento. PARA QUE TODOS QUE  UILIZAR ESSE PROEJTO TENHA MESMA VERSÃO
npm install -D typescript@4.4

1.2 - CRIAR UM ARQUIVO tsconfig.json e colocar umas informações dentro...

1.3 - npm install -D @types/node@16.11

1.4 - INSTALANDO ts-node-dev PARA AJUDAR A EXECUTAR O SERVIDOR DE DESENVOLVIMENTO/reiniciar o servidor a cada alteração
npm install -D ts-node-dev@1.1


// 2 - DE UMA FORMA MAIS SIMPLIFICADA, VAMOS INSTALAR TODOS OS COMANDO ACIMA EM UM UNICO CODIGO
npm install -D typescript@4.4 @types/node@16.11 ts-node-dev@1.1