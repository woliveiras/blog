---
layout: post
title: Como funciona um programa de computador
date: 2019-04-01 22:30 -0300
categories:
    - javascript
    - computação
    - programação
    - série fullstack
image: "/images/posts/alexandre-debieve-561298-unsplash.jpg"
tags:
    - javascript
    - computação
    - programação
    - série fullstack
description: Antes de aprender lógica e uma linguagem de programação, precisamos saber como de fato um computador funciona, pois só assim vamos entender como funciona um programa de computador. Neste artigo vamos aprender sobre isso e no final ainda temos um primeiro comando para você executar em sua máquina para exibir uma mensagem na tela.
---
Até aqui aprendemos ferramentas de programação, como o [terminal](/posts/introdução-ao-terminal/), [Git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/) e [GitHub](/posts/trabalhando-com-repositórios-remotos-git-e-github/). Durante esse aprendizado, conhecemos bem pouco da história dos computadores. Vimos que antigamente os sistemas operacionais não possuíam interface gráfica. Seu hardware era de baixa capacidade (se comparado a hoje em dia) e por isso era necessário que os programas fossem altamente otimizados.

Aprendemos que softwares são compostos por alguns ou milhares de arquivos e que o sistema operacional é responsável por cuidar de como tudo isso vai funcionar, mas enquanto desenvolvemos trabalhamos com versionamento de código para garantir que nada vai quebrar na mão do usuário final devido a alguma de nossas alterações.

Agora podemos entrar em programação de fato. Antes mesmo de escrever nossas primeiras (ou não) linhas de código, precisamos entender **como funciona um programa de computador**. Como pode um monte de texto se transformar em algo visual na nossa tela, em um aplicativo, em uma rotina que automatiza processos. Para tal é importante aprender sobre arquitetura de computadores.

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem de uma placa mãe" %}

## Componentes de um computador

Existem componentes em um computador que são muito importantes para o seu funcionamento. Podemos listar aqui alguns que você já até deve conhecer ou ter ouvido falar: placa mãe, processador, memória primária, memória secundária, dispositivos de entrada e saída e o sistema operacional.

### Placa mãe

A placa mãe é quem conecta todos os nossos componentes. Ela é uma placa eletrônica com trilhas de metal que trafegam a eletricidade através dos componentes eletrônicos do PC, servindo tanto para alimentar estes componentes, quanto para trafegar a informação entre eles.

Quando ligamos o PC, existe um comando elétrico, que ativa algum comando dentro do computador, no processador, que faz com que ele vá se ativando e ativando todos os outros componentes necessários para o seu funcionamento.

### Processadores

O processador é a parte central do nosso computador, por isso seu nome é CPU (unidade central de processamento, em português). É ele quem faz todas as contas para que aconteça algo em nosso computador. Internamente é tudo 0 e 1. Não existem instruções dizendo para o processador “faça isso” ou “faça aquilo”. O que acontece são contas binárias que ligam ou desligam transistores de dentro desses componentes eletrônicos tão importantes através da lógica binária. O processador entende esses 0s e 1s como “liga” ou “desliga” a corrente elétrica que passa por dentro dele através dos seus transistores.

> **O que são transistores**
> São componentes eletrônicos utilizados principalmente como amplificadores e interruptores de sinais elétricos, além de retificadores elétricos em um circuito, podendo ter variadas funções. O termo provém do inglês transfer resistor (resistor/resistência de transferência), como era conhecido pelos seus inventores.
> [Wikipédia- Transístor](https://pt.wikipedia.org/wiki/Trans%C3%ADstor)

Isso acontece em taxas muito rápidas e aqui entram as operações lógicas binárias que o processador executa de AND, OR, NOT, XOR e Shift, onde o que acontece é:

- quando o processador recebe um comando AND, a saída elétrica vai acontecer somente se as duas entradas forem “ligado” (receber corrente elétrica nas duas entradas do transistor)
- quando recebe o comando OR, a saída acontece se uma ou outra entrada aconteceu
- o NOT apenas inverte a entrada, se recebeu corrente elétrica (1) ele inverte ela para não (0)
- XOR devolve uma saída sempre que o número de entradas é ímpar
- Shift desloca bits para alterar o processamento, por exemplo se movimentarmos bits para a esquerda temos uma multiplicação por dois, se movimentarmos para a direita temos uma divisão por dois

Apenas com esses operadores lógicos o processador calcula tudo o que precisamos para implementar qualquer lógica em nossos programas e para todo o funcionamento do nosso computador.

Dentro do processador existe algo chamado código de máquina, que são as instruções que o processador sabe interpretar e executar. Um código de máquina não é muito legível para seres humanos. Mais a frente vamos conhecer as linguagens de programação e assim vamos aprender sobre linguagens de alto e baixo nível.

### Memória primária

A memória não é tão interessante quanto o processador, porém sua função é primordial para o funcionamento do nosso computador, do nosso sistema operacional e dos programas que rodamos.

É nela que ficam armazenados os 0s e 1s das instruções que estamos executando em algum momento. Quando rolamos a página deste blog, por exemplo, o navegador vai tratar de baixar informações da internet através de um complexo processo de comunicação com os servidores, carregar essa informação na memória do nosso computador e o sistema operacional vai dar as instruções para que o processador controle a placa gráfica (a nossa placa de vídeo) para que as informações apareçam na tela.

A memória primária é a nossa memória RAM, aquela que normalmente ouvimos falar quando queremos comprar um computador ou celular. Normalmente de 2 GB para frente (hoje em dia), mas já foram de capacidade muito menores, assim como os programas que eram executados utilizando elas.

### Memória secundária

Na memória primária os dados são armazenados de maneira temporária. Se você copiar algo utilizando o CTRL+C, este dado é armazenado na memória primária, nossa memória RAM, mas ao reiniciar o sistema operacional vai perceber que isso não está mais na área de transferência. Se você pressionar CTRL+V assim que ligar o PC, nada vai acontecer.

Para guardar informações para depois, utilizamos a memória secundária, nosso disco rígido (o HD), um DVD, um pen-drive. Esses dispositivos possuem suas tecnologias para guardar os 0s e 1s de maneira que possamos recuperar isso depois.

### Dispositivos de entrada e saída

Com o uso do processador nós processamos impulsos elétricos para transformar em dados, com a memória RAM nós temos uma área onde ficam rodando nossos programas e com o HD guardamos dados para depois, mas como nós adicionamos dados e como nós recuperamos isso no computador?

Para isso existem os dispositivos de entrada, como os conectores dos teclados, mouses, controles, etc e de saída, como placa de vídeo e os monitores, impressoras, etc.

Assim como tudo dentro do nosso PC, esses dispositivos também processam eletricidade e dentro deles temos mais transistores e outros componentes eletrônicos que permitem essa comunicação.

Para que algo apareça em nosso monitor, acontecem milhares de cálculos em menos de um segundo e tudo isso é trabalhado entre processador, memórias e placa de vídeo.

### Sistemas operacionais

O sistema operacional é uma coleção de milhares de programas que existem para gerenciar nosso computador e nossos programas. Toda aquela comunicação entre processador, memórias e placa de vídeo, trabalhada para mostrar algo na nossa tela, é orquestrada pelo sistema operacional.

Você já deve ter ouvido falar ou tido problemas com um driver no Windows, Linux ou Mac, que são os sistemas operacionais mais utilizados do mundo. Um driver nada mais é que um programa que se comunica com o hardware e o sistema operacional para que algo aconteça e quem controla a comunicação entre o hardware e o que tentamos fazer (como digitar algo na caixa de comentário deste artigo) é o sistema operacional.

Como eu comentei acima, o Windows, o Linux e o MacOS são os sistemas operacionais mais utilizados em PCs, porém existem outros tanto sendo utilizados em computadores pessoais como em servidores, os computadores que executam tarefas específicas, como nos enviar essa página que você está lendo.

## Linguagens de programação

Agora que entendemos, bem por cima, como funcionam os computadores, chegamos nos programas de fato. Mas para entender como um programa funciona, precisamos entender as linguagens de programação.

As linguagens de programação existem para que uma pessoa possa escrever instruções que serão executadas pelo nosso computador (seguindo todo aquele fluxo que aprendemos anteriormente). Quando criamos um programa, nós criamos um arquivo, em um formato que o computador vá entender que é um programa, como com extensão **.js**, e precisamos escrever as instruções em um idioma que a máquina vá entender. Esse idioma é a linguagem de programação.

Existem muitas linguagens de programação e muitas maneiras de fazer um programa. Dentre essas, tem uma classificação que precisamos entender, que é a questão de linguagens de **alto** e **baixo** nível.

### Linguagens de baixo nível

As linguagens de baixo nível são aquelas mais próximas do código de máquina, como é a linguagem Assembly, que muitos de nós achamos terrível devido a nossa vivência com linguagens modernas.

Um hello world escrito em Assembly é isso aqui:

```sh
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

Nós não escrevemos mais em linguagens de baixo nível, somente em linguagens de alto nível que são compreensíveis por seres humanos (normais).

### Linguagens de alto nível

As linguagens de alto nível são legíveis por seres humanos e algumas são tão declarativas que parece que você está escrevendo uma história em inglês. A primeira linguagem de alto nível é a Plankalkül e hoje em dia ela já não seria algo tão legal.

Um exemplo de código nessa linguagem é este aqui que mostra um programa (em uma transcrição linear), que calcula o máximo de três variáveis ​​chamando a função max3:

```sh
P1 max3 (V0 [: 8.0], V1 [: 8.0], V2 [: 8.0]) → R0 [: 8.0]
max (V0 [: 8.0], V1 [: 8.0]) → Z1 [: 8.0]
max (Z1 [: 8.0], V2 [: 8.0]) → R0 [: 8.0]
FIM
P2 max (V0 [: 8.0], V1 [: 8.0]) → R0 [: 8.0]
V0 [: 8.0] → Z1 [: 8.0]
(Z1 [: 8.0] <V1 [: 8.0]) → V1 [: 8.0] → Z1 [: 8.0]
Z1 [: 8.0] → R0 [: 8.0]
FIM
```

Vamos simplificar nossa vida e conferir como seria um hello world em Python, uma linguagem de alto nível moderna:

```python
print("Hello World")
```

Se traduzirmos a palavra **print**, entendemos que estamos mandando o Python “imprimir” algo.

Se você quiser saber mais sobre as linguagens de alto e baixo nível, confira este artigo [aqui](/posts/o-que-e-linguagem-de-programacao-de-alto-nivel/).

## Programas

Como comentado até aqui, os programas são instruções que o computador irá executar. Esses programas nada mais são que arquivos, onde temos nossas instruções, escritas por pessoas desenvolvedoras de software em linguagens de programação. Este arquivo recebe o nome de **código fonte**.

Para que o computador execute aquilo que escrevemos, em uma linguagem de alto nível, em nosso código fonte, precisamos transformar isso em código de máquina. Este processo de transformação pode ser através da interpretação ou compilação do nosso código fonte.

### Linguagens compiladas

Quando falamos de linguagens compiladas, temos aquelas em que nós, pessoas desenvolvedoras, escrevemos de uma maneira, em um modo de escrever legível e um outro software, o compilador, trata de transformar isso em código de máquina para que nossas instruções sejam executadas diretamente no sistema operacional ou no nosso processador.

Um exemplo é a linguagem C. Se fossemos escrever um código em C, faríamos isso aqui:

```c
#include <stdio.h>
int main()
{
   printf("Hello, World!");
   return 0;
}
```

Mas para o código ser executado, precisa passar pelo compilador, como o [GCC](https://gcc.gnu.org/), um compilador que funciona em sistemas Linux.

### Linguagens interpretadas

Linguagens interpretadas são aquelas em que temos um meio do caminho entre nosso código - que nós escrevemos - e o código que o computador vai executar. Com meio do caminho podemos pensar em um programa que vai ler o que escrevemos, interpretar em tempo de execução e finalmente transformar em código de máquina que pode ser executado pelo sistema operacional/processador.

Um grande exemplo de linguagem interpretada é a que será o foco do nosso curso, o JavaScript. Nós escrevemos JavaScript de modo que nós conseguimos entender o que falamos, mas na hora de executar, existe um programa que lê isso e transforma em código que o sistema operacional pode executar.

### Máquinas virtuais

As máquinas virtuais são softwares interpretadores que leem bytecode, um código intermediário entre código de máquina e código fonte. O bytecode é um código que é gerado para ser interpretado por uma máquina virtual através de um processo de compilação.

Quando rodamos o Java na nossa máquina para acessar um banco, na realidade estamos rodando a máquina virtual do Java. 

O JavaScript possui uma “máquina virtual” que roda em nosso navegador, chamamos essas máquinas virtuais de JavaScript engines (motores de JavaScript). Elas fazem um processo um pouco diferente da JVM (a máquina virtual do Java). O que uma engine JavaScript faz é um processo de compilação em tempo de execução (Just in Time) para código de máquina que é executado pelo sistema operacional ou pelo processador.

## Nosso primeiro hello world

Vamos executar nosso primeiro exemplo de código, para sair um pouco dessa teoria e ver a coisa funcionando.

O nosso primeiro hello world em JavaScript será no navegador, pois isso vai reduzir a quantidade de barreiras de entrada na hora de ver nosso código rodando.

Pressione F12 no seu navegador. Vai aparecer uma caixa de ferramentas na sua tela. Isso são as ferramentas de desenvolvedor(a) do navegador.

Se a aba não estiver selecionada, clique na aba console das ferramentas de desenvolvedor.

![Ferramentas de desenvolvedor na aba console]({{site.post_images}}dev-tools.png)

Agora escreva **alert(“Olá, mundo!”)**, e pressione **Enter**.

Assim que você pressionar o enter, uma mensagem de texto será exibida na sua tela.

![Olá, mundo em JavaScript]({{site.post_images}}hello-js.png)

## Conclusão

Aprendemos o que são programas de computador, como funciona uma máquina dessas, como o processador funciona, depois conhecemos as linguagens de programação e os processos para que um código seja executado pelo nosso sistema operacional ou pelo nosso processador. Por fim ainda fizemos nosso hello world, o primeiro programa que sempre escrevemos ao estudar linguagens de programação.

Com todo este conhecimento em mãos (ou na cabeça), agora podemos começar a aprender programação de fato!

Nos próximos capítulos deste curso vamos aprender a linguagem de programação JavaScript, os primeiros comandos para fazer coisas funcionarem e vamos praticar muito!

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/_uillaz).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/o-universo-da-programacao).

Se você é uma pessoa curiosa e com recursos fincanceiros, tudo o que você precisa saber para entender como os computadores e os programas funcionam, você encontra neste livro aqui: [Organização Estruturada de Computadores, Andrew Tanenbaum](https://amzn.to/2FKAJVy).

## Referências

- [Lógica binária](https://pt.wikipedia.org/wiki/L%C3%B3gica_bin%C3%A1ria)
- [Computer program](https://en.wikipedia.org/wiki/Computer_program)
- [Machine Code](https://en.wikipedia.org/wiki/Machine_code)
- [Memória](https://pt.wikipedia.org/wiki/Mem%C3%B3ria_(inform%C3%A1tica))
- [Sistema binário](https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio)
- [Placa mãe](https://pt.wikipedia.org/wiki/Placa-m%C3%A3e)
- [Linguagem Assembly](https://en.wikipedia.org/wiki/Assembly_language)
- [Plankalkül](https://en.wikipedia.org/wiki/Plankalk%C3%BCl)
- [Programming Languages](https://en.wikipedia.org/wiki/Programming_language)
- [History of Programming Languages](https://en.wikipedia.org/wiki/History_of_programming_languages)
- [Timeline of Programming Languages](https://en.wikipedia.org/wiki/Timeline_of_programming_languages)
- [Linguagem Compilada](https://pt.wikipedia.org/wiki/Linguagem_compilada)
- [Linguagem Interpretada](https://pt.wikipedia.org/wiki/Linguagem_interpretada)
- [JavaScript Engine](https://en.wikipedia.org/wiki/JavaScript_engine)
- [Quora](https://www.quora.com/How-exactly-does-a-computer-program-work-How-do-lines-of-text-tell-a-box-of-wires-to-do-anything-I-thought-computers-were-based-on-0s-and-1s-How-does-it-translate)


Foto de capa por [Alexandre Debiève](https://unsplash.com/photos/FO7JIlwjOtU) via [Unsplash](https://unsplash.com/search/photos/hardware?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
