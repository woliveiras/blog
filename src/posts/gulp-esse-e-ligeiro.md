---
title: 'Gulp | Esse é ligeiro'
date: '2014-09-14'
tags:
  - ferramentas
  - frontend
  - javascript
description: Começando com Gulpjs
---

Você é preguiçoso que eu sei! Programadores são preguiçosos... - Nem vem com Mimimi, por que você é sim - É por ser preguiçoso que o programador cria soluções que automatizam as tarefas, algo para agilizar as coisas chatas e sobrar tempo para as coisas legais - Como brincar com uma [bolinha de papel](https://www.youtube.com/watch?v=wn0OlzoD0Xs "Bolinha de papel"). E foi pra automatizar tarefas que surgiu o [Grunt](https://gruntjs.com/ "Grunt").

Grunt? Não era Gulp?

## Automatização

Quem trabalha com infra ([Como eu trabalhava](https://woliveiras.com.br/voce-faz-o-que-voce-gosta/ "Você faz o que você gosta?")) deve saber que da pra automatizar muita coisa com Scripts, tanto com Shell Script quanto com Powershell - Famosos arquivos .sh ou .bat - E hoje isso está acontecendo, também, no Front End.

Algumas tarefas são essenciais para deixar sua aplicação melhor, como minificar o JS e CSS, fazer testes e verificar erros no código por exemplo e foi pra facilitar nossa vida que surgiu o Grunt. Com ele nós evitamos aqueles trampos repetitivos. É tipo o Rake no Ruby.

## Então pra que usar esse tal de Gulp se já tem o Grunt?

Por que o Gulp é mais rápido e mais fácil de ser configurado. O Grunt é da hora, porém o gulpfile, que é equivalente ao gruntfile, é mais fácil se você já conhece a sintaxe do Nodejs, por exemplo, vai entender o gulpfile com muito mais facilidade e o Gulp tem uma performance melhor.



## Instalação

Facinho! Se você tem o [Node.js instalado](https://woliveiras.com.br/node-js-instalacao/ "Um pouquinho de Node.js (Intro e Instalação)"), então execute o comando:

```bash
npm install -g gulp
```

Porém essa só é a instalação do CLI do Gulp pra que o mesmo possa ser executado pela linha de comando via terminal. Quando for usar o Gulp no projeto, você deve rodar esse comando de novo dentro do repositório:

```bash
npm install gulp
```

Para facilitar, na hora em que for instalar plug-ins no repositório do seu projeto, instale tudo de uma vez, por exemplo:

```bash
npm install gulp gulp-jshint gulp-uglify
```

## Utilizando

Você deve criar o gulpfile dentro do repositório do seu projeto, parecido como bower.json, porém você irá salvar o arquivo com a extensão **.js**. Olha só um gulpfile basicão:

```javascript
var gulp = require('gulp');

gulp.task('default', function () {

// place code for your default task here

});
```

Aqui já da pra entender mais ou menos né?

Com o gulpfile.js dentro do repositório é só rodar o comando e as tarefas que estiverem na listinha serão executadas. Maneiro né?

Se você quiser rodar uma task específica no lugar de rodar tudo o que estiver no arquivo basta rodar gulp e o nome da task.

## Mas não pare por aqui, vale a pena dar uma conferida nessa outra dica

O Gulp possui algumas tarefas básicas que precisamos entender, e elas estão [aqui](https://github.com/gulpjs/gulp/blob/master/docs/API.md).

Depois de entender isso é só dar uma pesquisada na forma em que outras pessoas estão usando o Gulp para agilizar. Por exemplo:

Se eu quiser saber algum plugin para minificar os arquivos basta pesquisar no Google:
> “minificar arquivos gulp”

Com o tempo você vai conhecer muitos plugins maneiros e deixar do seu jeito o seu arquivo gulpfile.js. ;)
