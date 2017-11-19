from django.core.management.base import BaseCommand, CommandError
from django.contrib.sites.models import Site

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('--name', help='Set site name')
        parser.add_argument('--domain', help='Set site domain')

    def handle(self, *args, **options):
        site = Site.objects.get_current()
        if options['name']:
            site.name = options['name']
        if options['domain']:
            site.domain= options['domain']
        site.save()
        self.stdout.write(site.name)
        self.stdout.write(site.domain)

