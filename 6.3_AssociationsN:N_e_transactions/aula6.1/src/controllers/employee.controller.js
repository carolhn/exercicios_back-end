const EmployeeService = require('../services/employee.service');
const AddressService = require('../services/address.service');

// ...
const insert = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await EmployeeService.insert({ firstName, lastName, age, city, street, number });

    return res.status(201).json({ id: employee.id, message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

// module.exports = {
// ...
  insert
// };
