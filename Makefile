# .host and .pem file should NEVER be committed to VCS

HOST	:= `head -1 .host`

ssh:
	ssh -i .pem root@$(HOST)

upload:
	scp -i .pem -r react/game/src/* root@$(HOST):/peaksay/react/game/src/
	scp -i .pem -r react/game/build/* root@$(HOST):/peaksay/react/game/build/
	scp -i .pem -r react/game/build/* root@$(HOST):/peaksay/www/

download:
	scp -i .pem -r root@$(HOST):/peaksay/django .
	scp -i .pem -r root@$(HOST):/etc/nginx/sites-available  .
