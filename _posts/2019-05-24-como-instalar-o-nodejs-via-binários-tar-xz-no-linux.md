---
layout: post
title: Como instalar o Nodejs via binários (tar.xz) no Linux
date: 2019-05-24 08:59 -0300
categories:
    - linux
    - nodejs
    - javascript
image: "/images/posts/leone-venter-469710-unsplash-min.jpg"
tags:
    - linux
    - nodejs
    - javascript
description: Como instalar o Node.js através de um pacote tar.xz na maioria das distribuições Linux
---
Arquivos **.tar.xz** são extremamente comuns no mundo Linux. Mesmo depois da evolução da maneira como instalamos programas nas distribuições Linux mais famosas para o usuário final - ou pessoas que não querem ter muito trabalho com configuração do sistema operacional -, como o Ubuntu ou Linux Mint, ainda existem momentos em que só temos um .tar para instalar e não um .deb da vida (equivalente ao .exe no Windows ou .dmg no MacOS).

Com Node.js não é diferente. Temos a instalação via **apt**, um instalador de softwares para Linux, mas também temos a versão .tar.xz para os casos em que precisamos baixar os binários, como quando não temos internet para utilizar o apt.

A melhor maneira de instalar o Node.js é via NVM, o gerenciador de versões do Node, como você pode conferir [neste artigo](/posts/utilizando-versoes-antigas-do-nodejs/). Mas, sabendo que às vezes é necessário instalar direto dos binários, neste artigo vamos aprender a baixar e instalar o Node.js via .tar.xz no Linux.

<!-- vscode-markdown-toc -->
* [Baixando o Node.js tar.xz](#BaixandooNode.jstar.xz)
* [Extraindo e instalando os binários](#Extraindoeinstalandoosbinrios)
* [Conferindo a se deu tudo certo](#Conferindoasedeutudocerto)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Pacotes em um fundo branco" %}

## <a name='BaixandooNode.jstar.xz'></a>Baixando o Node.js tar.xz

Acesse o site do Node.js ([nodejs.org](https://nodejs.org)) e clique na versão que você deseja baixar, seja a LTS ou current.

## <a name='Extraindoeinstalandoosbinrios'></a>Extraindo e instalando os binários

Por padrão instalamos bibliotecas e algumas partes de softwares no diretório **/opt** do Linux. 

O arquivo que você baixou deve ter a seguinte nomenclatura: **node-vx.y.z-linux-x64.tar.xz**. Onde x.y.z é a versão do Node.js.

Para extrair o arquivo diretamente para o diretório /opt, execute o seguinte comando:

```shell
tar xf node-v*-linux-x64.tar.xz --directory /opt
```

Caso você não tenha permissão de acesso a esse diretório, você pode executar o seguinte comando:

```shell
sudo chmod -R 755 /opt
```

Agora será necessário adicionar as entradas para os comandos do Node.js funcionar no seu sistema operacional.

Abra o arquivo **.profile**, que está no seu diretório home. Neste exemplo vou utilizar o editor de textos [VS Code](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/#Instalandoumeditordetextoscomsyntaxhighlighting), mas você pode utilizar qualquer um que estiver disponível no sistema, como o Nano ou Vim.

Execute no terminal:

```shell
code ~/.profile
```

E adicione o seguinte texto no final do arquivo.

```shell
# NodeJS
export NODEJS_HOME=/opt/node-vx.y.z-linux-x64/bin
export PATH=$NODEJS_HOME:$PATH
```

**Onde x.y.z deve ser a versão que você acabou de extrair para o diretório /opt.**

Também será preciso adicionar as mesmas linhas no arquivo **.bashrc** ou no **.zshrc**, que também ficam no seu diretório home.

Será o mesmo processo:

Abrir o arquivo .bash ou .zshrc via editor de textos:

```shell
code ~/.bashrc
```

E adicione o conteúdo no final do arquivo.

```shell
# NodeJS
export NODEJS_HOME=/opt/node-vx.y.z-linux-x64/bin
export PATH=$NODEJS_HOME:$PATH
```

**Lembre-se de corrigir x.y.z para a versão que você acabou de extrair para o diretório /opt.**

Será necessário recarregar o arquivo .profile e o .bash/zshrc no seu terminal, para isso você pode fechar e abrir o terminal ou executar o seguinte comando:

```shell
. ~/.profile ~/.bashrc
```

Com isso temos uma instalação do Node.js via .tar.xz no Linux.

## <a name='Conferindoasedeutudocerto'></a>Conferindo a se deu tudo certo

Para verificar se o Node.js está corretamente instalado no seu sistema operacional, execute o seguinte comando no terminal:

```shell
node -v
```

Isso irá retornar a versão que você acabou de instalar.

## <a name='Referncias'></a>Referências

- [Install NodeJS via binary archive on Ubuntu 18.04](https://medium.com/@rabbi.cse.sust.bd/install-nodejs-via-binary-archive-on-ubuntu-18-04-63118473d9e9)
- [What is the difference between /opt and /usr/local?](https://unix.stackexchange.com/questions/11544/what-is-the-difference-between-opt-and-usr-local)
- [How do I install a .tar.gz (or .tar.bz2) file?](https://askubuntu.com/questions/25961/how-do-i-install-a-tar-gz-or-tar-bz2-file)

[Photo by Leone Venter on Unsplash](https://unsplash.com/photos/mTkXSSScrzw).