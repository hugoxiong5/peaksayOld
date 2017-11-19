from django.urls import path
from . import views

app_name = 'game'
urlpatterns = [
    path('api', views.dialogue_list),
    path('api/<int:pk>/', views.dialogue_detail),
]
