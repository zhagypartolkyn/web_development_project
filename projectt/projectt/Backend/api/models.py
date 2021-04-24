from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title
        }

    def __str__(self):
        return f'{self.id}: {self.title}'

# class Ingredient(models.Model):
#     detail = models.CharField(max_length=500)
#     ingredients= models.CharField(max_length=500)
#     notes= models.CharField(max_length=500)

#     def to_json(self):
#         return {
#             'id':self.id,
#             'detail': self.detail,
#             'ingredients': self.ingredients,
#             'notes': self.notes
#         }

class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(default='')
    image = models.CharField(max_length=1000, default="1")
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='product')
    detail = models.CharField(max_length=500, default='')
    ingredients= models.CharField(max_length=500, default='')
    notes= models.CharField(max_length=500, default='')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.id}: {self.title}'





