from django.contrib import admin
from .models import Dialogue, Line

class Line(admin.TabularInline):
    model = Line
    extra = 10

class DialogueAdmin(admin.ModelAdmin):
    list_display = ('title',)
    list_filter = ['title']
    search_fields = ['title']
    fieldsets = [(None, {'fields': ['title']}),]
    inlines = [Line]

admin.site.register(Dialogue, DialogueAdmin)
