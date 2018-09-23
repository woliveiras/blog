---
layout: post
title: Corrigindo as permissões de usuário para o NPM no Linux
categories:
  - linux
  - nodejs
  - javascript
tags:
  - linux
  - nodejs
  - javascript
description: Se você já teve problemas para instalar pacotes com NPM no Linux, esse artigo vai te ajudar bastante!
date: 2015-09-12 10:00:00
---

Se você utiliza Linux e usa NPM para baixar pacotes Nodejs, provavelmente precisa utilizar o *sudo* para efetuar as instalações e digita sua senha a cada nova instalação. Porém tem uma forma mais fácil de se fazer isso. <!--more-->

A pasta /usr/local é onde ficam (normalmente) os programas em geral e os pacotes Globais do Node. :)

Para instalar algo ali dentro, o NPM precisa de permissão de usuário para essa pasta (assim como qualquer programa que você vá instalar em seu S.O.) e é por isso que toda vez que você tenta instalar algum pacote precisa digitar: `sudo npm i pacote`

Para corrigir isso vamos mudar as permissões do seu usuário para o diretório.

Começe executando o comando `npm config get prefix` para verificar se o prefixo está corretamente localizado em **/usr/local**.

Caso esteja corretamente localizado execute o comando:

```shell
sudo chown -R `whoami` /usr/local
```

Será solicitado a senha do sudo e em seguida o seu terminal ficará bloqueado até que termine a execução da ação.

Se você não quiser atribuir a permissão ao diretório completo, pode executar como:

```shell
sudo chown -R `whoami` /usr/local/lib/node_modules /usr/local/bin /usr/local/share
```

## Referência

* [Fixing NPM permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions "Fixing NPM permissions - npmjs.com")
