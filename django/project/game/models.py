from django.db import models

class Dialogue(models.Model):
    title = models.CharField(max_length=128)
    def __str__(self):
        return self.title

class Line(models.Model):
    dialogue = models.ForeignKey(Dialogue, related_name='lines', on_delete=models.CASCADE)
    text = models.CharField(max_length=256)
    def __str__(self):
        return self.text
    def __unicode__(self):
        return self.text
