// All Toys Data
const allToys = [
    {
        id: 1,
        name: 'Action Figure Set',
        price: '$29.99',
        image: '../pics/Image_2025-11-24_200337_138.jpg',
        description: 'Premium action figure set with multiple accessories and interchangeable parts. Highly detailed and poseable, perfect for collectors and kids alike.'
    },
    {
        id: 2,
        name: 'Building Blocks Set',
        price: '$39.99',
        image: '../pics/Image_2025-11-24_200348_360.jpg',
        description: 'Creative building blocks set with various shapes and colors. Encourages creativity and problem-solving skills. Compatible with other major building block brands.'
    },
    {
        id: 3,
        name: 'Remote Control Car',
        price: '$49.99',
        image: '../pics/Image_2025-11-24_200350_084.jpg',
        description: 'High-speed remote control car with advanced features. Durable construction, long battery life, and responsive controls. Perfect for indoor and outdoor play.'
    },
    {
        id: 4,
        name: 'Educational Puzzle Set',
        price: '$24.99',
        image: '../pics/Image_2025-11-24_200403_959.jpg',
        description: 'Educational puzzle set designed to enhance cognitive skills and problem-solving abilities. Made from safe, non-toxic materials. Suitable for children of all ages.'
    },
    {
        id: 5,
        name: 'Robot Toy',
        price: '$59.99',
        image: '../pics/Image_2025-11-24_200449_448.jpg',
        description: 'Interactive robot toy with multiple functions and movements. Features lights, sounds, and programmable actions. Great for STEM learning and imaginative play.'
    },
    {
        id: 6,
        name: 'Doll House Set',
        price: '$79.99',
        image: '../pics/Image_2025-11-24_200519_067.jpg',
        description: 'Detailed doll house set with furniture and accessories. Encourages imaginative play and storytelling. Made from high-quality, durable materials.'
    },
    {
        id: 7,
        name: 'Board Game Collection',
        price: '$34.99',
        image: '../pics/Image_2025-11-24_200522_198.jpg',
        description: 'Classic board game collection featuring multiple popular games. Perfect for family game nights and social gatherings. Includes all necessary pieces and instructions.'
    },
    {
        id: 8,
        name: 'Musical Instrument Set',
        price: '$44.99',
        image: '../pics/Image_2025-11-24_200548_184.jpg',
        description: 'Educational musical instrument set for kids. Includes various instruments to introduce children to music. Made from safe, child-friendly materials.'
    },
    {
        id: 9,
        name: 'Plush Toy Collection',
        price: '$19.99',
        image: '../pics/Image_2025-11-24_200549_697.jpg',
        description: 'Soft and cuddly plush toy collection featuring various adorable characters. Perfect for comfort, play, and decoration. Machine washable and safe for all ages.'
    },
    {
        id: 10,
        name: 'Science Experiment Kit',
        price: '$54.99',
        image: '../pics/Image_2025-11-24_200551_138.jpg',
        description: 'Comprehensive science experiment kit with multiple fun and educational experiments. Includes all materials and detailed instructions. Great for learning and discovery.'
    },
    {
        id: 11,
        name: 'Art Supplies Set',
        price: '$29.99',
        image: '../pics/Image_2025-11-24_200607_451.jpg',
        description: 'Complete art supplies set with crayons, markers, paints, and paper. Encourages creativity and artistic expression. Perfect for young artists and crafters.'
    },
    {
        id: 12,
        name: 'Outdoor Sports Set',
        price: '$64.99',
        image: '../pics/Image_2025-11-24_200609_176.jpg',
        description: 'Complete outdoor sports set with various balls and equipment. Promotes physical activity and outdoor play. Durable and weather-resistant materials.'
    }
];

// Generate toy card
function createToyCard(toy) {
    const card = document.createElement('div');
    card.className = 'shoe-card';
    
    card.innerHTML = `
        <div class="shoe-image-container">
            <img src="${toy.image}" alt="${toy.name}" class="shoe-image" 
                 onerror="this.src='https://via.placeholder.com/280x300/4a7c2a/ffffff?text=${encodeURIComponent(toy.name)}'">
            <div class="shoe-overlay">
                <div class="shoe-description">${toy.description}</div>
            </div>
        </div>
        <div class="shoe-info">
            <div class="shoe-name">${toy.name}</div>
            <div class="shoe-price">${toy.price}</div>
        </div>
    `;
    
    return card;
}

// Render all toys
function renderToys() {
    const toysGrid = document.getElementById('toysGrid');
    if (toysGrid) {
        allToys.forEach(toy => {
            const card = createToyCard(toy);
            toysGrid.appendChild(card);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderToys();
});

