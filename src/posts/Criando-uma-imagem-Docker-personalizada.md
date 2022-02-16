---
title: Criando uma imagem Docker personalizada
tags:
  - docker
  - infraestrutura
  - linux
date: '2016-04-11'
description: Criando uma imagem Docker personalizada e conhecendo o Dockerfile.
---

<!-- vscode-markdown-toc -->
* [Dockerfile](#Dockerfile)
* [Exemplo de Dockerfile e configuração de um Web Server no Ubuntu](#ExemplodeDockerfileeconfiguraodeumWebServernoUbuntu)
* [Imagem base](#Imagembase)
* [Mantenedor da imagem](#Mantenedordaimagem)
* [Executando comandos no container](#Executandocomandosnocontainer)
* [Adicionando arquivos de configuração no container](#Adicionandoarquivosdeconfiguraonocontainer)
* [Monitorando os logs do container](#Monitorandooslogsdocontainer)
* [Expondo portas do container](#Expondoportasdocontainer)
* [Como gerar a nova imagem](#Comogeraranovaimagem)
* [Exportando a imagem para .tar](#Exportandoaimagempara.tar)
* [Importando a imagem de um .tar](#Importandoaimagemdeum.tar)
* [Subindo a imagem para o Docker Hub](#SubindoaimagemparaoDockerHub)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

É muito legal poder baixar uma imagem do [Docker Hub](https://hub.docker.com/) e já sair criando os containers, modificando e brincando, mas e depois?

Como fazemos para levar essa imagem para outro host?

Podemos fazer isso subindo a imagem para o Docker Hub ou mesmo compactando a imagem em formato .tar.

Para criar uma imagem personalizada, primeiro precisamos conhecer o Dockerfile, depois voltamos a criação da imagem própriamente dita. ;)

## <a name='Dockerfile'></a>Dockerfile

Já vimos que podemos utilizar a linha de [comando para inicializar um Docker container](/posts/comandos-mais-utilizados-no-docker) com um parâmetro que é o comando a ser executado direto no container para inicializar algum serviço, trazer alguma informação sobre o container em execução, etc.

Ex.:

Executando um container do [NGINX](https://www.nginx.com/) com o comando para startar o Web Server:

```bash
docker run -d -p 8080:80 nginx /usr/sbin/nginx -g "daemon off;"
```

Com esse comando vamos criar o container com a imagem do `nginx` passando os parâmetros para inicializar o servidor e listar a porta 80 do container na 8080 do nosso host.

Agora, imagine utilizar essa linha inteira para esse serviço e/ou outros mais que possam ser executados como um MySQL, Redis, MongoDB, etc.

Isso pode ser bem pouco produtivo.

A maneira de automatizar essas tarefas é utilizando um Dockerfile para passar os parâmetros e configurações para a imagem.

Dockerfile é o arquivo de configuração do Docker, parecido com o Vagrantfile como já citei no [post anterior](/posts/uma-rapida-introducao-ao-docker-e-instalacao-no-ubuntu/).

Ao contrário do Vagrantfile, nós só precisamos do Dockerfile para cirar a imagem, fazer o build e, depois de gerada com as configurações passadas, basta usar a imagem. Não vamos mais precisar do Dockerfile no mesmo diretório da nossa aplicação.

Os comandos no Dockerfile são iguais utilizar Shell Script.

## <a name='ExemplodeDockerfileeconfiguraodeumWebServernoUbuntu'></a>Exemplo de Dockerfile e configuração de um Web Server no Ubuntu

Imagine o seguinte cenário:

Você vai subir um container com a imagem do Ubuntu e instalar e configurar o Servidor Web NGINX.

Nosso Dockerfile pode ficar assim:

```bash
FROM ubuntu

MAINTAINER William de Oliveira Souza <w.oliveira542@gmail.com>

RUN apt-get update

RUN apt-get install -y nginx && apt-get clean

ADD ./configs/nginx.conf /etc/nginx/sites-enabled/default

RUN ln -sf /dev/stdout /var/log/nginx/access.log

RUN ln -sf /dev/stderr /var/log/nginx/error.log

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT [“/usr/sbin/nginx”]

CMD [“start”, “-g”]
```

Onde:

## <a name='Imagembase'></a>Imagem base

O parâmetro `FROM` é a imagem que você vai usar como base para a criação de sua nova imagem.

Você pode usar o nome da imagem, como no exemplo:

```bash
FROM ubuntu
```

Ou com com a tag específica:

```bash
FROM ubuntu:latest
```

## <a name='Mantenedordaimagem'></a>Mantenedor da imagem

É a pessoa, empresa ou org que mantém essa imagem.

Quando você criar sua própria imagem para subir no Docker Hub, vai precisar deixar isso como seu contato para o mundo.

```bash
MAINTAINER William de Oliveira Souza <w.oliveira542@gmail.com>
```

## <a name='Executandocomandosnocontainer'></a>Executando comandos no container

Agora as coisas legais.

O comando `RUN` serve para executar comandos dentro do seu container, assim que você criar ele.

No exemplo, estou atualizando o sistema, instalando o NGINX e depois removendo os pacotes que o sistema não vai precisar (para deixar a imagem mais limpa).

```bash
RUN apt-get update

RUN apt-get install -y nginx && apt-get clean
```

Outra forma de executar comandos via Dockerfile é vista mais abaixo, o `ENTRYPOINT` junto com o `CMD`

```bash
ENTRYPOINT [“/usr/sbin/nginx”]

CMD [“start”, “-g”]
```

Aqui estamos inicializando nosso Web Server.

O **ENTRYPOINT** é quem vai receber os comandos passados pelo **CMD**. Caso não use o ENTRYPOINT, pode-se passar os comandos somente com o **CMD**:

```bash
CMD service nginx start -g
```



## <a name='Adicionandoarquivosdeconfiguraonocontainer'></a>Adicionando arquivos de configuração no container

Para melhorar a organização, podemos deixar arquivos de configuração dos serviços (Web Server, Banco de Dados, Interpretador, etc) em locais separados.

No exemplo eu usei o arquivo `configs/nginx.conf`, que será copiado para dentro do container no diretório `/etc/nginx/sites-enabled/`, com o nome de `default`.

```bash
ADD ./configs/nginx.conf /etc/nginx/sites-enabled/default
```

O conteúdo do arquivo `nginx.conf` é o seguinte:

```php
server {
    listen 8080 default_server;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html index.htm;
}
```

Só uma configuração basica para o NGINX.

## <a name='Monitorandooslogsdocontainer'></a>Monitorando os logs do container

Algo interessante que podemos fazer com o Docker é monitorar os logs de uma maneira mais prática. O Docker pega os logs em `stdout` e `stderr`. Podemos capturar esses logs e ver de maneira mais rápida (do que entrar pelo container) pelo comando `docker logs`.

E para deixar isso automático na nossa imagem, deixamos as seguintes linhas no Dockerfile:

```bash
RUN ln -sf /dev/stdout /var/log/nginx/access.log

RUN ln -sf /dev/stderr /var/log/nginx/error.log
```

Nesse caso, estamos capturando os logs do NGINX.

Depois que o container estiver ativo, podemos usar o comando `docker logs id_ou_apelido_do_container`.

## <a name='Expondoportasdocontainer'></a>Expondo portas do container

Para expor a porta que o nosso Web Server vai utilizar, usamos o parâmetro `EXPOSE` com o número da porta:

```bash
EXPOSE 8080
```

Aqui é bem simples, ele vai expor a porta `8080`.

Para saber qual porta o host está utilizando como ponte para acesso a porta do container, podemos procurar com o comando:

```bash
docker port id_ou_apelido_do_container
```

Ou usar um:

```bash
docker inspect id_ou_apelido_do_container
```

Na [documentação oficial do Docker](https://docs.docker.com/engine/reference/builder/) você encontrará outras informações legais sobre os comandos que podem ser executados no Dockerfile.

## <a name='Comogeraranovaimagem'></a>Como gerar a nova imagem

Com nosso arquivo Dockfile configurado, podemos gerar nossa nova imagem.

Para tal, execute o comando `build`:

```bash
docker build -t woliveiras/nginx .
```

O comando `build`, como o nome diz, é responsável por executar o build da imagem. Com isso vamos criar uma nova imagem com as configurações do nosso Dockerfile.

O `-t` é um parâmetro para informar que a imagem pertence ao meu usuário.

Em seguida vem o nome da imagem. Aqui coloquei como `woliveiras/nginx` para ficar fácil de localizar no Docker Hub.

Depois vem o "**.**"" que significa o diretório corrente, pois eu executei o comando build dentro da pasta onde se encontra meu Dockerfile (para facilitar a vida).

Basta aguardar o processo de build, que pode demorar dependendo de sua conexão, quantos programas você colocou para instalar, etc.

Finalizado o processo, você pode ver sua nova imagem com o comando `docker images`.

## <a name='Exportandoaimagempara.tar'></a>Exportando a imagem para .tar

Você pode querer, agora, carregar essa imagem em um Pen Drive.

Para isso, utilize o comando `save`:

```bash
docker save woliveiras/nginx > /tmp/meu_web_server.tar
```

Você deve passar o ID da imagem ou o nome.

O Docker vai exportar a imagem e compactar em formato .tar.

Agora você pode carregar por Pen Drive, subir em algum lugar para um amigo baixar (ou você mesmo), etc.

## <a name='Importandoaimagemdeum.tar'></a>Importando a imagem de um .tar

Como importar essa imagem gerada via comando `save`?

Usando o comando `load`.

```bash
docker load < /tmp/meu_web_server.tar
```

O Docker vai importar sua imagem com o nome, tag, etc, que a imagem já possuia antes, não com o nome do arquivo gerado.

Para ver se deu tudo certo, basta rodar o `docker images` também.

## <a name='SubindoaimagemparaoDockerHub'></a>Subindo a imagem para o Docker Hub

Para subir uma imagem para o Docker Hub, primeiro precisará de uma conta no [site](https://hub.docker.com/). Caso não possua, não precisa entrar no site agora (calma apressado(a)), durante o Login, é criado sua conta via Terminal mesmo.

Faça login com sua conta no Terminal usando o comando `docker login`:

```bash
docker login
```

Para subir a imagem, basta fazer um `push`, parecido com o nosso querido [Git](https://git-scm.com/).

```bash
docker push nome_da_imagem
```

Ex.:

```bash
docker push woliveiras/nginx
```

Essa imagem, de exemplo, você pode ver nesse link do [Docker Hub](https://hub.docker.com/r/woliveiras/nginx/) e os arquivos de configuração do exemplo (Dockerfile e nginx.conf) [nesse repositório](https://github.com/woliveiras/docker-example/).

Gostou desse artigo? Comente aqui em baixo, compartilhe nas redes sociais, com o amigo, chefe, com o irmão, com o cachorro, gato, papagaio...

Espalhe a palavra.
