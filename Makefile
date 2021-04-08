pull:
    git checkout -- ./; git pull;

install:
    make pull; npm i;

build:
    make pull; npm run build;

restart:
    pm2 restart 1

deploy:
    make build; make restart;
