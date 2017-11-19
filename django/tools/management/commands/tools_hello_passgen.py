from django.core.management.base import BaseCommand, CommandError
import passgen

class Command(BaseCommand):
    help = 'Hello passgen'

    def handle(self, *args, **options):
        self.stdout.write('hello')
        self.stdout.write(passgen.passgen())
