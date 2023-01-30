const { Student } = require('../models');
const jwtUtils = require('../utils/jwt');

const authenticate = async (email, password) => {
  if (!email || !password) {
    throw new Error('Fields Required');
    // const error = new Error('campo faltando');
    // error.status = 401;
    // throw error;
  }

  const student = await Student.findOne({
    attributes: ['id', 'name'],
    where: { email, password } // isto aqui n fununciona na vida real
  });

  if (!student) {
    throw new Error('Email or password invalid'); // nunca na vida retorne o que esta errado
  }

  const token = jwtUtils.generateToken(student.dataValues);
  return token;
}

module.exports = {
  authenticate
}