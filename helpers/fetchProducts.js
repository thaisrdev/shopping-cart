const fetchProducts = async (parametro) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
  } catch (error) {
   return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
