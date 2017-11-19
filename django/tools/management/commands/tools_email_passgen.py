import os
import passgen
from django.core.management.base import BaseCommand, CommandError
from django.core.mail import send_mail

class Command(BaseCommand):
    help = 'Email a password generated by passgen to the EMAIL_HOST_USER'
    def handle(self, *args, **options):
        passwd = passgen.passgen()
        send_mail( 
          'A password generated by passgen',
          passwd,
          os.environ['EMAIL_HOST_USER'],
          [os.environ['EMAIL_HOST_USER']],
          fail_silently=False,
       )
        self.stdout.write(passwd)