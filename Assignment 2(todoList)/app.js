const newItems = document.querySelector('#addItem');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

console.log(newItems.value);
console.log(btn);
console.log(list);

btn.addEventListener('click', function() {
    const newItem = newItems.value;
    if(!newItem)
        return;
    console.log(newItem);

    const newList = document.createElement('li');
    newList.innerText = newItem;
    list.appendChild(newList);

    newItems.value = "";
    newItems.focus();
})