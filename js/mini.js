const totalPriceElements = document.getElementById("total-price");
const purchaseButtons = document.getElementById("purchase-buttons");

totalPriceElements.addEventListener("DOMSubtreeModified", () => {
    const totalAmount = parseFloat(totalPriceElements.innerText);
    if (totalAmount === 200.00) {
        purchaseButtons.removeAttribute("disabled");
    }
});