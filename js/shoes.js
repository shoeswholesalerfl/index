// All Shoes Data
const allShoes = [
    {
        id: 1,
        name: 'Classic Running Shoes',
        price: '$89.99',
        image: '../pics/Image_2025-11-19_120304_072.jpg',
        description: 'Comfortable and breathable classic running shoes, perfect for daily wear and light exercise. Made with premium materials for excellent support and cushioning.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10']
    },
    {
        id: 2,
        name: 'Casual Sneakers',
        price: '$69.99',
        image: '../pics/Image_2025-11-19_120528_252.jpg',
        description: 'Stylish and versatile casual sneakers with a minimalist design, suitable for any occasion. Lightweight and comfortable for your daily adventures.',
        sizes: ['6.5', '7', '7.5', '8', '8.5', '9', '9.5']
    },
    {
        id: 3,
        name: 'Athletic Training Shoes',
        price: '$119.99',
        image: '../pics/Image_2025-11-24_200132_953.jpg',
        description: 'Professional training shoes with advanced cushioning technology to protect every step. Ideal for long-distance running and training sessions.',
        sizes: ['7.5', '8', '8.5', '9', '9.5', '10', '10.5']
    },
    {
        id: 4,
        name: 'Business Dress Shoes',
        price: '$149.99',
        image: '../pics/Image_2025-11-24_200135_616.jpg',
        description: 'Elegant business dress shoes crafted from premium leather with exquisite craftsmanship. Perfect for formal occasions and business events.',
        sizes: ['8', '8.5', '9', '9.5', '10', '10.5']
    },
    {
        id: 5,
        name: 'Canvas Casual Shoes',
        price: '$49.99',
        image: '../pics/Image_2025-11-24_200200_137.jpg',
        description: 'Classic canvas shoes that are lightweight, comfortable, and breathable. Available in multiple colors, a fashionable choice for the young generation.',
        sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5']
    },
    {
        id: 6,
        name: 'Hiking Boots',
        price: '$129.99',
        image: '../pics/Image_2025-11-24_200204_397.jpg',
        description: 'Professional hiking boots with excellent grip and durability. Provides outstanding traction and protection for outdoor hiking and mountaineering.',
        sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11']
    },
    {
        id: 7,
        name: 'Basketball Shoes',
        price: '$159.99',
        image: '../pics/Image_2025-11-24_200206_331.jpg',
        description: 'High-performance basketball shoes with excellent fit and cushioning. Perfect for basketball games and training.',
        sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11']
    },
    {
        id: 8,
        name: 'Summer Sandals',
        price: '$39.99',
        image: '../pics/Image_2025-11-24_200226_582.jpg',
        description: 'Comfortable and breathable sandals perfect for summer wear. Lightweight design keeps your feet cool during hot weather.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10']
    },
    {
        id: 9,
        name: 'Winter Boots',
        price: '$169.99',
        image: '../pics/Image_2025-11-24_200229_105.jpg',
        description: 'Stylish and warm winter boots perfect for fall and winter seasons. Made with premium materials and exquisite craftsmanship, both practical and beautiful.',
        sizes: ['7.5', '8', '8.5', '9', '9.5', '10', '10.5']
    },
    {
        id: 10,
        name: 'Skateboard Shoes',
        price: '$79.99',
        image: '../pics/Image_2025-11-24_200241_259.jpg',
        description: 'Professional skateboard shoes that are durable and slip-resistant, providing excellent board feel. Perfect for skateboarding and street culture enthusiasts.',
        sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10']
    },
    {
        id: 11,
        name: 'Retro Running Shoes',
        price: '$99.99',
        image: '../pics/Image_2025-11-24_200242_899.jpg',
        description: 'Retro-style running shoes with classic design and versatile fashion appeal. Combines retro aesthetics with modern comfort.',
        sizes: ['6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10']
    },
    {
        id: 12,
        name: 'Casual Leather Shoes',
        price: '$119.99',
        image: '../pics/Image_2025-11-24_200257_278.jpg',
        description: 'Comfortable casual leather shoes suitable for semi-formal occasions. Genuine leather with comfortable lining for an enjoyable wearing experience.',
        sizes: ['7.5', '8', '8.5', '9', '9.5', '10', '10.5']
    }
];

// Generate shoe card
function createShoeCard(shoe) {
    const card = document.createElement('div');
    card.className = 'shoe-card';
    
    // Generate sizes section
    const sizesSection = shoe.sizes ? `
        <div class="shoe-sizes">
            <div class="shoe-sizes-title">Available Sizes:</div>
            <div class="shoe-size-list">
                ${shoe.sizes.map(size => `<span class="shoe-size-item">${size}</span>`).join('')}
            </div>
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="shoe-image-container">
            <img src="${shoe.image}" alt="${shoe.name}" class="shoe-image" 
                 onerror="this.src='https://via.placeholder.com/280x300/4a7c2a/ffffff?text=${encodeURIComponent(shoe.name)}'">
            <div class="shoe-overlay">
                <div class="shoe-description">${shoe.description}</div>
                ${sizesSection}
            </div>
        </div>
        <div class="shoe-info">
            <div class="shoe-name">${shoe.name}</div>
            <div class="shoe-price">${shoe.price}</div>
        </div>
    `;
    
    return card;
}

// Render all shoes
function renderShoes() {
    const shoesGrid = document.getElementById('shoesGrid');
    if (shoesGrid) {
        allShoes.forEach(shoe => {
            const card = createShoeCard(shoe);
            shoesGrid.appendChild(card);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderShoes();
});

