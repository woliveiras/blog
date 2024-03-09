---
title: Instalação do ambiente LAMP
category: Infraestrutura
tags:
  - infraestrutura
  - linux
  - php
publishDate: '2014-11-10'
excerpt: Instalação do LAMP (Linux, Apache, MySQL e PHP)
---

Apesar de muita gente estar migrando para o [Nginx](https://pt.wikipedia.org/wiki/Nginx 'Nginx'), muitos começam os estudos em PHP usando [Apache](https://pt.wikipedia.org/wiki/Servidor_Apache 'Apache'), [MySQL](https://pt.wikipedia.org/wiki/MySQL 'MySQL') e [Linux](https://pt.wikipedia.org/wiki/Linux 'Linux') no servidor de hospedagem ou localmente - Se você é usuário Windows, eu recomendo fortemente a utilização do [Vagrant](https://woliveiras.com.br/tags/Vagrant/ 'Crie e compartilhe ambientes com o Vagrant (Instalação)') para que você use o Linux em uma VM e aprenda um pouco sobre o S.O. durante seus estudos. Isso fará diferença para você conhecer melhor seu próprio servidor de Hospedagem, já que a maioria é Linux.

Esse conjunto de itens é que recebe o nome de LAMP (**L** inux, **A** pache, **M** ySQL e **P** HP).

Para esse tutorial eu estou utilizando um servidor [Ubuntu Server](https://www.ubuntu.com/download/server 'Ubuntu Server'), portanto os comandos utilizados aqui servirão muito bem para você no Ubuntu ou no Debian e qualquer outro S.O. baseado no Debian.

Antes de tudo, atualize seu repositório executando o comando:

```sh
sudo apt-get update
```

No Debian, você pode ter alguma dificuldade com pacotes durante a instalação do PHP. Se isso acontecer atualize seu sources.list e nesse caso é melhor você pesquisar um padrão no Google, pois eu poderia passar algum link desatualizado dependendo da data em que você está lendo essa postagem. Basta pesquisar: sources.list Debian e já era! ;)

## <a name='InstalaodoMySQL'></a>Instalação do MySQL

Abra seu terminal e execute o seguinte comando:

```sh
sudo apt-get install mysql-client mysql-server mysql-common
```

Siga as telas que lhe surgirão. Durante a instalação será solicitado uma senha para o Usuário root. Se for uma instalação local, não precisa esquentar a cabeça com uma senha difícil, se for uma instalação remota, coloca uma senha boa ai mermão!!!

## <a name='InstalaodoApache'></a>Instalação do Apache

Abra seu terminal e execute o seguinte comando:

```sh
sudo apt-get install -y apache2
```

Simples né? ;D

## <a name='InstalaodoPHP'></a>Instalação do PHP

Esse comando é grandinho por que possui algumas bibliotecas que eu uso para desenvolvimento com base no que eu já usei até hoje, portanto se você ver alguma que não deseja utilizar, basta remover dessa linha e executar.

```sh
sudo apt-get install -y php5 libapache2-mod-php5 php5-common php5-curl php5-dev php5-gd php5-idn
php-pear php5-imagick php5-imap php5-json php5-mcrypt php5-memcache php5-mhash php5-ming
php5-mysql php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl
```

Depois dessa instalação é necessário** reiniciar o Apache.** Execute o seguinte comando:

```sh
sudo /etc/init.d/apache2 restart
```

Alguns componentes importantes para seus estudos e para desenvolvimento também:

## <a name='XDebug'></a>XDebug

```sh
sudo apt-get install php5-xdebug
```

## <a name='PHPMyAdmin'></a>PHPMyAdmin

```sh
sudo apt-get install -y phpmyadmin
```

Se, depois desse passo a passo, você quiser conferir se o servidor está funcionando execute o comando:

```sh
netstat -tap
```

Surgirá uma saída parecida com essa no seu terminal:

```sh
tcp 0 0 *:mysql *:* LISTEN 3281/mysqld
```

Beleza chefe, tudo instalado e agora como eu crio aplicações dentro do meu ambiente LAMP?

Suas aplicações devem ficar dentro da pasta  /var/www/ e para criação de um banco de dados acesse localhost/phpmyadmin ou execute o MySQL via linha de comando. Pronto! Para acessar suas aplicações ou sites no navegador basta digitar localhost. Normalmente, o Apache estará configurado para acesso via porta 80 mesmo, caso você deseje utilizar outra porta basta editar o arquivo: `/etc/apache2/ports.conf`

E colocar a porta na linha Listen <porta>.

Depois configure o arquivo `/etc/apache2/sites-enabled/000-default`

Para o virtualhost que está executando:

```sh
<VirtualHost *:porta>
```

Faz um teste! Crie um arquivo na pasta /var/www com o seguinte conteúdo:

```php
<?php
phpinfo();
?>
```

E abra esse arquivo no seu navegador.

Qualquer dúvida ou dica, coloque aqui nos comentários.
