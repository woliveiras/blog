---
title: Criando um jokenpô via linha de comando com Nodejs
date: '2019-06-01'
socialImage: "/images/posts/jamked-1637249-unsplash.jpg"
tags:
    - linux
    - nodejs
    - javascript
    - curso-fullstack
description: Criando CLIs, programas de linha de comando com Node.js. Como receber entradas, processar e devolver saídas para o usuário.
---
Programas de linha de comando são extremamente comuns na nossa área. Aprendemos no artigo de [Introdução ao Terminal](/posts/introdução-ao-terminal/) que os comandos que rodamos no terminal são softwares instalados em nosso sistema operacional. Como o comando cd, ls, mkdir, etc.

Neste artigo vamos aprender a criar nosso primeiro programa de linha de comando utilizando Node.js e tudo o que aprendemos até aqui.

## Como funciona um programa de linha de comando

Assim como qualquer software programas de linha de comando executam ações baseado em entradas de dados ou ordens do usuário. Nos softwares visuais temos botões, nos CLI (command line interface, ou interface de linha de comando) nós temos palavras reservadas que o usuário envia para o programa executar alguma ação.

Vamos analisar como funciona o comando **ls**.

Ao executar o comando ls no meu diretório de trabalho, o diretório worspace, recebo o seguinte retorno:

```bash
➜  workspace git:(master) ✗ ls
apps_js
```

O que acontece internamente é a chamada do **programa** ls passando nenhum argumento como parâmetro de execução. 

Agora, se executarmos o comando **ls -la**, o seguinte resultado nos é apresentado:

```bash
➜  workspace git:(master) ✗ ls -la
total 0
drwxr-xr-x   4 woliveiras  wheel   128 Jun  1 18:07 .
drwxr-xr-x  46 woliveiras  wheel  1472 May 28 11:13 ..
drwxr-xr-x  12 woliveiras  wheel   384 Jun  1 18:07 .git
drwxr-xr-x   6 woliveiras  wheel   192 Jun  1 18:07 apps_js
```

Aparecem todos os arquivos e pastas, incluindo diretórios ocultos, como o diretório de controle do Git, o .git. Internamente o comando ls foi chamado passando como argumento o **-la**. Se você não sabe o que é um argumento ou Git, confira estes artigos: [trabalhando com funções](/posts/trabalhando-com-funções-em-javascript/), [trabalhando com versionamento de código](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/).

## Criando a estrutura básica da nossa CLI

Para criar um jogo de Jokenpô via linha de comando, precisaremos receber entradas do usuário, processar os dados e devolver uma saída de dados.

Vamos começar o trabalho criando a estrutura básica da nossa CLI. Se você não possui o Node.js instalado em sua máquina, siga este passo a passo: [configurando o ambiente](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/).

Vamos criar uma pasta chamada **jokenpo**.

```bash
mkdir jokenpo
```

Execute o seguinte comando para começar um projeto com Node.js:

```bash
cd jokenpo
npm init -y
```

O comando **npm init** inicializa um projeto Node.js no diretório atual. Eu passei o parâmetro **-y** para que não seja necessário informarmos dados sobre o nosso projeto.

Nós temos o seguinte retorno no terminal:

```bash
➜  jokenpo git:(master) ✗ npm init -y
Wrote to /opt/loggi/workspace/jokenpo/package.json:

{
  "name": "jokenpo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Vamos criar um arquivo **index.js** que será onde concentramos nossos trabalhos. Pode ser criado via linha de comando ou via Visual Studio Code (ou o seu editor favorito).

## Importando módulos Node.js

Durante o desenvolvimento de software, normalmente nós utilizamos código de outras pessoas em nossas aplicações. Isso porque não precisamos reescrever a roda toda vez que vamos criar um programa. Existem coisas prontas e boas que basta reutilizar. Fora código de terceiros, ainda podemos utilizar módulos nativos da própria plataforma na qual desenvolvemos, neste caso o Node.

Para importar algo no Node.js utilizamos a palavra **require** e atribuímos esta importação a uma constante.

> O padrão de importação de módulos do Node.js pode mudar, se não funcionar do jeito que estou ensinando aqui, confira na [documentação oficial](https://nodejs.org/en/docs/) e mais atualizada.

Vamos importar o módulo **readline**, que nos possibilita ler comandos enviados para o Node.js. Adicione o seguinte trecho de código no seu **index.js**.

```javascript
const readline = require('readline');
```

Agora vamos instanciar nossa interface.

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

E finalmente podemos enviar uma pergunta ao usuário da aplicação.

```javascript
rl.question('Você está gostando do Node.js? ', resposta => {
  console.log(`Sua resposta foi: ${resposta}`);

  rl.close();
});
```

O código final é isso aqui:

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Você está gostando do Node.js? ', resposta => {
  console.log(`Sua resposta foi: ${resposta}`);

  rl.close();
});
```

Execute o programa utilizando a seguinte notação no seu terminal: `node index`.

Você verá que o terminal nos envia a pergunta, fica travado aguardando a resposta e depois irá imprimir o que digitarmos ali.

```javascript
➜  jokenpo git:(master) ✗ node index
Você está gostando do Node.js? SIM
Sua resposta foi: SIM
```

Pronto! Com isso temos nosso módulo readline importado, a instância da interface criada e estamos recebendo inputs e devolvendo outputs de dados.

Podemos agora partir para a criação do nosso jokenpô.

## Recebendo opções do usuário

No trecho `rl.question` estamos enviando uma pergunta ao usuário, que envia uma resposta e ela fica disponível para utilizarmos dentro da função que precede a pergunta. Estamos utilizando uma função anônima (`() => {}`) logo depois da vírgula onde colocamos nossa pergunta, é dentro dessa função que fica disponível a entrada do usuário.

Vamos fazer a seguinte modificação, para que o nosso programa receba uma entrada, processe e devolva uma resposta baseada na escolha do usuário:

```javascript
rl.question('Qual sua jogada, pedra, papel ou tesoura? ', resposta => {
  if(resposta === 'pedra') {
    console.log('Você escolheu pedra!');
  }

  if(resposta === 'papel') {
    console.log('Você escolheu papel!');
  }

  if(resposta === 'tesoura') {
    console.log('Você escolheu tesoura!');
  }

  rl.close();
});
```

Agora precisamos receber uma escolha do computador.

## Disputando com o computador

O computador não vai nos enviar uma entrada de dados, nós precisamos trabalhar isso através do JavaScript. Na maioria das linguagens de programação temos uma função ou método chamado random, que gera um número aleatório. Em JavaScript isso é um método do módulo **Math**, um módulo com funções matemáticas.

Temos três opções que podem ser escolhidas: pedra, papel ou tesoura. Vamos assumir que cada uma delas agora equivale a um número, um para pedra, dois para papel e três para tesoura.

Para gerar um número aleatório a partir de um até três utilizando JavaScript, precisamos do seguinte trecho de código:

```javascript
Math.round(Math.random() * 2) + 1
```

Precisamos do Math.round para arredondar o retorno de Math.random, que sempre vem algo como 0.112213, 0.32312, 0.33412.

Essa linha retorna algo assim:

```bash
➜  jokenpo git:(master) ✗ node
> Math.round(Math.random() * 2) + 1
2
> Math.round(Math.random() * 2) + 1
1
> Math.round(Math.random() * 2) + 1
2
> Math.round(Math.random() * 2) + 1
3
> Math.round(Math.random() * 2) + 1
2
> Math.round(Math.random() * 2) + 1
2
> Math.round(Math.random() * 2) + 1
1
```

Podemos então gerar um conflito entre a escolha do computador e a escolha do usuário.

Vamos criar um mapa de opções que traduz a escolha do usuário para um número que nós conhecemos como pedra, papel ou tesoura.

```javascript
  const opcoes = {
    pedra: 1,
    papel: 2,
    tesoura: 3
  };
```

Agora vamos pegar a resposta que o usuário envia pela linha de comando e transformar isso em um número extraindo a chave do mapa "opcoes".


```javascript
  const escolhaDoUsuario = opcoes[resposta];
```

Agora podemos gerar uma escolha do computador.

```javascript
  const escolhaDoComputador = Math.round(Math.random() * 2) + 1;
```

Vamos pensar nos casos em que o usuário ganha: pedra ganha de tesoura, mas perde para papel, papel ganha de pedra, mas perde para tesoura, tesoura ganha de papel mas perde para pedra, nos casos de escolhas iguais, há o empate.

```javascript
  if (escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
    console.log('Empatou!');
  }
```

Pronto! Temos nossa regra do jogo.

O código final ficou assim:

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual sua jogada, pedra, papel ou tesoura? ', resposta => {
  const opcoes = {
    pedra: 1,
    papel: 2,
    tesoura: 3
  };
  const escolhaDoUsuario = opcoes[resposta];
  const escolhaDoComputador = Math.round(Math.random() * 2) + 1;

  if (escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
    console.log('Empatou!');
  }

  rl.close();
});
```
Agora basta rodarmos o comando `node index` e enviar uma opção.

```bash
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? pedra
Você perdeu!
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? tesoura
Empatou!
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? pedra
Você perdeu!
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? pedra
Você perdeu!
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? pedra
Empatou!
➜  jokenpo git:(master) ✗ node index
Qual sua jogada, pedra, papel ou tesoura? pedra
Você perdeu!
```

## Conclusão

Aprendemos aqui o que é uma CLI, um programa de linha de comando, como importar módulos Node e finalmente criamos um Jokenpô bem simples. 

Utilize isso como portfólio. Melhore o código (dá para melhorar bastante) e envie para o seu GitHub. Se você não sabe fazer isso, confira o artigo sobre [trabalhar com GitHub](/posts/trabalhando-com-repositórios-remotos-git-e-github/).

Espero que este guia lhe ajude a criar outras CLIs no futuro.

Photo by JAMKED on Unsplash.
