
const totalPriceElement = document.getElementById("total-price");
const purchaseButton = document.getElementById("purchase-button");

totalPriceElement.addEventListener("DOMSubtreeModified", () => {
    const totalPrice = parseFloat(totalPriceElement.innerText);
    if (totalPrice === 200) {
        purchaseButton.removeAttribute("disabled");
    }
});

