// 1-Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
db.restaurants.countDocuments({ rating: { $not: { $lte: 5 } }});

// 2 - Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.countDocuments({ $or: [{ rating: { $gte: 6 } }, { borough: "Brooklyn" }] });

// 3 -Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island ou Brooklyn e possuem avaliação maior que 4.
db.restaurants.countDocuments({
    $and: [
      { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } },
      { rating: { $gt: 4 } },
    ],
  });

// 4- Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
db.restaurants.countDocuments({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] });

// 5 - Selecione e faça a contagem dos restaurantes em que a avaliação seja menor ou igual a 10, e possuem avaliação maior que 5, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.countDocuments({ $and: [
{ $or:[{ rating: {$gt: 6, $lt: 10}}]},
{ $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' }}]}]})