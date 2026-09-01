const cart = [];
const overlay = document.getElementById('cartOverlay');
const cartItemContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

function openCart() {
    overlay.style.display = 'flex';
}

function closeCart() {
    overlay.style.display = 'none';
}

function addToCart(buttonElement) {
    const title = buttonElement.getAttribute('data-title');
    const price = parseFloat(buttonElement.getAttribute('data-price'));
    const image = buttonElement.getAttribute('data-image');

    cart.push({ title, price, image });
    renderCart();
}

function renderCart() {
    cartItemContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += (item.price)*85/100;
        cartItemContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <p>${item.title}...</p>
                <p>${item.price} $</p>
            </div>
        `;
    });
    cartTotal.innerHTML = `Toplam: ${total} $`;
}