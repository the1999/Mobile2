from django.contrib import admin
from DBwater.models import User, Order

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass



