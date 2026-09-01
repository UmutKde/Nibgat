const items = [];
const categoryContainer = document.querySelector('.categoryList-container');
const itemContainer = document.querySelector('.itemcard-container');


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        items.push(...data);
        UpdateItemCard(items);
        const allCategories = items.map((x) => x.category);
        const uniqueCategories = ["All Items", ...new Set(allCategories)];
        UpdateCategory(uniqueCategories);
        console.log(uniqueCategories);
        console.log(items);
    });

function UpdateCategory(categories) {
    categoryContainer.innerHTML = "";
    categories.forEach(category => {
        const categoryHTML = `
            <div class="category-container ${category === "All Items" ? 'active' : ''}" onclick="filterCategory(this)">${category}</div>`
        categoryContainer.innerHTML += categoryHTML;
    });
}

function filterCategory(clickedElement) {
    const selectedCategory = clickedElement.innerText.trim();
    const categoryDivs = document.querySelectorAll('.category-container');
    categoryDivs.forEach(x => x.classList.remove('active'));
    clickedElement.classList.add('active');
    console.log("Secilen Kategori : ", selectedCategory);
    if (selectedCategory === "All Items")
        UpdateItemCard(items);
    else {
        const filteredItems = items.filter(x => x.category == selectedCategory);
        UpdateItemCard(filteredItems);
    }
}

function UpdateItemCard(item) {
    itemContainer.innerHTML = "";
    item.forEach(x => {
        const cardHTML =
            `<div class="card-container">
                <div class="cardImg-container">
                    <a href="detailPage.html?id=${x.id}">
                        <img src="${x.image}"/>
                    </a>
                </div>
                <div class="cardName-container">
                    <a href="detailPage.html?id=${x.id}">
                        <p class="itemName-container">${x.title}</p>
                        <p class="price-container">${x.price} $</p>
                    </a>
                </div>
                <div class="cardBuy-container">
                    <a href="javascript:void(0)" onclick="addToCart(this)"
                    data-title="${x.title}" data-price="${x.price}" data-image="${x.image}">Satın Al</a>
                </div>          
            </div>`;
        itemContainer.innerHTML += cardHTML;
    });
}