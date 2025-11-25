// Banner Carousel Functionality
let currentSlide = 0;
const totalSlides = 10;
let slidesVisible = 3; // Number of slides visible at once (default 3)
const bannerWrapper = document.getElementById('bannerWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const bannerDots = document.getElementById('bannerDots');

// Get number of visible slides based on screen size
function getSlidesVisible() {
    if (window.innerWidth <= 480) {
        return 1; // Mobile: show 1 slide
    } else if (window.innerWidth <= 768) {
        return 2; // Tablet: show 2 slides
    }
    return 3; // Desktop: show 3 slides
}

// Create carousel dots
function createDots() {
    // Clear existing dots
    bannerDots.innerHTML = '';
    slidesVisible = getSlidesVisible();
    
    // Calculate number of dot groups
    const dotCount = Math.ceil(totalSlides / slidesVisible);
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'banner-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i * slidesVisible));
        bannerDots.appendChild(dot);
    }
}

// Update carousel display
function updateBanner() {
    slidesVisible = getSlidesVisible();
    // Move by one slide
    const slideWidth = 100 / slidesVisible;
    bannerWrapper.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    
    // Update dot states
    const dots = document.querySelectorAll('.banner-dot');
    const currentDotIndex = Math.floor(currentSlide / slidesVisible);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentDotIndex);
    });
}

// Go to specific slide
function goToSlide(slideIndex) {
    slidesVisible = getSlidesVisible();
    // Ensure slide index is within bounds
    const maxSlide = Math.max(0, totalSlides - slidesVisible);
    currentSlide = Math.max(0, Math.min(slideIndex, maxSlide));
    updateBanner();
}

// Next slide
function nextSlide() {
    slidesVisible = getSlidesVisible();
    const maxSlide = Math.max(0, totalSlides - slidesVisible);
    if (currentSlide < maxSlide) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to start
    }
    updateBanner();
}

// Previous slide
function prevSlide() {
    slidesVisible = getSlidesVisible();
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        // Loop to the end
        const maxSlide = Math.max(0, totalSlides - slidesVisible);
        currentSlide = maxSlide;
    }
    updateBanner();
}

// Initialize carousel
function initBanner() {
    createDots();
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Recreate dots and update on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            createDots();
            updateBanner();
        }, 250);
    });
    
    // Auto-play (optional)
    // setInterval(nextSlide, 5000);
}

// Featured Shoes Data
const shoes = [
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
    }
];

// Featured Beauty Data
const beauty = [
    {
        id: 1,
        name: 'Premium Synthetic Wig',
        price: '$79.99',
        image: '../pics/Image_2025-11-24_200258_845.jpg',
        description: 'High-quality synthetic wig with natural-looking texture and shine. Easy to style and maintain, perfect for everyday wear or special occasions. Available in multiple colors and lengths.',
        sizes: null
    },
    {
        id: 2,
        name: 'Luxury Eyelash Extensions',
        price: '$24.99',
        image: '../pics/Image_2025-11-24_200314_361.jpg',
        description: 'Premium false eyelashes made from high-quality synthetic fibers. Natural-looking and comfortable to wear. Easy to apply and remove, perfect for enhancing your natural beauty.',
        sizes: null
    },
    {
        id: 3,
        name: 'Human Hair Wig',
        price: '$199.99',
        image: '../pics/Image_2025-11-24_200316_060.jpg',
        description: 'Premium 100% human hair wig with natural texture and movement. Can be styled, colored, and treated just like your own hair. Durable and long-lasting for everyday use.',
        sizes: null
    },
    {
        id: 4,
        name: 'Volume Eyelash Set',
        price: '$19.99',
        image: '../pics/Image_2025-11-24_200335_042.jpg',
        description: 'Dramatic volume eyelash extensions for a bold, glamorous look. Made from soft, lightweight materials that feel comfortable all day. Perfect for parties and special events.',
        sizes: null
    }
];

// Featured Toys Data
const toys = [
    {
        id: 1,
        name: 'Action Figure Set',
        price: '$29.99',
        image: '../pics/Image_2025-11-24_200337_138.jpg',
        description: 'Premium action figure set with multiple accessories and interchangeable parts. Highly detailed and poseable, perfect for collectors and kids alike.',
        sizes: null
    },
    {
        id: 2,
        name: 'Building Blocks Set',
        price: '$39.99',
        image: '../pics/Image_2025-11-24_200348_360.jpg',
        description: 'Creative building blocks set with various shapes and colors. Encourages creativity and problem-solving skills. Compatible with other major building block brands.',
        sizes: null
    },
    {
        id: 3,
        name: 'Remote Control Car',
        price: '$49.99',
        image: '../pics/Image_2025-11-24_200350_084.jpg',
        description: 'High-speed remote control car with advanced features. Durable construction, long battery life, and responsive controls. Perfect for indoor and outdoor play.',
        sizes: null
    },
    {
        id: 4,
        name: 'Educational Puzzle Set',
        price: '$24.99',
        image: '../pics/Image_2025-11-24_200403_959.jpg',
        description: 'Educational puzzle set designed to enhance cognitive skills and problem-solving abilities. Made from safe, non-toxic materials. Suitable for children of all ages.',
        sizes: null
    }
];

// Generate product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Generate sizes section if sizes exist
    const sizesSection = product.sizes ? `
        <div class="product-sizes">
            <div class="product-sizes-title">Available Sizes:</div>
            <div class="size-list">
                ${product.sizes.map(size => `<span class="size-item">${size}</span>`).join('')}
            </div>
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/280x250/4a7c2a/ffffff?text=${encodeURIComponent(product.name)}'">
            <div class="product-overlay">
                <div class="product-description">${product.description}</div>
                ${sizesSection}
            </div>
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
        </div>
    `;
    
    return card;
}

// Render products to specific container
function renderProductsToContainer(products, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        products.forEach(product => {
            const card = createProductCard(product);
            container.appendChild(card);
        });
    }
}

// Render all products
function renderProducts() {
    renderProductsToContainer(shoes, 'shoesContainer');
    renderProductsToContainer(beauty, 'beautyContainer');
    renderProductsToContainer(toys, 'toysContainer');
}

// Navigation highlight
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default for anchor links (#), allow page navigation
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Customer Reviews Data
const reviews = [
    {
        id: 1,
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?img=47',
        text: 'I\'ve been shopping at CoastLine Shoe & Variety for over two years now, and I must say their quality is exceptional. I recently purchased a pair of their classic running shoes, and they have exceeded all my expectations. The comfort level is outstanding - I can wear them all day without any discomfort. The materials used are clearly premium, and the craftsmanship is evident in every detail. What I love most is how they perfectly balance style and functionality. Whether I\'m going for a morning jog or just running errands, these shoes look great and feel even better. The customer service was also top-notch, helping me find the perfect size. I highly recommend this store to anyone looking for quality footwear!',
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?img=12',
        text: 'As someone who spends a lot of time on my feet for work, finding comfortable and durable shoes is crucial. CoastLine Shoe & Variety has become my go-to store for all my footwear needs. I bought a pair of their business dress shoes six months ago, and they still look brand new despite daily wear. The leather quality is impressive, and the attention to detail in the stitching and design is remarkable. The shoes provide excellent support throughout the day, and I never experience the foot fatigue I used to get with other brands. The staff was incredibly knowledgeable and helped me find exactly what I needed. The pricing is also very reasonable for the quality you receive. I\'ve already recommended this store to several colleagues!',
        rating: 5
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        avatar: 'https://i.pravatar.cc/150?img=33',
        text: 'I\'m absolutely thrilled with my purchase from CoastLine Shoe & Variety! I was looking for a versatile pair of casual sneakers that I could wear for both workouts and everyday activities. The pair I found here has been perfect for both purposes. The design is modern and stylish, yet they\'re incredibly comfortable and supportive. I\'ve worn them hiking, to the gym, and even to casual social events, and they\'ve performed excellently in every situation. The breathability is great, and my feet stay comfortable even during long walks. The customer service experience was wonderful - the staff took time to understand my needs and made excellent recommendations. The quality-to-price ratio is outstanding, and I can already tell these shoes will last me a very long time. This is definitely my new favorite shoe store!',
        rating: 5
    }
];

// Reviews Carousel Functionality
let currentReview = 0;
const totalReviews = reviews.length;
const reviewsWrapper = document.getElementById('reviewsWrapper');
const reviewPrevBtn = document.getElementById('reviewPrevBtn');
const reviewNextBtn = document.getElementById('reviewNextBtn');
const reviewDots = document.getElementById('reviewDots');

// Create review dots
function createReviewDots() {
    reviewDots.innerHTML = '';
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('button');
        dot.className = 'review-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToReview(i));
        reviewDots.appendChild(dot);
    }
}

// Generate star rating
function generateStars(rating) {
    return '★'.repeat(rating);
}

// Create review slide
function createReviewSlide(review) {
    const slide = document.createElement('div');
    slide.className = 'review-slide';
    slide.innerHTML = `
        <img src="${review.avatar}" alt="${review.name}" class="review-avatar" 
             onerror="this.src='https://i.pravatar.cc/150?img=${review.id}'">
        <div class="review-name">${review.name}</div>
        <div class="review-stars">${generateStars(review.rating)}</div>
        <div class="review-text">"${review.text}"</div>
    `;
    return slide;
}

// Render reviews
function renderReviews() {
    reviews.forEach(review => {
        const slide = createReviewSlide(review);
        reviewsWrapper.appendChild(slide);
    });
}

// Update review carousel display
function updateReviewCarousel() {
    reviewsWrapper.style.transform = `translateX(-${currentReview * 100}%)`;
    
    // Update dot states
    const dots = document.querySelectorAll('.review-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReview);
    });
}

// Go to specific review
function goToReview(reviewIndex) {
    currentReview = reviewIndex;
    updateReviewCarousel();
}

// Next review
function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    updateReviewCarousel();
}

// Previous review
function prevReview() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    updateReviewCarousel();
}

// Initialize reviews carousel
function initReviews() {
    renderReviews();
    createReviewDots();
    reviewPrevBtn.addEventListener('click', prevReview);
    reviewNextBtn.addEventListener('click', nextReview);
    
    // Auto-play reviews (optional)
    // setInterval(nextReview, 6000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initBanner();
    renderProducts();
    initNavigation();
    initReviews();
});

