CONFIGURAÇÃO

mkdir my-ts-scripts && cd my-ts-scripts
npm init -y
npm install -D @tsconfig/node16@1.0.3 @types/node@18.11.18 typescript@4.4.2
touch tsconfig.json

Any = qualquer tipo
type union = (number | string)

* ARRAY DE NUMEROS / DUAS FORMAS DE FAZER---------------------------------------
const pizza: number[] = array de numeros
const pizza: Array<number> = array de numeros


* COMO FAZER UM ARRAY COM OBJETO-------------------------------------------------
const user: { name: string, age: number }[] =  ou
const user: Array<{}> =

* COMO FAZER UM ARRAY TYPE STRING, BOLLEAN E NUMBER------------------------------
const array = Array<string | number | boolena>;
const array = (string | number | boolean)[];


* COMO DEFINIR UMA TUPLA DE NUMBER  (TUPLA === array que armazena array)---------
// trupla === [ [], [], [] ]

const tupla: Array<Array<string | number>>
const tupla: 



// compilar = transformar um codigo em outro
