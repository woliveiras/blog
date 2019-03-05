---
layout: post
title: 'JAMstack: criando e hospedando seu site de graça no GitHub Pages'
date: 2019-03-05 17:40 -0300
categories:
    - jamstack
    - git
    - github
image: "/images/posts/github-pages.png"
tags:
    - jamstack
    - git
    - github
description: Uma opção gratuita, rápida e fácil para criar nosso site e hospedar de graça utilizando o GitHub
---
Como comentado no artigo sobre [ferramentas para construção de sites com JAMstack](/posts/ferramentas-para-construção-de-sites-com-jamstack/), o GitHub Pages é uma opção para quem deseja hospedar seu site ou blog estático de graça, com automação do build e deploy contínuo de graça.

Se você não sabe o que é JAMstack, confere este artigo: [JAMstack introdução](/posts/jamstack-introdução-o-que-é-jamstack/), que é o primeiro da série sobre este assunto.

Neste artigo vamos criar um site simples e hospedar no GitHub Pages. O importante será entender o fluxo e como o GitHub Pages funciona.

![Imagem do logo do GitHub Pages]({{page.image}})
{:.post__wallpaper}

## Passo a passo

Podemos criar um repositório para hospedar nosso site no GitHub Pages de duas maneiras: criando um repositório normal e adicionando uma branch **gh-pages** ou da maneira mais fácil que é criando um repositório com o seu nome de usuário ou o nome da sua organização + .github.io no nome do repositório.

Por exemplo: eu possuo o usuário **aprendizdev** no GitHub, para criar um repositório e hospedar meu site nele, basta criar este repositório com o nome aprendizdev**.github.io**. O repositório precisa ser público para que isso funcione.

![Criando o repositório para o GitHub Pages]({{site.post_images}}criando-repositorio-github-pages.png)

Agora podemos baixar o repositório (git clone…), adicionar os nossos arquivos estáticos (HTML, CSS e JavaScript) e subir estes arquivos para o GitHub (git push).

Neste exemplo eu criei um **index.html** e subi com um texto simples para o meu [repositório](https://github.com/aprendizdev/aprendizdev.github.io).

No exemplo eu coloquei o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Meu primeiro site no GitHub Pages</title>
</head>
<body>
    <h1>Eu sou um jovem aprendiz</h1>
</body>
</html>
```

Somente com essa configuração já temos um site no ar. Se entrarmos no domínio [aprendizdev.github.io](https://aprendizdev.github.io/) vemos a versão de pé.

![Site recem criado no ar]({{site.post_images}}aprendiz.dev-no-ar.png)

Agora basta subir um tema bonito para o nosso site e pronto! Temos nosso primeiro site hospedado de graça no GitHub Pages.

## Conclusão

Criar nosso site JAMstack e hospedar de graça no GitHub Pages é simples assim: criar um repositório e subir nossos arquivos estáticos para lá.

Caso você tenha algum problema na criação do seu site, me dá um toque aqui nos comentários.

Se você precisar de dicas do que usar para criar seu site, confere o artigo sobre ferramentas que pode utilizar com o GitHub Pages: [ferramentas para construção de sites com JAMstack](/posts/ferramentas-para-construção-de-sites-com-jamstack/).
