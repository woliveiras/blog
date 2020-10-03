---
title: Configurando o ambiente de desenvolvimento fullstack JavaScript
date: '2019-04-20'
socialImage: "/images/posts/jonatan-pie-216311-unsplash.jpg"
tags:
    - javascript
    - nodejs
    - programação
    - ferramentas
    - curso-fullstack
description: Para trabalhar com programação precisamos de um bom editor de textos e do ambiente de execução da nossa linguagem de programação. Neste artigo vamos conhecer um editor legal e aprender a instalar versões do Node.js, que irá executar nosso código JavaScript.
---
Aprender programação utilizando JavaScript como ferramenta de desenvolvimento nos possibilita algo bem interessante que é: não precisamos instalar nada para começar a estudar. Basta um navegador e um editor de textos qualquer, como o Notepad do Windows, Gedit ou Xed do Linux ou o TextEdit do Mac.

Se o objetivo for somente aprender os comandos básicos, sem nem mesmo criar arquivos ou exibir informações no navegador, tudo o que precisamos é do devtools (ferramentas de desenvolvedor do navegador) e nada mais.

Porém, no dia-a-dia, nós utilizamos algumas ferramentas para executar nosso trabalho. Então vamos instalar elas agora mesmo!

> Caso você esteja utilizando Windows e seguindo o curso [fullstack JavaScript](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/), deve ter instalado em sua máquina um [emulador de terminal](/posts/introdução-ao-terminal/) e o [Git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/) que são ferramentas que utilizamos, mas não são necessárias para aprender programar ;)

O que vamos instalar agora é:

- um editor de textos com syntax highlighting
- um ambiente de execução que roda JavaScript

Então vamos nessa!

<!-- vscode-markdown-toc -->
* [Instalando um editor de textos com syntax highlighting](#Instalandoumeditordetextoscomsyntaxhighlighting)
* [Instalando um ambiente de execução que roda JavaScript](#InstalandoumambientedeexecuoquerodaJavaScript)
* [Instalação do NVM](#InstalaodoNVM)
	* [Instalando o NVM no Linux](#InstalandooNVMnoLinux)
	* [Instalando o NVM no Windows](#InstalandooNVMnoWindows)
* [Utilizando o NVM para instalar uma versão do Node.js](#UtilizandooNVMparainstalarumaversodoNode.js)
* [Praticando](#Praticando)
* [Conclusão](#Concluso)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Instalandoumeditordetextoscomsyntaxhighlighting'></a>Instalando um editor de textos com syntax highlighting

Existem diversos editores de texto muito legais, como o SublimeText, Atom e Vim, porém nosso objetivo aqui será instalar um editor simples e leve.

Quando ouvimos falar de syntax highlighting significa que desejamos um editor de textos que deixe as palavras reservadas da linguagem de programação com uma cor diferenciada para facilitar a leitura do nosso código.

Veja um exemplo de código escrito via um editor de textos simples e um com  syntax highlighting:

![Editor de textos simples com um código JavaScript]({{site.postsImagesPath}}TextEdit-JavaScript.png)

![VS Code com um código JavaScript]({{site.postsImagesPath}}VSCode-JavaScript.png)

O primeiro editor é o TextEdit, do MacOS, e o segundo é o VS Code, multiplataforma. 

A minha indicação pessoal é que você utilize o VS Code, pois ele é gratuito, open source e mais leve que o Atom, também gratuito e open.

Ao falarmos de leveza, se tratando de um editor de textos, estamos pensando em velocidade de abertura de arquivos, não travar com arquivos grandes, velocidade de abertura e espaço de memória que ele utiliza para funcionar.

O VS Code foi criado e é desenvolvido pela Microsoft. Existe uma outra ferramenta com o nome parecido, mas ela não é um editor de textos e sim uma IDE completa. Uma IDE é uma ferramenta de edição de código fonte com muito mais recursos que um editor de textos. Elas são muito mais pesadas, porém trazem recursos legais para o desenvolvimento. Porém esses recursos não são necessários em primeira instância. Por enquanto os editores de textos irão nos atender muito bem.

Pessoalmente eu utilizo o VS Code até hoje e ainda não senti necessidade de utilizar uma IDE, mas se você decidir trabalhar com linguagens como Java, Kotlin e outras que precisam de compilação, será legal utilizar uma IDE para agilizar sua vida.

Para instalar o VS Code, siga o site da Microsoft e baixe a versão que funciona no seu sistema operacional: [code.visualstudio.com/download](https://code.visualstudio.com/download).

## <a name='InstalandoumambientedeexecuoquerodaJavaScript'></a>Instalando um ambiente de execução que roda JavaScript

JavaScript, além de uma linguagem muito completa, possui diversos modos de ser utilizada. Uma dessas maneiras é rodando via Node.js, um ambiente de execução de JavaScript utilizado para criar ferramentas de linha de comando, sistemas no backend, interação com hardware e mais.

Nós não vamos instalar o Node.js diretamente em nosso sistema operacional. Existem várias versões de Node e podemos precisar instalar outras mais para frente, quando estivermos trabalhando com sistemas antigos ou para testar funcionalidades mais novas que ainda não podemos utilizar no nosso sistema atual. Para isso, vamos utilizar uma ferramenta chamada NVM.

O NVM (Node Version Management) existe para conseguirmos utilizar várias versões de Node. Ele cria repositórios virtuais e trabalha com esses repositórios para que escolhamos exatamente a versão de Node que queremos rodar em uma determinada ação.

## <a name='InstalaodoNVM'></a>Instalação do NVM

Aqui teremos duas instalações, primeiro para Linux e logo depois para Windows.

Será necessário utilizar o terminal para instalação e utilização do NVM. Se você não sabe utilizar ou tem medo do terminal, confira este post: [introdução ao terminal](/posts/introdução-ao-terminal/).

### <a name='InstalandooNVMnoLinux'></a>Instalando o NVM no Linux

Se você utiliza Linux Ubuntu/Debian/Mint ou derivados execute os seguintes comandos no seu terminal para instalação do NVM:

```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Lembrando que o comando acima vai instalar a última versão de quando eu escrevi esse post, portanto pode estar desatualizada se você for do futuro. Para instalar a última versão do NVM, acesse o link do repositório na sessão referência deste artigo.

Para conseguir utilizar o NVM você precisa efetuar logoff em seu sistema. Se não quiser deslogar agora, pode rodar o comando source ~/.profile no seu terminal.

Para saber se deu tudo certo, rode o comando **nvm --version** no terminal e veja se ele retorna qual a versão instalada em sua máquina.

### <a name='InstalandooNVMnoWindows'></a>Instalando o NVM no Windows

Será necessário baixar o arquivo **nvm-setup.zip** no repositório oficial, neste link: [github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases). No link temos várias versões do NVM, baixe a primeira (que é a que aparece em primeiro lugar na lista de cima para baixo).

Feito isso, basta extrair o arquivo com algum programa de compressão, como o [7Zip](https://www.7-zip.org/). Depois de extraído, de um double click no arquivo e siga o passo a passo de instalação.

Para saber se deu tudo certo, rode o comando **nvm --version** no terminal e veja se ele retorna qual a versão instalada em sua máquina.

## <a name='UtilizandooNVMparainstalarumaversodoNode.js'></a>Utilizando o NVM para instalar uma versão do Node.js

Vamos verificar quais são as versões de Node disponíveis hoje. 

Rode o comando: **nvm ls-remote**

```bash
➜  ~ nvm ls-remote

        ...lista oculta, pois existem várias

      v10.15.3   (Latest LTS: Dubnium)
        v11.0.0
        v11.1.0
        v11.2.0
        v11.3.0
        v11.4.0
        v11.5.0
        v11.6.0
        v11.7.0
        v11.8.0
        v11.9.0
       v11.10.0
       v11.10.1
       v11.11.0
       v11.12.0
       v11.13.0
       v11.14.0
```

Vamos instalar a última versão com o comando **nvm install node**. Com este comando o NVM baixa e instala a última versão (atualmente a 11.14) e já configura ela para utilizarmos, conforme o exemplo abaixo.

```bash
➜  ~ nvm install node
Downloading and installing node v11.14.0...
Downloading https://nodejs.org/dist/v11.14.0/node-v11.14.0-darwin-x64.tar.xz...
###################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v11.14.0 (npm v6.7.0)
```

Repare na linha **Now using node v11.14.0 (npm v6.7.0)**.

Se você executar agora o comando **node --version**, terá um retorno parecido com esse:

```bash
➜  ~ node --version
v11.14.0
```

Sempre que você precisar utilizar o Node, rode o comando **nvm use node**.

Neste momento não precisamos instalar e utilizar versões antigas do Node. Porém, se você precisar, pode rodar o comando de instalação especificando a versão, **nvm install xxx**, e depois rodar o comando **nvm use xxx**.

## <a name='Praticando'></a>Praticando

Vamos praticar o uso do VS Code e Node.js.

Abra o VS Code e crie um arquivo com o comando CTRL+N. Adicione o seguinte conteúdo nesse arquivo.

```javascript
console.log("Olá, Node.js!");
```

Salve este arquivo no seu diretório de trabalho, que criamos no começo dessa série, o workspace ou em algum local de fácil acesso via terminal para você com o nome **hello-node.js**.

Agora execute o comando **node hello-node.js** no seu terminal e, se tudo estiver OK, será apresentada a nossa mensagem de boas vindas ao Node.js em nossas vidas como futuros fullstacks!

```javascript
➜  workspace node hello-node.js
Olá, Node.js!
```

## <a name='Concluso'></a>Conclusão

Temos agora uma instalação do Node pronta para começarmos nossos trabalhos e o editor de textos Visual Studio Code, que é excelente e muito útil para os nossos trabalhos a partir daqui, pois nossos códigos ficarão maiores e precisaremos de certa ajuda para sermos mais produtivos(as).

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/_uillaz).

## <a name='Referncias'></a>Referências

- [NVM](https://github.com/creationix/nvm)

Photo by Jonatan Pie on Unsplash
