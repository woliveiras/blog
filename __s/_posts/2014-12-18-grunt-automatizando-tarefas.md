title: 'Grunt | Automatizando tarefas'
tags:
  - Automatização
  - Front End
  - Grunt
  - Pastel
categories:
  - Ambiente
  - Automatização
  - Front End
  - Grunt
date: 2014-12-18 23:34:45
description: Automatizando tarefas com o Grunt
---

Todo processo de desenvolvimento possui algumas tarefas repetitivas como testes, minificação de arquivos, concatenação de arquivos para conseguir modularizar algo, etc.<!--more-->

### O que é o Grunt?

O Grunt é um automatizador de tarefas. Você configura de acordo com o seu [Workflow](https://pt.wikipedia.org/wiki/Fluxo_de_trabalho "Fluxo de trabalho") e deixa ele fazendo essas tarefas repetificas para você. [Mais detalhes sobre o Gruntjs aqui.](http://gruntjs.com/ "Gruntjs").

### Instalação

Será necessário possuir o Node.js e o NPM instalados em sua máquina. Se não possuir o Nodejs instalado eu recomendo seguir esse tutorial para instalar com o NVM, um [wrapper](https://pt.wikipedia.org/wiki/Wrapper "O que é um Wrapper") para a instalação do Node com separação de versões, parecido com o [Virtualenv](https://virtualenv.pypa.io "Virtualenv Python").

Depois disso você precisa instalar o cliente por linha de comando do Grunt:

```
npm install -g grunt-cli
```

Como você percebe, foi instalado o **grunt-cli** não o **grunt**. O grunt-cli é uma interface que disponibiliza os comandos Grunt pelo terminal a partir de qualquer local.

Esse **-g** avisa para o NPM que a instalação deve ser Global, isso significa que ele não será instalado somente para um projeto, mas sim em sua máquina, estando disponível sempre que precisar rodando o comando **grunt**. Esse comando irá configurar o seu *[$PATH](http://www.vivaolinux.com.br/artigo/O-que-e-PATH-como-funciona-e-como-trabalhar-com-ele "O que é $PATH")* e nós podemos prosseguir.

Agora é necessário configurar as tarefas que o Grunt irá executar.

### Configurando as tarefas

#### Package.json

Primeiro, **no diretório do seu projeto**, será necessário possuir o **package.json**, aquele arquivinho de dependências do NPM, pois todo plugin do Grunt que você instalar precisa ser referenciado como dependência nesse arquivo. Isso vai diminuir muito seu trampo depois, pois só com um comando **npm install** será tudo instalado, ao invés de ficar rodando tudo de novo.

Você pode criar manualmente esse arquivo com o ~~Sublimetext~~ seu editor de textos favorito ou rodar o comando:

```
npm init
```

Feito isso você pode instalar os plugins no seu projeto (Instalação Local).

Um exemplo de instalação de Plugin (Não precisa fazer isso agora):

```
npm install grunt-contrib-cssmin --save-dev
```

Com isso, o plugin seria instalado na pasta do seu projeto e ficaria salvo como dependência no package.json. Isso por que você passou o parâmetro **--save-dev**.

Para que o Grunt funcione, você precisa telo instalado no projeto (Você tem uma instalação Global do cliente via terminal com o -g e agora vai instalar o Grunt localmente), para isso execute o comando:

```
npm install grunt --save-dev
```

#### Gruntfile.js

Depois disso, temos tudo pronto para começar a baixar os plugins e configurar o Grunt para rodar eles. A configuração das tarefas do Grunt ficam no arquivo **Gruntfile.js** e você pode criar ele, também, no ~~Sublime~~ seu editor favorito ou com o comando **grunt init**.

Um exemplo de configuração básica do arquivo é o seguinte:

```
module.exports = function(grunt) {
// Configuração do Projeto
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! &lt;%= pkg.name %&gt; &lt;%= grunt.template.today("yyyy-mm-dd") %&gt; */\n'
      },
    build: {
      src: 'src/&lt;%= pkg.name %&gt;.js',
      dest: 'build/&lt;%= pkg.name %&gt;.min.js'
    }
 }
});

// Carrega o Plugin para executar a tarefa "uglify"
grunt.loadNpmTasks('grunt-contrib-uglify');

// Tarefas
grunt.registerTask('default', ['uglify']);

};
```

A linha **grunt.initConfig(config)** especifica onde iniciam as configurações das tarefas.

Todo plugin instalado, deve ser carregado, como mostrado na expressão: **grunt.LoadNpmTask('grunt-contrib-uglify');.**

As tarefas que serão executadas com o comando *grunt (sem passar nenhum parâmetro)* no terminal são registradas como na expessão **grunt.registerTask('default', ['uglify']);** onde foi configurado a tarefa **'default'** (que é executada automaticamente com o comando grunt) que, nesse caso, chamou uma tarefa uglify, mas da para chamar várias ao mesmo tempo.

Se você quisesse executar somente a tarefa uglify, poderia rodar o comando grunt com o parâmtro uglify:

```
grunt uglify
```

Se existisse outra tarefa com o nome *cssmin*, você executaria *grunt cssmin* ou configuraria a tarefa 'default' para chamar também a cssmin:

```
grunt.registerTask('default', ['uglify', 'cssmin']);
```

Um exemplo completo de arquivo Gruntfile.js e, também, do package.json pode ser encontrado aqui no meu boilerplate, o Pastel: https://github.com/woliveiras/pastel

### Dica: O que é instalação Local e Global?

Global é a instalação do Plugin em seu sistema operacional. Assim ele fica disponível em qualquer projeto bastando executar o comando respectivo, como exemplo do [Bower](http://woliveiras.com.br/posts/olha-o-passarinho-falando-sobre-o-bower/ "Olha o passarinho! (Falando sobre o Bower)").
Local é a instalação do plugin em seu projeto - Na pasta do seu projeto.
Todo projeto criado deverá possuir os plugins instalados localmente para funcionar.

Ai vem a duvida: Mas pra que ficar instalando localmente e sobrecarregando o HD do meu PC se eu posso instalar uma vez só Globalmente e usar em todos os projetos?

A resposta é: Imagine que você usa a versão 1.0 de determinado plugin em todos os seus projetos. Meses se passam e você agora utiliza a versão 2.0 onde muita coisa mudou e, de repente, você precisa mexer em um projeto antigo. A tarefa configurada não vai funcionar, você vai ter de configurar de novo.

Você pode pensar: Tá, mas é só copiar o Gruntfile.js de um projeto novo para um antigo. Sim! Isso se for para um projeto, para um plugin, imagina esse cenário acontecendo para diversos projetos e vários plugins.

Portanto é melhor instalar os plugins localmente e com o comando --save-dev para salvar como dependência e deixar mais fácil a próxima instalação. ;)

Para conhecer alguns plugins maneiros, da uma olhada no meu projeto - O Pastel - e olha esse [link também](http://gruntjs.com/plugins "Grunt plugins")

Um exemplo de pesquisa para esse site seria pesquisar por **css** e os plugins que tem relação com CSS irão aparecer.

Referências:

[http://gruntjs.com/getting-started](http://gruntjs.com/getting-started)

[http://simplesideias.com.br/usando-gruntjs](http://simplesideias.com.br/usando-gruntjs)

[http://blog.caelum.com.br/automacao-de-build-de-front-end-com-grunt-js/](http://blog.caelum.com.br/automacao-de-build-de-front-end-com-grunt-js/)

Curtiu o Grunt? Comenta ai quais plugins está usando. Deixe sua contribuição para melhorar ainda mais nosso Workflow. ;)
