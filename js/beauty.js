// All Beauty Products Data
const allBeauty = [
    {
        id: 1,
        name: 'Premium Synthetic Wig',
        price: '$79.99',
        image: '../pics/Image_2025-11-24_200258_845.jpg',
        description: 'High-quality synthetic wig with natural-looking texture and shine. Easy to style and maintain, perfect for everyday wear or special occasions. Available in multiple colors and lengths.'
    },
    {
        id: 2,
        name: 'Luxury Eyelash Extensions',
        price: '$24.99',
        image: '../pics/Image_2025-11-24_200314_361.jpg',
        description: 'Premium false eyelashes made from high-quality synthetic fibers. Natural-looking and comfortable to wear. Easy to apply and remove, perfect for enhancing your natural beauty.'
    },
    {
        id: 3,
        name: 'Human Hair Wig',
        price: '$199.99',
        image: '../pics/Image_2025-11-24_200316_060.jpg',
        description: 'Premium 100% human hair wig with natural texture and movement. Can be styled, colored, and treated just like your own hair. Durable and long-lasting for everyday use.'
    },
    {
        id: 4,
        name: 'Volume Eyelash Set',
        price: '$19.99',
        image: '../pics/Image_2025-11-24_200335_042.jpg',
        description: 'Dramatic volume eyelash extensions for a bold, glamorous look. Made from soft, lightweight materials that feel comfortable all day. Perfect for parties and special events.'
    },
    {
        id: 5,
        name: 'Curly Synthetic Wig',
        price: '$89.99',
        image: '../pics/Image_2025-11-24_200405_552.jpg',
        description: 'Beautiful curly synthetic wig with natural-looking waves and volume. Perfect for adding instant glamour to your look. Easy to maintain and style.'
    },
    {
        id: 6,
        name: 'Natural Eyelash Kit',
        price: '$29.99',
        image: '../pics/Image_2025-11-24_200407_061.jpg',
        description: 'Complete eyelash extension kit with natural-looking lashes and professional-grade adhesive. Includes all tools needed for easy application at home.'
    },
    {
        id: 7,
        name: 'Short Bob Wig',
        price: '$69.99',
        image: '../pics/Image_2025-11-24_200409_385.jpg',
        description: 'Stylish short bob wig in synthetic hair. Modern and chic design perfect for a fresh new look. Lightweight and comfortable for all-day wear.'
    },
    {
        id: 8,
        name: 'Magnetic Eyelashes',
        price: '$34.99',
        image: '../pics/Image_2025-11-24_200418_612.jpg',
        description: 'Revolutionary magnetic eyelashes that require no glue. Easy to apply and remove, reusable and comfortable. Perfect for beginners and professionals alike.'
    },
    {
        id: 9,
        name: 'Long Wavy Wig',
        price: '$99.99',
        image: '../pics/Image_2025-11-24_200420_240.jpg',
        description: 'Elegant long wavy synthetic wig with natural movement and shine. Perfect for special occasions or everyday elegance. Easy to style and maintain.'
    },
    {
        id: 10,
        name: 'Individual Eyelash Extensions',
        price: '$39.99',
        image: '../pics/Image_2025-11-24_200431_753.jpg',
        description: 'Professional individual eyelash extensions for a natural, customized look. High-quality synthetic fibers that blend seamlessly with your natural lashes.'
    },
    {
        id: 11,
        name: 'Pixie Cut Wig',
        price: '$59.99',
        image: '../pics/Image_2025-11-24_200433_223.jpg',
        description: 'Trendy pixie cut synthetic wig for a bold, modern look. Lightweight and breathable, perfect for those who want a low-maintenance style.'
    },
    {
        id: 12,
        name: 'Glamour Eyelash Set',
        price: '$27.99',
        image: '../pics/Image_2025-11-24_200447_957.jpg',
        description: 'Glamorous eyelash set with extra volume and length. Perfect for creating a dramatic, eye-catching look for parties, photoshoots, or special events.'
    }
];

// Generate beauty product card
function createBeautyCard(beauty) {
    const card = document.createElement('div');
    card.className = 'shoe-card';
    
    card.innerHTML = `
        <div class="shoe-image-container">
            <img src="${beauty.image}" alt="${beauty.name}" class="shoe-image" 
                 onerror="this.src='https://via.placeholder.com/280x300/4a7c2a/ffffff?text=${encodeURIComponent(beauty.name)}'">
            <div class="shoe-overlay">
                <div class="shoe-description">${beauty.description}</div>
            </div>
        </div>
        <div class="shoe-info">
            <div class="shoe-name">${beauty.name}</div>
            <div class="shoe-price">${beauty.price}</div>
        </div>
    `;
    
    return card;
}

// Render all beauty products
function renderBeauty() {
    const beautyGrid = document.getElementById('beautyGrid');
    if (beautyGrid) {
        allBeauty.forEach(beauty => {
            const card = createBeautyCard(beauty);
            beautyGrid.appendChild(card);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBeauty();
});

