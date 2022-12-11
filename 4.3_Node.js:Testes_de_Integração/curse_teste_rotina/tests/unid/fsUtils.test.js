const { expect } = require('chai');

const { readMissions } = require('../src/') // preciso citar qual funcao eu vou testar

describe('', () => {
    it('retona um array', async () => {
        const mission = await readMissions();

        expect(mission).to.be.instanceOf(Array); // espero que (missoes) sejam uma instancia de (array)
    });
});