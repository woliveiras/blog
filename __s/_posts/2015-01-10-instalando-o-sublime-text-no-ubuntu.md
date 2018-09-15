---
layout: post
title: Instalando o Sublime Text no Ubuntu
tags:
  - frontend
  - ferramentas
categories:
  - frontend
  - ferramentas
date: 2015-01-10 19:23:40
description: Como instalar o Sublime Text no Ubuntu
---

Quem me conhece sabe que eu sou um fã do Sublime Text por ele ser um editor excelente com muitos plugins úteis e por isso eu já fiz uma [introdução anteriormente](/posts/usando-o-sublime-text/ "Usando o Sublime Text") sobre o editor e por que eu gosto dele.

Se você usa Ubuntu ou derivados do Debian, vou ensinar como instalar o editor e configurar sem dor de cabeça. :)<!--more-->

![sublime text]({{site.url}}/images/sublime.png)

## Pelo Terminal

Abra o terminal (Ctrl + Alt + T) e execute o seguinte comando:

```shell
sudo add-apt-repository ppa:webupd8team/sublime-text-3 && sudo apt-get update && sudo apt-get install sublime-text-installer
```

## Via pacote .deb

Entre no [site do Sublime Text](http://www.sublimetext.com/ "Sublime Text") e clique na arquitetura que utiliza (32 ou 64), após download é só dar um double click em cima do arquivo ou cambiar até a pasta pelo terminal e executar:

```shell
sudo dpkg -i
```

Assim que instalar, ele ficará como qualquer editor de textos, limpo. Só vai aparecer o arquivo aberto na tela vazio. Então eu deixei umas dicas maneiras sobre as configurações que eu fiz no meu.

## Barra Lateral

Eu sempre coloco a barra lateral exibindo os arquivos abertos. Para isso basta ir em:

**View → Sidebar → Show Open Files**

Quando precisar de espaço na tela, use **Ctrl + K + B** e a barra lateral será ocultada. Se pressionar a mesma sequência de novo a barra volta.

## Configurações pessoais

Clique em **Preferences → Settings – User**. Vai abrir um arquivo de texto com os parâmetros do Sublime. O nome dos parâmetros são auto explicativos, mas se tiver dúvidas pode deixar um comentário que eu te ajudo. O meu está assim:

```shell
{
  "font_face": "Ubuntu",
  "font_size": 12,
  "bold_folder_labels": true,
  "highlight_line": true,
  "highlight_modified_tabs": true,
  "ignored_packages":
  [
    "Vintage"
  ],
  "rulers":
  [
    90
  ],
  "show_full_path": true,
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": true,
  "wrap_width": 90
}
```

Minhas configurações do Sublime estão disponíveis [aqui](https://github.com/woliveiras/configs/tree/master/sublimetext) também.

Basta copiar, colar e salvar que as configurações entram em vigor.

## Package Control

O Package Control é o cara que vai te auxiliar a instalar plugins no Sublime para que ele fique mais caprichado para você. Para instalar, clique em

**View → Show Console**

Acesse [esse site](https://packagecontrol.io/ "Package Control") na guia '**Installation**' e copie o código para instalação para a versão do Sublime que estiver utilizando.

Depois da instalação do Package Control é necessário reiniciar o Sublime (Abrir e fechar o editor, não vai reiniciar seu PC não ein!)

Agora veja essa [lista de Plugins maneiros](/posts/plugins-sublime-text-para-desenvolvimento-web/ "Plugins maneiros para o Sublime") e, se você não clicou no link sobre a introdução lá em cima, clique [aqui](/posts/usando-o-sublime-text/ "Usando o Sublimetext") para conhecer alguns atalhos legais!

Caso tenha mais alguma dica sobre a instalação do Sublime, deixe ai nos comentários. ;D
