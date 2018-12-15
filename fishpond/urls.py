from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='fishpond-home'),
    path('setting/', views.setting, name='fishpond-setting'),
    path('dash/',views.dash,name='fishpond-dash'),
]