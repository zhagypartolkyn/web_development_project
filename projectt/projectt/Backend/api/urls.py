from django.urls import path
from api.views import CategoryListAPIView, CategoryDetailAPIView, ProductListAPIView, ProductDetailAPIView, CategoryProductsAPIView 
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    #path('categories/', category_list),
    #path('categories/<int:category_id>/', category_detail),
    #path('product/', product_list),
    #path('product/<int:product_id>/', product_detail),    
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:pk>/product', CategoryProductsAPIView.as_view()),
    path('categories/<int:pk>/product/<int:pk2>/', CategoryProductsAPIView.as_view()),
    path('product/',  ProductListAPIView.as_view()),
    path('product/<int:pk>', ProductDetailAPIView.as_view()),    
    path('login/', obtain_jwt_token),
]

