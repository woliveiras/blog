---
layout: post
title: O que é linguagem de programação de alto/baixo nível?
tags:
  - computação
  - teoria
  - programação
categories:
  - computação
  - teoria
  - programação
date: 2015-01-27 01:51:01
description: O que é uma linguagem de programação de alto nível? E linguagem de programação de baixo nível? Acompanhe...
---

Se você vem seguindo o mesmo [guia de estudos](http://woliveiras.com.br/posts/guia-de-estudos-desenvolvedor-front-end-iniciante), vai chegar uma hora em que vai partir pro JavaScript e mais cedo ou mais tarde vai se aprofundar ainda mais em programação e é aí que você ouve alguns termos meio confusos como esse:

*JavaScript é uma linguagem de programação de alto nível.*

Mas e dae? Quer dizer que ela é uma linguagem de programação da realeza? É uma princesa? Ou um princeso? O que significa isso? <!--more-->

## Linguagem de alto nível

Essas são aquelas cuja [sintaxe](https://pt.wikipedia.org/wiki/Sintaxe) se aproxima mais da nossa linguagem e se distanciam mais da linguagem de máquina.

Elas possuem um nível de abstração que faz com que você entenda aquele código mais facilmente, pois foi removido da sintaxe o que você não precisa entender em um primeiro contato com programação ou pra quem nunca vai mexer com linguagens de baixo nível.

Você não vai precisar conhecer coisas como [registradores](http://pt.wikipedia.org/wiki/Registrador_%28inform%C3%A1tica%29 "Registradores - Wikipedia") ou [instruções](http://pt.wikipedia.org/wiki/Instru%C3%A7%C3%A3o_%28inform%C3%A1tica%29 "Instruções - Wikipedia") do processador para conseguir fazer seu Hello World. - _Apesar que ninguém ensina isso antes de te mostrar o Hello World mesmo em linguagens de baixo nível né, mas deu pra entender a mensagem... ;)_

Alguns exemplos de linguagens de alto nível:

* JavaScript **<3 +++**
* Python **<3 +++**
* PHP **<3 ++**
* Ruby **<3 +**

## E a linguagem de baixo nível?

É aquela que se aproxima mais da linguagem de máquina.

Essas são as que você precisa ter o conhecimento direto da arquitetura do computador para fazer alguma coisa. Tem um pouquinho mais para conhecer sobre elas [aqui](http://pt.wikipedia.org/wiki/Linguagem_de_programa%C3%A7%C3%A3o_de_baixo_n%C3%ADvel "Linguagem de programação de baixo nível - Wikipedia").

## Qual é mais difícil de se trabalhar?

Nenhuma.

Ambas tem suas características e seus objetivos, então não tem qual é mais fácil ou difícil de se trabalhar.

É a mesma coisa de ficar na briga de qual linguagem de programação é melhor ou qual S.O. é melhor. Não tem, não existe. **Cada uma se aplica a um cenário/uma necessidade**.

Claro que um **iniciante**, só com lógica de programação, aprende a programar em uma linguagem de alto nível como Python, PHP, JS facilmente, porém ele vai sentir alguma dificuldade para uma de baixo nível. Mas não é nada que ele não se acostume ou que não aprenda com dedicação.

Se você planeja aprender uma linguagem de baixo nível, vai sem medo. O que vai acontecer é você ter de pesquisar mais no Google se não tiver conhecimento da arquitetura.

## Exemplos

Pega esse Hello World em JS (Alto nível):

```javascript
console.log('Hello World!');
```

Agora em Assembly (Baixo nível):

```assembly
%ifdef  NetBSD
section .note.netbsd.ident
        dd      7,4,1
        db      "NetBSD",0,0
        dd      200000000       ; amd64 supported since 2.0
%endif

%ifdef  OpenBSD
section .note.openbsd.ident
        align   2
        dd      8,4,1
        db      "OpenBSD",0
        dd      0
        align   2
%endif

section .text

%ifidn __OUTPUT_FORMAT__, macho64       ; MacOS X
        %define SYS_exit        0x2000001
        %define SYS_write       0x2000004

        global  start
        start:
%elifidn __OUTPUT_FORMAT__, elf64
        %ifdef  UNIX            ; Solaris/OI/FreeBSD/NetBSD/OpenBSD/DragonFly
                %define SYS_exit        1
                %define SYS_write       4
        %else                   ; Linux
                %define SYS_exit        60
                %define SYS_write       1
        %endif

        global  _start
        _start:
%else
        %error  "Unsupported platform"
%endif

        mov     rax,SYS_write
        mov     rdi,1           ; stdout
        mov     rsi,msg
        mov     rdx,len
        syscall
        mov     rax,SYS_exit
        xor     rdi,rdi         ; exit code 0
        syscall

section .data

msg     db      "Hello, world!",10
len     equ     $-msg
```

Outros exemplos [aqui ;)](http://en.wikipedia.org/wiki/List_of_Hello_world_program_examples "Exemplos de hello world").
