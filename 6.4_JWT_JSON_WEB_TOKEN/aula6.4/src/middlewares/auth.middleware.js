const { decodeToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  const student = decodeToken(authorization);

  if (!student) {
    throw new Error('Not Authorizde');
  }
  console.log('my student', student);
  req.body.user = student;

  next();
}

module.exports = authMiddleware;