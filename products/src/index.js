import faker from '@faker-js/faker'

let products = ''

for (let i = 0; i < 5; i++) {
  products += `<div>${faker.commerce.productName()}</div>`
}

document.getElementById('dev-products').innerHTML = products