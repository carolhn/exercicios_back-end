// deleteOne() - remove apenas um documento
// deleteMany() - remove vários documentos

// para remover todos os doc // db.inventory.deleteMany({})


// 1 - Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
db.restaurants.deleteOne({ "cuisine": "Ice Cream, Gelato, Yogurt, Ices" });

// 2 -Remova todos os restaurantes que possuem culinária do tipo American.
db.restaurants.deleteMany({ "cuisine": "American" });