Migrations - posso criar/ editar uma tabela no banco de dados;
Seeders - adiciono dados ao banco de dados;

-- Nessa aula vamos criar uma tabela de Module;

1)VAMOS INCIAR SUBINDO O CONBTAINER DE DOCKER:
****** importante: precisamos executar os comandos do SEQUELIZE dentro do container*******
Dentro do docker-compose.yml vamos subir o MYSQL e uma API / comandos:
docker-compose up -d
docker exec -it api bash (api === concainer que subimos)

2)INSTALAR AS DEPENDENCIAS:
npm install express express-async-errors sequelize mysql2 dotenv
npm -D install nodemon sequelize-cli

3)CRIANDO O .SEQUELIZERC
dentro do arquivo .sequelizerc copiar o codigo com as rotas onde eu quero criar cada arquivo

3.1)INICIANDO O SEQUELIZE
npx sequelize-cli init

3.2)PASTA CONFIG
sair da pasta SRC
dentro da pasta config, substituir o que tem dentro do arquivo para JS.
Alterar dentro da MODELS/INDEX.JS a importação do config

3.3)COMO SABER SE ESTA FUNCIONANDO?
npx sequelize-cli db:create
messagem quando da certo: Database orm_trybe created.

3.4)COMO EXCLUIR O BANCO?
npx sequelize-cli db:drop

4) CRIAR UM ARQUICO .ENV

*** importante a Migrations cria as tabelas e o Model representa as tabelas ***

4)MODEL É A REPRESENTAÇÃO DA NOSSA TABELA. VAMOS CRIAR UMA TABELA QUE **REPRESENTE** CURSE.
npx sequelize model:generate --name test --underscored --attributes name:string,description:string,creation_date:date,active:boolean

4.1) AUTOMATICAMENTE ELE JA CRIA UMA MIGRATIONS. QUE É A NOSSA TABELA;

5) COMO VER SE EXISTE UMA TABELA PELA EXTENÇÃO DO DATABASE?
-- fazer a coneção do database
npx sequelize-cli db:create

-- banco de dados vai executar todas as migrations
npx sequelize-cli db:migrate

A tabela SequelizeMeta, tem o historico de todas as migrations executadas utilizando o sequelize
Na tabela courses, o (created_at quando foi cadastrado) (updated_at quando foi a ultima atualização)

5) COMO DESFAZER A ULTIMA MIGRATIONS - ELE VAI EXECUTAR O MÉTODO DOWN
npx sequelize-cli db:migrate:undo

6) COMO ADICIONAR UMA NOVA COLUNA NA NOSSA MIGRATION
npx sequelize-cli migration:generate --name add-column-durations-tab-courses

*** IMPORTANTE ***
npx sequelize-cli db:migrate       // executar uma migration
npx sequelize-cli db:migration    // quando eu quero adicionar ou criar

MODEL - é a representação da tabela para o sequelize
MIGRATION - é a configuração/ manipulação da tabela para banco de dados

7)CRIAÇÃO DO SEEDERS
npx sequelize-cli seed:generate -- course

7.1) DENTRO DO SEEDERS TEM AS INFORMAÇÃOS QUE QUEREMOS ADICONAR DENTRO DO BANCO DE DADOS(LINHA)
PARA SALVAR AS INFORMAÇÕES DO SEEDERS
npx sequelize-cli db:seed:all

//_______________________________________ ROTAS E CAMADAS________________________________________________//

1) criar camada service
1.2) criar camada controller
1.3) criar a rota
