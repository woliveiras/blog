title: Facilitando o desenvolvimento Nodejs com Nodemon
date: 2017-01-06 07:51:38
categories:
  - Nodejs
  - JavaScript
  - NPM
tags:
  - Nodejs
  - JavaScript
  - Nodemon
  - NPM
  - dicas
description: O que fazer para não precisar reiniciar o Nodejs a cada alteração nos arquivos. Escutando arquivos e diretórios com Nodemon. Facilitando o desenvolvimento Nodejs.
---
Criar um script Nodejs e rodar no Terminal é algo muito fácil. Basta escrever seus comandos em um arquivo JavaScript (.js) e rodar o comando `node script.js` ou `node script`. Claro, tem que ter o Nodejs instalado em seu SO.

Para facilitar mais a nossa vida no ambiente de desenvolvimento ainda podemos utilizar o [NVM para gerenciar versões do Nodejs](/posts/utilizando-versoes-antigas-do-nodejs/) em nosso SO. Assim podemos ter várias versões, além da mais atual e podemos rodar nossa aplicação ou aplicações em seu ambiente mais favorável.

O que acaba ficando chato é que, a cada alteração que fazemos em um arquivo, precisamos reiniciar a aplicação com o comando `node script ou scriptjs`.

Para não sofrer com isso podemos utilizar um módulo muito prático do Nodejs, o [Nodemon](https://nodemon.io/). <!-- more -->

## O que é o Nodemon

Segundo o próprio website do Nodemon, esse módulo é um utilitário que irá monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário.

> “Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.”

## Instalação e utilização do Nodemon

A instalação é muito simples e via NPM. Basta rodar o comando:

```
npm install -g nodemon
```

E para rodar seus scripts, basta executar:

```
nodemon script.js
```

Ao invés de `node script.js`.

Faça um teste: crie um script chamado `hello-nodemon.js` com o seguinte conteúdo:

```
console.log(“Hello Node”);
```

E rode o comando:

```
nodemon hello-nodemon.js
```

Veja a saída do console no terminal. Deve estar escrito “Hello Node”.

![Saída do Nodemon como Hello Node](https://s23.postimg.org/3mo38xkij/hello_node_with_nodemon.png)

Agora altere a string de `“Hello Node”` para `Hello Nodemon` e veja o console do Node novamente. Agora aparece “Hello Nodemon” e você não precisou reiniciar o Node.

![Saída do Nodemon como Hello Nodemon](https://s23.postimg.org/u90jxwopn/hello_nodemon.png)

## Ignorando arquivos

Por padrão o Nodemon já ignora os diretórios e arquivos `.git`, `node_modules`, `bower_components`, `.nyc_output`, `coverage` e `.sass-cache` e você pode escolher o que ignorar utilizando o comando:

```
nodemon app.js --ignore “arquivos ou diretorios”
```

Onde `app.js` seria o arquivo principal da sua aplicação e o que vem depois do parâmetro `--ignore` será ignorado pelo Nodemon (sem as aspas).

Caso você queira mudar a maneira como o Nodemon ignora os diretórios padrões, fazendo com que ele escute alterações no diretório `node_modules`, por exemplo, você pode sobrescrever essas regras criando um arquivo `nodemon.json` no seu diretório `/home` com o seguinte conteúdo:

```
{
  "ignoreRoot": ["diretorios", “ou”, “arquivos”, “ignorados”]
}
```

Agora ele passaria a ignorar somente o que você colocou entre as chaves, separados por vírgula e com as aspas. - um array.

## Comandos úteis

Você pode encontrar os comandos do Nodemon e mais informações sobre o módulo em sua [documentação](https://github.com/remy/nodemon#nodemon) ou rodando o comando:

```
nodemon -h
```

A combinação NVM + Nodemon faz toda diferença no nosso fluxo de trabalho.

Você gostou desse artigo? Já usava o Nodemon e tem mais dicas? Então comenta aqui em baixo, compartilha com os amigos nas redes sociais, manda pro seu furão pra ele parar de reclamar de reiniciar o Nodejs a cada alteração.

Espalhe a palavra.
