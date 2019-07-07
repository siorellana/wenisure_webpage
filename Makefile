name="wenisure.com"
BUILDID=$(shell date +%Y%m%d-%H:%M:%S)

.PHONY: all run test stop help commit push

all: help

build: ## Compila el codigo y lo sube a Firebase
	@git add . && ng build && firebase deploy

deploy: test build commit push

run: ## Ejecuta servidor en puerto 4200
	@ng serve

test: ## Saluda a lo millenial
	@echo $(BUILDID)

verify: httpd/indedx.php
	@echo "[Info] PHP file exists"

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

commit: ## Realiza commit con variable de whatthecommit
	@git commit -m 'Se ha realizado nuevo build id: $(BUILDID)'

push: ## Realiza push a master
	@git push origin master