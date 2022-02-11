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
});
