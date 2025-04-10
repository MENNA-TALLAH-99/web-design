
document.addEventListener("DOMContentLoaded", () => {
  fetch("menu.json")
    .then(response => response.json())
    .then(data => {
      const sandwiches = data.categories["دجاج"];
      const menuItems = document.getElementById("menuItems");

      sandwiches.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="image/${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>وسط: ${item.sizes["وسط"]} ج.م</p>
          <p>كبير: ${item.sizes["كبير"]} ج.م</p>
          <p>كبير أوي: ${item.sizes["كبير أوي"]} ج.م</p>
        `;
        menuItems.appendChild(card);
      });
    });
});
