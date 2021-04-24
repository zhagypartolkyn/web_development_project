from rest_framework.views import APIView

from api.models import Product
from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2
from rest_framework.response import Response
from django.shortcuts import Http404


class CategoryListAPIView(APIView):
    def get(self, request):        
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many = True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer2(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class CategoryDetailAPIView(APIView):
    def  get_object(self, pk):
        try:
            category = Category.objects.get(id=pk)
        except Category.DoesNotExist as e:
            raise Http404

    def get(self, request, pk = None):
        category = self.get_object(pk)
        serializer = CategorySerializer2(category)
        return Response(serializer.data)

    def put(self, request, pk = None):
        category = self.get_object(pk)
        serializer = CategorySerializer2(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request):
        category = self.get_object(pk)
        category.delete()
        return Response({'message': 'deleted'}, status =200)

