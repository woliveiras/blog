---
layout: post
title: Twitter Bootstrap do jeito certo
tags:
  - frontend
  - produtividade
categories:
  - frontend
  - produtividade
description: Twitter Bootstrap é pesado? Twitter Bootstrap não é semântico? Confira algumas dicas para usar o Twitter Bootstrap do jeito certo.
date: 2015-09-08 22:00:00
---


Muita gente critica o uso do [Twitter Bootstrap](https://getbootstrap.com/) devido a nomenclatura de suas classes e aos muitos componentes que o framework possui.

Dizem que as classes não são semanticas e que o peso do framework é desnecessário.

Pois bem, **você não precisa das classes col-md/lg/xs-xxx no seu HTML** e para projetos pequenos (que você não usa todo o potencial do framework) você pode **selecionar somente o que vai utilizar no projeto**.

Maneiro né? Da uma olhada como faz...

<!--more-->

Se você já conhece pré processadores, será fácil aprender essa forma de utilizar o BS (Bootstrap). Se não conhece é melhor dar uma estudada no Less (que é o mais fácil para iniciantes) ou no Sass para acompanhar essa dica e absorver melhor. Depois de aprender volte aqui e continue a leitura. ;)

#### Para aprender Less:

- https://lesscss.org/
- https://blog.caelum.com.br/css-facil-flexivel-e-dinamico-com-less/

#### Para aprender Sass:

- https://sass-lang.com/guide
- https://pre-processadores.github.io/Sass-Guide/

Eu recomendo começar pelo Less pela sintaxe já ser mais familiar e depois migrar para o Sass, pois o BS também vai mudar para Sass na versão 4.

## Semântica e CSS?

Claro que a semântica nesse caso se trata da arquitetura do Front End e não da Semântica do conteúdo que o Browser vai ler, pois essa é definida pelo HTML - Comente se errei, mas não achei nada a respeito de importância semântica nos valores de classes CSS.
Porém é uma coisa importante... Você bater o olho em um código e identificar o que é aquele componente é algo bom. É produtivo.

## O que preciso manjar pra fazer um bom uso do Bootstrap?

Antes de partir para qualquer framework, seja de CSS, JS ou algo de Backend, é necessário que possua conhecimento nas tecnologias por trás disso. Se vamos utilizar o BS para agilizar nosso Front, é primordial o conhecimento em HTML, CSS e JavaScript.
**Se você não tiver o conhecimento básico, vai correr o sério risco de estragar ainda mais o seu trabalho se usar qualquer framework.**

## Bootstrap + Less + GruntJS

Para agilizar nosso trabalho de compilar o Less, podemos usar algum Task Runner. No meu caso usei o Grunt, pois já utilizava ele a algum tempo.

### Pastel

Eu já possuo um Boilerplate montado para agilizar meu trabalho. Podemos utilizar ele para facilitar nosso estudo também. Chamei ele de [Pastel](https://github.com/woliveiras/pastel "Pastel")! Baixe em seu PC e vamos ao trabalho.

Siga o passo a passo da instalação do Pastel e depois pode então executar o comando **grunt watch** que já está pré configurado para monitorar os arquivos *.less* e compilar sempre que você salvar os arquivos.

Caso não queira usar o Pastel, fique a vontade para utilizar suas próprias tarefas ou compilar de seu jeito se preferir pelo terminal. O uso do Pastel é somente para agilizar o Start do nosso Projeto.

## Selecionando somente os componentes que precisamos utilizar do Bootstrap

Antes de começar a codificar, identifique no projeto quais seriam os componentes necessários.

**Exemplo**: Será necessário utilizar abas em alguma parte da interface? Tem formulários, tabelas, etc?

Essa parte é muito importante para deixar o arquivo final mais enxuto.

Se você não conhece todos os componentes do BS, da uma olhada [aqui](https://getbootstrap.com/components/ "Components Bootstrap").

Depois disso você pode abrir o arquivo **default.less** que está dentro de **src/less**. É nesse arquivo que você seleciona os componentes que vão entrar no projeto. Nele estão os **imports** necessários para tudo funcionar.

Todas as linhas estão comentadas para que só compile o que você escolher.

Ex.:

Digamos que você vai utilizar modal e tooltips, então você pode remover as barras (//) do início das linhas que chamam esses componentes.

**Antes**

```css
//@import "@{path_bootstrap}modals";
//@import "@{path_bootstrap}tooltip";
```

**Depois de remover os comentários**

```css
@import "@{path_bootstrap}modals";
@import "@{path_bootstrap}tooltip";
```

**path_bootstrap** é uma variável que leva o caminho completo do BS para compilação. Ele vai chamar esse arquivo para compilar e concatenar no arquivo final compilado com os estilos do BS + os seus estilos.

Algumas variáveis importantes você pode conhecer [aqui](https://getbootstrap.com/css/#less "Referência do BS com Less").

Os componentes necessários na maioria dos projetos já estão sem as // no arquivo default do Pastel, que são esses:

```css
/* Componentes comuns nos projetos */
@import "@{path_bootstrap}scaffolding.less";
@import "@{path_bootstrap}type.less";
@import "@{path_bootstrap}grid.less";
@import "@{path_bootstrap}utilities";
@import "@{path_bootstrap}responsive-utilities";
```

Mas você pode ficar a vontade para remover e adicionar os componentes que quiser e confirmar você mesmo sobre o peso final do arquivo.

O que acontece aqui é que o Less lê o nosso arquivo default.less que está apontando para a pasta do BS + as pastas com nossos estilos. Então ele junta tudo em um arquivo compilando para css.

As variáveis que possuírem o mesmo nome que as do BS em nossos arquivos irão sobrescrever os estilos padrões do BS por estarem sendo chamados por último e assim por diante.

Tudo o que precisar modificar não precisa de !important ou ficar usando id, basta sobrescrever usando essa tecnica que o Less faz o trabalho final ficar bonito.

## Como utilizar o Grid do Bootstrap com Less?

No arquivo **styles.less** (se estiver usando o Pastel) é onde você vai colocar os estilos para seu projeto, você não vai mais colocar **col-xx-xx** no HTML. Ao invés disso você pode criar seus componentes de acordo com o contexto e fazer o seguinte:

No arquivo styles.less:

```css
.classe-que-recebe-o-grid{
  .make-lg-column(8); //Aqui será ins	erido o grid do col-lg-8
  .make-md-column(8); // e aqui o col-md-8
}
```

O arquivo final ficará assim:

```css
.classe-que-recebe-o-grid {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 1200px) {
  .classe-que-recebe-o-grid {
    float: left;
    width: 66.66666667%;
  }
}
@media (min-width: 992px) {
  .classe-que-recebe-o-grid {
    float: left;
    width: 66.66666667%;
  }
}
```

Quando tiver mais de um componente que recebe o mesmo grid você pode usar o conceito de agrupamento de CSS e colocar as duas classes para receber tal estilo:

Less:

```css
.classe-que-recebe-o-grid,
.outra-classe-com-grid{
  .make-lg-column(8);
  .make-md-column(8);
}
```

Resultado:

```css
.classe-que-recebe-o-grid,
.outra-classe-com-grid {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 1200px) {
  .classe-que-recebe-o-grid,
  .outra-classe-com-grid {
    float: left;
    width: 66.66666667%;
  }
}
@media (min-width: 992px) {
  .classe-que-recebe-o-grid,
  .outra-classe-com-grid {
    float: left;
    width: 66.66666667%;
  }
}
```

Os nomes de arquivos e a forma que eu utilizo não são um padrão e você não é obrigado a seguir... Basta modificar da sua maneira e modificar na tarefa less no Gruntfile.

## Referência

[Bootstrap Inteligente - Rafa Mello](https://blog.rafamello.com/bootstrap-inteligente "Bootstrap Inteligente")
