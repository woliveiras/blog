---
layout: post
title: Acompanhando alterações em arquivos JavaScript em uma pasta com Node.js e NPM
  Scripts
date: 2019-01-30 22:45 -0200
image: "/images/posts/nitish-meena-37745-unsplash.jpg"
categories:
    - nodejs
    - javascript
    - npm
tags:
    - nodejs
    - javascript
    - npm
description: Dica para quem quer testar features do JavaScript, estudar a linguagem ou algo do tipo utilizando o Node.js e não deseja rodar o mesmo comando toda hora no terminal para executar o script
---

Recentemente estava fazendo alguns experimentos com JavaScript e rodando via Node.js, porém toda vez que eu alterava o script, caia na tristeza de ter que mudar de tela para o Terminal e rodar novamente `node --experimental-modules index.mjs`, o que acaba sendo meio incômodo depois da 50 vez.

Pesquisando pela internet encontrei um pacote maneiro que nos ajuda nessa tarefa, o **watch**, de [Mikeal Rogers](https://twitter.com/mikeal) - para que não precisemos reescrever a roda criando o programa para fazer o watch do zero.

Para contextualizar melhor sobre o meu caso e você avaliar se esta solução se encaixa para suas necessidades, eu estava escrevendo módulos JavaScript e importando em um arquivo **index.mjs** (.mjs, pois eu estava utilizando ECMAScript Modules no Node.js sem utilizar um Babel da vida), então eu possuía a seguinte estrutura de arquivos:

```
.
├── index.mjs
└── queue.mjs
```

Onde **index.mjs** importa o **queue.mjs** ou outros arquivos que eu fosse criando.

Dentro do meu index.mjs havia um **console.log** ou mais para imprimir no terminal o resultado das minhas funções.

## Utilizando o watch para escutar alterações em uma pasta

Para executar o watch e “escutar” as alterações que fazemos em nossos arquivos será necessário instalar o pacote e então rodar ele no terminal ou criar uma rotina no nosso NPM Scripts.

{% include post_wallpaper.html %}

## Instalando o watch

Execute no terminal:

```shell
npm install watch
```

Caso vá utilizar o NPM Scripts, rode com **--save**.

```shell
npm install watch --save
```

Neste caso será necessário que você tenha o arquivo package.json em seu projeto, se não tiver execute um **npm init -y** antes do install.

## Utilizando o pacote watch

Para utilizar o watch basta rodar no terminal:

```shell
watch comando-que-sera-executado pasta
```

No meu exemplo seria:

```shell
watch 'node --experimental-modules index.mjs' ./
```

E toda vez que eu alterar um arquivo na pasta em que estou (./) o comando *node --experimental-modules index.mjs* será executado novamente.

Caso você não queira continuar rodando esse comando imenso toda vez, pode criar uma chave em seu package.json com esse comando inteiro, como por exemplo este caso utilizando a chave "start":

```json
{
  "scripts": {
    "start": "watch 'node --experimental-modules index.mjs' ./",
  },
  "dependencies": {
    "watch": "^1.0.2"
  }
}
```

Neste caso, toda vez que eu rodar o **npm start** o pacote watch ficará acompanhando as alterações e re-executando o comando para mim.

## Conclusão

Essa é uma dica rápida para quem quer testar features do JavaScript, quer estudar a linguagem ou algo do tipo utilizando o Node.js e não quiser ter que rodar o mesmo comando toda hora no terminal.

Eu rodei essa opção (utilizando um pacote NPM) para não instalar nada globalmente na minha máquina, como seria o caso de utilizar  nodemon, como já mostrei em outro artigo ([Facilitando o desenvolvimento Nodejs com Nodemon](https://woliveiras.com.br/posts/Facilitando-o-desenvolvimento-Nodejs-com-Nodemon/)).

Espero que te ajude!

## Referências

- [ECMAScript Modules](https://nodejs.org/api/esm.html)
- [NPM - watch](https://www.npmjs.com/package/watch)
- [NPM Scripts](https://docs.npmjs.com/misc/scripts)


Imagem de compartilhamento em redes sociais por Nitish Meena via [Unsplash](https://unsplash.com/photos/RbbdzZBKRDY).