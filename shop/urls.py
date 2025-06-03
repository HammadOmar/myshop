from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('about/', views.about_us, name='about'),
    path('contact/', views.contact, name='contact'),
    path('<int:product_id>/<slug:slug>', views.product_detail, name='product_detail'),
]