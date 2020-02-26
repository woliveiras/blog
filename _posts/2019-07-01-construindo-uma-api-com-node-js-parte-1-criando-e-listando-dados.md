---
layout: post
title: "Construindo uma API com Node.js - Parte 1: criando e listando dados"
date: 2019-07-01 08:26 -0300
categories:
    - javascript
    - nodejs
    - express
    - série fullstack
image: "/images/posts/ed-van-duijn-2uTjeMfeVEU-unsplash.jpg"
tags:
    - javascript
    - nodejs
    - express
    - série fullstack
description: Já sabemos utilizar o Node.js para construir CLIs, Express para criar um site e agora vamos aprender a construir APIs! Neste artigo vamos até a parte de criação e listagem de dados, mas o objetivo é construir um CRUD que você pode até usar como portfólio ou nos futuros hackathons por aí. :)
---
Nos últimos artigos sobre Node.js aprendemos a criar um projeto utilizando o NPM para inicializar e construímos um [Jokenpô com entrada e saída de dados via linha de comando](/posts/criando-um-jokenpô-via-linhha-de-comando-com-nodejs/) e também a utilizamos Express, um framework web, para [construir uma página web para nosso currículo](/posts/criando-um-currículo-com-node-js-express-e-templates-ejs/).

Agora vamos aprender a construir uma API utilizando o Express. A grande diferença de uma aplicação web que renderiza o HTML no servidor e envia para o usuário final, como no exemplo que fizemos na construção do currículo, para uma API é o fato de que ao invés de entregar HTML para quem solicitou algo, nós devolvemos dados puros através de algum formato protocolado de informação.

Existem diversos formatos que podemos utilizar e você já deve ter ouvido ou vai ouvir muito sobre JSON e XML. Isso é nada mais nada menos que a maneira que nós escolhemos envelopar e enviar os dados para quem requisitou algo.

Dentro da internet nós trabalhamos com o modelo de requisição e resposta. Então, quando você acessa um endereço de site, você solicita uma página para um servidor e ele responde com o arquivo *.html*. Mas, principalmente nos sites modernos, depois que você recebeu a primeira página os dados são enviados no formato JSON e nós utilizamos JavaScript no client-side para interpretar esses dados e mostrar para o usuário final.

Ao solicitarmos uma informação para uma API, por exemplo os dados de um usuário, vamos receber algo assim:

```javascript
{
    "nome": "William",
    "idade": "28",
    "contato": "https://twitter.com/w_oliveiras"
}
```

Isso é o conteúdo de um arquivo JSON. Agora nós utilizaríamos o JavaScript para interpretar isso e colocar na tela. Porém também podemos utilizar APIs para trafegar informações entre servidores, onde uma aplicação em um servidor pede informação para outra em outro servidor e assim por diante.

Um exemplo de API que você pode conhecer, explorar e se divertir com ela é a PokéAPI, que lista todas as informações dos Pokémons. Acesse aqui e divirta-se conhecendo uma API: [pokeapi.co/](https://pokeapi.co/).

Mas vamos ao que interessa! Vamos criar a nossa primeira API com Node.js e Express.

## <a name='Oprojeto'></a>O projeto

A minha ideia aqui é criarmos um projeto chamado Mentions. A Mentions existe para salvarmos pérolas (coisas engraçadas) que nossos amigos e amigas dizem durante o dia. Por isso precisaremos armazenar em um banco de dados o nome e frase que essa pessoa falou para depois listarmos isso em uma página web.

Para isso iremos utilizar Node.js, Express e MongoDB (um banco de dados). Inicialmente vamos desenvolver a função de criação, listagem, atualização e deleção de menções. Depois iremos trabalhar tratamentos de erros, autenticação, etc.

<!-- vscode-markdown-toc -->
* [O projeto](#Oprojeto)
* [Inicializando o projeto](#Inicializandooprojeto)
* [Criando o servidor](#Criandooservidor)
* [Conectando ao MongoDB](#ConectandoaoMongoDB)
* [Modelando nosso banco de dados](#Modelandonossobancodedados)
* [Criando os métodos de criar e listar dados do banco](#Criandoosmtodosdecriarelistardadosdobanco)
* [Utilizando o Postman](#UtilizandooPostman)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem de copas de árvores" %}

## <a name='Inicializandooprojeto'></a>Inicializando o projeto

Recomendo que você crie um repositório no GitHub para guardar este nosso projeto, se você não souber fazer isso, siga [este tutorial](/posts/trabalhando-com-repositórios-remotos-git-e-github/). Crie um projeto com o nome **mentions-api**.

Para começar, vamos rodar o comando do NPM para inicializar nosso projeto:

```shell
npm init -y
```

Rodamos com o parâmetro **-y** para não ter que responder as perguntas sobre o projeto, mas se você quiser, pode rodar só o **npm init** e responder cada uma.

Vamos instalar o Express e o Nodemon. O Express é nosso framework web e o Nodemon nos ajuda na hora do desenvolvimento para não ser necessário ficar reiniciando o servidor a cada alteração de código fonte.

Execute no terminal:

```shell
npm install --save express debug && npm install --save-dev nodemon
```

No arquivo **package.json** adicione o seguinte comando na chave **"scripts"**:

```javascript
"dev": "node node_modules/nodemon/bin/nodemon bin/server"
```

O arquivo ficará assim:

```javascript
"scripts": {
    "dev": "node node_modules/nodemon/bin/nodemon bin/server"
}
```

Também vamos criar um arquivo **.gitignore** para adicionar alguns arquivos que não devem ser acompanhados pelo Git.

Execute:

```shell
touch .gitignore
```

E adicione as seguintes linhas no arquivo **.gitignore**:

```
node_modules
.env
```

## <a name='Criandooservidor'></a>Criando o servidor

No nosso comando de inicialização (o comando "dev", que adicionamos no package.json anteriormente) adicionamos o caminho **bin/server** para rodar o nosso servidor. Agora vamos criar esse arquivo, que será responsável por colocar a nossa aplicação de pé.

Crie a pasta **bin** e o arquivo **server.js** dentro dela. Neste arquivo, adicione o seguinte conteúdo:

```javascript
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

// PORT // based on express-generator
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// error handler
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);

    default:
      throw error;
  }
}

// listener handler
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API is alive on ${port}!`);
```

Vamos entender este arquivo.

O que estamos fazendo aqui é chamar as dependências necessárias para subir nosso servidor HTTP e realizar o debug (procurar por erros).

```javascript
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
```

Depois criamos uma função para normalizar a porta em que vamos expor nossa aplicação.

```javascript
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);
```

Em seguida criamos uma função para tratar possíveis erros.

```javascript
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
```

Por fim criamos uma função para escutar o servidor e enfim colocamos ele no de pé.

```javascript
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API is alive on ${port}!`);
```

Agora vamos lá criar a nossa aplicação web!

Crie uma pasta chamada **src** e dentro desta pasta crie o arquivo **app.js** e adicione o seguinte conteúdo:

```javascript
const express = require('express');

// App
const app = express();

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;
```

O que fizemos aqui foi chamar o Express, em seguida instanciamos a aplicação na constante app e chamamos nossa primeira rota, a **'/'**.

Precisamos agora criar o arquivo que cuidará dessa rota. Crie a pasta **routes** dentro de **src** e adicione o arquivo **index-routes.js**. Adicione a este arquivo o seguinte conteúdo:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'MentionsAPI',
    version: '1.0.0'
  });
});

module.exports = router;
```

Com isso o nosso comando **npm run dev** irá funcionar e nosso servidor estará de pé. Faça o teste. Execute o comando no seu terminal (de dentro da pasta mentions-api) e em seguida acesse localhost:3000 no seu navegador.

**Comando npm run dev no VS Code:**

![Imagem do VS Code executando o comando npm run dev]({{site.post_images}}vs-code-comando-npm-run-dev.png)

**Navegador acessando localhost:3000:**

![Imagem do Google Chrome exibindo o conteúdo de localhost:3000]({{site.post_images}}chrome-api-localhost.png)


## <a name='ConectandoaoMongoDB'></a>Conectando ao MongoDB

Para trabalhar com o MongoDB, um banco de dados NoSQL, seria necessário instalar o software em nosso sistema operacional, mas, para economizar nosso tempo e espaço em disco, vamos utilizar um serviço chamado Atlas, da própria marca MongoDB.

Acesse o site [mongodb.com/cloud](https://www.mongodb.com/cloud) e procure pelo botão **Get started free** (ou pelo botão de Login, se você já tiver uma conta na MongoDB Cloud).

Será necessário criar uma conta na plataforma para então criarmos nossos *clusteres* de bancos de dados. Não se preocupe, será tudo gratuito. :smile:

Com sua conta criada e feito o login, agora será necessário criar um projeto, onde vamos criar nossos bancos de dados. Procure pelo botão **New Project** e pode dar o nome de **mentions-api-project**.

![Imagem da criação do projeto]({{site.post_images}}create-a-project-atlas-mongodb.png)

A próxima tela é onde adicionamos mais pessoas para administrar este projeto. No nosso caso não vamos precisar adicionar ninguém, pode somente clicar em **Create Project**.

![Imagem de confirmação com email de administrador]({{site.post_images}}create-a-project-atlas-mongodb-admin-email.png)

Agora temos uma tela para criação de um Cluster, onde vamos armazenar nossos dados.

![Imagem do botão de criação de clusters]({{site.post_images}}create-a-project-atlas-mongodb-create-a-cluster.png)

Clique no botão **Build a Cluster**. Irá aparecer uma tela para escolhermos o provedor de serviços que, atualmente, são: Amazon AWS, Google Cloud e Microsoft Azure. Neste momento tanto faz o provedor que iremos escolher, pois este projeto é somente de exemplo e iremos utilizar o **Free Tier**, versão gratuita dos serviços, que é limitada a 512 MB de armazenamento.  Se quiser, pode deixar como está e clicar em **Create a Cluster**.

![Imagem da criação de cluster no free tier]({{site.post_images}}create-a-project-atlas-mongodb-free-tier.png)

Irá aparecer uma mensagem de andamento da criação do Cluster.

![Imagem da mensagem de andamento de criação do Cluster]({{site.post_images}}create-a-project-atlas-mongodb-creating-a-cluster.png)

Assim que estiver tudo pronto, teremos as métricas de acesso do cluster em nossa tela.

![Imagem das métricas do cluster]({{site.post_images}}create-a-project-atlas-mongodb-clusters.png)

O que vamos fazer agora é a conexão do nosso projeto Node.js com o banco de dados. Para isso vamos utilizar variáveis de ambiente, que vamos colocar em um arquivo de configuração, e o Mongoose, uma lib que facilita a utilização do MongoDB.

Vamos instalar as dependências, execute o comando:

```shell
npm install --save mongoose dotenv
```

A lib dotenv será responsável por ler o arquivo .env que vamos criar em breve (**e que não deve ser enviado para o GitHub**) e carregar as nossas variáveis de ambiente, que vamos criar já já.

Para conectar a um banco de dados precisamos de algumas informações, como: 

- endereço de IP ou domínio do servidor do banco de dados
- a porta pela qual temos acesso a API do banco
- usuário e senha para acesso ao banco

No nosso cluster temos todas essas informações, mas, antes de qualquer coisa, precisamos criar um usuário com poderes leitura e escrita no banco. Procure pelo item **Database Access** no menu do cluster (estará ao lado esquerdo da tela) e em seguida clique em **add new user**.

![Imagem da tela de usuários do cluster]({{site.post_images}}create-a-project-atlas-mongodb-cluster-users.png)

Você pode dar um nome legal para o seu usuário, mas a senha eu recomendo que você use a recomendada pela plataforma clicando no botão **Autogenerate Secure Password**. Na parte de privilégios, deixe como **Read and Write**, leitura e escrita no banco de dados.

![Tela de criação de usuário]({{site.post_images}}create-a-project-atlas-mongodb-cluster-users-creating.png)

Será necessário aguardar o cluster aplicar as configurações.

Agora você pode voltar na tela de clusters (clicando em Clusters, na esquerda) e vamos pegar a connection string, a linha de texto de configuração do nosso banco de dados. Clique em **connect**. Irá aparecer uma tela de configuração de liberação de endereços de IP para acesso ao banco, clique no botão **Allow Access from Anywhere** e depois em **Add** para liberarmos para qualquer endereço, pois inicialmente não teremos controle do endereço de IP da nossa aplicação no servidor de hospedagem. Agora clique em **Choose a connection method**, depois em **Connect Your Application**. O próprio Atlas nos dá a opção de connection string, basta copiar isso e vamos colar em nosso .env. Crie o arquivo **.env** na raiz do nosso projeto (fora da pasta **src**).

![Imagem da connection string]({{site.post_images}}create-a-project-atlas-mongodb-connection-string.png)

No arquivo **.env**, escreva **DATABASE_CONNECTION_STRING** e cole o código que copiou no Atlas. O arquivo ficará parecido com isso aqui:

```shell
DATABASE_CONNECTION_STRING=mongodb+srv://admin:<password>@cluster0-8xYz.mongodb.net/banco?retryWrites=true&w=majority
```

Você terá que modificar o texto **<password>** para a senha do seu usuário. Ficará algo como **usuario:senha** e o restante do conteúdo.

Agora vamos adicionar as linhas de código necessárias para conectar ao Atlas. No arquivo **app.js** adicione as seguintes linhas logo no começo abaixo da chamada do Express **const express = require('express')**:

```javascript
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
```

Depois do nosso `const app = express();`, adicione as seguintes linhas:

```javascript
// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});
```

Se você executou o comando **npm run dev** e deixou ele rodando, o Nodemon deve ter recarregado o código e teremos a seguinte mensagem aparecendo no terminal:

```shell
[nodemon] restarting due to changes...
[nodemon] starting `node bin/server.js`
API is alive on 3000!
Mongoose default connection is open
```

Vamos entender as linhas de código que adicionamos no app.js.

Primeiro nós usamos o mongoose para criar uma conexão com a connection string do banco de dados que passamos via variável de ambiente (process.env.DATABASE_CONNECTION_STRING). Também passamos algumas configurações importantes para o funcionamento do mongoose.

```javascript
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});
```

Em seguida recuperamos a instância do mongoose para podermos manipular o que acontece em alguns momentos, como na hora da conexão com o banco de dados (connected), quando a conexão apresenta erro (error), ao desconectar (disconnected) e quando o usuário matar o processo do Node.js (SIGINT). 

```javascript
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});
```

Com isso temos a nossa aplicação Express conectada com o MongoDB em um cluster na nuvem (cloud) nos servidores da Amazon AWS (ou no que você escolheu como provedor) via Atlas Cloud.

## <a name='Modelandonossobancodedados'></a>Modelando nosso banco de dados

Utilizando o MongoDB, a maneira de modelar o banco de dados é utilizando o Schema. O schema é um objeto JSON que dirá o que temos no banco de dados, o que podemos inserir em um modelo (Model), quais campos são obrigatórios e podemos até fazer validações quando alguém inserir algo ali.

Vamos criar um modelo para as nossas menções. Imaginando que a nossa API será usada por uma aplicação que existe para guardar pérolas que nossos amigos disseram, nós só precisamos guardar o nome do amigo (friend) e o que ele disse (a mention).

Crie a pasta **models** dentro da pasta **src** e depois crie o arquivo **mentions.js** com o seguinte conteúdo:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  friend: {
    type: String,
    required: true,
    trim: true
  },
  mention: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentions', schema);
```

Vamos entender o que aconteceu. 

Nós estamos chamando o módulo mongoose. 

```javascript
const mongoose = require('mongoose');
```

Em seguida instanciamos o Schema, um objeto do namespace mongoose. Assim como fazemos com Express.

```javascript
const Schema = mongoose.Schema;
```

Em seguida nós modelamos nosso schema de fato e exportamos um **model** pelo mongoose.

```javascript
const schema = new Schema({
  friend: {
    type: String,
    required: true,
    trim: true
  },
  mention: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentions', schema);
```

Para que este modelo possa ser acessado por outras partes do sistema, vamos importar ele no nosso arquivo **app.js**. Coloque a seguinte linha de código logo depois da chamada para o banco de dados no arquivo app.js.

```javascript
// Load models
const Mentions = require('./models/mentions');
```

Com isso, em todos os locais que invocarmos o model Mentions, estamos referenciando a uma estrutura que será igual a essa. Quando executarmos um método de inserir dados no banco, o mongoose vai nos solicitar que ele siga os valores tenham a estrutura solicitada no schema, para procurar dados no banco também.

## <a name='Criandoosmtodosdecriarelistardadosdobanco'></a>Criando os métodos de criar e listar dados do banco

Agora podemos partir para a criação dos métodos que irão criar e listar os dados do banco de dados. Para isso crie uma pasta **controllers** dentro de **src** e crie o arquivo **mentions-controller.js** com o seguinte conteúdo:

```javascript
const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createMention = async (req, res) => {
  try {
    const mention = new Mentions({
      friend: req.body.friend,
      mention: req.body.mention
    });

    console.log(mention)

    await mention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
```

Vamos entender este arquivo. Primeiro estamos importando o mongoose e referenciando nosso model Mentions para podermos utilizar seus métodos no controller.

```javascript
const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');
```

Em seguida criamos o método de listagem de dados, que é uma **função assíncrona** que aguarda (await) a chamada de Mentions.find(). Quando Mentions.find retornar algum valor, ele será armazenado em **data** e devolvido pelo express através de **res.status(200).send(data)**. Caso aconteça algo errado, retornamos o erro "Falha ao carregar as menções".

```javascript
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};
```

Logo depois temos o método de inserção de dados, que cria uma instância de Mentions (new Mention) e passa para o modelo os dados que recebemos via **req.body**. A nossa função também é **assíncrona** e aguarda a consolidação da inserção dos dados (await mention.save()). Então temos o envio de uma mensagem para o usuário informando que deu tudo certo ou uma mensagem de erro.

```javascript
exports.createMention = async (req, res) => {
  try {
    const mention = new Mentions({
      friend: req.body.friend,
      mention: req.body.mention
    });

    await mention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
```

Agora temos que criar uma rota para isso acontecer e adicionar a chamada para o nosso controller e a nova rota ao app.js, mas repare que temos alguns pontos novos na nossa aprendizagem até aqui: os códigos 200, 201 e 500 e esse negócio de async e await. Antes de prosseguir, vamos entender o que é isso?

**Códigos de status HTTP**

> Trabalhando com a internet, por baixo dos panos, nós trocamos mensagens entre servidor e navegador, entre servidor e servidor e entre servidor e outros dispositivos. Dentro dessas mensagens existe algo chamado **status code**. Esse status code diz o que aconteceu em nosso servidor, como:
> 
> - 200: tudo OK
> - 201: criado
> - 400: sua requisição tem algum problema
> - 404: o conteúdo que você pediu não foi encontrado
> - 500: deu um problema no nosso servidor
> - 503: serviço inoperante
> 
> Existem muitos status codes. Eles existem para facilitar a comunicação via rede e por isso precisam que ser bem amplos. Na documentação da Mozilla você tem mais status codes, [MDN - HTTP/status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), mas o que precisa para agora são esses que informei.

**Async/Await**

> Async/await é uma maneira de trabalhar com programação assíncrona em JavaScript. Algo assíncrono pode ser uma função, comunicação ou qualquer execução de código que vai demorar um tempo e precisamos esperar isso acontecer para enfim voltar a trabalhar/executar o resto do código. Para que o processamento não fique travado nesse pedaço de código, como no nosso caso que é uma chamada ao banco de dados e isso pode demorar, nós utilizamos o modo async para dizer: Express, espere o banco de dados retornar e depois você pode continuar aqui, enquanto isso pode ir fazer qualquer coisa que ainda tiver que fazer.
> 
> Poderia ser qualquer coisa, como escrever em disco (gravar um arquivo), esperar um cronômetro, aguardar uma chamada para outra API. Para tudo o que for necessário esperar um processamento, podemos utilizar async/await.

Sabendo sobre programação assíncrona e os status code, podemos voltar para a criação da nossa rota e adicionar isso ao app.js. Dentro de **src** navegue até a pasta chamada **routes** e adicione o arquivo **mentions-routes.js** com o seguinte conteúdo:

```javascript
const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMention);

module.exports = router;
```

Essa parte você já deve estar dominando! Estamos importando o Express, instanciando o Router, importando o controller de mentions, criando nossas rotas e enfim exportando nosso router.

Agora adicione ao **app.js** a chamada para a nossa nova rota logo depois da chamada de index-routes.

```javascript
const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);
```

O arquivo app.js estará assim:

```javascript
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Mentions = require('./models/mentions');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);


module.exports = app;
```

Vamos testar se está tudo certo? Para isso vamos precisar de uma aplicação client que consiga enviar get e post. Não conseguiremos fazer isso somente com a URL sendo acessada pelo navegador, vamos precisar criar toda a aplicação JavaScript que executa isso. Como não queremos mexer com frontend neste momento, vamos utilizar um software chamado Postman, que irá nos ajudar a testar as chamadas da nossa API.

## <a name='UtilizandooPostman'></a>Utilizando o Postman

Acesse o link para download do Postman, nosso software de testes de requisição e resposta: [getpostman.com/downloads](https://www.getpostman.com/downloads/). A versão que aparece já será a disponível para o seu sistema operacional, baixe e instale ela.

Com tudo pronto, abra o Postman e irá ver uma tela parecida com essa:

![Tela inicial do Postman, com mensagem de boas vindas]({{site.post_images}}postman-welcome-page.png)

Pode clicar no botão fechar e vamos aprender a fazer chamadas com o software.

![Interface do Postman]({{site.post_images}}postman-interface.png)

Clique no botão de mais (+) e ele irá abrir uma caixa onde você pode inserir um endereço e enviar (clicando em Send). Se a sua API ainda estiver de pé (se você não matou o nosso servidor que roda no npm run dev) adicione o endereço inicial (localhost:3000) e clique em send. Você receberá a resposta como aconteceu no navegador.

![Resposta de localhost:300 no Postman]({{site.post_images}}postman-localhost-3000.png)

Do lado do endereço podemos especificar o verbo HTTP (GET, POST, DELETE, etc) que estamos enviando para o servidor e assim vamos ter as respostas que adicionamos em **app.get** e **app.post** no Express.

Faça um GET em mentions (localhost:3000/mentions) e veja o resultado:

![Postman com a resposta vazia do GET em localhost:3000/mentions]({{site.post_images}}postman-list-data-empty.png)

Agora vamos fazer um POST e criar nossa primeira menção. Mude o verbo para POST, no campo do lado da URL. Deixe a URL como mentions mesmo, pois é a que adicionamos em nossa routes. Logo abaixo da URL temos algumas abas, clique em **Body**, depois selecione **raw** e em seguida selecione **JSON (application/json)**. Cole o seguinte conteúdo dentro da caixa de texto do Postman:

```javascript
{
	"friend": "Seu Madruga",
	"mention": "A vingança nunca é plena, mata a alma e a envenena"
}
```

![Imagem de uma requisição post no Postman]({{site.post_images}}postman-full-post-requisition.png)

Perceba que estamos enviando um JSON com as chaves que precisamos no Schema para a rota mentions com o verbo post. Ele vai ativar a chamada **router.post('/', mentionsController.createMention)** no nosso mentions-controller que vai executar o model adicionando no banco de dados os itens que mandamos via body.

```javascript
    const mention = new Mentions({
      friend: req.body.friend,
      mention: req.body.mention
    });
```

Se tudo sair bem, logo abaixo da nossa caixa de texto, vai aparecer a mensagem que retorna quando o dado é cadastrado no banco com sucesso.

![Imagem de sucesso no Postman]({{site.post_images}}postman-success-post-message.png)

Agora, se entrarmos em localhost:3000/mentions pelo navegador ou enviar um GET localhost:3000/mentions no Postman, vamos receber de retorno o item cadastrado no banco de dados.

![Imagem do Postman com o retorno OK da API]({{site.post_images}}postman-listing-data.png)

## <a name='Concluso'></a>Conclusão

Até aqui temos uma API recebendo requisições e retornando informações. Criamos toda a estrutura de código necessária para trabalharmos em cima disso com Node.js, Express, MongoDB e mongoose. Incluímos variáveis de ambiente para garantir uma certa segurança em nossa aplicação, criamos uma conta e um cluster no Atlas, para guardar nossos dados e já estamos listando e criando dados nas coleções do MongoDB via Postman.

Os próximos passos para nossa API são:

- Limpar a resposta do GET mentions que está retornando informações inúteis para o usuário, como "_id" e "__v"
- Criar uma função de deletar menções
- Criar uma função de atualizar menções
- Subir nossa API em um serviço de hospedagem

Nos próximos artigos vamos aprender isso. Fique de olho!

Me acompanhe no Twitter para saber quando lançar alguma coisa aqui no Blog: [@w_oliveiras](https://twitter.com/w_oliveiras).

[Leia a Parte 2: melhorando nossa criação e listagem](/posts/construindo-uma-api-com-node-js-parte-2-melhorando-nossa-criação-e-listagem-de-dados/)

[Photo by Ed van duijn on Unsplash](https://unsplash.com/photos/2uTjeMfeVEU).
