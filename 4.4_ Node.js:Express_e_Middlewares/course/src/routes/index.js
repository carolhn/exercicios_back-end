const express = require('express');
const teamsRouter = require('./routes/teamsRouter'); // importando nosso router

const router = express.Router();

router.use(teamsRouter);         // monta o router na rota /teams (1)

module.exports = router;