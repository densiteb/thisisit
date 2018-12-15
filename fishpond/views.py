from django.shortcuts import render
from django.contrib.auth.decorators import login_required
import pyrebase
from django.contrib import auth

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

def dash(request):
  email=request.POST.get('email')
  passw = request.POST.get("pass")
  try:
    user = authe.sign_in_with_email_and_password(email,passw)
  except:
    message="invalid credentials"
    return render(request,"fishpond/index.html",{"messg":message})
  print(user['idToken'])
  session_id=user['idToken']
  request.session['uid']=str(session_id)
  return render(request, "fishpond/DashBoard.html",{"e":email})

def setting(request):
  return render(request,'fishpond/setting.html')

def logout(request):
  auth.logout(request)
  return render(request,'fishpond/index.html')