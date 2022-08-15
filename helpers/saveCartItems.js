const saveCartItems = async (argumento) => {
  try {
const localS = await localStorage.setItem('cartItems', argumento);
return localS;
  } catch (error) {
  throw new Error('Erro...');
}
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
