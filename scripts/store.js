// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart
function addToCart(name, price) {

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("message").innerText =
        name + " added to cart!";
}