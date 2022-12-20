module.exports = (req, res, next) => {
    const { name } = req.body;          // Acesse a chave name usando req.body
    if(!name) {                        // aplique uma condicional para verificar se o name existe.
        return res.status(400).json(    // Se não existir, utilizamos o método status enviando o código de resposta HTTP 400
            { message: 'O campo nome é obrigatorio' },
        );
    }
    if(name.length < 4) {
        return res.status(400).json (
            { message: 'O campo nome deve ter pelo menos 4 caracteres' },
        );
    }
    next();
};

//1° primeiro if verifica se a chave nome existe
//2° segundo if verirfica se o nome tem pelo menos 4 caracteres
