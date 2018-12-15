from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
import pyrebase
from django.contrib import auth
from django.contrib.auth import authenticate,login,logout

config = {
    'apiKey': "AIzaSyCb8xRzfsic8CRqdRr1FBdnSfPrnbg_nIc",
    'authDomain': "softdev18-a2b9c.firebaseapp.com",
    'databaseURL': "https://softdev18-a2b9c.firebaseio.com",
    'projectId': "softdev18-a2b9c",
    'storageBucket': "softdev18-a2b9c.appspot.com",
    'messagingSenderId': "1080121243011"
  }

firebase = pyrebase.initialize_app(config)

authe = firebase.auth()
database=firebase.database()
# Create your views here.
def home(request):
  return render(request,'fishpond/index.html')

def log_out(request):
  logout(request)
  return redirect('fishpond-home')

@login_required
def dash(request):
  return render(request, "fishpond/DashBoard.html")

@login_required
def setting(request):
  return render(request,'fishpond/setting.html')

