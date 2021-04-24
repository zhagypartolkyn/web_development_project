from rest_framework import serializers

from api.models import Category, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(title=validated_data.get('title'))
        return category

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title')
        instance.save()
        return instance


class CategorySerializer2(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(many = True, read_only=True)
    #StringReleated 
    class Meta:
        model= Category
        fields = ('id','title','product')

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'image', 'category','detail', 'ingredients', 'notes', 'is_active')    


# class IngredinetSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Ingredient
#         fields = ('id', 'detail', 'ingredients', 'notes')    



        


