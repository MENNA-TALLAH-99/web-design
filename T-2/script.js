const sandwiches = [
    { name: "شاورما فراخ", price: 40, img: "img/hq720.jpg", description: "شاورما لذيذة مع خبز طازج." },
    { name: "برجر لحم", price: 55, img: "img/pngtree-hamburger-or-beef-burgers-with-cheese-and-french-fries-image_15656146.jpg", description: "برجر لحم مع جبنة وشريحة بطاطس." },
    { name: "كفتة مشوية", price: 50, img: "img/hq720 (1).jpg", description: "كفتة مشوية مع طعم لذيذ." },
    { name: "فلافل", price: 20, img: "img/4fe1204c-a69c-4ef2-b61f-3c45db5a6826_16x9_1200x676.webp", description: "فلافل مغطاة بحمص طازج." }
  ];
  
  const drinks = [
    { name: "بيبسي", price: 15, img: "img/4037f27df3cc47672802f4704a0294ae.jpg", description: "مشروب غازي شهير." },
    { name: "عصير فراولة", price: 12, img: "img/1574764188_node.jpg", description: "عصير فراولة طازج." },
    { name: "عصير برتقال", price: 18, img: "img/orange-juice.jpg", description: "عصير برتقال طبيعي." }
  ];
  
  const sandwichesContainer = document.getElementById("sandwiches-container");
  const drinksContainer = document.getElementById("drinks-container");
  const searchBar = document.getElementById("search-bar");
  
  function displayProducts(products, container) {
    container.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price} جنيه</p>
      `;
      productDiv.addEventListener("click", () => showProductDetails(product));
      container.appendChild(productDiv);
    });
  }
  
  function showProductDetails(product) {
    const detailContent = document.getElementById("product-detail-content");
    detailContent.innerHTML = `
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} جنيه</p>
      <p>الوصف: ${product.description || 'لا يوجد وصف حالياً.'}</p>
    `;
    addToCart(product);
  }
  
  const cartList = document.getElementById("cart-list");
  
  function addToCart(product) {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name} - ${product.price} جنيه`;
    cartList.appendChild(cartItem);
  }
  
  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("تم إتمام الشراء! شكراً لك ♥");
  });
  
  displayProducts(sandwiches, sandwichesContainer);
  displayProducts(drinks, drinksContainer);
  
  searchBar.addEventListener("input", () => {
    const keyword = searchBar.value.toLowerCase();
    const filteredSandwiches = sandwiches.filter(item => item.name.toLowerCase().includes(keyword));
    const filteredDrinks = drinks.filter(item => item.name.toLowerCase().includes(keyword));
    displayProducts(filteredSandwiches, sandwichesContainer);
    displayProducts(filteredDrinks, drinksContainer);
  });
  