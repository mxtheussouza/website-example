ENVIRONMENT_FILE=.env

default: run

run:
ifeq ($(wildcard $(ENVIRONMENT_FILE)),)
	- @echo O arquivo ".env" não existe;
else
	- docker-compose up -d --build
endif

start:
	- docker-compose start

stop:
	- docker-compose stop

restart:
	- docker-compose restart

status:
	- docker-compose ps

clean:
	- docker-compose down
	- docker rmi fourdev-nodejs
