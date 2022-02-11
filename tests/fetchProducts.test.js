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

  it('check if fetchProducts function using `computer` as an argument has the same data structure as `computerSearch` object', async () => {
    await fetchProducts('computador');
    expect(await fetchProducts('computador')).toEqual(computadorSearch.results);
  });

  it('check if calling fetchProduct function with no parameter returns the following error: `You must provide an url`', async () => {
   try { 
     await fetchProducts();
   } catch (error) {
   expect(error).toEqual(new Error('You must provide an url'));
   }
  });
});

// https://blog.bitsrc.io/successfully-throwing-async-errors-with-the-jest-testing-library-fda17261733a