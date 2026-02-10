import { menu } from './menu.js';

const menuHtml = menu.map((item) => {
    return `
        <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <p class="ingredients">${item.ingredients}</p>
            <p>${item.price}</p>
        </div>
    `;
}).join('');

console.log(menuHtml);

document.querySelector('.menu').innerHTML = menuHtml;