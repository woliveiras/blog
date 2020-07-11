---
layout: post
title: "Construindo uma API com Node.js - Parte 2: melhorando nossa criação e listagem de dados"
date: 2019-07-02 21:29 -0300
categories:
    - javascript
    - nodejs
    - express
    - série fullstack
image: "/images/posts/josefin-1y-ylJyX318-unsplash.jpg"
tags:
    - javascript
    - nodejs
    - express
    - série fullstack
description: Aprendemos a criar uma API com Node.js, Express, MongoDB e o Atlas. Agora precisamos organizar melhor o nosso código e desenvolver algumas melhorias na utilização da API.
---
No último artigo aprendemos a criar a estrutura básica de uma API com Node.js e Express, buscando dados no Atlas, MongoDB, e utilizando Postman para validação se está tudo funcionando: [Construindo uma API com Node.js - Parte 1: criando e listando dados](/posts/construindo-uma-api-com-node-js-parte-1-criando-e-listando-dados/). Porém tudo sempre pode melhorar.

Quando acessamos a rota de listagem em nossa API, ela retorna dados que não estamos precisando. O retorno é este aqui:

```javascript
[
      {    
        "_id": "5d19e89dcc98671f7fd8b4a3",
        "friend": "Seu Madruga",
        "mention": "A vingança nunca é plena, mata a alma e a envenena",
        "__v": 0
      }
]
```

Também não estamos validando o tipo de entrada quando criamos uma menção, o que possibilitaria que alguém enviasse uma mensagem como essa:

```javascript
{
	"friend": "!",
	"mention": "!"
}
```

Não queremos que isso seja possível.

Outro ponto importante: temos nosso acesso ao model inteiro via controller, se nossa regra de negócio aumentar, esses trechos de código irão ficar com uma responsabilidade muito grande, além de espalhar a chamada ao model em vários locais. Seria legal utilizarmos algum padrão de projeto para organizar essas chamadas e armazenar a nossa lógica de negócios em um único local que pode ser importado por outros controllers, como o **repository pattern**.

Vamos aos trabalhos!

<!-- vscode-markdown-toc -->
* [Retornando somente os dados que desejamos exibir](#Retornandosomenteosdadosquedesejamosexibir)
* [Melhorando nossa organização de código com repository pattern](#Melhorandonossaorganizaodecdigocomrepositorypattern)
* [Validando entradas de dados](#Validandoentradasdedados)
* [Conclusão](#Concluso)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem de copas de árvores" %}

## <a name='Retornandosomenteosdadosquedesejamosexibir'></a>Retornando somente os dados que desejamos exibir

Para limpar o retorno da nossa API, na chamada do método **listMentions**, vamos melhorar a nossa utilização do método **find()** do nosso Model. Ao invés de executarmos Mentions.find() somente com um objeto vazio, vamos parametrizar essa chamada.

Nós temos somente dois campos que desejamos recuperar do banco de dados que são **friend** e **mention**. Então vamos alterar o arquivo **mentions-controller.js** e adicionar a seguinte string logo depois do objeto que vem dentro de find: “friend mention”.

O código ficará assim:

```javascript
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({}, ‘friend mention’);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções!'});
  }
};
```

Agora, ao executar a nossa chamada GET a rota localhost:3000/mentions no Postman, o retorno será algo parecido com:

```javascript
[
    {
        "_id": "5d19e89dcc98671f7fd8b4a3",
        "friend": "Seu Madruga",
        "mention": "A vingança nunca é plena, mata a alma e a envenena"
    },
    {
        "_id": "5d1b263cfa7e0c580519a632",
        "friend": "Chuck",
        "mention": "Prefiro me arriscar no mar alto do que ficar aqui e morrer nesta ilha de merda, falando o resto da minha vida com a droga de uma bola de vôlei!"
    }
]
```

Mas o **_id** ainda está ali. Precisamos remover este valor também. Na nossa string de seleção, podemos dizer que **não desejamos um valor** utilizando o **-**. Então basta colocar **-_id** na chamada.

```javascript
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({}, ‘friend mention -_id’);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções!'});
  }
};
```

Pronto! Agora nosso retorno está OK.

```javascript
[
    { 
        "friend": "Seu Madruga",
        "mention": "A vingança nunca é plena, mata a alma e a envenena"
    },
    {
        "friend": "Chuck",
        "mention": "Prefiro me arriscar no mar alto do que ficar aqui e morrer nesta ilha de merda, falando o resto da minha vida com a droga de uma bola de vôlei!"
    }
]
```

## <a name='Melhorandonossaorganizaodecdigocomrepositorypattern'></a>Melhorando nossa organização de código com repository pattern

Vamos mover as chamadas a nosso Model em um local centralizador da regra de negócio, o repository. Dentro de **src** crie uma pasta chamada **repositories** e dentro dessa pasta crie o arquivo **mentions-repository.js**. Neste arquivo adicione o seguinte conteúdo:

```javascript
const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

exports.listMentions = async () => {
  const res = await Mentions.find({}, 'friend mention -_id');
  return res;
};

exports.createMention = async data => {
  const mention = new Mentions(data);
  await mention.save();
};
```

Perceba que só movemos a camada de manipulação de dados do controller para o repository. Agora vamos ao nosso controller (src/controllers/mentions-controller.js) alterar como chamamos a camada de dados. Altere as linhas de código para o seguinte conteúdo:

```javascript
const repository = require('../repositories/mentions-repository');

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await repository.listMentions();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções!'});
  }
};

// create
exports.createMention = async (req, res) => {
  try {
    await repository.createMention({
      friend: req.body.friend,
      mention: req.body.mention
    });
    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
```

Nós importamos o repository:

```javascript
const repository = require('../repositories/mentions-repository');
```

As chamadas de dados agora são com repository.metodo():

```javascript
const data = await repository.listMentions();
```

E:

```javascript
    await repository.createMention({
      friend: req.body.friend,
      mention: req.body.mention
    });
```

Não mudou muita coisa, não é? Somente a maneira como vamos utilizar a camada de dados que agora fica mais organizada. Se algum dia precisarmos modificar algo na nossa regra de negócios, vamos direto ao nosso repository e não a todos os controllers que chamam nosso model.

## <a name='Validandoentradasdedados'></a>Validando entradas de dados

Na nossa chamada para createMention, não estamos validando se os valores a serem inseridos no banco estão seguindo algum critério. Podemos limitar nossa criação como, por exemplo:

- o nome de amigo(a) precisa ter ao menos 7 caracteres, um número estratégico escolhido pela nossa equipe de UX da mentions-api
- a quantidade de caracteres de uma menção deve ser de no máximo 280 e no mínimo 20

Vamos implementar essas validações.

Para que não precisemos criar várias funções de validações diferentes, podemos utilizar uma lib chamada **express-validator**. Instale o express-validator com o comando:

```shell
npm install --save express-validator
```

Mas existe algo que precisa vir antes de começarmos a manipular as entradas: cuidar para que os dados que estão entrando em nossa API via POST sejam realmente um json ou um tipo de dado que esperamos via body do HTTP, utilizaremos a função express.json, junto com a express.urlencoded.

Adicione no seu **app.js**:

```javascript
// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
```

Agora vamos importar o **check** do express-validator, no nosso mentions-routes.js e adicionar suas validações na hora do POST **check(nome do campo do body).validação**.

```javascript
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', [
    check('friend').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.createMention);

module.exports = router;
```

E no nosso mentions-controller.js vamos importar o **validationResult** e no **createMention** vamos utilizar essa função para retornar um erro, caso o usuário tenha cometido um engano.

```javascript
const { validationResult } = require('express-validator');
const repository = require('../repositories/mentions-repository');

// create
exports.createMention = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  try {
    await repository.createMention({
      friend: req.body.friend,
      mention: req.body.mention
    });
    return res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    return res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
```

Estamos recuperando o array errors de dentro da requisição, que foi adicionado pelo check(), caso o usuário tenha cometido um engano.

```javascript
const {errors} = validationResult(req);
```

Em seguida validamos se errors não está vazio. Se errors possuir algum valor, significa que precisamos tratar isso.

```javascript
  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  
```

Caso tudo estiver OK, o processo continua o mesmo.

Faça um teste. Tente inserir, via POST no Postman, algum valor menor que 7 caracteres no campo friend e menor que 20 ou maior que 280 no campo mentions. Depois liste seus dados, no GET e veja se algo foi inserido.

## <a name='Concluso'></a>Conclusão

Fizemos nossa primeira refatoração de código (alterar o código para uma nova organização ou removemos coisas inúteis/repetidas), validamos dados para garantir integridade da nossa API e ainda limpamos o retorno da nossa listagem de dados para que o retorno fique mais fácil de manipular pelo client-side.

Nos próximos artigos vamos fazer:

- Criar uma função de deletar menções
- Criar uma função de atualizar menções
- Subir nossa API em um serviço de hospedagem

Fique de olho! Me acompanhe no Twitter para saber quando lançar alguma coisa aqui no Blog: [@_uillaz](https://twitter.com/_uillaz).

## <a name='Referncias'></a>Referências

- [Design the infrastructure persistence layer](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)
- [express-validator](https://express-validator.github.io/docs/)

[Photo by Josefin on Unsplash](https://unsplash.com/photos/1y-ylJyX318)