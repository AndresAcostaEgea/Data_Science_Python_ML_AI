from django.shortcuts import render
from . import machine_learning_model

def home(request):
    return render(request, "index.html")

def result(request):
    userInput = request.GET['userInput']
    userInput = machine_learning_model.multiplier(userInput)
    return render(request, "result.html", {'homeInput':userInput})

