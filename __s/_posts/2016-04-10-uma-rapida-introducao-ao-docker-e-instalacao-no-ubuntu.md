title: Uma rápida introdução ao Docker e instalação no Ubuntu
date: 2016-04-10 08:03:47
tags:
	- docker
	- virtualização
	- ambiente
	- devops
description: Uma rápida introdução ao Docker e instalação no Ubuntu para iniciantes. Dicas para não precisar de sudo ao executar o Docker e como iniciar o Docker junto com o Sistema Operacional.
---

<div class="shared-img">
![Docker](../../public/images/docker.png)
</div>Você já deve ter ouvido falar, pelo menos uma vez, sobre [Docker](https://www.docker.com/) em algum lugar. Seja em palestras, blogs, vídeos ou em qualquer outra fonte de estudos sobre desenvolvimento, uma hora sempre comentamos sobre virtualização de ambientes e o Docker é a ferramenta que mais tem se destacado para tal. Ele é uma das 8 maravilhas das atualidades mais atuais. Vamos entender um pouco, então, o que é o Docker e como instalar no nosso Ubuntu.<!--more-->

## Introdução

Eu também já ouvia falar do Docker a um bom tempo, porém nunca havia me aprofundado mais nessa ferramenta.

Depois do [Docker Birthday Party #3 Celebration + Training](http://www.meetup.com/pt-BR/Docker-Sao-Paulo/events/229053547/) eu decidi aprender um pouco mais e estou curtindo muito essa ferramenta!

Durante os estudos, vou postar minhas anotações e dicas aqui no Blog. Fica ligado pra não perder nada ein. ;)

Vamos partir do começo...

Caso você já conheça o Docker, pode pular direto para a [instalação no Ubuntu](#Instala_E7_E3o_no_Ubuntu).

## Pra que serve a virtualização de ambientes?

Primeiro vamos entender de que *ambiente* estamos falando.

O **ambiente** que estou falando, nesse momento, é a infraestrutura que vamos usar para se desenvolver nossa aplicação. Falo do Servidor Web (Apache, NGINX), Banco de Dados (MySQL, PostgreSQL), o interpretador da sua linguagem de programação (Python, Node, PHP) e libs que você possa utilizar para desenvolver (como Gems do Ruby, Bibliotecas Python/PHP, pacotes do Node) que instala direto no seu Sistema Operacional.

Normalmente instalamos tudo isso direto no nosso SO (Sistema Operacional) e isso pode acarretar em algum xabu mais pra frente como deixar nosso SO mais lento (digo MAIS por causa do Unity ;P) devido a quantidade de coisas que instalamos nele ou vai dar um trabalho lascado quando atualizar o SO ou formatar o PC e precisamos instalar e configurar tudo aquilo de novo. É um processo bem chato.

Uma alternativa é instalar o [VirtualBox](https://www.virtualbox.org/) e virtualizar nosso ambiente de desenvolvimento em uma [VM](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual). Isso isola a nossa aplicação dentro dessa VM e não precisamos instalar tudo no nosso SO principal. Caso precisemos formatar o nosso PC, basta exportar essa VM e deixar guardadinha, instalar o VirtualBox de novo e importar a VM. Pronto!

Menos trabalho e mais performance em nosso SO principal, né?

Sim, porém existem alternativas melhores.

## Vagrant

Por um bom tempo usei o [Vagrant](/posts/vagrant-introducao-instalacao/) que trabalha com a API do VirtualBox, porém é mais rápido e utiliza um [dot-file](https://en.wikipedia.org/wiki/Dot-file), o Vagrantfile, dentre outras alternativas, como [Puppet](https://puppet.com/) ou [Chef](https://www.chef.io/), para automatizar a instalação e configuração de tudo o que precisamos no nosso ambiente de desenvolvimento.

Para subir um ambiente completo, só precisamos do VirtualBox e Vagrant instalados na máquina e um Vagrantfile com as configurações que vamos precisar. Ao iniciar o nosso ambiente com o Vagrant tudo será instalado e configurado automaticamente.

Maravilhoso, certo?

Sim, mas ainda da para melhorar.

## Docker

O Vagrant inicia todo o Sistema Operacional, parecido com usar uma VM direto pelo VirtualBox, porém de uma maneira mais prática, rápida e automatizada. Só que isso acaba sendo um pouco ruim, pois o Hardware, Discos, Processador, Rede, etc, ainda será emulado dentro da VM. Isso vai pesar no nosso SO principal (o host) e pode até causar comportamento diferente para nossa aplicação dentro da VM e fora da VM devido ao host estar sobrecarregado. Para isso temos uma boa alternativa, o Docker!

Claro que da para evitar esse comportamento diferente, porém é mais trabalhoso do que com o Docker.

O Docker trabalha com containers. Imagine seu computador como um navio cargueiro carregando vários containers e cada container com suas mercadorias separadas. É o que conseguimos fazer com o Docker. Ele isola os processos e serviços, mas utiliza os recursos da máquina hospedeira. O Hardware não será emulado dentro de uma VM. Ele usa diretamente o Kernel e recursos do Host. Isso o torna mais leve, pois o Kernel já fez uma boa parte do trabalho.

## Introdução ao Docker

Se você nunca utilizou o Docker, uma excelente maneira de aprender e entender TUDO sobre essa ferramenta é assistindo a [série de vídeos](https://www.youtube.com/watch?v=0cDj7citEjE) do [Jeferson Fernando](https://twitter.com/badtux_) no seu canal [Linux Tips](https://www.youtube.com/channel/UCJnKVGmXRXrH49Tvrx5X0Sw). No canal dele ainda tem muitos vídeos maneiros sobre [Git](https://www.youtube.com/watch?v=_aj3hsEh9iw) e Linux. Vale a pena seguir ele acompanhar o que esse mano fala sobre Infraestrutura.

<iframe width="100%" height="473px" src="https://www.youtube.com/embed/0cDj7citEjE" frameborder="0" allowfullscreen></iframe>

## Instalação no Ubuntu

Primeiro você precisa possuir a versão do Kernel atualizada ou a 3.10. Para verificar qual a versão utilize o comando abaixo:

```
uname -r
```

Deve aparecer algo como:

```
3.19.0-51-generic
```

Atualize seu Sistema e instale as dependências  com os comandos:

```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
sudo apt-get install linux-image-extra-$(uname -r)
```

E adicione a GPG Key - se você não sabe o que é uma GPG, [clique aqui](https://pt.wikipedia.org/wiki/GNU_Privacy_Guard):

```
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```

Abra o arquivo `/etc/apt/sources.list.d/docker.list` ou, caso o mesmo não exista, crie ele com o comando:

```
sudo vi /etc/apt/sources.list.d/docker.list
```

Você pode usar o `gedit` no lugar do VI se preferir.

Apague o conteúdo desse arquivo.

Supondo que você esteja utilizando a versão 14.04 (LTS) do Ubuntu, cole o seguinte conteúdo:

```
deb https://apt.dockerproject.org/repo ubuntu-trusty main
```

Se for outra versão, verifique [aqui](https://docs.docker.com/engine/installation/linux/ubuntulinux/) o comando correto no item 7.

Agora vamos atualizar o Sistema novamente e remover qualquer instalação anterior do Docker:

```
sudo apt-get update
sudo apt-get purge lxc-docker
```

Agora sim, instale o Docker:

```
sudo apt-get install docker-engine
```

Para inicializar o Docker, usamos o comando:

```
sudo service docker start
```

Para verificar se está tudo rodando certinho, execute o container de *Hello World* do Docker:

```
sudo docker run hello-world
```

## Configurando para não precisar de sudo ao executar o Docker

Para não precisar usar o `sudo` sempre, execute o seguinte:

```
sudo usermod -aG docker $USER
```

*OBS: `$USER` é uma variável do Shell para o usuário logado, caso esteja configurando para outro usuário, deve colocar o nome dele no lugar disso.*

Agora você consegue executar:

```
docker run hello-world
```

E pronto! Instalado e configurado. Agora você já pode começar a usar o Docker.

Logo menos vou postar mais dicas sobre Docker. Fique ligado!

Compartilhe a palavra.

**Referências:**

- [Containers com Docker, do Desenvolvimento a Produção - Casa do Código](https://www.casadocodigo.com.br/products/livro-docker)
- [Documentação oficial do Docker](https://docs.docker.com/)
- [Mundo Docker](http://www.mundodocker.com.br/o-que-e-docker/)
- [Meetup Docker SP](http://www.meetup.com/pt-BR/docker-sao-paulo/)