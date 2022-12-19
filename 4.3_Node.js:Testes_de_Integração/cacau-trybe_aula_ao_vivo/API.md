### **GET** _`/chocolates`_ 

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

### **GET** _`/chocolates/:id`_ 

- Objetivo: Buscar um chocolate específico pelo ID.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
  [        
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

### **GET** _`/chocolates/brand/:brandId`_ 

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: `200 - OK`;
- Body (exemplo):
```json
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```
