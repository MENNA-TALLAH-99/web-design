// عناصر الصفحة
const menuContainer = document.getElementById("menu");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");

// تحميل البيانات من ملف JSON
let allItems = [];

fetch("menu.json")
  .then(res => res.json())
  .then(data => {
    const items = data.categories["دجاج"]; // تعديل حسب التصنيف الموجود
    allItems = items;
    renderMenu(items);
  });

// عرض كروت الساندوتشات
function renderMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "sandwich-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="price">
        <span>${item.sizes["وسط"]} ج</span>
      </div>
    `;
    card.onclick = () => showDetails(item);
    menuContainer.appendChild(card);
  });
}

// البحث
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim();
  const filtered = allItems.filter(item =>
    item.name.includes(keyword)
  );
  renderMenu(filtered);
});

// عرض التفاصيل في النافذة المنبثقة
function showDetails(item) {
  popupContent.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h2>${item.name}</h2>
    <div class="sizes">
      <div class="size-option">وسط - ${item.sizes["وسط"]} ج</div>
      <div class="size-option">كبير - ${item.sizes["كبير"]} ج</div>
      <div class="size-option">كبير أوي - ${item.sizes["كبير أوي"]} ج</div>
    </div>
  `;
  popup.style.display = "block";
}

// إغلاق النافذة المنبثقة
function closePopup() {
  popup.style.display = "none";
}
