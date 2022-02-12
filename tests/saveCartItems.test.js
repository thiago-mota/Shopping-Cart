const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('test if locallStorage.setItem is called when running saveCartItems function using `<ol><li>Item</li></ol>` as arguement', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toBeCalled();
  });
});
