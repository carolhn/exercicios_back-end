const jwt = require('jsonwebtoken');

// CONFIGURAR O MEU JWT
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'senhasupersecreta123'

//config do JWT
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15m',
}

// payload que é os dados do meu token
const user = {
  id: 987,
  name: 'Josue',
  email: "zezinho@email.com",
  password: '1234567',
  role: 'admin'
}

// vou gerar o token
const token = jwt.sign(user, TOKEN_SECRET, jwtConfig);

//console.log('este e seu token: ', token);

try {
  const decodedToken = jwt.verify(token, TOKEN_SECRET);
  console.log(decodedToken);
} catch (error) {
  console.log(error.message);
}
// saber o que e quem como e onde esta o nosso token