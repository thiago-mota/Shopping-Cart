require('../mocks/fetchSimulator');
const stripFunctionStart = require('mochawesome/src/stripFnStart');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('verify if `fetchProduct` is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('should call fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled()
  });

  it('verify if fetch function with computer as argument uses the endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

});
