from rest_framework.decorators import api_view

from api.models import Product
from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer2(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)
    if request.method =='GET':
        serializer = CategorySerializer2(category)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer = CategorySerializer2(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return Response({'message': 'deleted'}, status =200)