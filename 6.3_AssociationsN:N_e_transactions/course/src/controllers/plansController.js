const { Patient, Plan } = require('../models');

const getAllPlans = (req, res) =>
  Plan.findAll({
    where: { plan_id: req.params.id },
    include: [{ model: Patient, as: 'patients' }],
  })
    .then((listOfPatients) => {
      if (!listOfPatients.length) {
        return res.status(404).send({ message: 'No plan found' });
      }
      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));

module.exports = { getAllPlans };

// Crie um endpoint que de acordo com o id de um plano, que deve ser recebido via requisição,
// liste os pacientes que o possuem.