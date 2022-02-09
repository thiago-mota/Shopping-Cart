require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verify if `fetchProduct` is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
});
