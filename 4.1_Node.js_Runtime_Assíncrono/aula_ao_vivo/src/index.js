const askName = require('./askName');
const npmService = require('./npm');
const pokemon = require('./pokemon');

const main = async () => {
  const name = askName();
  const project = await npmService.getPackage(name);

  if (project.error)
    console.log('Isso não me parece uma Lib ...')

  if (project.name)
    console.log(`${project.name} é uma lib!`);

  const pokedex = await pokemon.getPokemon(name);

  if (pokedex.forms) {
    console.log(`${name} é um pokemon`);
  } else {
    console.log(`${name} não é um pokemon`);
  }
}

main(); 