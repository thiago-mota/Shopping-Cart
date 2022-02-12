const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('test if locallStorage.setItem is called when running saveCartItems function using `<ol><li>Item</li></ol>` as arguement', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toBeCalled();
  });


  it('test if when running saveCartItems function with `<ol><li>Item</li></ol>` as argument, the method localStorage.setItem is called with two parameters: 1st `cartItems` and 2nd being the value used as argument on saveCartItems' , () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
