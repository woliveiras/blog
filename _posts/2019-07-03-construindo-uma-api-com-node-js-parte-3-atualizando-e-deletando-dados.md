---
layout: post
title: 'Construindo uma API com Node.js - Parte 3: atualizando e deletando dados'
date: 2019-07-03 06:54 -0300
categories:
    - javascript
    - nodejs
    - express
    - série fullstack
image: "/images/posts/artur-luczka-loAfOVk1eNc-unsplash.jpg"
tags:
    - javascript
    - nodejs
    - express
    - série fullstack
description: Já aprendemos a criar uma API com Node.js, Express, MongoDB e o Atlas, organizar nosso código utilizando repository, construímos nossos métodos de inserção e listagem. Agora vamos aprender a criar os métodos para atualização e remoção de dados no banco.
---
Na nossa jornada aprendendo programação do zero até o desenvolvimento de sistemas, já passamos por muita coisa: [do zero ao fullstack com JavaScript](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/).

No último tutorial, aprendemos a organizar melhor o nosso código, validar entradas de usuários e a fazer buscas melhores no banco de dados MongoDB. No anterior aprendemos a começar a nossa API. Confira os dois artigos abaixo.

- [Construindo uma API com Node.js - Parte 1: criando e listando dados](/posts/construindo-uma-api-com-node-js-parte-1-criando-e-listando-dados/)
- [Construindo uma API com Node.js - Parte 2: melhorando nossa criação e listagem de dados](/posts/construindo-uma-api-com-node-js-parte-2-melhorando-nossa-criação-e-listagem-de-dados/)

Neste artigo vamos criar a nossa função de atualização e uma outra para deletar dados. A pessoa poderá informar um ID de menção e as novas informações e nossa API irá enviar isso para o banco de dados ou informar um ID de menção e a API irá deletar a informação. 

Vamos começar pela função de atualização e depois vamos para a de deleção.

<!-- vscode-markdown-toc -->
* [Criando a função de update](#Criandoafunodeupdate)
* [Importando a função de update no controller](#Importandoafunodeupdatenocontroller)
* [Adicionando uma rota para a atualização](#Adicionandoumarotaparaaatualizao)
* [Testando o update no Postman](#TestandooupdatenoPostman)
* [Atualizando o app.js](#Atualizandooapp.js)
* [Criando a função de delete](#Criandoafunodedelete)
* [Importando a função de delete no controller](#Importandoafunodedeletenocontroller)
* [Adicionando uma rota para deleção](#Adicionandoumarotaparadeleo)
* [Testando o delete no Postman](#TestandoodeletenoPostman)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem de copas de árvores" %}


## <a name='Criandoafunodeupdate'></a>Criando a função de update

No arquivo **mentions-repository.js** adicione a seguinte função:

```javascript
exports.updateMention = async (id, data) => {
  await Mentions.findByIdAndUpdate(id, {
    $set: data
  });
};
```

Estamos utilizando o método **findByIdAndUpdate** que busca algum valor no banco de dados pelo ID e passa uma atualização para este dado. Dentro do método temos uma diretiva chamada **$set**, é ela quem diz ao banco o que deve ser atualizado.

## <a name='Importandoafunodeupdatenocontroller'></a>Importando a função de update no controller

Com a nossa nova função criada no repository, vamos trazer a chamada dela para o nosso controller. Em **mentions-controller.js** adicione o seguinte conteúdo:

```javascript
exports.updateMention = async (req, res) => {
  try {
    await repository.updateMention(req.params.id, req.body);
    res.status(200).send({
      message: 'Menção atualizada com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar a menção.'});
  
};
```

Repare que estamos informando um ID de menção e passando um valor para body. Este valor será um objeto contendo os valores que devem ser atualizados.

## <a name='Adicionandoumarotaparaaatualizao'></a>Adicionando uma rota para a atualização

Já temos a função de transformação no repository, a chamada no controller, agora falta adicionarmos a rota para atualização dos dados. 

Sabemos que GET é para receber valores, POST é para enviar valores. Para atualização de dados via API, temos o verbo PUT do HTTP e receber um parâmetro, que é o nosso ID, para passar para o método updateMention.

No nosso caso, estamos trabalhando unicamente com as rotas, por isso vamos receber o ID via URL também. O modo de passar dados via URL pelo Express (e pela maioria dos frameworks web) é informando a rota, dois pontos e o nome do parâmetro que ficará disponível no servidor.

No arquivo **mentions-routes.js**, adicione o seguinte código:

```javascript
router.put('/:id', mentionsController.updateMention);
```

A string **'/:id** é a nossa rota (“/”) e o parâmetro que ficará disponível (“:id”). Com isso temos tudo pronto. Mas não podemos esquecer de validar as entradas de dados!

Vamos configurar nosso router.put com o seguinte código:

```javascript
router.put('/:id', [
    check('friend').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').optional().isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.updateMention);
```

Volte no arquivo **mentions-controller.js** e também atualize com a validação dos erros:

```javascript
exports.updateMention = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  

  try {
    await repository.updateMention(req.params.id, req.body);
    return res.status(200).send({
      message: 'Menção atualizada com sucesso!'
    });
  } catch (e) {
    return res.status(500).send({message: 'Falha ao atualizar a menção.'});
  
};
```

## <a name='TestandooupdatenoPostman'></a>Testando o update no Postman

Vamos verificar se está tudo OK?

No Postman, altere o verbo HTTP para PUT, conforme aprendemos no primeiro artigo, adicione o ID de alguma menção depois do localhost:3000/mentions e envie algum valor no body da requisição. Algo como:

```javascript
{
	"mention": "Essa é uma nova menção adicionada via PUT"
}
```

Para conseguir um ID, você pode entrar na interface do Atlas. Acesse o Atlas, e clique em **collections**. Você verá algo como:

![Imagem do Atlas e os IDs das minhas menções]({{site.post_images}}atlas-listing-collections.png)

## <a name='Atualizandooapp.js'></a>Atualizando o app.js

Você deve ter reparado que está aparecendo um alerta no nosso terminal. 

```shell
(node:10408) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
```

Para que este problema seja solucionado, abra o arquivo app.js e adicione as seguintes alterações na chamada do Mongoose:

```javascript
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});
```

Tente rodar uma atualização novamente e o erro terá sumido!

## <a name='Criandoafunodedelete'></a>Criando a função de delete

Nossa função de deleção de dados é bem parecida com a de update. Teremos uma rota para receber o verbo DELETE do protocolo HTTP passando um ID e isso vai ativar o método deleteMention do nosso controller, que chama a função de deletar do repository.

No arquivo **mentions-repository.js**, adicione o seguinte conteúdo:

```javascript
exports.deleteMention = async id => {
  await Mentions.findOneAndRemove(id);
};
```

Estamos utilizando um método do Mongoose chamado **findOneAndRemove** que busca um dado e deleta ele. Repare no ponto find**One**AndRemove. Precisamos especificar que é para buscar somente um dado, afinal, se não fizermos isso, podemos enviar um comando de deletar tudo para o banco de dados. Você não gostaria de deletar todas as informações do seu sistema sem querer, não é?

## <a name='Importandoafunodedeletenocontroller'></a>Importando a função de delete no controller

No arquivo **mentions-controller.js**, adicione o seguinte conteúdo:

```javascript
// delete
exports.deleteMention = async (req, res) => {
  try {
    await repository.deleteMention(req.params.id);
    res.status(200).send({
      message: 'Menção removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover a menção.'});
  
};
```

Esta função é mais simples, só passamos o id para o **repository.deleteMention** e está tudo pronto.

## <a name='Adicionandoumarotaparadeleo'></a>Adicionando uma rota para deleção

Assim como a rota para update, a rota para deleção utilizará o método DELETE, vamos passar um ID e informar nosso método do controller.

No arquivo **mentions-routes.js** adicione o conteúdo:

```javascript
router.delete('/:id', mentionsController.deleteMention);
```

Assim como na rota de update, passamos o ID via string “/:id”.

## <a name='TestandoodeletenoPostman'></a>Testando o delete no Postman

Mais uma vez, vamos testar a API no Postman. Pegue um ID no Atlas e depois vamos alterar os campos no aplicativo.

No Postman, altere o verbo HTTP para DELETE, conforme fizemos anteriormente, adicione o ID da menção que você deseja deletar depois do localhost:3000/mentions e clique em enviar. Se tudo correr bem, você receberá o retorno informando que a menção foi deletada com sucesso!

![Imagem de uma deleção no Postman]({{site.post_images}}postman-delete-data.png)

Você pode confirmar se a menção foi deletada visualizando o Atlas.

## <a name='Concluso'></a>Conclusão

Até aqui fizemos muita coisa! Criamos uma API, montamos os métodos para trabalhar com ela, como create, read, update, delete, trabalhamos com um serviço de bancos de dados (BaaS), o Atlas, aprendemos diversas funções do MongoDB e a utilizar o Postman para validar nossas APIs.

Ainda temos trabalho a fazer antes de colocar essa API em produção em um serviço de hospedagem. Por isso, no próximo artigo, além de aprender subir nosso serviço em uma hospedagem, aprenderemos a utilizar uma biblioteca que criará uma camada de segurança para nossa API, vamos documentar nossa API, para que outras pessoas não necessitem ler o código para entender como utilizar as requisições, além de preparar nossa aplicação para que receba chamadas de outros endereços que não estejam dentro do nosso domínio.

Fique de olho! Me acompanhe no Twitter para saber quando lançar alguma coisa aqui no Blog: [@w_oliveiras](https://twitter.com/w_oliveiras).

[Photo by Artur Łuczka on Unsplash](https://unsplash.com/photos/loAfOVk1eNc)