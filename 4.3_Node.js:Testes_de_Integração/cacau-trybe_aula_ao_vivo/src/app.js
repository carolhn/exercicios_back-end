const express = require('express');
const cacauTrybe = require('./cacauTrybe');               // função de criar 

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

// cadastrar chocolates
app.post('/chocolates', async (req, res) => {
  const { name, brandId } = req.body;
  const chocolate = await cacauTrybe.createChocolate(name, brandId);
  return res.status(201).json({ chocolate });
});

// deletar chocolates
app.delete("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await cacauTrybe.deleteChocolate(Number(id));

  if (deleted) return res.status(204).end();
  res.status(404).json({ message: "chocolate not found" });
});

app.listen(3003);
module.exports = app;
