// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require("./helpers/fetchItem");

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const productList = async (product) => {
  const items = document.querySelector('.items');
  const result = await fetchProducts(product);

  result.forEach(({ id, title, thumbnail }) => {
    const productDetails = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    items.appendChild((createProductItemElement(productDetails)));
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  document.querySelector('.cart__items').remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
const cartList = async (itemId) => {
  const cartItems = document.querySelector('.cart__items');
  const items = await fetchItem(itemId);

  const { id, title, price } = items;
  const cartDetails = {
    sku: id,
    name: title,
    salePrice: price,
  };
  cartItems.appendChild(createCartItemElement(cartDetails));
};

// const addOnCart = () => {
//   document.querySelector('');
// };
// console.log(addOnCart());

  // console.log(cartList('MLB1341706310'));
  window.onload = () => { 
  productList('computador');
  cartList('MLB1341706310');
};
