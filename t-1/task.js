
const products = [
  { "id": 1, "name": "LD01 LOUNGE CHAIR", "price": 200, "image": "images/1.png" },
  { "id": 2, "name": "LD02 LOUNGE CHAIR", "price": 250, "image": "images/2.png" },
  { "id": 3, "name": "LD03 LOUNGE CHAIR", "price": 290, "image": "images/3.png" },
  { "id": 4, "name": "LD04 LOUNGE CHAIR", "price": 200, "image": "images/4.png" }
];

const container = document.getElementById('product-container');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const prompt = document.getElementById('prompt');
const promptTotal = document.getElementById('prompt-total');

const cart = [];

function toggleCart() {
  console.log("Cart toggle triggered");
  cartSidebar.classList.toggle('open');
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
  }
  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" />
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
    `;
    cartItemsEl.appendChild(itemEl);
  });
  cartTotalEl.textContent = total.toFixed(2);
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  }
  renderCart();
}

function confirmOrder() {
  promptTotal.textContent = cartTotalEl.textContent;
  prompt.style.display = 'block';
  setTimeout(() => {
    prompt.style.display = 'none';
  }, 3000);
  alert("Order confirmed!\nTotal: $" + cartTotalEl.textContent);
  cart.length = 0;
  toggleCart();
}

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-name">${product.name}</div>
    <div class="product-price">$${product.price}</div>
    <button class="add-to-cart">Add to Cart</button>
  `;
  card.querySelector('button').addEventListener('click', () => {
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    renderCart();
  });
  container.appendChild(card);
});
