const groceryList = document.createElement('ul');
document.body.appendChild(groceryList);

const item1 = document.createElement('li');
item1.textContent = 'apple';
groceryList.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'coffee';
groceryList.appendChild(item2);

const itemArr = ['fish crackers', 'soda'];
itemArr.push('eggs');

for (const grocery of itemArr) {
    item = document.createElement('li');
    item.textContent = grocery;
    groceryList.appendChild(item);
}

groceryList.removeChild(groceryList.lastChild);
groceryList.removeChild(groceryList.firstChild);

