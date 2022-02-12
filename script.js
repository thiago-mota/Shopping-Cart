const cartItems = document.querySelector('.cart__items');
const clearCart = document.querySelector('.empty-cart');
const cartPrice = document.querySelector('.total-price');

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

const totalPrice = () => {
  let totalCartPrice = 0;

  cartItems.childNodes.forEach((product) => {
    const itemPrice = product.innerHTML.split('PRICE: $');
    totalCartPrice += Number(itemPrice[1]);
  });
  cartPrice.innerText = totalCartPrice;
};

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes
// Referenciando o pondaco por ter me inspirado na função dele para construir uma soma ao invés de trabalhar com arrays. https://github.com/tryber/sd-019-b-project-shopping-cart/pull/4/files 

const ereaseCart = () => {
  cartItems.innerHTML = '';
  totalPrice();
};

function cartItemClickListener(event) {
  event.target.remove();
  totalPrice();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const cartList = async (itemId) => {
  const items = await fetchItem(itemId);
  const { id, title, price } = items;
  const cartDetails = {
    sku: id,
    name: title,
    salePrice: price,
  };
  cartItems.appendChild(createCartItemElement(cartDetails));
  saveCartItems('cartItems', document.querySelector('.cart__items').innerHTML);
  totalPrice();
};

const addToCartBTN = ({ target }) => {
  const targetID = target.parentNode.firstChild.innerText;
  cartList(targetID);
};

// parent.Node: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode
// https://teamtreehouse.com/community/how-does-the-parentnode-method-get-the-parent-of-an-event-element

window.onload = () => {
  const loadingText = document.querySelector('.loading');
  
  productList('computador').then(() => {
    const buttonEvent = document.querySelectorAll('.item__add');
    buttonEvent.forEach((card) => {
    card.addEventListener('click', addToCartBTN);
  });
  loadingText.remove();
});

  clearCart.addEventListener('click', ereaseCart);
};

// https://github.com/tryber/sd-019-b-project-shopping-cart/pull/66/files Referenciando o Allan por ter consultado o código dele para tirar dúvidas sobre o funcionamento do botão.
