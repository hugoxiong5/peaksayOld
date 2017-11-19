from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.views import generic
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Line, Dialogue
from .serializers import DialogueModelSerializer, DialogueDetailModelSerializer

@csrf_exempt
def dialogue_list(request):
    if request.method == 'GET':
        dialogues = Dialogue.objects.all()
        serializer = DialogueModelSerializer(dialogues, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def dialogue_detail(request, pk):
    try:
        dialogue = Dialogue.objects.get(pk=pk)
    except Dialogue.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = DialogueDetailModelSerializer(dialogue)
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors, status=400)

