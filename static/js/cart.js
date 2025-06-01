// Cart Quantity Controls
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if (button.classList.contains('minus') {
            value = value > 1 ? value - 1 : 1;
        } else if (button.classList.contains('plus')) {
            value = value + 1;
        }

        input.value = value;
        updateCartItem(button.closest('.cart-item'));
    });
});

// Quantity Input Change
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', () => {
        if (input.value < 1) input.value = 1;
        updateCartItem(input.closest('.cart-item'));
    });
});

// Remove Item
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Remove this item from your cart?')) {
            button.closest('.cart-item').remove();
            updateCartSummary();
        }
    });
});

// Update Item Total
function updateCartItem(item) {
    const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
    const quantity = parseInt(item.querySelector('.quantity-input').value);
    const total = (price * quantity).toFixed(2);
    item.querySelector('.item-total').textContent = `$${total}`;
    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    let subtotal = 0;
    let itemCount = 0;

    document.querySelectorAll('.cart-item').forEach(item => {
        subtotal += parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));
        itemCount += parseInt(item.querySelector('.quantity-input').value);
    });

    const shipping = 9.99;
    const tax = (subtotal * 0.08).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(shipping) + parseFloat(tax)).toFixed(2);

    // Update summary
    document.querySelector('.summary-row:nth-child(1) span:last-child').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.summary-row:nth-child(1) span:first-child').textContent = `Subtotal (${itemCount} ${itemCount === 1 ? 'item' : 'items'})`;
    document.querySelector('.summary-row:nth-child(3) span:last-child').textContent = `$${tax}`;
    document.querySelector('.summary-row.total span:last-child').textContent = `$${total}`;

    // Update cart count in navbar
    document.querySelector('.cart-count').textContent = itemCount;
}

// Initialize
updateCartSummary();