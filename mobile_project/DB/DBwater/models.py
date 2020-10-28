from django.db import models
from django.contrib.auth import get_user_model

user = get_user_model()


class User(user):
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=255)


class Order(models.Model):
    product_name = models.CharField(100)
    product_image = models.ImageField()
    product_size = models.TextField(255)
    price = models.TextField(5)






