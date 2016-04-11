title: O que é uma imagem e o que é um container Docker?
date: 2016-04-10 08:03:47
tags:
	- docker
	- virtualização
	- ambiente
	- devops
description: O que é uma imagem e o que é um container Docker? Uma breve explicação sobre esses dois termos que podem confundir um iniciante e uma introdução sobre o Docker Hub.
---

Se você viu a primeira parte dessa sequência de artigos, percebeu que existem dois termos muito utilizados quando falamos de Docker: **Imagens** e **Containers**. Você deve se perguntar: qual é a diferença entre imagem e container Docker? Ou então: O que eu rodo com o `docker run`, uma imagem ou um container? <!--more-->

Se você não viu o primeiro artigo, da uma olhada [aqui](/posts/uma-rapida-introducao-ao-docker-e-instalacao-no-ubuntu/).

## O que são Imagens Docker?

Pense nas imagens Docker como uma [Base Box do Vagrant](/posts/criar-uma-base-box-para-o-vagrant/).

Ela é o template (imagine uma classe em OOP) para rodar um container.

Você precisa baixar as imagens para rodar os containers ou pegar de algum lugar (como passar de um PC pro outro pelo Pen Drive, por exemplo) e telas em seu repositório local para que o Docker utilize para criar um container quando você roda o `docker run...`.

As imagens Docker ficam armazenadas no [Docker Hub](https://hub.docker.com/) e, para baixar uma, funciona igualzinho utilizar o Git com Github.

## Baixando e utilizando uma Imagem Docker

Para baixar uma imagem (vamos utilizar o exemplo da imagem do Ubuntu), utilize o comando:

```
docker pull ubuntu
```

Você pode listar as imagens baixadas em seu PC com o comando:

```
docker images
```

E usar a imagem para subir um container:

```
docker run ubuntu
```

Esse comando vai usar a **imagem** *ubuntu*, que você baixou em seu PC, para criar um novo Container.

Caso a imagem não exista no seu PC, o Docker vai baixar do Docker Hub e subir esse container automaticamente.

Poderia ser de outro local, também, mas vamos falar primeiro do Docker Hub.

Você também pode remover imagens locais com o comando:

```
docker rmi ID_ou_nome_da_imagem
```

## Pesquisando por uma Imagem Docker

Você pode pesquisar imagens no Docker Hub direto do Terminal usando o comando `search`:

```
docker search ubuntu
```

Todas as imagens com o nome ubuntu no meio irão aparecer no seu terminal para escolher alguma para baixar. Recomendo que olhe no site para ver se tem mais informações.

Você também pode criar sua própria imagem e distribuir no Docker Hub ou em outro local, mas vou falar mais sobre isso nos próximos posts. ;P

## Docker Hub

O Docker Hub é parecido com o nosso querido [GitHub](https://github.com/), porém somente de imagens Docker.

Existem várias imagens prontas com serviços mais utilizados pra você só baixar e usar, mas recomendo que aprenda a criar uma e bagunce um pouco antes de baixar alguma pronta.

Vale a pena brincar um pouco com a criação e utilização de imagens no Docker, é algo tão simples que é divertido. Vale o aprendizado.

Uma boa maneira de conhecer o Docker Hub é com [esse overview](https://docs.docker.com/docker-hub/overview/), do próprio site.

## Como diferenciar uma imagem oficial de uma imagem não oficial?

Algumas imagens são criadas por empresas ou organizações (ou alguém que mande em um projeto que você esteja utilizando agora) e são mantidas por elas, essas são imagens oficiais. As não oficiais são as que usuários comuns (eu e você, reles mortais) sobem para o repositóro.

Então como sabemos qual é uma imagem oficial?

É bem simples. Observando a URL do Docker Hub, você percebe que a imagem do NGINX está no repositório:

```
https://hub.docker.com/_/nginx/
```
E a do Ubuntu em:

```
https://hub.docker.com/_/ubuntu/
```

E mais esse exemplo do MySQL:

```
https://hub.docker.com/_/mysql/
```

Percebe um padrão?

As imagens em `https://hub.docker.com/_/imagem` são as oficiais.

As não oficiais vem com o padrão `usuario/imagem`, sem esse `/_/`.

## Containers

O Container é uma instância de uma Imagem em execução naquele momento.

Imagine baixar a imagem do Ubuntu.

```
docker pull ubuntu
```

E depois executar um:

```
docker run ubuntu
```

Com isso você está instanciando um Container que usa como template a imagem do Ubuntu, baixada no primeiro comando.

Você pode listar os Containers em execução com o comando:

```
docker ps -a
```

![docker ps -a](../../public/images/docker_ps_a.png)

Ou somente o ID do Container do topo da lista com:

```
docker ps -qa
```

![docker ps -qa](../../public/images/docker_ps_qa.png)

Pode, também remover um Container com o:

```
Docker rm ID_ou_apelido_do_container
```

Ficou claro quem é quem?

Caso ainda possua dúvidas ou alguma dica, comenta aqui em baixo.

Espalhe a palavra.
