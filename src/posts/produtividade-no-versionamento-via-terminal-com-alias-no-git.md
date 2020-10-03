---
title: Produtividade no versionamento via terminal com alias no Git
date: '2019-01-08'
socialImage: "/images/posts/simson-petrol-265126-unsplash.jpg"
tags:
    - git
    - infraestrutura
    - ferramentas
    - dicas
description: "Escrever comandos Git toda hora pode se tornar chato e improdutivo. Utilizando alias Git nossa vida pode se tornar muito mais fácil no versionamento de código."
---
Utilizando o Git no dia a dia, acaba que repetimos os mesmos comandos diversas vezes, pois existem rotinas no nosso fluxo de trabalho que são repetitivas mesmo, como um `git status`, `git stash`, `git log`, `git reset HEAD .` e outros que podemos conferir no artigo [comandos mais utilizados no Git](/posts/comandos-mais-utilizados-no-git/).

Escrever o comando inteiro, várias vezes ao dia, pode se tornar algo chato e improdutivo. Fora os momentos em que esquecemos um comando inteiro e temos que navegar no histórico do Terminal ou mesmo pesquisar na internet para lembrar como faz.

Por isso existe uma maneira de criarmos nossos próprios comandos, os atalhos, para algo mais familiar ou algo mais resumido e fácil de digitar/se lembrar.

Neste artigo vamos conferir uma série de comandos legais que podemos utilizar em nosso fluxo com Git para tornar nossa rotina de versionamento de código mais produtiva.

Alguns dos atalhos que vou comentar são comandos Git que criei para melhorar o meu fluxo de trabalho com o Git e outros são os que eu acabei começando a utilizar depois de ler um artigo ou ver um vídeo legal.

Todos os artigos que eu li sobre o assunto e me ajudaram a melhorar meu workflow estarão listados no final desse texto, caso você queira conferir e dar umas curtidas, ajudar a divulgar o trabalho de outras pessoas que também contribuíram para facilitar a nossa vida. 

## Criando e utilizando um alias no Git

Antes de tudo precisamos entender como criar um atalho no Git. Caso você já saiba, pode pular direto para os comandos que lhe interessam.

Para criar um alias, o atalho para nossos comandos personalizados, basta rodarmos o comando:

```bash
git config --global alias.comando_personalizado "comando que irá rodar quando invocarmos o alias"
```

Um exemplo: imagina que queremos criar um atalho chamado **st**, que seria o mesmo que um `git status` na nossa branch atual.

Bastaria fazer:

```bash
git config --global alias.st status
```

E agora poderíamos invocar nosso alias utilizando um `git st` ao invés de `git status`.

Pronto! Nunca mais vamos digitar um `git stats`, `git staus`, `git sttatus` ou algo errado que sempre nos faz ter que digitar de novo! :joy:

Além de podermos criar comandos utilizando o `git config`, podemos também editar diretamente nosso **.gitconfig**, mas eu prefiro a abordagem de utilizar o Terminal para tudo. Se você quiser editar o arquivo diretamente, pode seguir este tutorial a vontade também, porém precisará fazer:

```bash
git config --global -e
```

Para que o arquivo .gitconfig abra em seu editor favorito. Então bastaria adicionar a chave `alias` no arquivo com a seguinte estrutura:

```text
[alias]
	atalho = comando a ser executado
```

Exemplo para o nosso `git st`:

```text
[alias]
	st = git status
```

Então, quando você encontrar um atalho legal neste texto, pode pegar o nome do atalho e o comando e colocar no .gitconfig ao invés de rodar o comando `git config --global alias...`.

## Aliases Git

Agora sim, vamos partir para os alias mais legais que podemos usar com o Git para aumentar nossa produtividade.

Os comandos estão listados com a linha para configuração, uma explicação do que ele faz (alguns são bem simples e o próprio subtítulo já diz o que ele faz) e como utilizar.

Eu costumo escrever atalhos que dizem o que faz, não somente os `co`, `cc`, `ptz` da vida. Alguns comandos são muito simples e por isso eu utilizo sim uma nomenclatura muito mais abreviada, porém explícito é sempre melhor que implícito e usando um bom Terminal podemos auto completar nossos comandos com o tab e nossa vida será feliz e produtiva do mesmo jeito.

Caso você seja do tipo que não gosta nada de digitar, então sinta-se a vontade para configurar os comandos como forem melhor para você. Os atalhos sempre são muito pessoais, por isso não existe um certo ou errado.

## Básicos

```bash
git config --global alias.st status
git config --global alias.adds "add ."
git config --global alias.pushs "push origin"
git config --global alias.rmbranch "branch -d"
```

Para que serve cada um:

- **st**: mostrar o status da branch atual
- **adds**: adiciona tudo ao stage
- **pushs**: envia tudo para nosso servidor (origin), precisa receber o nome da branch como parâmetro `git pushs nome_da_branch`
- **rmbranch**: deleta uma branch, caso ela tenha sido mergeada, precisa receber o nome da branch como parâmetro `git rmbranch nome_da_branch`

## Criando uma branch e trocando para ela

```bash
git config --global alias.nbranch "checkout -b"
```

Rodando o comando:

```bash
git nbranch nome_da_branch
```

## Unstage geral

Comando para desfazer tudo o que colocamos em stage.

```bash
git config --global alias.unstage 'reset HEAD .'
```

Rodando o comando:

```bash
git unstage
```

## Conferindo a última alteração consolidada no Git

Comando para listar o último commit adicionado no histórico.

```bash
git config --global alias.last 'log -1 HEAD'
```

Rodando o comando:

```bash
git last
```

Teremos um retorno parecido com esse aqui:

```bash
commit a7f333cc0697f22f6011419a77cb96cea05a1de5 (HEAD -> master)
Author: William Oliveira <meuemail@meuprovedor.com>
Date:   Thu Dec 27 06:49:23 2018 -0200

    Update file
```

## Um log mais bonito

Para mostrar um log mais simples, em uma linha única, com o hash do commit, nome do autor, a quanto tempo foi feito o commit e a mensagem de commit, podemos criar algo assim:

```bash
git config --global alias.lg 'log --pretty=format:"%h - %an, %ar : %s"'
```

Rodando o comando:

```bash
git lg
```

Teremos um retorno parecido com isso aqui:

```text
a7f333c - William Oliveira, 27 hours ago : Update file
b61206f - William Oliveira, 2 days ago : eita
ecdd2d0 - William Oliveira, 2 days ago : add arquivo
6fac0dd - William Oliveira, 2 days ago : add tudo
24d340d - William Oliveira, 2 days ago : Add files
5c769e5 - William Oliveira, 2 days ago : Initial commit
```

## Observando a árvore de logs

Existe uma maneira de observarmos a árvore de commits do Git. Seria utilizando o comando `git log --graph`. Isso, por si só, já poderia ser transformado em um atalho, para enxergarmos quando algo entrou na master, quando uma branch nova foi criada, etc.

Mas existe uma maneira mais legal ainda de se fazer esse log, que aprendi com o Tim Pettersen no blog do Hacker Noon, que é essa aqui:

```bash
git config --global alias.graphiclog 'log --graph --abbrev-commit --decorate --all --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)"'
```

Eu só mudei o alias de grog para graphiclog, que é mais explícito pra mim.

Rodando o comando:

```bash
git graphiclog
```

Vai aparecer uma árvore bonita, como essa aqui:

![Imagem da árvore do Git em um gráfico maneiro]({{site.postsImagesPath}}git-graphiclog.png)

## Conclusão

Estes foram os aliases que eu utilizo no meu workflow, então pode ser que você precise de um pouco mais para se tornar realmente mais produtivo(a).

Para isso você pode conferir os artigos de referências que utilizei de inspiração para os meus atalhos logo abaixo.

Você tem algum comando legal que gostaria de compartilhar com a galera? Manda aí nos comentários. :heart:

Não esquece de compartilhar este artigo com o pessoal que não gosta muito de Terminal, pois assim evitamos os erros de digitação e facilitamos a vida das pessoas a utilizarem a tela preta.

## Referências

- [Git Basics - Git Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)
- [Artigo do Tim Pettersen](https://hackernoon.com/lesser-known-git-commands-151a1918a60)
- [Hacker Noon](https://hackernoon.com)
- [16 awesome git aliases that you will love](https://codersopinion.com/blog/16-awesome-git-aliases-that-you-will-love/)

Foto de capa por [Simson Petrol via Unsplash](https://unsplash.com/photos/IojCPQ2rWe8).
