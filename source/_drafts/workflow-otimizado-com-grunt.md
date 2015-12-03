title: Workflow otimizado com Grunt
tags:
  - Automatização
  - Grunt
  - Pastel
id: 320
categories:
  - Automatização
  - Dicas
  - Front End
  - Grunt
date: 2015-01-11 12:44:06
---

[caption id="attachment_273" align="alignleft" width="233"][![Gruntjs](http://woliveiras.com.br/wp-content/uploads/2014/12/grunt_work.jpg)](http://woliveiras.com.br/wp-content/uploads/2014/12/grunt_work.jpg) Gruntjs[/caption]

Quando estamos desenvolvendo algum projeto, normalmente, precisamos repetir algumas tarefas várias e várias vezes. Como eu já disse anteriormente da para automatizar isso com o [Grunt](http://woliveiras.com.br/grunt-automatizando-tarefas/ "Grunt | Automatizando tarefas") ou com o [Gulp](http://woliveiras.com.br/gulp-esse-e-ligeiro/ "Gulp | Esse é ligeiro"). Nesse post vou ensinar como automatizar as coisas com o Grunt.<!--more-->

No post anterior, sobre o Grunt, expliquei como instalar Plugins e configurar as tasks no Grunt. Portanto, nesse, vou explicar somente algumas tarefas que utilizo no meu dia-a-dia. Vou explicando por sequência como está no meu Gruntfile.js.

##### Gruntfile.js

No início do Gruntfile, deixo configurado os caminhos de diretórios que vou utilizar da seguinte maneira:
<pre class="lang:javascript ">paths:{
  prod : 'dist/', // Pasta que receberá os arquivos otimizados
  dev : 'src/' //Pasta onde desenvolvo o projeto.
},</pre>

##### Clean

Em seguida deixo uma task para apagar a pasta dist, caso a mesma já exista:
<pre class="lang:javascript ">clean: {
   dist: {
   src: '<%= paths.prod %>' //pasta que será deletada
 }
},
</pre>
Mais sobre o plugin [aqui](https://github.com/gruntjs/grunt-contrib-clean "Mais sobre o grunt-clean").

##### Copy

Agora vem a task que copia os arquivos do projeto para a pasta de distribuição, que será enviada para o servidor.
<pre class="lang:javascript">copy: {
 files: {
   cwd: '<%= paths.dev %>', //Origem
   src: [
    //O que será copiado
    '**',
    '!/less/**'//Será ignorado
   ]
   dest: '<%= paths.prod %>', //Destino
   expand: true
  }
},
</pre>
Mais sobre o plugin [aqui](https://github.com/gruntjs/grunt-contrib-copy "Mais sobre o grunt-copy").

##### Uglify

Essa é a task que vai minificar os arquivos JS.
<pre class="lang:javascript">uglify: {
 options: {
   mangle: {
     except: ['*.min.js'] //Ignora o que arquivos minificados préviamente
   }
  },
 my_target: {
   files: [{
     expand: true, //Adiciona os arquivos dinamicamente
     cwd: '<%= paths.dev %>js', //Origem
     src: ['**/*.js', '!*.min.js'], //O que será minificado
     dest: '<%= paths.prod %>js' //Destino
    }]
  }
},
</pre>
Conheça mais sobre o plugin [aqui](https://www.npmjs.com/package/uglify-js "Uglify").

##### Imagemin

Minificar as imagens.
<pre class="lang:javascript">imagemin: {
 public: {
   options: { //Opções de minificação
     optimizationLevel: 5,
     progressive: true
   },
 files: [{
   expand: true, //Adiciona os arquivos dinamicamente
   cwd: '<%= paths.dev %>img',//Origem
   src: '**/*.{png,jpg,jpeg,gif}',//O que será minificado
   dest: '<%= paths.prod %>img'//Destino
   }]
  }
},</pre>
Mais sobre o plugin [aqui](https://github.com/gruntjs/grunt-contrib-imagemin "Mais sobre o grunt-imagemin").

##### Less

Tarefa para compilar o Less. Eu não fico rodando essa tarefa a cada edição dos arquivos .less, mais pra frente você vai ver uma tarefinha para facilitar isso. ;D
<pre class="lang:javascript">less: {
 development: { //Opções de compilação
 options: {
   compress: true, //Minificar o arquivo
   optimization: 2 //Nível de otimização do arquivo gerado
   },
 files: {
   //Siga o padrão:
   //caminho/arquivo-gerado.min.css : caminho/arquivo.less
   '<%= paths.dev %>css/style.min.css': ['<%= paths.dev %>less/default.less']
  }
 },
},</pre>
Mais sobre o plugin [aqui](https://github.com/gruntjs/grunt-contrib-less "Mais sobre o grunt-less").

##### Watch

Essa é a tarefa que vai ficar monitorando os arquivos e executando ações conforme configurado. Nesse caso está para monitorar os arquivos .less e compilar.
<pre class="lang:javascript">watch: {
 less: {
   files: ['<%= paths.dev %>less/**/*.less'], // Arquivos que serão monitorados
   tasks: ['less'], //Task que será executada
   options: {
     nospawn: true
    }
  },
}</pre>
Para ficar monitorando basta executar o comando:
<pre class="lang:shell">grunt watch</pre>
Eu prefiro não colocar a tarefa de watch na task default (Aquela que roda quando você executa somente grunt no terminal). Deixo a default para executar quando finalizo o projeto. Ela é quem vai rodar tudo o que precisa para finalizar e enviar para o servidor.

Conheça mais sobre o plugin [aqui](https://github.com/gruntjs/grunt-contrib-watch "Mais sobre o grunt-watch").

Não se esqueça de carregar os plugins no Gruntfile:
<pre class="lang:javascript">grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
</pre>

##### Tarefa default

Como eu disse mais acima, essa tarefa eu deixo para executar ao final do projeto.

Deixo uma tarefa para build também separada para casos onde faço alguma correção rápida que não dependa das outras tarefas para concluir. Ou seja, alguma alteração na pasta de desenvolvimento que não precise ser concatenado de novo, etc.
<pre class="lang:javascript">grunt.registerTask('dist', ['clean', 'copy']);</pre>
E por fim a tarefa default que cria a dist e otimiza tudo!
<pre class="lang:javascript">grunt.registerTask('default', ['dist', 'uglify', 'imagemin', 'less',]);</pre>
Saiba mais sobre a tarefa [default](http://gruntjs.com/creating-tasks#custom-tasks "Grunt default").

Esse é só um exemplo de como eu tenho utilizado, não quer dizer que você não possa desenvolver um Workflow mais otimizado. Então fique pesquise sobre outros plugins e vá adequando a sua forma de trabalhar e de acordo com que sente necessidade em seus projetos.

Fora esses plugins que eu venho utilizando ainda existem ótimas ferramentas como:

*   [Utilizar Livereload com o Watch](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload "Livereload com Watch")
*   [Minificar o CSS](https://www.npmjs.com/package/grunt-contrib-cssmin "Minificar CSS") para quem ainda não utiliza pré processadores (Recomendo fortemente que aprenda muito CSS e depois parta para algum pré processador, será muito bom para agilizar seu Workflow).
*   Utilizar [Sass](https://github.com/gruntjs/grunt-contrib-sass "Plugin para Sass") ou [Stylus](https://github.com/gruntjs/grunt-contrib-stylus "Plugin Stylus") no lugar de Less.
E tem [muito mais](http://gruntjs.com/plugins "Plugins para Grunt") por ai!

Se você conhece algum plugin maneiro, comenta ae! ;D

Referências:

[Automatizando tarefas JS com Grunt - Zeno](http://zenorocha.com/automatizando-tarefas-js-com-grunt/ "Automatizando tarefas JS com Grunt - Zeno")

[Otimize suas tarefas com o Grunt! - Felipe](http://www.felipefialho.com/blog/2013/grunt-voce-deveria-estar-usando/#.VLJcPs3d-b8 "Otimize suas tarefas com o Grunt! - Felipe")

[Grunt](http://gruntjs.com/getting-started "GruntJS")