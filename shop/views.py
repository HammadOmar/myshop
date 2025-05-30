from django.shortcuts import render, HttpResponse, get_object_or_404
from django.urls import reverse
from .models import Product, Category, Team

# Create your views here.

def home(request):
    products = Product.objects.all().order_by('id')[:4]
    return render(request, 'index.html', {'products': products})
    
def product_list(request):
    products = Product.objects.all()
    return render(request, 'products.html', {'products': products})

def about_us(request):
    team = Team.objects.all
    return render(request, 'about.html', {'team': team})

def contact(request):
    return render(request, 'contact.html', {})

def product_detail(request, product_id,slug):
    product = get_object_or_404(Product, id = product_id, slug = slug)
    
    return render(request, 'product_detail.html', {'product':product})