import { faker } from '@faker-js/faker';
let productsHTML = [];
for (let index = 0; index < 10; index++) {
  productsHTML += `<div>${faker.commerce.productName()}<div>`
}
document.querySelector('#listOfProducts').innerHTML=productsHTML;