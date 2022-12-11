const fetch = require('node-fetch');
const API = "https://registry.npmjs.org";

const getPackage = async (name) => {
  console.log(`buscando ${name} ...`);
  const response = await fetch(`${API}/${name}`);
  return response.json();
};

module.exports = { getPackage };