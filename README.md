# Filas Bull Nodejs

Exemplo de aplicação para gerenciamento de filas.

# Pré-requisitos

* Estar usando sistema Linux ou que suporte interações via `sh`.
* Criar conta no [mailtrap.io](mailtrap.io) para testes.
* Possuir o `nodejs` instalado
* Possuir `Docker` instalado para subir o `Redis`

# Setup

Criar o arquivo `nodemon.json` na raiz do projeto, executando o comando abaixo:

```sh
touch nodemon.json
echo '{
    "env": {
        "MAIL_HOST":"smtp.mailtrap.io",
        "MAIL_PORT":2525,
        "MAIL_USER":"xxxxxxxxxxxxxx",
        "MAIL_PASS":"yyyyyyyyyyyyyy",
        "PORT":8888,
        "REDIS_HOST":"localhost",
        "REDIS_PORT":6379
    }
}' >> nodemon.json
```

Para subir o redis, executar o seguinte comando:

```sh
$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

# Execução

Para executar todos os serviços:

```sh
$ npm run dev
```
Para executar cada serviço separadamente:

```sh
npm run dev:queue
npm run dev:server
```
