const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

// função de leitura do banco de dados
const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

// função que escreve dentro do banco de dados
// content, null, 2)); -> dessa forma eu formato o json
const writeCacauTrybe = async (content) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content, null, 2));
  } catch (error) {
    console.log('write cacau file')
  }
}

// função que cria o chocolate
const createChocolate = async (name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { id: cacauTrybe.nextChocolateId, name, brandId };
  cacauTrybe.chocolates.push(newChocolate);
  cacauTrybe.nextChocolateId += 1;
  await writeCacauTrybe(cacauTrybe);
  return newChocolate;
}

// método get para listar todos os chocolates
const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

// método para busar um chocolate por ID
const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

// metodo que busca pela marca
const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

// metodo que deleta pelo ID
const deleteChocolate = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateExists = cacauTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateExists) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.filter(
      (chocolate) => chocolate.id !== id,
    );

    await writeCacauTrybeFile(cacauTrybe);
    return true;
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  readCacauTrybeFile,
  createChocolate,
  deleteChocolate
};
