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
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')); 
    return section;
  };

  const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

  const cartItemClickListener = () => {
    const item = document.querySelector('.cart__item');
    const cartItems = document.querySelector('.cart__items');
    cartItems.removeChild(item); // 5
  }; 

  const createCartItemElement = ({ sku, name, salePrice }) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    li.addEventListener('click', cartItemClickListener);
    return li;
  }; 

  const fetchItems = async (event) => {
    const pai = event.target.parentNode;
    const skus = getSkuFromProductItem(pai);
    const objects = await fetchItem(skus);
    const { id: sku, title: name, price: salePrice } = objects; 
    const li = createCartItemElement({ sku, name, salePrice });
    const carrinho = document.querySelector('.cart__items');
    carrinho.appendChild(li);   
  };

  const productsList = async () => {
    const objects = await fetchProducts('computador');  
    objects.results.forEach((element) => {
      const { id: sku, title: name, thumbnail: image } = element;
      const keys = { sku, name, image };
      const items = document.getElementsByClassName('items')[0];
      const product = createProductItemElement(keys);
      const button = product.querySelector('.item__add');
      button.addEventListener('click', fetchItems); 
      items.appendChild(product);       
    });
  };

  productsList();

  fetchProducts('computador');

  window.onload = () => { };
