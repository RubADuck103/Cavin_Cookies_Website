// Shopping Cart System
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        cartList.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)} 
        <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });

    document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

