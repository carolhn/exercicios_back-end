module.exports = (req, res, next) => {
    const { authorization } = req.heafers;

    if(!authorization || authorization.length !== 16) {
        return res.status(401).json({ message: 'token inválido' });
    }

};