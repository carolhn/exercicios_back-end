const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../app');
const fs = require('fs');

const { expect } = chai;
chai.use(chaiHttp); //fazer requisição na API


// UTILIZAÇÃO DO SINON, AQUI É O ARQUIVO DE API ANTIGO
const mockFile = JSON.stringify({
  brands: [
    { id: 1, name: "Lindt & Sprungli" },
    { id: 2, name: "Ferrero" },
    { id: 3, name: "Ghirardelli" },
  ],
  chocolates: [
    { id: 1, name: "Mint Intense", brandId: 1 },
    { id: 2, name: "White Coconut", brandId: 1 },
    { id: 3, name: "Mon Chéri", brandId: 2 },
    { id: 4, name: "Mounds", brandId: 3 },
  ],
  nextChocolateId: 5,
})

// ESSA FUNÇÃO CHAMA O SINON E FAZ UM STUB
describe('Testando a API Cacau Trybe', function () {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile') // QUANDO O READFILE FOR CHAMADO ELE EXECUTA O MOCKFILE
      .resolves(mockFile);

    sinon.stub(fs.promises, 'writeFile')
      .returns();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai.request(app)               //chai esta fazendo uma requisição no app
        .get('/chocolates');                                // chama o verbo HTTP + nome da rota
      
      expect(response.status).to.be.equal(200);           // eu espero que minha requisição tenha um status code 200
      expect(response.body.chocolates).to.deep.equal(output); // eu espero que a API ne retorne um corpo, e dentro desse corpo tenha um atributo chocolate, dentro disso(to.deep.equal) espero profundamente que seja igual 
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app)                //chai esta fazendo uma requisição no app
        .get('/chocolates/4');                               // chama o verbo HTTP + nome da rota

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai.request(app)                 //chai esta fazendo uma requisição no app
        .get('/chocolates/brand/1');                          // chama o verbo HTTP + nome da rota

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  // cadastrar chocolates
  describe('Usando o método POST em /chocolates', function () {
    it('Cria um chocolate', async function () {
      const response = await chai.request(app)            //chai esta fazendo uma requisição no app
        .post('/chocolates')                             //chama o verbo HTTP + nome da rota
        .send({                                         //vai ser carregado as informações que solicita na API do body
          name: 'Xarolina',               
          brandId: 1
        });

      expect(response.status).to.be.equal(201);
      expect(response.body.chocolate).to.deep.equal({     // eu espero que a API ne retorne um corpo, e dentro desse corpo tenha um atributo chocolate, dentro disso(to.deep.equal) espero profundamente que seja igual 
        id: 5,
        name: 'Xarolina',
        brandId: 1
      });
    });
  });

// listar todos os chocolates
  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai.request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
  });
});


// 4 - Crie os testes de integração para o endpoint GET /chocolates/search
  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates que contém "Mo" no nome', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);
    });

    it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });

  // 5 - Crie os testes de integração para o endpoint PUT /chocolates/:id

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });
      
    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      });
    });
  });









  // deletar chocolates
  describe("Usando o método DELETE em /chocolates/:id", () => {
    it("Remove um chocolate", async () => {
      const response = await chai.request(app)                     //chai esta fazendo uma requisição no app
        .delete("/chocolates/1");                                 // chama o verbo HTTP + nome da rota

      expect(response.status).to.be.equal(204);
    });

    it("Se o chocolate não existe, gera um erro", async () => {
      const response = await chai.request(app)                       //chai esta fazendo uma requisição no app
        .delete("/chocolates/555");                                 // chama o verbo HTTP + nome da rota

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: "chocolate not found",
      });
    });
  });
});
