---
title: 'Aprenda a trabalhar em Equipes!!!'
tags:
  - Boas práticas
  - Padrões
  - Produtividade
  - Programação
categories:
  - Boas práticas
  - Dicas
  - Produtividade
  - Programação
date: 2015-01-30 06:00:51
---

Como eu disse em [um post anterior](/posts/requisitos-para-vagas-front-end/ "Sobre os requisitos para vagas de emprego Front End (E outras áreas também)"), você não vai trabalhar sozinho a vida toda. Chega uma hora em que é preciso trabalhar em equipes, interagir com outras pessoas e é necessário que você aprenda isso. Mesmo que você trabalhe em casa, vai precisar enviar seu projeto para outras pessoas.
Existem algumas boas medidas para conseguir trabalhar bem em grandes ou pequenas equipes...<!--more-->

## Organização

As pastas que você cria para organizar seu projeto devem possuir nomes que auxiliem a entender o que tem dentro. Não somente as pastas, os nomes dos arquivos também devem ter algum significado.
Não crie uma pasta com o nome **scripts** e coloque todos os .styl, .js, .html, .php, .rb, etc, ali dentro, mas crie uma organização ou siga alguma.
Isso serve até mesmo para que você se encontre mais fácil no seu projeto.
Trabalhar com outras pessoas não é a mesma coisa de ser criança e a mãe arrumar seu quarto... Você tem de se organizar e outras pessoas tem de entender sua organização.
Da uma olhada aqui no meu [Scaffold ](https://github.com/woliveiras/pastel "Pastel | um pequeno Boilerplate que eu criei para agilizar meus projetos")e veja como eu organizei os arquivos - É um exemplo beeeem básico, mas da para ter uma noção...
A forma como escreve seu código também faz diferença e vou falar disso agora!

## Comentários

Comente seu código. Daqui a 6 meses você não vai lembrar o que aquilo fazia, afinal você evolui - Ou só esquece mesmo. E assim como você não vai saber daqui a esse tempo, pessoas que pegarem seu código **hoje** podem demorar a entender o que ele faz se não estiver comentado.

![Comentários no código](../../public/images/comment.png)

Tirando a zoeira - Que é uma história real. Mantenha o bom senso. Existem funções da própria linguagem que não precisa ser comentada. Se o cara estudou a linguagem, então ele sabe o que aquele método faz.

## Semântica

Além da [semântica no HTML](/posts/semantica-html/ "Semântica HTML"), você precisa usar do bom senso ao nomear identificadores, classes, funções, métodos, objetos, etc.
Uma função com o nome  _funcaoX();_ não diz muita coisa sobre ela mesma, porém uma função com nome _setTimeOut();_ está dizendo por si que ela define o tempo para alguma coisa.
Use e abuse da semântica em seu código!

## Padrões de codificação

Você precisa bater o olho no seu código e entender aquilo sem dificuldade.
Não é legal você escrever os nomes das variáveis uma hora em inglês outra em português, uma hora com CamelCase, outra hora com underlines. É bom você ter um padrão de codificação.
**E o que conta para como um padrão de codificação para meu uso no dia a dia?**
Segura a lista:
*   Nomenclatura de variáveis
*   Nomenclatura de funções/métodos/objetos
*   Espaçamento entre tags/brackets
*   Formato de comentários
*   Indentação
*   Limites de caracteres em uma linha
E tem muito mais que varia de acordo com a sua forma de trabalhar/linguagem/projeto.
É uma verdadeira forma de formatar seu código.

## Padrões de projetos

É bom que você procure estudar Design Patterns.

Quando você entra em um time, eles já possuem alguns padrões internos que são os padrões de codificação/organização de diretórios/comentários/commits, etc. Porém, fora esses, eles utilizam alguns padrões como MVC, MVVM, Composite, Factory, Dependency Injection e é bom que estude isso até mesmo para se organizar melhor em seus próprios projetos.
