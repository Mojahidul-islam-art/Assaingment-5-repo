function newElement(target) {
    const createElement = document.getElementById('selected-items')
    const parent = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = parent;
    createElement.appendChild(li)
}