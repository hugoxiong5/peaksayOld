from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
import passgen

class Command(BaseCommand):
    help = 'Create or reset superuser'

    def handle(self, *args, **options):
        passwd = passgen.passgen()
        user, created =  User.objects.get_or_create(username='super',  email='super@example.com', is_staff = True, is_superuser = True)
        user.set_password(passwd)
        user.save()
        self.stdout.write('super')
        self.stdout.write(passwd)
