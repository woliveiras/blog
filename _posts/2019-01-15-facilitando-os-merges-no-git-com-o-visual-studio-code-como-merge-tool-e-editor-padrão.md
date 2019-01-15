---
layout: post
title: Facilitando os merges no Git com o Visual Studio Code como merge tool e editor
  padrão
date: 2019-01-15 06:29 -0200
image: "/images/posts/todd-quackenbush-701-unsplash.jpg"
categories:
    - git
    - infraestrutura
    - ferramentas
    - dicas
tags:
    - git
    - infraestrutura
    - ferramentas
    - dicas
description: "Existem ferramentas que facilitam nossa vida quando se trata de trabalhar com o Git. O Visual Studio Code, além de um excelente editor de textos, é uma delas."
---
O Visual Studio Code é uma ferramenta de edição de textos fantástica que se mostrou muito versátil e completa. Eu o uso no dia a dia para quase tudo e agora estou passando a inserir em outros contextos para me acostumar mais com o editor.

Para quem utiliza a linha de comando para rodar os comandos do Git, não a interface do Visual Studio Code, podemos rodar o comando `git mergetool`, quando queremos abrir uma ferramenta de merge em casos de conflitos. Podemos utilizar diversas ferramentas como o `vimdiff`, `meld merge`, `Git Kraken` e assim vai.

A um tempo atrás eu utilizava o [Meld](http://meldmerge.org/), que é uma ferramenta bem legal, multiplataforma e open source, e também recomendo para quem não utiliza o Code.

Caso aconteça um conflito em um merge, bastaria executar `meld .` e teríamos uma interface maneira para garantir que não estamos perdendo nada na correção, como na imagem abaixo.

![Meld merge]({{site.post_images}}meld-merge.png)

O mesmo quando vamos fazer um commit e quem aparece é o Vim ou o Nano.

Agora e se quisermos fazer o mesmo, mas com o Visual Studio Code?

![Ferramentas]({{page.image}})
{:.post__wallpaper}

## Configurando o Visual Studio Code como editor padrão no Git

Para configurar o VS Code como editor padrão, basta rodar o comando no terminal:

```shell
git config --global core.editor "code --wait"
```

E quando precisarmos do editor, quem vai aparecer é o VS Code. Como nos casos de **rebase**, **merge**, **commit**, **add -p**, etc.

Para garantir que realmente houveram alterações, podemos rodar o comando que abre as configurações globais do Git no editor de textos e o VS Code irá abrir automágicamente:

```shell
git config --global -e
```

![Utilizando o comando git config --global -e no terminal]({{site.post_images}}git-config-global-e.gif)

## Configurando o Visual Studio Code como ferramenta de merge no Git

Agora, para adicionar o VS Code como nossa ferramenta padrão de merge, vamos rodar o comando `git config --global -e` e adicionar as linhas:

```shell
[merge]
	tool = vscode
[mergetool "vscode"]
	cmd = code --wait $MERGED
```

O arquivo final ficará parecido com este aqui:

```shell
[merge]
	tool = vscode
[mergetool "vscode"]
	cmd = code --wait $MERGED
[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff
```

Agora basta rodar o comando `git mergetool` em um merge com conflitos.

Exemplo:

Digamos que eu acabei de rodar o `git merge master` em uma branch que estava desatualizada.

Ao rodar o `git status` vemos que aconteceu um conflito.

![Conflitos no Git]({{site.post_images}}git-conflict.png)

Podemos então rodar o `git mergetool` e o Visual Studio Code irá abrir com a interface para correção dos conflitos.

![Rodando o comando git mergetool no terminal]({{site.post_images}}git-mergetool-terminal.png)

Aparecerá uma tela como essa:

![VS Code como mergetool]({{site.post_images}}vs-code-mergetool.png)

Onde o que está em verde é o que temos em nossa branch e o que está em azul são as alterações que devemos escolher se aceitamos ou não.

Logo acima das alterações temos os botões para aceitar ou recusar uma alteração:

- **Accept Current Change:** Aceitar a mudança que temos localmente/em nossa branch atual
- **Accept Incoming Change:** Aceitar a mudança que estamos recebendo de outra branch/remoto
- **Accept Both Changes:** Aceitar ambas as alterações
- **Compare Changes:** Comparar as alterações

## Conclusão

Se você estava procurando uma ferramenta para facilitar sua vida utilizando o Git, encontrou!

Estou utilizando o Visual Studio Code para quase tudo e não me arrependo. É uma ferramenta fantástica.

Se curtiu essa dica, não esquece de compartilhar com seus amigos e amigas, seu papagaio viciado em terminal que agora pode começar a utilizar o VS Code para visualizar mudanças com menos dificuldades e para todo mundo que você acha que pode gostar da sugestão.

## Referências

- [Using Version Control in VS Code](https://code.visualstudio.com/Docs/editor/versioncontrol#_git-patchdiff-mode)
- [Using Visual Studio Code as Git merge tool](https://blog.kulman.sk/using-vscode-as-git-merge-tool/)

Foto por Todd Quackenbush no [Unsplash](https://unsplash.com/photos/IClZBVw5W5A).
