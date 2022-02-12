const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('check if when running getSavedCartItems function the localStorage.getItem method  is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('check if when running getSavedCartItems function the localStorage.getItem method is called using `cartItems` as parameter', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
