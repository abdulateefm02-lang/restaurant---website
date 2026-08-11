/* ================= CART ================= */

let cart = [];


/* ADD ITEM TO CART */

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    displayCart();

    alert(name + " added to cart!");

}


/* DISPLAY CART */

function displayCart() {

    const cartContainer = document.getElementById("cart-items");

    const totalElement = document.getElementById("cart-total");


    if (cart.length === 0) {

        cartContainer.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        totalElement.textContent = "₦0";

        return;
    }


    cartContainer.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div>

                <strong>${item.name}</strong>

                <p>
                    ₦${item.price.toLocaleString()}
                    ×
                    ${item.quantity}
                </p>

            </div>


            <div>

                <strong>
                    ₦${itemTotal.toLocaleString()}
                </strong>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });


    totalElement.textContent =
        "₦" + total.toLocaleString();

}


/* REMOVE ITEM */

function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();

}


/* ================= WHATSAPP ORDER ================= */

function orderOnWhatsApp() {

    if (cart.length === 0) {

        alert("Please add something to your cart first.");

        return;
    }


    let message = "Hello Savana Bites!%0A%0A";

    message += "I would like to place an order:%0A%0A";


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        message +=
            "• " +
            item.name +
            " × " +
            item.quantity +
            " = ₦" +
            itemTotal.toLocaleString() +
            "%0A";

    });


    message +=
        "%0ATotal: ₦" +
        total.toLocaleString();


    /*
        CHANGE THIS NUMBER
        TO THE RESTAURANT'S WHATSAPP NUMBER.

        Use country code without +
        Example:
        2348012345678
    */

    const phoneNumber = "2349164830687";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;


    window.open(whatsappURL, "_blank");

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});