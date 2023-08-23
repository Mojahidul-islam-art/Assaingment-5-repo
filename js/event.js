let totalPrices = 0;

function newElement(target) {
    const createElement = document.getElementById('selected-items');
    const parent = target.querySelector('h2').innerText; // Using querySelector for better readability
    const li = document.createElement('li');
    li.innerText = parent;
    createElement.appendChild(li);

    const priceText = target.querySelector('.pt-3').innerText;
    const price = parseFloat(priceText.split(' ')[0]); // Using parseFloat for better precision
    totalPrices += price;
    document.getElementById('total-price').innerText = totalPrices;

    console.log('Total Price:', totalPrices); // Debugging

    const y = document.getElementById('purchase-button');
    const z = document.getElementById('purchase-buttons');
    if (totalPrices >= 200) {
        y.removeAttribute("disabled");
        z.removeAttribute('disabled');
    }
}