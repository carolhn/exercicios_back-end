const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'paocomqueijoemortadelanachapa';

const jwtConfig = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

// Gerando o token
const generateToken = (payload) => {
  try {
    return jwt.sign(payload.dataValues, TOKEN_SECRET, jwtConfig)
  } catch (error) {
    console.log(error.message);
    throw new Error('Falha ao gerar token')
  }
};

// validação do token
const decodeToken = async (token) => {
  if (!token) {
   const error = new Error('Undefined Token');
   error.status = 401;
   throw error;
  }

  try {
    const result = await jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    const error = new Error('jwt malformed');
    error.status = 401;
    throw error;
    // console.log(err.message);
    // throw new Error('Invalid assignature');
  }
}

module.exports = {
  generateToken,
  decodeToken
}