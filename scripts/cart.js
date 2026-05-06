// ===== LOAD CART FROM STORAGE =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== DISPLAY CART =====
function displayCart() {

    const container = document.getElementById("cartItems");
    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">

                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>

                <div class="item-controls">

                    <button onclick="changeQty(${index}, -1)">-</button>

                    <input type="number" min="1" value="${item.quantity}"
                        onchange="updateQuantity(${index}, this.value)">

                    <button onclick="changeQty(${index}, 1)">+</button>

                    <button class="remove-btn" onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    container.innerHTML += `
        <h2 class="total">Total: $${total.toFixed(2)}</h2>
    `;
}

// ===== CHANGE QUANTITY (+ / - BUTTONS) =====
function changeQty(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    saveCart();
    displayCart();
}

// ===== UPDATE QUANTITY (MANUAL INPUT) =====
function updateQuantity(index, qty) {
    qty = parseInt(qty);

    if (isNaN(qty) || qty < 1) return;

    cart[index].quantity = qty;

    saveCart();
    displayCart();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// ===== SAVE CART =====
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== COPY BILLING → SHIPPING (BONUS) =====
function copyInfo() {
    document.getElementById("shipAddress").value =
        document.getElementById("name").value;

    document.getElementById("shipCity").value =
        document.getElementById("zip").value;
}

// ===== FORM VALIDATION =====
document.addEventListener("DOMContentLoaded", function () {

    // Attach form validation safely
    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function (e) {

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let zip = document.getElementById("zip").value.trim();

            // REQUIRED FIELDS
            if (name === "" || email === "" || zip === "") {
                alert("All fields are required!");
                e.preventDefault();
                return;
            }

            // EMAIL CHECK
            if (!email.includes("@")) {
                alert("Please enter a valid email!");
                e.preventDefault();
                return;
            }

            // ZIP CHECK
            if (zip.length !== 5 || isNaN(zip)) {
                alert("Please enter a valid 5-digit ZIP code!");
                e.preventDefault();
                return;
            }

            // SUCCESS
            e.preventDefault();
            document.getElementById("confirmation").style.display = "block";
        });
    }

    // Load cart after page is ready
    displayCart();
});