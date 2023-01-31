const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'paocomqueijoemortadelanachapa';

const jwtConfig = {
  expiresIn: '1m',
  algorithm: 'HS256',
};

// Gerando o token
const generateToken = (payload) => {
 // console.log('aqui é oopayload', payload);
  try {
    return jwt.sign({ data: { ...payload } },TOKEN_SECRET, jwtConfig)
  } catch (error) {
    console.log(error.message);
    throw new Error('Falha ao gerar token')
  }
};
// console.log('aqui é o generateToken', generateToken({ email: 'teste@test.com', password: '1234', age: '70'}));

// validação do token
const decodeToken = async (token) => {
  const { authorization } = req.headers;
  if (!authorization) {
   const error = new Error('Undefined Token');
   error.status = 401;
   throw error;
  }
  try {
    const result = await jwt.verify(authorization, TOKEN_SECRET);
    req.user = result.data.dataValues;
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