// Image Gallery Functionality
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Remove active class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumb.classList.add('active');
        
        // Update main image
        const mainImage = document.getElementById('mainImage');
        mainImage.src = thumb.dataset.large;
        mainImage.alt = thumb.alt;
    });
});

// Quantity Selector
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');
const quantityInput = document.querySelector('.quantity-input');

minusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
});

// Product Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active tab content
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Add to Cart Functionality
document.querySelector('.btn-add-to-cart').addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const productName = document.querySelector('h1').textContent;
    const price = document.querySelector('.current-price').textContent;
    
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = currentCount + quantity;
    
    // Show confirmation (in a real app, you'd add to cart storage)
    alert(`Added ${quantity} × ${productName} to cart (${price} each)`);
    
    // Animation
    cartCount.classList.add('pulse');
    setTimeout(() => cartCount.classList.remove('pulse'), 300);
});

// Wishlist Toggle
document.querySelector('.btn-wishlist').addEventListener('click', function() {
    this.classList.toggle('active');
    this.querySelector('i').classList.toggle('far');
    this.querySelector('i').classList.toggle('fas');
});