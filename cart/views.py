from django.shortcuts import render, redirect, get_object_or_404
from shop.models import Product
from .cart import Cart
from .forms import ProductQuantity
from django.views.decorators.http import require_POST

# Create your views here.
def cart(request):
    cart = Cart(request)
    
    return render(request, 'cart.html', {'cart': cart,})


@require_POST
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)

    if request.method == 'POST':
        quantity = int(request.POST.get('quantity', 1))  # Get quantity from form       
        cart.add(product, quantity=quantity)
        
    return redirect('cart:cart')

@require_POST
def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id = product_id)
    cart.remove(product)
    return redirect('cart:cart')
