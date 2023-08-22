let totalPrices = 0;

function newElement(target) {
    const createElement = document.getElementById('selected-items')
    const parent = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = parent;
    createElement.appendChild(li)
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    totalPrices = parseInt(totalPrices) + parseInt(price);
    document.getElementById('total-price').innerText = totalPrices;
}
