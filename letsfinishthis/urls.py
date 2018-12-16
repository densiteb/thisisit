"""letsfinishthis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from fishpond import views as fishpond_views
from django.contrib.auth import views as auth_views
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',auth_views.LoginView.as_view(template_name='fishpond/index.html'),name='fishpond-home'),
    path('logout/',fishpond_views.log_out,name='fishpond-logout'),
    path('setting/',fishpond_views.setting,name='fishpond-setting'),
    path('dash/',fishpond_views.dash,name='fishpond-dash'),
    path('post_settingtemp/',fishpond_views.post_settingtemp,name='fishpond-postsettemp'),
    path('post_settingDO/',fishpond_views.post_settingDO,name='fishpond-postsetDO'),
]
