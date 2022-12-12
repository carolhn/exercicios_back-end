const fetch = require('node-fetch');

const API = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async (name) => {
  let response;
  try {
    response = await fetch(`${API}/${name}`);
  } catch (err) {
    console.log('error: ', err.message)
  }

  if (!response.ok) {
    return false;
  }

  return response.json();
}

module.exports = { getPokemon }