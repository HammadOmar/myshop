// static/js/filter.js
function filterProducts() {
    const selectedCategory = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.dataset.category;
        
        // Show/hide based on selection
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            product.style.display = 'block';  // Show matching products
        } else {
            product.style.display = 'none';   // Hide others
        }
    });
}