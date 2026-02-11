import { menu } from './menu.js';

const menuHtml = menu.map((item) => {
    return `
        <div class="card">
            <img class="card-img" src="${item.image}" alt="${item.title}">
            <div class="card-text">
                <h2>${item.title}</h2>
                <p class="card-ingredients">${item.ingredients}</p>
                <p>${item.price}</p>
            </div>
            <button class="card-btn">+</button>
        </div>
    `;
}).join('');

console.log(menuHtml);

document.querySelector('.menu').innerHTML = menuHtml;