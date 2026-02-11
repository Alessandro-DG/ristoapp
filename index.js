import { menu } from './menu.js';

let orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

const menuHtml = menu.map((item) => {
    return `
        <div class="menu-card">
            <div class="menu-card-img-container">
                <img class="menu-card-img" src="${item.image}" alt="${item.title}">
            </div>
            <div class="menu-card-content">
                <h2 class="menu-card-title">${item.title}</h2>
                <p class="menu-card-ingredients">${item.ingredients}</p>
                <p class="menu-card-price">€${item.price}</p>
            </div>
            <button class="menu-card-btn" data-item="${item.title}">+</button>
        </div>
    `;
}).join('');

document.querySelector('.menu').innerHTML = menuHtml;
renderOrderItems();

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('menu-card-btn')) {
        const itemTitle = event.target.dataset.item;

        if( ! orderHasItem(itemTitle) ){
            orderItems.push(menu.find(item => item.title === itemTitle));
            localStorage.setItem('orderItems', JSON.stringify(orderItems));
        }

        renderOrderItems();
    }

    if(event.target.classList.contains('order-item-remove-btn')) {
        const itemTitle = event.target.dataset.item
        orderItems = orderItems.filter(item => item.title !== itemTitle);
        localStorage.setItem('orderItems', JSON.stringify(orderItems));

        renderOrderItems();
    }

})

function orderHasItem(itemTitle) {
    return orderItems.find(item => item.title === itemTitle);
}
function renderOrderItems(){
    if(!orderItems.length) {
        document.querySelector('.order').classList.add('hidden');
        return;
    }

    const totalAmount = orderItems.reduce((acc, item) => acc + parseInt(item.price), 0);
    document.querySelector('.order-items').innerHTML = orderItems.map(item => `
        <li class="order-item">
            <p class="order-item-title">${item.title}</p>
            <button class="order-item-remove-btn" data-item="${item.title}">remove</button>
            <span class="order-item-price">€${item.price}</span>
        </li>
    `).join('')
    document.querySelector('.total-amount').textContent = '€'+totalAmount;
    document.querySelector('.order').classList.remove('hidden');
}
