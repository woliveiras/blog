---
layout: post
title: Como deixar o Ubuntu mais rápido
tags:
  - infraestrutura
  - linux
categories:
  - linux
date: 2015-01-19 05:00:19
description: Como deixar o Ubuntu mais rápido mesmo com Unity
---

Sou fã de Linux, e deixei bem claro [nesse post](/posts/meu-contato-com-o-linux-e-por-que-voce-deveria-testar/ "Meu contato com o Linux e por que você deveria testar"). Atualmente estou usando o Ubuntu e muita gente tem reclamado da performance do Unity. Eu, sinceramente, detestei o Unity quando lançado e não estou gostando do rumo "Windows 8 Metro" que ele tem tomado. O pessoal quer transformar o Sistema que uso no PC o mesmo que eu vou usar no Celular e isso não tem me agradado - Porém isso é papo para outra hora. Vamos ao foco que é melhorar a velocidade do Ubuntu.<!--more-->

!["Ubuntu"]({{site.url}}/images/posts/ubuntu.png)

Minha máquina, hoje em dia, não é nem um pouco robusta - Core i3 de 3.2, 4 GB de memória, HD SATA 3 - e o primeiro PC que eu tive com Ubuntu também não era. Porém, na época era o Ubuntu 10.04, então rodava lisinho!

Para melhorar a velocidade do danado eu fiz as seguintes configurações(Todos os softwares podem ser instalados via Terminal ou pesquisando pelo nome deles na Central de Programas, mas aqui eu só deixei o comando. Pode fazer como você achar melhor. ;D)

## Atualize seu O.S.

Muitas vezes temos problema que são resolvidos pela Canonical com atualizações e, as vezes, a performance depende disso. Portanto atualize agora! É bom ter os drivers de vídeo de fábrica instalados e não os que vem por padrão, mas não vou entrar em detalhes na instalação de Drivers por que é muito variável. Se sua placa for NVidia ou ATI, da uma olhada nesse [post](http://www.edivaldobrito.com.br/como-instalar-os-ultimos-drivers-da-nvidia-ou-ati-no-ubuntu-e-derivados/ "Como instalar os últimos drivers da NVIDIA ou ATI no Ubuntu e derivados") no Blog do Edivaldo que você vai ter uma solução! :D

Execute o seguinte comando sempre que for atualizar o O.S.:

```shell
sudo apt-get updade && sudo apt-get upgrade -y
```

Ou abra o Atualizador. ;)

## Desligue os efeitos visuais

Para essa dica é necessário o uso do terminal, porém é facinho...
Abra o Teminal e abra o arquivo **~/.xprofile**:

Se quiser use o **VI** ou **NANO** pelo terminal, senão curtir ou não conhecer você pode executar:

```shell
sudo gedit ~/.xprofile
```

Localize e mude a linha:

```shell
export UNITY_LOW_GFX_MODE=0
```

Para:

```shell
export UNITY_LOW_GFX_MODE=1
```

**Se o arquivo não existir**, rode o comando:

```shell
echo "export UNITY_LOW_GFX_MODE=1" &gt; ~/.xprofile
```

Agora é só reiniciar ou deslogar e logar novamente.

## Compiz Config Settings Manager

Com a configuração que passei no começo do post os efeitos visuais já serão todos desabilitados, porém ainda da pra brincar mais instalando esse aplicativo que consegue mudar tudo na interface! Mas cuidado! Esse só deve ser utilizado livremente quando você já manjar legal de Ubuntu, pois um erro aqui vai te dar um pouco de dor de cabeça...

Para instalar rode:

```shell
sudo apt-get install compizconfig-settings-manager
```

E com ele instalado poderemos configurar muita coisa. Como:

## Minimizar com um clique

Quando clicamos no ícone do programa na barra lateral do Ubuntu, ele não é minimizado como acontece em outros Sistemas. Para conseguirmos isso basta fazer uma pequena configuração.

Abra o Compiz Config - Basta pesquisar por Compiz no Dash (Menu Iniciar do Ubuntu) - e clique em **Ubuntu Unity Plugin**, clique na aba **Launcher** e deixe marcado a opção **Minimize Single Window Applications (Unsupported).**

## Diminuir ou remover a sombra nas Janelas

Eu diminuo a sombra por que acho bem feio a janela com aquilo... Para diminuir ou remover você vai na aba **Decorations** (Ainda na tela do** Unity Plugin** que mexemos ainda acima), selecione a caixinha **Override Theme Settings **e mude os valores das sombras (Shadow X, Shadow Y, Active Window Shadow). Se colocar 0 em tudo, as janelas ficarão sem nenhuma sombra.

## Menu das janelas aparecendo num piscar de olhos

Sabe quando você maximiza uma janela e o menu some? Então, para fazer eles aparecerem basta passar o mouse no topo da janela, porém eles vem com um efeito de Fade-in/Fade-out. Eu desativo esse efeito para eles virem mais rápido. Ainda no Compiz e na mesma janela do Unity clique na aba **Menus** e deixe tudo **0**. Pronto! Agora será instantâneo.

## Open GL no modo Rápido

[OpenGL](http://pt.wikipedia.org/wiki/OpenGL "OpenGL segundo a Wikipedia") é uma API utilizada para desenvolvimento de aplicativos Gráficos (Tipo o DirectX). Volte a tela inicial do Compiz e clique em **OpenGL**, na opção **Filtro de textura**, mude para **Rápido.** Se a opção **Sincronização** **VBlank** não estiver ativada, ative agora. Vai dar uma boa velocidade pro PC!

## Preload

Em algumas distros ele está vindo por padrão, mas no Ubuntu ainda não. **Essa dica é para quem tem mais de 4GB de RAM**. Ele armazena os programas e libs mais utilizadas em memória fazendo com que a abertura de programas fique muito mais rápida. Olha só:

![ubuntu-preload]({{site.url}}/images/posts/ubuntu-preload.gif)

Para instalar:
<pre class="nums:false lang:sh decode:true">sudo apt-get install preload</pre>

## ZRam

**Se você utiliza SSD no lugar de HD, pode pular esse tópico**.

O I/O em Disco é bem mais lento que em memória RAM. Sabendo disso você pode instalar o ZRam que utiliza a memória RAM no lugar de Disco para área de troca (Swap) o que aumenta consideravelmente a velocidade do seu PC.

```shell
sudo add-apt-repository ppa:shnatsel/zram [PRESSIONE ENTER]
sudo apt-get update [PRESSIONE ENTER]
sudo apt-get install zramswap-enabler
```

## Dicas extra pra deixar o Ubuntu mais melhor de bom

### TLP

Esse salva a minha vida! Ele serve para gerenciar melhor o consumo da bateria pelo Ubuntu.
Para funcionar será necessário remover o gerenciador padrão:

```shell
sudo apt-get remove laptop-mode-tools
```

E agora instale com os comandos:

```shell
sudo add-apt-repository ppa:linrunner/tlp [PRESSIONE ENTER]
sudo apt-get update  [PRESSIONE ENTER]
sudo apt-get install tlp tlp-rdw
```

Mas assim ele só vai ficar instalado e só vai rodar depois de reiniciar o PC, então execute o comando:

```shell
sudo tlp start
```

E ele vai rodar desde já! (Não é necessário reiniciar)

### System Load Indicator

Você gosta de gerenciar o PC, ficar olhando quanto está consumindo de memória, rede, etc? Então esse programinha vai servir muito bem! Ele cria um indicador na barra superior do Ubuntu para você ficar olhando o que acontece.

```shell
sudo apt-get install indicator-multiload
```

Para configurar ele, é só clicar em cima do ícone (Que estará perto do indicador da rede) e depois clicar em preferências. Eu deixo o indicador sempre exibindo o tráfego em minha rede para monitorar se está tudo OK.

### Keylock

Pra quem curte receber avisos quando o Caps Look é ativado basta rodar:

```shell
sudo add-apt-repository ppa:tsbarnes/indicator-keylock [PRESSIONE ENTER]
sudo apt-get update [PRESSIONE ENTER]
sudo apt-get install indicator-keylock
```

Além dessas configurações, se você quiser mais performance ainda é preciso instalar outro gerenciador de Desktop no lugar do Unity ([LXDE](http://lxde.org/pt-br "LXDE"), [XFCE](http://www.xfce.org/ "XFCE"), etc). Nesse caso teríamos uma alternativa bem legal que é o [Xubuntu](http://xubuntu.org/ "Xubuntu").

Todas as dicas eu uso no meu PC, algumas foram através de testes pessoais e outras através de alguns blogs legais sobre o Ubuntu que são esses:

* [Linux Tugaz](https://linuxtugaz.wordpress.com/2014/04/20/deixe-o-seu-ubuntu-14-04-quase-perfeito/ "Linux Tugaz")
* [Elias Praciano](http://elias.praciano.com/2014/05/como-melhorar-o-desempenho-do-ubuntu/ "Elias Praciano")
* [Ubuntu BR SC](http://www.ubuntubrsc.com/como-deixar-seu-ubuntu-mais-rapido.html "UbuntuBRSC")

E você tem alguma dica para melhorar ou personalizar mais as distros? Comenta ae! :D
