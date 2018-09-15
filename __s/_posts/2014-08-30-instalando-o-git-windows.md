---
title: Instalando o Git no Windows
tags:
  - Git
  - Versionamento
  - Windows
categories:
  - Ambiente
  - Git
date: 2014-08-30 12:25:07
description: Instalação do Git no Windows
---

O Git é muito utilizado por muitos desenvolvedores e [empresas](http://www.neuroniodigital.com.br/empresas-no-github/ "10 grandes empresas que estão no GitHub e o que elas estão fazendo lá") * , portanto se você ainda não sabe utilizar, sugiro buscar material para aprender sobre versionamento urgente!!! Afinal de contas, nem sempre o ctrl+z te salva... ;)

<!--more-->
*Não confunda Git com Github. O artigo foi utilizado para mostrar as grandes empresas que usam Git E Github.*

## Baixando o Git para Windows

Na documentação oficial existe esse link para agilizar as coisas:

[msysgit.github.com](http://msysgit.github.com "msysgit.github.com")

Basta entrar ai e baixar o software e dar um double click em cima do executável para começar a instalação

![Inicio da instalação do GIT](../../public/images/Instalacao-Git-Windows.png "Inicio da instalação do GIT")

Aqui é simples: **Next**, **Next** até chegar a essa tela:

![Git Bash Here](../../public/images/Git-bash-here.png "Git Bash Here")

Deixe marcado a opção **Git Bash Here**.
Com essa opção você poderá abrir o terminal do Git a partir de qualquer pasta em que estiver com o botão direito do mouse.

Ai vem o **Next**, **Next** de novo até essa tela:

![Use Git from Command Prompt](../../public/images/Use-Git-from-command-prompt.png "Use Git from Command Prompt")

Deixe marcado a opção **Use git from Command Prompt** para que consiga usar o Git a partir do CMD do Windows também, sem precisar abrir o Git Bash.

**Next**, **Next** até essa tela:

![Unix Style](../../public/images/Unix-Style-Git-Windows.png "Unix Style")

Selecione a segunda opção para que não existam conflitos entre as quebras de linha que o Windows coloca com as que os Sistemas Unix usam.

**Next**, **Next** e podemos então configurar.

## Configuração do Git

Informe seus dados ao git!
```
git config --global user.name "Nome "
```

```
git config --global user.email "email@email.com"
```

Pronto!

Existem outras configurações maneiras e você pode [encontrá-las aqui](http://git-scm.com/book/pt-br/Primeiros-passos-Configura%C3%A7%C3%A3o-Inicial-do-Git "Git Book").
