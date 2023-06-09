const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    expect.assertions(1);
    getSavedCartItems();
      expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se localStorage.getItem é chamado com cartItems e o próprio parâmetro', () => {
    expect.assertions(1);
    getSavedCartItems();
      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
