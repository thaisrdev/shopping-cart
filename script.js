 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')); //BOTAO
  return section;
};

const productsList = async () => {
  const objects = await fetchProducts('computador');  
  objects.results.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const keys = { sku, name, image };
    const items = document.getElementsByClassName('items')[0];
    const product = createProductItemElement(keys);
    items.appendChild(product);    
  });
};
productsList();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}; 

const cartItemClickListener = (event) => {
  const item = document.querySelector('.cart__item');
  const cartItems = document.querySelector('.cart__items');
  cartItems.removeChild(item); // 5
}; 

const fetchItems = async () => {
  const objects = await fetchItem('MLB1341706310');
  console.log(objects);
   const { id: sku, title: name, price: salePrice } = objects;   
    const cartItems = document.querySelector('.cart__items');
    cartItems.appendChild(createCartItemElement({ sku, name, salePrice }));
    const button = element.querySelector('item__add');
    button.addEventListener('click', carrinho); // 4
};
fetchItems();

fetchProducts('computador');

window.onload = () => { };
