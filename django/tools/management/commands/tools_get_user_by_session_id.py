from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

class Command(BaseCommand):
    help = 'Get user by session_id'

    def add_arguments(self, parser):
        parser.add_argument('id', nargs='+')

    def handle(self, *args, **options):
        id = options['id'][0]
        try:
            session = Session.objects.get(session_key = id)
            user_id = session.get_decoded().get('_auth_user_id')
            if user_id :
                user = User.objects.get(pk = user_id)
                self.stdout.write('username = ' + user.get_username())
                self.stdout.write('id = ' + user_id)
        except:
            self.stdout.write('could not find user')

