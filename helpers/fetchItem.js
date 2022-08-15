const fetchItem = async (parametro) => {
if (parametro === undefined) {
  return new Error('You must provide an url');
}
const url = `https://api.mercadolibre.com/items/${parametro}`;
const result = await fetch(url);
const data = await result.json();
return data;
};

// console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
