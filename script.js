// Shopping Cart System with Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
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
    saveCart();
    updateCart();
}

// Load cart when the page loads
updateCart();

// Checkout (redirects to a payment page)
document.getElementById("checkout").addEventListener("click", function () {
    alert("To place an order, text (Your Phone Number) or email (your@email.com).");
});
