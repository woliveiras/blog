---
layout: post
title: 'Olha o passarinho! (Falando sobre o Bower)'
tags:
  - frontend
  - ferramentas
categories: 
  - frontend
  - ferramentas
date: 2014-09-03 00:06:41
description: Instalação, configuração e utilização do Bower para instalar as dependências Front End do seu Projeto
---

O Bower facilitará sua vida gerenciando as dependências Front End do seu projeto de maneira prática e fácil.

Você deve usar algumas libs, frameworks como JQuery, AngularJS, Bootstrap e outros facilitadores para agilizar o processo de desenvolvimento né?
E para isso você entra no site de cada um, baixa e utiliza.
O Bower serve para facilitar isso.
Com ele, você cria um arquivo manifesto (no final do post entendemos o que é este arquivo) que vai automatizar essas tarefas.<!--more-->

![Bower]({{site.url}}/images/bower.png)

Se você já programou em Python, o Bower é parecido com o [PIP](https://en.wikipedia.org/wiki/Pip_(package_manager)), se programou em Ruby é tipo o [Rubygems](https://en.wikipedia.org/wiki/RubyGems). -Outras linguagens também possuem gerenciadores de Dependências.

## Instalação

Você vai precisar do Nodejs instalado em sua máquina, se não possuir instale pelo [site](https://nodejs.org/en/) para seu Sistema operacional.

Se já tem o Node instalado, pode executar esse comando:

```shell
npm install -g bower
```

Basta esperar o NPM trabalhar.

## Configurando o projeto

Acesse a pasta do projeto e execute o comando:

```shell
bower init
```

Será necessário responder algumas perguntas e então será criado um arquivo com o nome bower.json no diretório. Algumas perguntas não te interessam se você não quiser compartilhar seu projeto como um novo componente, então é só pressionar o [Enter] que ele pula.
Esse arquivo servirá para armazenar quais dependências foram instaladas e será muito útil no futuro.

```shell
bower init

[?] name: Usando o Bower
[?] version: 0.0.0
[?] description: Este é só um exemplo
[?] main file:
[?] what types of modules does this package expose? amd, node, yui
[?] keywords:
[?] authors: woliveiras &lt;w.oliveira542@gmail.com&gt;
[?] license: MIT
[?] homepage: woliveiras.com.br
[?] set currently installed components as dependencies? Yes
[?] add commonly ignored files to ignore list? No
[?] would you like to mark this package as private which prevents it from being
[?] would you like to mark this package as private which prevents it from being
accidentally published to the registry? Yes
```

E o arquivo gerado será tipo isso:

```javascript
{
  name: 'Usando o Bower',
  version: '0.0.0',
  authors: [
  'woliveiras &lt;w.oliveira542@gmail.com&gt;'
  ],
  description: 'Este é só um exemplo',
  moduleType: [
  'amd',
  'node',
  'yui'
  ],
  license: 'MIT',
  homepage: 'woliveiras.com.br',
  private: true
}
```

## Instalando dependências

É só rodar o comando bower install e o nome da dependência.

Ex.:

```shell
bower install nome_da_dependencia
```
Após isso, é necessário atualizar o arquivo bower.json e acrescentar a dependência:

```shell
  [...conteúdo até aqui]

  "dependencies": {
    "nome_da_dependencia": "~2.1.1"
  }
```

**Para agilizar esse trampo**, quando for instalar a dependência, execute com o parâmetro **--save** no final do comando **bower install** e ele já vai adicionar a linha que você teria de escrever.
Sempre lembre-se desse parâmetro ou de adicionar a dependência no bower.json.

Por padrão o Bower vai instalar tudo em bower_components, dentro do seu projeto, mas se você quiser mudar é só criar um arquivo com o nome **.bowerrc** e adicionar esse conteúdo:

```shell
{
  "directory":"caminho que você deseja"
}
```

## Atualizar ou remover dependências

Para atualizar execute:

```shell
bower update - Vai atualizar todas as dependências
bower update nome_da_dependencia - Vai atualizar somente uma
```

Para remover:

```shell
bower uninstall nome_da_dependencia
```

**E se eu não souber o nome do pacote?**

Se você não souber o nome do pacote a instalar, use o comando bower search para verificar o nome correto do pacote.

```shell
bower search jquery
```

**Legal, mas e agora?**

Agora, quando você enviar seu projeto para alguém, ele só precisará acessar o diretório onde está o arquivo **bowe.json** e executar o comando **bower install** e pronto! Todos os pacotes que estão no arquivo serão baixados sem precisar fazer tudo de novo.

*Como você viu, os pacotes serão baixados dependendo somente do bower.json, então se enviar o bower_components ou o diretório que você escolheu para salvar as dependências junto com seu repositório, só irá gerar peso extra, cuidado. Se estiver usando o Git, configure esse diretório no .gitignore.* ;)

Gostou da dica? Então comenta aqui e compartilha! \o/

* [O que é um arquivo manifesto](http://en.wikipedia.org/wiki/Manifest_file)
