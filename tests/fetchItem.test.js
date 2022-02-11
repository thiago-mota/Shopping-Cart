require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('verify if `fetchItem` is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('should call fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled()
  });

  it('verify if fetch function with `MLB1615760527` as argument uses the endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('check if fetchItem function using `MLB1615760527` as an argument has the same data structure as `item` object', async () => {
    await fetchItem('MLB1615760527');
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
});
