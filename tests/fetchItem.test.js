require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
    it('Testa se fetchItem é uma função', () => {
      expect.assertions(1);
      expect(typeof fetchItem).toEqual('function');
    });
    it('Executa a função fetchItem com o argumento "MLB1615760527" e testa se fetch foi chamada', async () => {
      expect.assertions(1);
      await fetchItem('MLB1615760527');
      expect(fetch).toBeCalled();
    });
    it('Testa se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
      expect.assertions(1);
      const url = 'https://api.mercadolibre.com/items/MLB1615760527';
      await fetchItem('MLB1615760527');
      expect(fetch).toBeCalledWith(url);
    });
    it('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
      expect.assertions(1);
      expect(await fetchItem('MLB1615760527')).toEqual(item);
    });
    it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {    
      expect.assertions(1);
      expect(await fetchItem()).toEqual(new Error('You must provide an url'));    
    });
  });
