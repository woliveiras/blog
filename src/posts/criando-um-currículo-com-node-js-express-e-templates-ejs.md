---
title: Criando um currículo com Node.js, Express e templates EJS
date: '2019-06-19'
image: "/images/posts/spacex-71873-unsplash-min.jpg"
tags:
    - linux
    - nodejs
    - javascript
    - curso-fullstack
description: Vamos aprender a criar nossas primeiras páginas utilizando Node.js, Express e EJS como template engine. Além disso conheceremos a arquitetura MVC, o modelo cliente servidor e ver um pouco de HTML e CSS.
---
Algo comum quando estamos aprendendo a desenvolver software é a vontade ou a necessidade de praticar. Sabemos que, se focarmos somente em procurar conteúdo, podemos acabar caindo na [paralisia por análise](/posts/pare-de-procurar-conteúdo-e-comece-a-praticar-você-pode-estar-bloqueado-pela-paralisia-por-análise/). Então hoje vamos aprender a criar uma pequena aplicação com Node.js, Express e EJS para colocar uma página HTML com nosso currículo no ar.

Nos últimos artigos aprendemos a utilizar o Git, trabalhar com repositórios no GitHub, linha de comando, como funciona um programa de computador, o básico de programação, e como configurar nosso ambiente de trabalho com Node.js e Visual Studio Code. Já praticamos Node.js criando uma CLI, um jogo de Jokenpô na linha de comando. Se você não sabe nada disso ou não viu os artigos anteriores, confere a série aqui:

[Do zero ao fullstack com Node.js, Express e React.js](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/).

Para este tutorial, espero que você crie um repositório no GitHub e versione seu código com Git. Isso para treinar suas habilidades de versionamento de código e continuar criando seu portfólio.

<!-- vscode-markdown-toc -->
* [O que é o Express](#OqueoExpress)
* [Criando a estrutura básica do projeto com Express](#CriandoaestruturabsicadoprojetocomExpress)
* [Iniciando um projeto Node.js](#IniciandoumprojetoNode.js)
* [Instalar o Express](#InstalaroExpress)
* [Subindo o servidor com Express](#SubindooservidorcomExpress)
* [Servindo páginas HTML](#ServindopginasHTML)
* [Não precisar ficar reiniciando o servidor](#Noprecisarficarreiniciandooservidor)
* [Criando outras rotas](#Criandooutrasrotas)
* [Organizando os dados da nossa página](#Organizandoosdadosdanossapgina)
* [Separando os arquivos de rotas](#Separandoosarquivosderotas)
* [Adicionando estilos a página](#Adicionandoestilosapgina)
* [Gerenciando erros](#Gerenciandoerros)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='OqueoExpress'></a>O que é o Express

Sabemos que Node.js é um ambiente de execução da linguagem de programação JavaScript no lado do servidor e serve para criar vários tipos de softwares desde linha de comando, Web até [IoT (Internet das Coisas)](https://pt.wikipedia.org/wiki/Internet_das_coisas). O Express é um framework, uma ferramenta de programação, que roda em cima do Node.js para criarmos aplicações web das mais variadas.

O Express facilita a nossa vida para não precisarmos nos preocupar com abstrações que outras pessoas já se preocuparam em resolver. Vamos utilizar esta ferramenta para criar uma página web, mas poderia ser utilizada também para servir [APIs REST](https://pt.wikipedia.org/wiki/REST).

## <a name='CriandoaestruturabsicadoprojetocomExpress'></a>Criando a estrutura básica do projeto com Express

Vamos utilizar nosso conhecimento em terminal para criar a estrutura básica do nosso projeto com Express.

Execute os comandos abaixo:

```bash
mkdir curriculo-expresso
cd curriculo-expresso
```

Agora é a hora de você criar um [repositório Git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/) e começar a versionar o desenvolvimento.

## <a name='IniciandoumprojetoNode.js'></a>Iniciando um projeto Node.js

Quando vamos criar um projeto Node.js precisamos criar um arquivo de configuração chamado **package.json** e adicionar as informações da nossa aplicação/pacote.

Execute o comando abaixo no seu terminal e vá respondendo as perguntas do nome do seu projeto, descrição, etc. O que você não souber ou não quiser responder, pode pressionar um enter.

```bash
npm init
```

Caso você não queira responder nada, basta rodar o seguinte comando:

```bash
npm init -y
```

Se você executar este comando, terminal irá retornar a seguinte mensagem:

```javascript
Wrote to /workspace/curriculo-expresso/package.json:

{
  "name": "curriculo-expresso",
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
Com o caminho onde o arquivo foi gerado e as informações que ele preencheu. Caso você queira alterar algo, basta abrir no seu editor de textos e alterar (inclusive faremos isso mais para frente).

Com isso, nosso projeto Node.js está iniciado.

## <a name='InstalaroExpress'></a>Instalar o Express

O Express é uma dependência do nosso projeto. Ele não foi instalado junto com o Node.js quando [configuramos nosso ambiente](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/) de desenvolvimento. Por isso precisamos instalar e adicionar ele no nosso package.json.

Para isso, execute o seguinte comando que irá instalar (install) o Express e salvar o nome do pacote e a versão atual no package.json como uma dependência da aplicação (--save).

```bash
npm install --save express 
```

Será iniciada a instalação do pacote e quando finalizar irá aparecer algo assim:

```bash
➜  curriculo-expresso git:(master) ✗ npm install --save express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN curriculo-expresso@1.0.0 No description
npm WARN curriculo-expresso@1.0.0 No repository field.

+ express@4.17.1
added 50 packages from 37 contributors and audited 126 packages in 3.876s
found 0 vulnerabilities
```

Agora temos a pasta node_modules com o Express, o nosso package.json alterado e um arquivo chamado package-lock.json, que garante integridade na instalação de versões de pacotes, no nosso projeto.

Rodando um comando ls, temos o seguinte retorno:

```bash
➜  curriculo-expresso git:(master) ✗ ls
node_modules      package-lock.json package.json
```

Se executarmos um **git status** no terminal, veremos que o Git nos informa que temos estes arquivos para adicionar ao versionamento.

```bash
➜  curriculo-expresso git:(master) ✗ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	node_modules/
	package-lock.json
	package.json

nothing added to commit but untracked files present (use "git add" to track)
```

Mas não queremos versionar a nossa pasta node_modules. Esta pasta carrega todos os pacotes que utilizamos na aplicação e tudo o que nossos pacotes precisam para funcionar. São muitos arquivos e não precisamos guardar estes arquivos, uma vez que podemos instalar tudo de novo via NPM rodando um **npm install** dentro do diretório com o package.json. Por isso o nosso package.json é tão importante.

Vamos remover a pasta do versionamento. Crie um arquivo chamado **.gitignore** (com ponto no começo mesmo) e adicione o nome dessa pasta nele.

```bash
echo "node_modules" >> .gitignore
```

Agora execute o **git status** novamente e verá que essa pasta não é mais acompanhada pelo Git.

```bash
➜  curriculo-expresso git:(master) ✗ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	.gitignore
	package-lock.json
	package.json
```

## <a name='SubindooservidorcomExpress'></a>Subindo o servidor com Express

Com tudo configurado e instalado, podemos agora subir nosso primeiro servidor com Express. Vamos criar um arquivo chamado app.js e neste arquivo adicionamos o seguinte conteúdo:

```javascript
const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res, next) => {
    res.send({
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
```

O que estamos fazendo aqui é:

```javascript
const express = require('express');
```

Importamos o Express para a nossa aplicação poder utilizar

```javascript
const port = 3000;
```

Criamos uma constante para a porta pela qual as pessoas poderão acessar nosso servidor.

```javascript
const app = express();
```

Instanciamos uma aplicação Express. A partir de agora podemos utilizar os comandos que o Express nos fornece.

```javascript
 app.get('/', (req, res, next) => {
    res.send({
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});
```

Criamos a nossa primeira **rota** de acesso aos nossos recursos. Uma rota diz ao nosso servidor o que deve ser executado quando alguém acessar algum endereço (especificado por nós). Neste caso, quando a pessoa acessar **localhost:3000** será executada a função que envia uma resposta ao cliente (navegador) com o um título e a versão da nossa aplicação.

```javascript
app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
```

Dizemos ao servidor para que fique "escutando" (listen) a porta (port, que é 3000) e damos um console.log no terminal para dizer que está tudo OK.

Para rodar esta aplicação, execute o comando:

```bash
node app
```

Teremos nosso retorno informando que o servidor está no ar.

```bash
➜  curriculo-expresso git:(master) ✗ node app
Server is listening on 3000
```

E podemos então acessar o endereço localhost:3000 no navegador e receber as informações da nossa aplicação.

![Imagem do navegador com o JSON retornado pelo nosso servidor]({{site.postsImagesPath}}meu-primeiro-servidor-express.png)

Agora seria um excelente momento para você guardar no Git as alterações que você fez.

## <a name='ServindopginasHTML'></a>Servindo páginas HTML

O que devolvemos para o navegador nessa primeira instância foi um [JSON (JavaScript Object Notation)](https://pt.wikipedia.org/wiki/JSON), mas nós queremos exibir informações na página. Queremos servir algo elegante. Para isso precisamos servir documentos HTML, que o navegador vai interpretar e finalmente mostrar as coisas de uma maneira interessante.

Vamos instalar um motor de renderização de templates (a nossa camada de visualização) em nosso projeto, o EJS.

Pare o servidor, se ele estiver ativo, com o comando CTRL+C e execute o comando para instalação do EJS:

```bash
npm install --save ejs
```

Agora vamos alterar o nosso app.js adicionando as seguintes linhas:

```javascript
… outros requires

const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```

Também modifique o res.send para **res.render**. Não vamos mais somente enviar dados para o navegador (send), mas renderizar um documento (render) e enviar este documento.

```javascript
app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});
```

Teremos um código assim, no final dessa atualização:

```javascript
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
```

Agora crie a pasta ***views***, pois é nela que vamos adicionar todos os nossos templates. Dentro da pasta views, crie um arquivo chamado **index.ejs**. Repare que não é um arquivo **.js**, mas um **.ejs**, que é a extensão de arquivos de templates que o EJS irá renderizar e transformar em HTML durante o tempo de execução (runtime) do nosso servidor.

Um template engine e os templates, servem para criarmos esqueletos HTML (ou outros tipos de estruturas base) que irão receber algum tratamento, como inserção de dados, e depois será enviado para o usuário final.

Adicione o seguinte conteúdo dentro do index.ejs:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <main>
      <h1><%= title %></h1>
      <p>Bem vindo(a) ao <strong><%= title %></strong></p>
    </main>
    <footer>
        <p>Versão <%= version %></p>
    </footer>
  </body>
</html>
```

Se você nunca mexeu com HTML, isso é uma estrutura de uma página que você acessa no navegador. Pressione o botão direito do mouse sobre esse texto, depois clique em inspecionar elemento. Você verá a estrutura HTML do meu blog. O seu navegador tem o incrível poder de ler isso, interpretar e saber que cada trecho é um tipo de dado semântico que deve aparecer de uma determinada maneira na interface.

As tags HTML são aquelas com abertura e fechamento via sinal de menor e maior que (<>) e sinal de menor e maior que com uma barra no meio (</>). Como a tag main, por exemplo (<main></main>). As tags com um sinal de porcentagem são exclusivas do nosso motor de renderização e servem para receber dados quando o servidor Express for enviar o HTML para o usuário.

Os dados que recebemos aqui foi o objeto JavaScript logo depois do nome do arquivo a ser renderizado:

```javascript
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
```

Ou seja:

```javascript
{
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
 }
```

Você vai precisar desligar o servidor de novo e atualizar a página que está aparecendo no localhost:3000.

![Imagem do navegador com o conteúdo retornado pelo nosso servidor]({{site.postsImagesPath}}servindo-html-com-express.png)

## <a name='Noprecisarficarreiniciandooservidor'></a>Não precisar ficar reiniciando o servidor

Vamos melhorar um pouco a nossa vida. Toda vez que alteramos alguma linha de código nos arquivos .js temos que reiniciar o servidor. Isso para que o Node receba as alterações. Vamos instalar um pacote que pode nos ajudar a não precisar mais reiniciar o servidor, este pacote é o Nodemon.

Instale o nodemon com o comando:

```bash
npm install --save-dev nodemon
```

Repare no **--save-dev**. Agora não estamos salvando este pacote como uma dependência do nosso projeto, mas como uma dependência de desenvolvimento. Isso significa que, se este pacote não estiver instalado e alguém rodar um node app.js a nossa aplicação irá funcionar normalmente. Não precisamos dela na hora de subir nossa aplicação para um servidor conectado a internet (quando colocar em produção).

Agora conseguimos rodar o comando **node_modules/nodemon/bin/nodemon.js app** e nosso servidor vai se atualizar automaticamente quando nosso código for alterado. Mas calma! Não precisa decorar esse caminho e rodar tudo isso toda vez. Adicione o seguinte conteúdo no seu **package.json**:

```javascript
  "scripts": {
    "dev": "node_modules/nodemon/bin/nodemon.js app"
  },
```

A chave "scripts" nos possibilita criar comandos, scripts e rodar isso tudo através do NPM. Agora quando você rodar o comando **npm run dev** o nodemon será executado. Faça isso: desligue o servidor e rode somente o npm run dev.

## <a name='Criandooutrasrotas'></a>Criando outras rotas

Com o nosso servidor rodando em paz, vamos agora criar outras rotas para a nossa aplicação. Temos um portfólio e queremos colocar o nosso currículo ali. Podemos deixar a página inicial como uma página inicial propriamente dita e criar uma outra que é o nosso currículo.

Vamos criar a rota logo abaixo da rota /. Adicione o seguinte código lá:

```javascript
app.get('/curriculo',(req, res, next) => {
    res.render('curriculo');
});
```

E agora crie o arquivo **curriculo.ejs** na pasta views. Como você já aprendeu anteriormente, a rota '/curriculo' estará agora disponível logo depois de localhost. Então poderemos acessar localhost:3000/curriculo e algo será exibido logo depois que criamos o template.

Vamos adicionar a seguinte linha no arquivo index.ejs logo depois do texto "Bem vindo(a)...":

```html
<a href="/curriculo">Meu currículo</a>
```

O arquivo final será:

```javascript
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <main>
      <h1><%= title %></h1>
      <p>Bem vindo(a) ao <strong><%= title %></strong></p>
      <a href="/curriculo">Meu currículo</a>
    </main>
    <footer>
        <p>Versão <%= version %></p>
    </footer>
  </body>
</html>
```

Agora vamos criar o arquivo curriculo.ejs dentro de views e adicionar o seguinte conteúdo nele:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <main>
      <h1><%= title %></h1>
      <p>Bem vindo(a) ao <strong><%= title %></strong></p>
      <strong><%= name %></strong>
      <p><%= profession %></p>
      <p><%= description %></p>
      <ul>
      <% experience.map(experience => { %>
          <li>
              <div>
                  <strong><%= experience.company %>:</strong>
                  <strong><%= experience.office %></strong>
                  <br>
                  <span><%= experience.description %></span>
              </div>
          </li>
      <% }); %>
      </ul>
      <ul>
      <% education.map(education => { %>
          <li>
              <div>
                  <strong><%= education.institution %></strong>
                  <br>
                  <span><%= education.description %></span>
              </div>
          </li>
      <% }); %>
      </ul>
      <ul>
      <% skills.map(skill => { %>
          <li><%= skill %></li>
      <% }); %>
      </ul>
    </main>
  </body>
</html>
```

Temos algo novo aqui! As tags HTML e as tags da template engine continuam existindo, porém apareceram alguns campos utilizando o comando **.map** do JavaScript. Precisamos utilizar o map para iterar sobre a lista de itens, lembra-se dos [laços de repetição?](/posts/la%C3%A7os-de-repeti%C3%A7%C3%A3o-while-e-do-while/)

```javascript
      <% experience.map(experience => { %>
          <li>
              <div>
                  <strong><%= experience.company %>:</strong>
                  <strong><%= experience.office %></strong>
                  <br>
                  <span><%= experience.description %></span>
              </div>
          </li>
      <% }); %>
```

O que acontece é que, para cada item dentro de experience, será executada uma função (aquela função anônima que vem logo na sequência) e então retorna um item HTML (o <li>) com os dados dentro.

Vamos adicionar os dados que este template vai precisar em nossa rota /curriculo.

Confira o meu exemplo:

```javascript
app.get('/curriculo',(req, res, next) => {
    res.render('curriculo', {
        title: 'Meu currículo',
        name: 'William Oliveira',
        profession: 'Software Engineer',
        description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript (já trabalhei com Angular e React), module bundlers, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
        experience: [{
            company: 'Loggi Tecnologia',
            office: 'Software Engineer',
            description: 'Trabalho no squad de desenvolvimento do software de gestão de warehouses da Loggi, o ProXD. Nosso trabalho é automatizar os processos de recebimento, gestão, armazenamento, transferências e expedição de pacotes, cortes, rotas e monitoramento dos pacotes e sacas de entregas para ecommerces.'
        },
        {
            company: 'Casa do Código',
            office: 'Escritor',
            description: 'Autor do livro: O universo da programação: Um guia de carreira em desenvolvimento de software'
        }],
        education: [{
            institution: 'Vida',
            description: 'Sobrevivência nas ruas'
        }],
        skills: ['backend', 'frontend', 'infra', 'mobile']
    });
});
```

Copiado diretamente do meu [LinkedIn](https://www.linkedin.com/in/william-oliveira/).

Altere os dados para suas informações pessoais. 

Acesse o localhost:3000 e clique em currículo.

## <a name='Organizandoosdadosdanossapgina'></a>Organizando os dados da nossa página

Em desenvolvimento de software, em algumas aplicações, trabalhamos com um modelo chamado MVC. O MVC é um padrão de arquitetura de software que usamos para separar as responsabilidades do nosso código. Uma parte de código ficará responsável por cuidar dos nossos dados (o **M**, de Model), a outra será a camada de visualização (que já criamos, a **V**iew) e a última é a cola entre Model e View, é a controladora que busca as informações no modelo para exibir na camada de visualização (o **C**ontroller).

Vamos criar um Model e um Controller para organizar um pouco nosso código. Claro que aqui veremos algo bem simplista, mas vamos tentar aprender o conceito com a explicação.

Crie um arquivo chamado **curriculo-model.js**, dentro de uma pasta chamada **models**. Mova para este arquivo os dados que temos na rota /curriculo por agora.

```javascript
const data = {
    title: 'Meu currículo',
    name: 'William Oliveira',
    profession: 'Software Engineer',
    description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript (já trabalhei com Angular e React), module bundlers, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
    experience: [{
        company: 'Loggi Tecnologia',
        office: 'Software Engineer',
        description: 'Trabalho no squad de desenvolvimento do software de gestão de warehouses da Loggi, o ProXD. Nosso trabalho é automatizar os processos de recebimento, gestão, armazenamento, transferências e expedição de pacotes, cortes, rotas e monitoramento dos pacotes e sacas de entregas para ecommerces.'
    },
    {
        company: 'Casa do Código',
        office: 'Escritor',
        description: 'Autor do livro: O universo da programação: Um guia de carreira em desenvolvimento de software'
    }],
    education: [{
        institution: 'Vida',
        description: 'Sobrevivência nas ruas'
    }],
    skills: ['backend', 'frontend', 'infra', 'mobile']
}

module.exports = data;
```

Acabamos de criar um módulo dentro de nossa aplicação e exportar ele para que outros trechos de código também possam acessar.

Agora vamos criar um arquivo chamado **curriculo-controller.js** dentro de uma pasta chamada **controllers** e adicionar comandos responsáveis por buscar os dados do model:

```javascript
const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => {
    return CurriculoModel;
}

exports.getName = () => {
    return CurriculoModel.name;
}

exports.getTitle = () => {
    return CurriculoModel.title;
}

exports.getProfession = () => {
    return CurriculoModel.profession;
}

exports.getDescription = () => {
    return CurriculoModel.description;
}

exports.getExperience = () => {
    return CurriculoModel.experience;
}

exports.getEducation = () => {
    return CurriculoModel.education;
}

exports.getSkills = () => {
    return CurriculoModel.skills;
}
```

Estamos importando nosso model:

```javascript
const CurriculoModel = require('../models/curriculo-model');
```

E em seguida criamos os métodos capazes de retornar informações deste modelo.

```javascript
exports.getData = () => {
    return CurriculoModel;
}
```

Em uma aplicação real, o esquema do banco de dados estaria no arquivo de model, enquanto as chamadas de dados estariam no controller, bem parecido com nosso exemplo, mas com mais métodos necessários para buscar informação.

Agora vamos utilizar isso na rota. Adicione a importação do controller no arquivo app.js:

```javascript
const CurriculoController = require('./controllers/curriculo-controller');
```

E em seguida altere a rota /curriculo para receber os dados via controller:

```javascript
app.get('/curriculo',(req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});
```

Recarregue a página localhost:3000 e acesse o link /curriculo e veja que tudo continua funcionando normalmente.

## <a name='Separandoosarquivosderotas'></a>Separando os arquivos de rotas

Assim como models, views e controllers, as nossas rotas não podem ficar espalhadas no nosso arquivo app.js. Precisamos separar elas em arquivos, pois elas podem ficar bem maiores e nosso app.js ficaria imenso.

Vamos começar com a rota para a página index. Crie uma pasta chamada **routes** e dentro dessa pasta crie o arquivo **index.js**. Mova a configuração da rota para o arquivo index, mas atente-se para o detalhe dos imports, pois logo abaixo você vai entender o que é isso.

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

module.exports = router;
```

Nós precisamos importar o Express e o express.Router(). Isso porque, dentro do nosso arquivo de rotas, não vamos instanciar novamente o express inteiro. Essa instanciação deve acontecer somente uma vez no arquivo app.js.

O express.Router() será o responsável por registrar as nossas rotas na instância do Express no arquivo app.js e então vem a diferença: não usamos mais app.get, mas **router.get**, mas todo resto é parecido, a rota continua sendo '/' e a função anônima continua sendo a mesma.

Faremos o mesmo para a rota /curriculo. Crie um arquivo chamado **curriculo.js** dentro de **routes** e mova o conteúdo de app.js para ele, com a atenção aos imports e utilização do route.get(). 

Lembre-se de levar o curriculoController também para dentro da rota. Agora este arquivo estará no seu devido lugar.

```javascript
const express = require('express');
const router = express.Router();
const CurriculoController = require('../controllers/curriculo-controller');

router.get('/curriculo', (req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

module.exports = router;
```
## <a name='Adicionandoestilosapgina'></a>Adicionando estilos a página

Nosso currículo está bem feio, não? É só um monte de informações jogadas na tela. Vamos melhorar isso! 

Para adicionar estilos a página, vamos importar arquivos **.css** no nosso HTML. Para isso, precisamos criar uma pasta chamada **public** em nosso projeto. Dentro de public fica tudo o que é arquivo estático que deve ser enviado para o usuário.

Arquivos estáticos são aqueles que não são alterados pelo servidor e devem ser enviados exatamente como estão guardados (diferente do nosso template, que tem dados injetados pelo servidor quando acessamos uma rota).

Depois de criar a pasta public, adicione a seguinte linha ao app.js (pode ser logo abaixo de **const app = express();**):

```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

Repare que utilizamos o comando **use** do Express, não o **set**. Isso porque, agora, estamos utilizando um middleware, uma função que o Express pode utilizar para executar ações, não uma configuração do próprio framework.

Dentro da pasta public, crie uma outra pasta chamada **styles** e dentro de styles adicione um arquivo css chamado **main.css**.

Adicione o seguinte conteúdo no main.css:

```css
body {
    font: 18px "Lucida Grande", Helvetica, Arial, sans-serif;
    line-height: 2;
}

main, footer {
    max-width: 960px;
    margin: 0 auto;
}
```

Nos nossos arquivos **.ejs**, agora precisamos adicionar a linha abaixo dentro das tags <head></head>

```html
<link rel='stylesheet' href='/styles/main.css' />
```

Os arquivos ficarão assim:

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/styles/main.css' />
  </head>

...restante do conteúdo
```

## <a name='Gerenciandoerros'></a>Gerenciando erros

Para finalizar, vamos criar uma página para exibir mensagens de erro amigáveis para a pessoa que acessa o nosso site. Senão, ao acessar uma página que não existe, por exemplo, o usuário vai receber a seguinte mensagem:

```
Cannot GET /curriculo/nem-tem-essa-rota
```

Primeiro instale o pacote http-errors:

```bash
npm install --save http-errors
```

Adicione o import do http-errors em no nosso app.js:

```javascript
const createError = require('http-errors');
```

Logo depois das rotas, adicione o tratamento de erros. Que será:

```javascript
// 404
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});
```

Repare que aqui também utilizamos os middlewares (app.use(função). Estamos criando um erro genérico:

```javascript
// 404
app.use((req, res, next) => {
    next(createError(404));
});
```

Erros de acesso a páginas erradas irão cair nessa função passando o status 404 para o createError. Logo depois temos chamadas para **res.locals.alguma-coisa**. Isso é o mesmo que passar dados para a rota. Estamos criando uma variável local no escopo da função e podemos utilizar isso no template de erros.

```javascript
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});
```

Agora vamos criar nosso template de erros. Crie o arquivo **error.ejs** na pasta **views** e adicione o seguinte conteúdo:

```javascript
<h1><%= message %></h1>
<h2><%= error.status %></h2>
<pre><%= error.stack %></pre>
```

Agora, quando acontecer algum erro, teremos uma página um pouco "mais organizada".

Se você quiser, pode deixar essa página de erros mais bonita. Seu usuário irá gostar disso.

## <a name='Concluso'></a>Conclusão

Aprendemos muita coisa neste artigo. Conhecemos o Express.js, aprendemos a utilizar um motor de renderização (template engine), criamos rotas, models, views e controllers, assim como criamos nosso primeiro site, que pode ficar guardado em nosso GitHub como portfólio de estudos.

Mas quero deixar um desafio para você: termine este currículo adicionando mais informações. Se possível, coloque links para os seus projetos pessoais, iniciativas que você participa e depois compartilhe o link comigo no meu Twitter: [@_uillaz](https://twitter.com/_uillaz). Isso é extremamente importante para que você saia do fluxo de eu estar te dizendo o que fazer e realmente comece a fazer algo com o que você já sabe, ajudando a escapar das [armadilhas do caminho do arco-íris](/posts/o-caminho-do-arco-iris-estudando-programação/).

O código final gerado neste tutorial está neste link: [github.com/woliveiras/curriculo-expresso](https://github.com/woliveiras/curriculo-expresso).

[Photo by SpaceX on Unsplash](https://unsplash.com/photos/-p-KCm6xB9I).
