---
layout: post
title: Semântica HTML
tags:
  - frontend
  - html
categories:
  - frontend
  - html
date: 2015-01-29 10:00:25
description: Boas práticas em HTML Semântica. Como escrever HTML direito.
---

Quando estamos iniciando os estudos na área de Web aprendemos semântica e, as vezes, nem temos noção da importância disso. Aprendemos que cada tag HTML serve para alguma coisa: **`<title>`** para o título da página (Aquele que aparece na aba do navegador), **`<p>`** para parágrafos, **`<h1,2,3,...>`** para títulos do conteúdo, etc.

!["HTML"](../..//public/images/HTML.png)

Porém, com o tempo, algumas pessoas param de utilizar essas tags e começam a bagunçar tudo! Usam o **h1** pra deixar um texto maior que o outro e não para o título em questão, usam várias tags **p** separando o conteúdo de uma lista em uma div com uma class *"list"*, por ai vai! Vira uma salada no HTML.

Isso é ruim tanto para quem vai ler seu código depois, quanto para buscadores e leitores de tela.

## Qual a importância da semântica no HTML?

A semântica será importante para que o seu conteúdo tenha sentido mesmo que não tenha nenhum estilo visual. Semântica é o significado da coisa! É graças a semântica que sua página vai indexar legal ou não nos buscadores. Não somente por isso, a semântica ajuda na **acessibilidade** de sua página ou aplicação - Ponto que eu acho mais importante.

O Crawler do Google não vai ver se sua página está bonitinha, mas vai ler seu HTML e indexar conforme o conteúdo esteja estruturado. Um leitor de tela também não vai ficar falando pra pessoa com necessidades especiais que determinado botão é uma lixeira ou um xiszinho vermelho, mas vai ler as tags e identificar o que você escreveu no atributo **<alt>** e falar para o usuário.

Faça um teste: Instale a extensão que eu indiquei [nesse artigo](/posts/extensoes-navegador-desenvolvimento-web/ "Extensões do Navegador para Desenvolvimento Web"), o [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn "ChromeVox") e ative ela para que leia as páginas pra você. Da uma navegada em alguns sites por ai e veja se conseguiria entender de uma forma legal o que o leitor diz.

Esses foram só alguns dos tópicos que podemos levantar a respeito da importância da Semântica...

## E como escrever um HTML semântico?

Não é difícil, basta você utilizar as tags para o que elas foram feitas.
O HTML serve para [organizar a informação](https://www.eventials.com/locaweb/diego-eis-a-semantica-do-html-5/). Use pra isso.
Quando for estruturar um documento HTML, analise o Layout e identifique os elementos de conteúdo da interface.

### O que é o que?

Faça a si perguntas desse tipo quando for estruturar: O que nessa tela se encaixa como um título(H1)? O que se encaixa como um subtítulo(H2)? Onde se encaixa como parágrafo? Como eu posso fazer para que uma pessoa que não enxerga saiba pra que serve esse botão vermelho?
Procure envolver o conteúdo com as tags corretas. Caso tenha dúvidas, procure na documentação, pesquise no Google.
Garanto que nada é mais recompensador que receber um elogio de um deficiente visual que consegue entender seu conteúdo sem dificuldades.
Alguns links úteis para entender sobre semântica:

* [A estrutura e a semântica do HTML5 - UXDesign Blog](https://www.uxdesign.blog.br/padroes-web/html5/entendo-a-estrutura-e-a-semantica-do-html5/ "A estrutura e a semântica do HTML5")
* [A verdadeira semântica do HTML - Diego Eis](https://pt.slideshare.net/diegoeis/a-verdadeira-semntica-do-html5 "A verdadeira semântica do HTML")
* [Microdata - Desenvolvimento para Web](https://desenvolvimentoparaweb.com/html/microdata-api-schema-org-significado-html/ "Microdata API e Schema.org: dando significado ao HTML")

Espero ter ajudado a entender um pouco mais sobre o assunto e, se você já conhecia e não praticava, te convencido a utilizar as tags da maneira correta! :D
Alguma dúvida, link sobre o assunto ou sugestão? Comenta ae!
