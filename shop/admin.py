from django.contrib import admin
from .models import Category, Product, Team

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'created',]
    prepopulated_fields = {'slug': ('name',)}
    raw_id_fields = ('category',)

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ['name', 'designation']