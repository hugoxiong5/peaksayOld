from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
import passgen
import uuid

class Command(BaseCommand):
    help = 'Create user with UUID4'

    def handle(self, *args, **options):
        id = uuid.uuid4()
        passwd = passgen.passgen()
        user, created =  User.objects.get_or_create(username='user-' + str(id),  email='user@example.com')
        user.set_password(passwd)
        user.save()
        self.stdout.write(user.get_username())
        self.stdout.write(passwd)
