---
title: Como configurar o Windows para desenvolvimento frontend
date: '2020-11-07'
tags:
    - frontend
    - windows
    - javascript
    - nodejs
description: Como utilizar o Windows e as ferramentas de trabalho de frontend, como a linha de comando, Nodejs, Git, SSH, etc sem dor de cabeça
socialImage: '/images/posts/ricardo-utsumi-el-5p9cG2o0-unsplash.jpg'
---
<!-- vscode-markdown-toc -->
* [Editor de textos](#Editordetextos)
* [Terminal](#Terminal)
* [WSL e Code](#WSLeCode)
* [Ferramentas de linha de comando](#Ferramentasdelinhadecomando)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Quando comecei no desenvolvimento de software, meu ambiente de programação era o Windows. Na época o Windows XP com Wamp, Notepad+ e Cmder. Se você não conhece nenhuma dessas ferramentas, não se preocupe, só comentei para ativar a nostalgia em algumas pessoas.

O melhor setup que encontrei para trabalhar com programação foi o ambiente Linux, Sublimetext e as ferramentas específicas da linguagem de programação em que eu estivesse programando naquele momento. Fosse PHP, Python e depois o Node.js.

Fiquei com essas ferramentas durante muitos anos, pois é o que melhor funciona com tudo o que uso no dia a dia, mas hoje o Windows 10 veio para me surpreender. A possibilidade de utilizar ferramentas UNIX dentro do próprio Windows, sem precisar de um VirtualBox da vida é algo muito bom, a integração do WSL2 com VS Code está LINDA e explico o porque e como estou utilizando logo abaixo.

Hoje o meu ambiente de trabalho é, em sua maior parte do tempo, focado em JavaScript para frontend. E recentemente precisei voltar ao Windows por ser a melhor ferramenta para trabalhar com streaming na [Twitch](https://twitch.tv/1ilhas). Sério, mesmo se você for uma pessoa tão focada no open source como eu, o Windows me surpreendeu muito e é útil no **meu** fluxo de trabalho hoje em dia.

Vamos ao que interessa, que é a configuração que estou utilizando para trabalhar com frontend.

## <a name='Editordetextos'></a>Editor de textos

Independente de qual sistema operacional eu estiver, o meu editor de textos hoje em dia é o VS Code.

![Editor de textos VS Code](/images/posts/vscode.png)

Hoje, dentro do sistema operacional da Microsoft, talvez faça ainda mais sentido que eu esteja utilizando este editor, pois a integração com o ecossistema está extremamente funcional e útil.

Eu costumo utilizar o editor da maneira como baixamos do site: [code.visualstudio.com](https://code.visualstudio.com/). Mas você pode instalar extensões que achar que precisa.

Do modo como ele vem, já tem tudo o que eu preciso para trabalhar com JavaScript, React, React Native, Nodejs, Git e até o GitHub.

## <a name='Terminal'></a>Terminal

Durante uma live, o [Guilherme Vieira](https://twitter.com/gitlherme), do perifaCode e Tecnogueto, recomendou que eu passasse a utilizar o terminal do Windows no lugar de utilizar o terminal do Ubuntu, que eu estou utilizando via WSL. 

Se você não conhece o WSL, é uma maneira de rodar o kernel Linux dentro do Windows. Então eu posso aproveitar tudo o que o Windows me proporciona e ainda as facilidades e boas práticas com o Linux.

Depois que comecei a utilizar ele, achei melhor do que o direto do Ubuntu (dentro do Windows), porque é mais fluido e integra com todo o resto que utilizamos no sistema.

![Windows Terminal](/images/posts/windows-terminal.png)

Inclusive o Windows Terminal é open source e você pode ajudar o desenvolvimento da ferramenta: [github/microsoft/terminal](https://github.com/microsoft/terminal).

## <a name='WSLeCode'></a>WSL e Code

Como eu comentei anteriormente, a integração do VS Code e WSL está algo maravilhoso, pois explico o porque.

Quando você pega o Windows 10 totalmente zerado, o que precisa fazer é instalar o [WSL2](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) e o Ubuntu (que pode ser adquirido diretamente da loja de aplicativos do sistema, clicando [aqui](https://www.microsoft.com/store/productId/9NBLGGH4MSV6)).

Depois instale o VS Code e o Windows Terminal. Pronto! 

Agora, ao abrir o Ubuntu via Windows Terminal, você pode rodar o seu Git (que pode ser instalado como você instala no seu ambiente Linux normalmente) e baixar os seus projetos. Acesse a pasta do projeto e execute o comando `code .`. O VS Code será aberto com uma conexão direta com o WSL e você pode trabalhar normalmente, como se estivesse em um Linux nativo e feliz da vida.

![Editor de textos VS Code com o WSL ativo](/images/posts/vscode-wsl.png)

Se precisar de ajuda para rodar o Node.js via NVM, venha neste artigo que tem tudo o que você precisa: [configurando o ambiente de desenvolvimento fullstack JavaScript](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/).

## <a name='Ferramentasdelinhadecomando'></a>Ferramentas de linha de comando

Algo que super recomendo a utilização, quando se trata de trabalhar com linha de comando, é utilizar o ZSH e o oh-my-zsh, que traz uma quantidade expressiva de comandos legais para agilizar o nosso fluxo de trabalho.

Com o uso de WSL e Ubuntu, basta abrir o Windows Terminal, acessar o Ubuntu e rodar o `apt install zsh` e depois seguir o [oh-my-zsh](https://ohmyz.sh/).

## <a name='Concluso'></a>Conclusão

É sério, tudo o que você precisa para trabalhar com programação, especificamente com Nodejs e frontend, no Windows, é da instalação do WSL, VS Code e Windows Terminal. Todo o resto você pode fazer normalmente como se estivesse em qualquer ambiente Linux, que normalmente é o nosso padrão para desenvolvimento de software.

Porém algo é extremamente importante quando se fala de Windows, lembre-se de manter o seu sistema operacional atualizado, fazer limpeza quando sentir que está começando a ficar lento e, se preciso, utilize configurações focadas em performance.

O Windows 10 está muito rápido. Eu nem reclamei das atualizações, pois a velocidade de reboot foi fantástica. Então sim, hoje em dia eu recomendaria o uso de Windows para trabalhar com programação. Dou o braço a torcer dessa vez (só hoje, ein).

O uso de WSL também não substitui o uso do [Docker](/tags/docker/). Uma coisa não tem há ver com a outra, ok?

Espero que este artigo te ajude, principalmente se for meu aluno ou minha aluna no [curso de frontend](/curso/frontend-software-engineer/). E caso realmente tenha sido útil, compartilhe por aí!
