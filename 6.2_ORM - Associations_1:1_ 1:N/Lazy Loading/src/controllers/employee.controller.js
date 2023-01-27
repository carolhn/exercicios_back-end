const EmployeeService = require('../services/employee.service');
const AddressService = require('../services/address.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  if (req.query.includeAddresses === 'true') {
    const addresses = await AddressService.getAllByEmployeeId(id);
    return res.status(200).json({ employee, addresses });
  }
}

module.exports = {
  getAll,
  getById
};