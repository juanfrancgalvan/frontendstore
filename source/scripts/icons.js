const icons = [
  {
    "name": "Good Price",
    "icon": "/build/assets/images/icon1.webp"
  },
  {
    "name": "For Developers",
    "icon": "/build/assets/images/icon2.webp"
  },
  {
    "name": "Free Shipping",
    "icon": "/build/assets/images/icon3.webp"
  },
  {
    "name": "Best Quality",
    "icon": "/build/assets/images/icon4.webp"
  }
]

function createIcons() {
  const iconsGrid = document.querySelector('.icons-grid');
  icons.forEach(icon => {
    const div = document.createElement('div');
    div.classList.add('icon');
    div.innerHTML = `
        <img src="${icon.icon}" alt="Buy icon">
        <h3>${icon.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      `;
      iconsGrid.appendChild(div);
  });
}
createIcons()