---
layout: post
title: Pré processadores CSS
tags:
  - Less
  - Pastel
  - Pre Processadores
  - Sass
  - Stylus
id: 345
categories:
  - Automatização
  - Dicas
  - Front End
date: 2015-01-14 14:02:22
---

Tem [gente que apoia o uso](http://blog.caelum.com.br/css-facil-flexivel-e-dinamico-com-less/ "CSS fácil, flexível e dinâmico com LESS"), tem [gente que não apoia](http://tableless.com.br/pre-processadores-usar-ou-nao-usar/ "Pré-processadores: usar ou não usar?") e, as vezes, falar disso da até briga nas comunidades do Facebook/Google/etc... Porém é algo que está sendo amplamente utilizado e, muitas vezes, é requisito para vagas na área. Se você não sabe o que é, ou sabe, mas tem dúvidas de qual utilizar ou tem alguma outra dúvida sobre pré processadores, eu vou tentar te ajudar agora!

<!--more-->

## Antes de falar diretamente dos pré processadores preciso dizer algo!

Uma coisa importante a ressaltar sobre o assunto é que: utilizar pré processadores é fácil... Não é uma coisa de outro mundo como alguns pensam.

Porém é <span style="color: #ff0000;">importante</span> (Muiiiito importante) que você saiba bem CSS antes de começar a utilizar um pré processador . Senão o que você vai fazer com ele será pior do que o que você pode fazer com CSS puro!

## O que é um pré processador

Basicamente é como se você programasse em uma linguagem de programação compilada. Você escreve na sintaxe definida (Less/Sass/etc) e o pré processador compila para CSS e então você acrescenta o arquivo CSS a sua página normalmente.

## Pontos positivos do uso de pré processadores

Alguns dos pontos positivos são:

* Você pode ficar mais produtivo usando um pré processador
* Pode ficar mais fácil organizar seus diretórios ou mesmo trabalhar com componentes.
* O fato de você usar variáveis e conseguir mudar a cor do site inteiro somente mudando um campo. Você acaba com aquele problema de ficar copiando e colando a cor de um determinado elemento para outro.
* Algumas opções de pré processadores (Acho que todas) tornam fácil o aninhamento de seletores.
* O uso de funções/mixins para agilizar algumas coisas também é excelente!
* Você pode acabar com problemas comuns do dia-a-dia como ficar escrevendo os prefixos dos navegadores.
* Acabar com aqueles arquivos .css de 300 mil linhas!

## Pontos negativos

Antigamente o pessoal reclamava de ter de instalar Ruby na máquina para usar Sass... Hoje reclamam de ter de instalar NodeJS e Grunt, pois com uma task no Grunt conseguimos compilar os arquivos sem precisar do Ruby. Portanto o fato de ter de instalar uma coisa ou outra eu já acho furada! Sempre vai ter essa de não querer instalar isso ou aquilo no PC...

Deixa de ser chataummm! Instala num ambiente isolado com o [Vagrant ](http://woliveiras.com.br/category/vagrant/ "Tudo sobre Vagrant")então, se você não quer instalar nada no seu OS. Sempre, mais cedo ou mais tarde, você tem de ter uma lib ou outra instalada em sua máquina, então eu não vejo problema em você instalar o Node ai! Aproveita e [instala agora](http://woliveiras.com.br/node-js-instalacao/ "Um pouquinho de Node.js (Intro e Instalação)"), pois vou da uma olhada nesse esquema para compilar o [Less com o Grunt](http://woliveiras.com.br/workflow-otimizado-com-grunt/ "Workflow otimizado com o Grunt").

O medo do terminal... Muitos programadores tem medo de usar o Terminal (Ou preguiça), mas isso também não é motivo para desistir de aprender algo que vai aumentar sua produtividade. Seria ótimo pra você aprender a usar o Terminal... Acredite! Porém se não quiser, não é motivo para desistir também, pois com uma tarefinha no Grunt, vai bastar salvar o arquivo que o mesmo será compilado.

## Qual usar

Temos muitos nomes fortes no mercado como [Less](http://lesscss.org/ "Less"), [Sass](http://sass-lang.com/ "Sass"), [Stylus](http://learnboost.github.io/stylus/ "Stylus")... Por ai vai! E alguns possuem ótimos Frameworks que os utilizam por padrão obrigando você a aprender a sintaxe antes de ir para o Framework.

Eu estou usando nos meus projetos os Less. Foi o que eu aprendi primeiro por causa de sua sintaxe ser muito parecida com o CSS puro. Porém não é o que eu vou indicar para você hoje!

O que eu eu recomendo é que você acesse o site de cada um dos pré processadores e veja o que mais te interessa ou agrada conforme sua experiência e o que te atenderia caso queira usar determinado Framework. Por exemplo: Quer usar o [Compass](http://compass-style.org/ "Compass"), aprenda Sass.

O que eu mais vejo como requisito em vagas de emprego é o Sass. Talvez por que muitas empresas estão adotando o uso de [Ruby](https://www.ruby-lang.org/pt/ "Ruby") em suas aplicações... Porém isso é pessoal. Você deve escolher conforme sua necessidade para atender projetos ou conforme seu plano de carreira.
