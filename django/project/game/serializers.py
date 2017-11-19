from rest_framework import serializers
from .models import Dialogue

class DialogueModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dialogue
        fields = ('id', 'title')

class DialogueDetailModelSerializer(serializers.ModelSerializer):
    lines = serializers.StringRelatedField(many=True)
    class Meta:
        model = Dialogue
        fields = ('id', 'title', 'lines')
