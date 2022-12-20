module.exports = (req, res, next) => {
    const { price } = req.body;          // Acesse a chave price usando req.body
    if(price === undefined) {                        // aplique uma condicional para verificar se o price existe.
        return res.status(400).json(    // Se não existir, utilizamos o método status enviando o código de resposta HTTP 400
            { message: 'O campo price é obrigatorio' },
        );
    }
    if(price < 0 || price !== Number) {
        return res.status(400).json (
            { message: 'O campo price deve ser maior ou igual a zero' },
        );
    }
    next();
};
