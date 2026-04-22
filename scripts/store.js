// ===== CART ARRAY =====
let cart = [];
let total = 0;

// ===== ADD TO CART =====
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    displayCart();
}

// ===== DISPLAY CART =====
function displayCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    // Show each item
    for (let i = 0; i < cart.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${cart[i].name} - $${cart[i].price.toFixed(2)}`;
        cartList.appendChild(li);
    }

    // Show total
    let totalItem = document.createElement("li");
    totalItem.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartList.appendChild(totalItem);
}

// ===== COPY BILLING TO SHIPPING =====
function copyInfo() {
    document.getElementById("shipAddress").value =
        document.getElementById("name").value;

    document.getElementById("shipCity").value =
        document.getElementById("zip").value;
}

// ===== FORM VALIDATION =====
window.onload = function () {
    document.getElementById("orderForm").addEventListener("submit", function(event) {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let zip = document.getElementById("zip").value;

        let valid = true;

        // Name validation
        if (name === "") {
            alert("Name is required");
            valid = false;
        }

        // Email validation
        if (!email.includes("@")) {
            alert("Enter a valid email");
            valid = false;
        }

        // Zip validation
        if (zip.length !== 5 || isNaN(zip)) {
            alert("Enter a valid 5-digit zip code");
            valid = false;
        }

        // STOP form if invalid
        if (!valid) {
            event.preventDefault();
            return;
        }

        // Show confirmation
        event.preventDefault();
        document.getElementById("confirmation").style.display = "block";
    });
};