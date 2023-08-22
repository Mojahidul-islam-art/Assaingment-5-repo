document.getElementById('purchase-button').addEventListener('click', function () {
    const depositField = document.getElementById('remove');
    const depositFinal = depositField.value;

    const originalValue = totalPrices;
    const percentage = 20;
    const totalB = document.getElementById('total');
    const totalC = document.getElementById('discount-amount');


    if (depositFinal === 'SELL200') {
        const minusPercentageValue = originalValue - (originalValue * percentage / 100);
        totalB.innerText = minusPercentageValue;
        totalC.innerText = minusPercentageValue;
    }
    else {
        alert('Your promo code is not right.Please write the correct code');
    }
})