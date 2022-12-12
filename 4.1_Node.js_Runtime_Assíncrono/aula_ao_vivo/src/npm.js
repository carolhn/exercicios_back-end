const fetch = require('node-fetch');
const API = "https://registry.npmjs.org";

const getPackage = async (name) => {
  console.log(`buscando ${name} ...`);
  const response = await fetch(`${API}/${name}`); // buscando dentro da api o name
  return response.json();                        // converter o arquivo em JSON
};

module.exports = { getPackage };

// essa função busca no npm uma informação na api
// precisa do async/await -> pois precisamos consultar de forma assincrona 