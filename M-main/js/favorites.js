import { getFavorites } from "./app.js";

const favorites = getFavorites();
function renderFavoritesItems(favorites) {
  let favoritesPage = document.querySelector(".favorites-page");
  favoritesPage.innerHTML = "";

  favorites.forEach((item) => {
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

    favoritesPage.appendChild(itemElement);
  });
}
renderFavoritesItems(favorites);
