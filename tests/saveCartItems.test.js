const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se localStorage.setItem é chamado com cartItems e o próprio parâmetro', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
