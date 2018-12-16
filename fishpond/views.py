from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
import pyrebase
from django.contrib import auth
from django.contrib.auth import authenticate,login,logout

config = {
    'apiKey': "AIzaSyAvymRwWy7fhc9cu40QdAeSgk209toOEuo",
    'authDomain': "test-82f89.firebaseapp.com",
    'databaseURL': "https://test-82f89.firebaseio.com",
    'projectId': "test-82f89",
    'storageBucket': "test-82f89.appspot.com",
    'messagingSenderId': "714335591195"
  }

firebase = pyrebase.initialize_app(config)

authe = firebase.auth()
db = firebase.database()
# Create your views here.
def home(request):
  return render(request,'fishpond/index.html')

def log_out(request):
  logout(request)
  return redirect('fishpond-home')

@login_required
def dash(request):
  user = authe.sign_in_with_email_and_password(request.user.email,request.user.password)
  return render(request, "fishpond/DashBoard.html")

@login_required
def setting(request):
  user = authe.sign_in_with_email_and_password(request.user.email,request.user.password)
  return render(request,'fishpond/setting.html')
@login_required
def post_settingtemp(request):
  mintemp = request.POST.get('mintemp')
  maxtemp = request.POST.get('maxtemp')
  db.child('user_change').child('maxtemp').push(maxtemp)
  db.child('user_change').child('mintemp').push(mintemp)
  return redirect('fishpond-setting')
@login_required
def post_settingDO(request):
  minDO = request.POST.get('minDO')
  maxDO = request.POST.get('maxDO')
  db.child('user_change').child('maxDO').push(maxDO)
  db.child('user_change').child('minDO').push(minDO)
  return redirect('fishpond-setting')