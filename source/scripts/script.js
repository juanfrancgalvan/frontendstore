const products = [
  {
    "name": "VueJS",
    "image": "/build/assets/images/product1.webp",
  },
  {
    "name": "AngularJS",
    "image": "/build/assets/images/product2.webp",
  },
  {
    "name": "ReactJS",
    "image": "/build/assets/images/product3.webp",
  },
  {
    "name": "Redux",
    "image": "/build/assets/images/product4.webp",
  },
  {
    "name": "NodeJS",
    "image": "/build/assets/images/product5.webp",
  },
  {
    "name": "SCSS",
    "image": "/build/assets/images/product6.webp",
  },
  {
    "name": "HTML",
    "image": "/build/assets/images/product7.webp",
  },
  {
    "name": "GitHub",
    "image": "/build/assets/images/product8.webp",
  },
  {
    "name": "Bulma",
    "image": "/build/assets/images/product9.webp",
  },
  {
    "name": "TypeScript",
    "image": "/build/assets/images/product10.webp",
  },
  {
    "name": "Drupal",
    "image": "/build/assets/images/product11.webp",
  },
  {
    "name": "Javascript",
    "image": "/build/assets/images/product12.webp",
  },
  {
    "name": "GraphQL",
    "image": "/build/assets/images/product13.webp",
  },
  {
    "name": "WordPress",
    "image": "/build/assets/images/product14.webp",
  },
];

function createProducts() {
  const productsGrid = document.querySelector('.products-grid');
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <a href="product.html">
        <img src="${product.image}" alt="${product.name} image">
        <div class="product-info">
          <p class="product-title">${product.name}</p>
          <p class="product-price">50$</p>
        </div>
      </a>
      `;
      productsGrid.appendChild(div);
  });
}
createProducts()