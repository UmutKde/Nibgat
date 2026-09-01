const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const selectedItem = [];
const detailWrapperContainer = document.querySelector('.detailWrapper-container');


fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(data => {
        UpdateDetailPage(data);
    });

function UpdateDetailPage(product) {
    detailWrapperContainer.innerHTML =
        `<div class="detailImg-container">
          <img src="${product.image}" />
        </div>
        <div class="detailCard-container">
          <div class="detailCardName-container">${product.title}</div>
          <div class="detailCardPrice-container">${product.price} $</div>
        <div class="detailCardBuy-container">
            <a href="javascript:void(0)" onclick="addToCart(this)"
            data-title="${product.title}" data-price="${product.price}" data-image="${product.image}">Satın Al</a>
        </div>
        </div>
        <div class="detail-container">
          <h2>Bu ürün hakkında</h2>
          <p>${product.description}</p>
        </div>`;
};
