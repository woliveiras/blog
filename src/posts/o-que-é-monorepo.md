---
title: O que é monorepo
date: '2022-08-29'
tags:
    - JavaScript
    - Nodejs
    - frontend
    - engenharia
description: Gerenciar os repositórios e todas as integrações com eles em grandes projetos pode se tornar complexo e trabalhoso. Existem práticas que podem nos ajudar a facilitar este processo e os monorepos podem nos ajudar bastante nisso.
---

Trabalhando profissionalmente com aplicações de larga escala, utilizamos sistemas de versionamento de código (entenda o que é versionamento de código [neste artigo](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/)). E, para guardar as versões, salvamos tudo em repositórios de código.

Com o crescimento dos nossos projetos ou das empresas, acabamos criando vários repositórios para separar as responsabilidades das nossas aplicações. Isso se faz necessário para que possamos escalar como empresa/projeto/produto, pois quebramos partes do negócio em equipes com responsabilidades únicas e conhecimento avançado em alguns temas cuidando de seus projetos de ponta a ponta. Uma empresa pode possuir centenas e até **milhares** de repositórios, todos eles com suas aplicações que devem ser partes de uma ou outras aplicações. Podemos ter times que cuidam de um ou vários repositórios, assim como podemos ter vários times que cuidam de um repositório.

Chamamos de **polyrepo** a prática de possuir diversos repositórios espalhados e de **monorepo** quando temos um único repositório com vários repositórios dentro. Mas existem diferenças entre múltiplos repositórios e monorepos que vão além do controle de versão. Fora esses dois nomes novos para o nosso repertório de engenharia de software, temos também os **monolithic** ou **single-repo monolithics** e é graças a este outro tópico que fica mais claro a diferença que existe na prática no uso de monorepos. Não é somente sobre onde você armazena seu código.

Para entender tudo isso, vamos primeiro relembrar ou entender o que é repositório, depois vamos conhecer o histórico dos monorepos e, por fim, vamos imaginar alguns cenários para clarear a nossa visão sobre o tema.

## O que são repositórios?

Em um breve resumo, repositório nada mais é que uma pasta onde estão todos os arquivos do nosso projeto, incluindo nosso versionamento.

A grande vantagem de se trabalhar com repositórios, não simplesmente com diretórios onde você escreve o código e depois salva em arquivos .zip, é o fato de conseguir versionar o nosso histórico de alterações. Para isso, utilizamos ferramentas de versionamento, como o Git, Mercurial, SVN e afins.

Normalmente hospedamos nosso repositório em serviços como o GitHub, GitLab, Bitbucket ou similares para conseguir trabalhar em equipes, compartilhando este repositório com outras pessoas através da internet.

## O histórico dos monorepos

Pelo que temos de informação espalhada pela internet, o uso de monorepos não é algo atual. Aparentemente veio antes dos anos 2000, muito utilizados em grandes empresas, como Google, Microsoft e Facebook.

Mas o assunto começou a ganhar maior visibilidade quando começaram a aparecer ferramentas pensadas para a gerenciamento dos monorepos e construção de aplicações construídas dentro deste modelo.
Em Setembro de 2015, tivemos o lançamento do Bazel, que é um port open source de uma ferramenta interna do Google chamada Blaze. Muito parecida com outras build tools, como o Make ou o Maven, podemos escrever regras de build em algumas linguagens de programação e o Bazel fará a magia por nós. Mas, antes disso, no mesmo ano o Facebook lançou o Buck e antes do Facebook tivemos o Twitter lançando o Pants em 2011.

Perceba que essas ferramentas são utilizadas para a construção da nossa aplicação (build) e não para a gestão do nosso monorepo. Quando gerenciamos um projeto em engenharia de software temos ainda o controle de releases, dependencies tracking e muito mais. Essas ferramentas suportam monorepos, mas não necessariamente existem somente para isso. O fato é que empresas do tamanho do Google divulgaram publicamente que gerenciam bilhões de linhas de código em um único repositório e isso chamou a atenção da comunidade.

Eu vi o maior hype dos monorepos quando apareceu o Lerna, em 2016. Isso porque o Node.js estava em alta nas palestras pelo mundo a fora e muita gente se interessou pela possibilidade de utilizar JavaScript no frontend e no backend (e em todo lugar que pudessem enfiar essa linguagem). Porém possuir diversas aplicações escritas em JavaScript espalhadas em vários repositórios facilita a duplicidade de código. Uma maneira de diminuir este problema era criando bibliotecas para compartilhar código entre aplicações com a mesma tecnologia. Mas, com o tempo, a gestão de várias bibliotecas internas espalhadas entre times começa a ficar mais e mais complexo, dando espaço para ferramentas como o Lerna ganharem muita visibilidade.

O Lerna, além de ser uma build tool, também auxilia no trabalho de gerenciamento do repositório, realizando tarefas como bootstrap do repositório, aplicação e componentes da aplicação, criação de releases, auxilia na organização das bibliotecas, e, o principal, gerenciamento das dependências.
Não somente a existência de ferramentas como o Lerna possibilitaram o crescimento da adoção de monorepos, mas o próprio Git foi fundamental para isso. Antes do Git, estávamos utilizando o Mercurial e grandes empresas já tinham problemas de performance com o crescimento de suas aplicações e a quantidade de commits dentro dos repositórios. Com o tempo, ficava muito demorado consultar o histórico ou mesmo trocar de branch (clones no Mercurial). Por isso, empresas como Facebook e Microsoft investiram em contribuir com o código fonte do Mercurial e o Google criou seu próprio sistema de versionamento de código, chamado Piper. Mas o Git trouxe melhoras expressívas na experiência de desenvolvimento, ainda mais depois do lançamento da funcionalidade de LFS, que possibilita o armazenamento de arquivos muito pesados com Git sem uma perca muito grande de performance.

## O que de fato são os monorepos

Monorepos são um modelo de arquitetura onde temos todas as partes da nossa aplicação (ou até mesmo todo o código fonte da empresa) em um único repositório isoladamente. Ou seja, mesmo que os códigos estejam todos em um único lugar, não significa que não estejam separados lógicamente e até mesmo possam ser publicados sem interferir uns nos outros.

Para entender o que são os monorepos, vamos observar os seus parentes: o polyrepo e monolithic repos. 

Em um modelo de arquitetura onde temos vários repositórios (polyrepo), podemos ter aplicações e bibliotecas convivendo juntas, onde as bibliotecas são instaladas nas aplicações, mas não estão no mesmo repositório. Temos um repositório por biblioteca (contexto lógico/domínio) e um repositório por aplicação. Os deploys das aplicações não dependem dos deploys das bibliotecas para acontecer, assim como o contrário.

Vamos imaginar o cenário de uma biblioteca de autenticação em JavaScript utilizada no frontend e no backend de uma aplicação. Uma vez publicada esta biblioteca, nem o frontend, nem o backend dependem de um novo deploy dela para que subamos um novo release da nossa aplicação. A não ser que seja uma alteração nesta biblioteca e que seja necessário um deploy para atualizar o seu código em nossa aplicação, mas não necessariamente isso vai acontecer o tempo todo.

![Polyrepo]({{site.postsImagesPath}}monorepos-Polyrepo.png)

Já no modelo dos monolithic repos, além de ter tudo em um único repositório, está tudo interconectado de uma forma que não dá para fazer deploy dessa biblioteca de autenticação sem que realizemos o deploy da aplicação. Isso porque, além do repositório ser único (single repo), temos uma aplicação monolítica neste repositório.

![Monolith]({{site.postsImagesPath}}monorepos-Monolith.png)

Quando temos um monorepo, mantemos a existência de um único repositório, porém o código fonte possui sua separação lógica. Podemos realizar o deploy de módugos que estão dentro dos repositórios dentro do nosso monorepo separadamente, assim como na arquitetura polyrepo, mas também mantemos a gestão local de dependências, assim como em um single-repo monolith.

![Monolith]({{site.postsImagesPath}}monorepos-Monorepo.png)

Perceba que existe uma diferença muito grande entre um repositório monolito e monorepo. O fato de existir a separação lógica entre os repositórios muda totalmente como vamos trabalhar dentro do monorepo. É extremamente importante entender que são de fato vários repositórios separados dentro de um único local. Poder fazer o deploy ou um build de uma única aplicação, sem rodar as outras, é muito diferente do modelo monolito, onde teríamos que sempre realizar a tarefa para tudo o que está dentro do repositório.

## Exemplo de fluxo de trabalho com monorepo

Vamos imaginar um caso onde temos uma aplicação construída com JavaScript de ponta a ponta. Isso não é necessário para trabalharmos com monorepos, podemos misturar tecnologias ali dentro dependendo do nosso build tool, mas vamos pensar neste cenário para além de compartilhar o mesmo repositório, podermos compartilhar código entre as aplicações.

Para esta aplicação, temos um design system implementado em uma biblioteca de componentes, uma biblioteca de autenticação, uma API servindo algumas rotas e a aplicação frontend web.


![App Monorepo]({{site.postsImagesPath}}monorepos-App.png)

Em uma arquitetura polyrepo, teríamos um repositório, um pipeline CI/CD, testes, releases, tooling, etc para cada parte do nosso projeto. Em uma arquitetura de monorepo, teríamos um único repositório com todos os projetos dentro, onde centralizamos configurações, compartilhamento de código e todo resto.

Normalmente existe a separação de diretórios entre apps e packages ou apps e libraries ou qualquer nome que a ferramenta de gestão do repositório seguir ou nós decidirmos seguir. A regra geral seria que a maior parte do nosso trabalho fica em packages/libraries e em apps nós somente juntamos tudo em aplicações que são enviadas para o usuário final.

![App Monorepo Montagem]({{site.postsImagesPath}}monorepos-App-Monorepo.png)

No nosso código fonte das aplicações, teríamos algo como:

```javascript
Import { auth } from "@repo-organization/auth-library"
Import { Component } from "@repo-organization/component-library"

…
```

## Conclusão

Não entramos no assunto de vantagens e desvantagens dos monorepos, isso é tema para o próximo artigo, mas entendemos aqui de onde veio a ideia de utilizar este modelo arquitetural, assim como o que é poly e monolithc repos.

## Referências

[Why Google Stores Billions of Lines of Code in a Single Repository](https://research.google/pubs/pub45424/)
[Advantages and Disadvantages of a Monolithic Repository, A case study at Google](https://people.engr.ncsu.edu/ermurph3/papers/seip18.pdf)
[Wiki/Monorepo](https://en.wikipedia.org/wiki/Monorepo)
[Google Piper](https://opensource.google/documentation/reference/glossary#Piper)
[Bazel](https://bazel.build/)
[Buck](https://buck.build/)
[Pants](https://www.pantsbuild.org/)
[Lerna](https://lerna.js.org/ )
[Mercurial](https://www.mercurial-scm.org/)
[SVN](https://subversion.apache.org/)
[Git](https://git-scm.com/)
[Git LFS](https://git-lfs.github.com/)