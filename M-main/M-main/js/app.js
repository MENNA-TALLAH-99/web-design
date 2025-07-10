let items = [
  {
    brand: "Mango",
    description: "Kimono & Caftan - Black - Casual",
    rating: 4,
    reviews: 289,
    price: {
      current: 215,
      original: 228,
      discount: "-10%",
    },
    isFavorite: false,
    color: "#4A90E2",
  },
  {
    brand: "Uniqlo",
    description: "Midi atlas Slim fit - bohemian",
    rating: 5,
    reviews: 86,
    price: {
      current: 125,
      original: 136,
      discount: "-8%",
    },
    isFavorite: true,
    color: "#7B61FF",
  },
  {
    brand: "Zara",
    description: "Long Blazer - White - Formal",
    rating: 3,
    reviews: 212,
    price: {
      current: 222,
      original: 277,
      discount: "-20%",
    },
    isFavorite: true,
    color: "#FF6F61",
  },
  {
    brand: "H&M",
    description: "Denim Jacket - Blue - Streetwear",
    rating: 5,
    reviews: 73,
    price: {
      current: 111,
      original: 126,
      discount: "-12%",
    },
    isFavorite: true,
    color: "#6B5B95",
  },
  {
    brand: "Bershka",
    description: "Cropped Hoodie - Pink - Casual",
    rating: 2,
    reviews: 162,
    price: {
      current: 132,
      original: 154,
      discount: "-14%",
    },
    isFavorite: true,
    color: "#88B04B",
  },
  {
    brand: "Stradivarius",
    description: "Floral Dress - Red - Elegant",
    rating: 3,
    reviews: 113,
    price: {
      current: 122,
      original: 152,
      discount: "-20%",
    },
    isFavorite: true,
    color: "#F7CAC9",
  },
];
let cartItems = [];
let favorites = [];

// Assigning unique IDs to each item
items = items.map((item, index) => ({ ...item, id: index }));
items = items.map((item) => ({ ...item, quantity: 1 }));

console.log(items);

let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");

cartIcon.addEventListener("click", (e) => {
  cart.classList.toggle("active");
});
const viweBag = document.querySelector(".view-bag");
viweBag.addEventListener("click", (e) => cart.classList.toggle("active"));

function updateFavorites() {
  favorites = items.filter((item) => item.isFavorite);
}

function saveToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function loadFromLocalStorage() {
  const savedCart = localStorage.getItem("cartItems");
  const savedFavorites = localStorage.getItem("favorites");

  if (savedCart) {
    cartItems = JSON.parse(savedCart);
  }

  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }
}

function toggleFavorite(itemId) {
  const item = items.find((item) => item.id === itemId);
  if (item) {
    item.isFavorite = !item.isFavorite;
    renderItems(items);
    updateFavorites();
    saveToLocalStorage();
    // renderFavoritesItems();
    console.log(favorites);
  }
}

function decreaseQuantity(id) {
  const item = cartItems.find((item) => item.id === id);
  item.quantity -= 1;
  if (item.quantity === 0) {
    cartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  }
  updateCart();
  updateTotalQuantity(item);
  updateTotalPrice();
  saveToLocalStorage();
}
function increaseQuantity(id) {
  const item = cartItems.find((item) => item.id === id);
  item.quantity += 1;

  updateCart();
  updateTotalQuantity(item);
  updateTotalPrice();
  saveToLocalStorage();
}

// call total quantity
function updateTotalQuantity(item) {
  const cartBadge = document.querySelector(".cart-badge");
  const totalQuantity = cartItems.reduce((total, cartItem) => {
    return total + (cartItem.quantity || 0);
  }, 0);
  cartBadge.textContent = totalQuantity > 0 ? totalQuantity : "0";
}

// call total price
function updateTotalPrice() {
  const totalPriceElement = document.querySelector(".total-price");
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price.current * cartItem.quantity;
  }, 0);
  totalPriceElement.textContent = `$${totalPrice}`;
}

function addToCart(itemId) {
  const item = items.find((item) => item.id === itemId);
  if (!item) return;

  const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  updateCart();
  updateTotalQuantity();
  updateTotalPrice();
  saveToLocalStorage();
}

function updateCart() {
  const itemList = document.querySelector(".item-list");
  itemList.innerHTML = "";
  cartItems.forEach((cartItem) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
            <div class="placeholder" style="background-color: ${
              cartItem.color
            };"></div>
            <div class="text">
              <p class="name">${cartItem.brand}</p>
              <span class="price">$ ${
                cartItem.price.current * cartItem.quantity
              }</span>
            </div>
            <div class="quantity">
              <button onclick="decreaseQuantity(${cartItem.id})">-</button>
              <span>${cartItem.quantity}</span>
              <button onclick="increaseQuantity(${cartItem.id})">+</button>
    `;
    itemList.appendChild(itemElement);
  });
}

function renderItems(items) {
  const itemsContainer = document.querySelector(".container");
  itemsContainer.innerHTML = "";

  items.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.id = `${item.id}`;

    itemElement.innerHTML = `
      <div class="item-img" style="background-color: ${item.color};"></div>
      <div class="item-text">
        <h2 class="name">${item.brand}</h2>
        <div class="row-desc">
          <span class="description">${item.description}</span>
          <i class="fa-${
            item.isFavorite ? "solid" : "regular"
          } fa-heart heart" onclick="toggleFavorite(${item.id})"></i>
        </div>
        <div class="row-rate">
          <div class="rate"></div>
          <span class="reviews">(${item.reviews})</span>
        </div>
        <div class="row-price">
          <span class="current">$${item.price.current}</span>
          <span class="original">$${item.price.original}</span>
          <span class="discount">${item.price.discount}</span>
        </div>
        <button onclick="addToCart(${
          item.id
        })" class="add-to-cart">Add To Cart</button>
      </div>
    `;

    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<i class="fa-${
        i <= item.rating ? "solid" : "regular"
      } fa-star"></i>`;
    }

    itemElement.querySelector(".rate").innerHTML = starsHTML;

    itemsContainer.appendChild(itemElement);
  });
}

loadFromLocalStorage();
renderItems(items);
updateCart();
updateTotalQuantity();
updateTotalPrice();
// function renderFavoritesItems(favorites) {
//   let favoritesPage = document.querySelector(".favorites-page");
//   favoritesPage.innerHTML = "";

//   favorites.forEach((item) => {
//     const itemElement = document.createElement("div");
//     itemElement.classList.add("item");
//     itemElement.id = `${item.id}`;

//     itemElement.innerHTML = `
//       <div class="item-img" style="background-color: ${item.color};"></div>
//       <div class="item-text">
//         <h2 class="name">${item.brand}</h2>
//         <div class="row-desc">
//           <span class="description">${item.description}</span>
//           <i class="fa-${
//             item.isFavorite ? "solid" : "regular"
//           } fa-heart heart" onclick="toggleFavorite(${item.id})"></i>
//         </div>
//         <div class="row-rate">
//           <div class="rate"></div>
//           <span class="reviews">(${item.reviews})</span>
//         </div>
//         <div class="row-price">
//           <span class="current">$${item.price.current}</span>
//           <span class="original">$${item.price.original}</span>
//           <span class="discount">${item.price.discount}</span>
//         </div>
//         <button onclick="addToCart(${
//           item.id
//         })" class="add-to-cart">Add To Cart</button>
//       </div>
//     `;

//     let starsHTML = "";
//     for (let i = 1; i <= 5; i++) {
//       starsHTML += `<i class="fa-${
//         i <= item.rating ? "solid" : "regular"
//       } fa-star"></i>`;
//     }

//     itemElement.querySelector(".rate").innerHTML = starsHTML;

//     favoritesPage.appendChild(itemElement);
//   });
// }
// renderFavoritesItems(favorites);
