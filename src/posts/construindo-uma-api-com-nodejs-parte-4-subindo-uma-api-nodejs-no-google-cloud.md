---
title: 'Construindo uma API com Nodejs - Parte 4: subindo uma API Nodejs no Google Cloud'
date: '2019-07-07'
socialImage: "/images/posts/eric-ward-s0BBxQkvUgs-unsplash.jpg"
tags:
    - javascript
    - nodejs
    - express
    - curso-fullstack
description: Utilizando o Google Cloud Platform para hospedar uma API em Node.js, com Express e MongoDB no Atlas.
---
Nos últimos artigos viemos criando uma API com Node.js, Express e MongoDB. Esta API lista menções que nossos amigos fazem durante o nosso dia. Podemos utilizar os verbos HTTP para cadastrar essas menções via POST, listar via GET, atualizar via PUT e excluir via DELETE.

Se você perdeu as partes anteriores, confira aqui:

- [Parte 1 - criação da estrutura e listagem de dados](/posts/construindo-uma-api-com-node-js-parte-1-criando-e-listando-dados/)
- [Parte 2 - melhoria de código e seleção de dados](/posts/construindo-uma-api-com-node-js-parte-2-melhorando-nossa-criação-e-listagem-de-dados/)
- [Parte 3 - atualização e exclusão de dados](/posts/construindo-uma-api-com-node-js-parte-3-atualizando-e-deletando-dados/)

Agora precisamos subir essa API em algum serviço de hospedagem para que outras pessoas possam acessar.

<!-- vscode-markdown-toc -->
* [Google Cloud Platform (GCP)](#GoogleCloudPlatformGCP)
* [Criando um projeto no Google Cloud](#CriandoumprojetonoGoogleCloud)
* [Ativando o App Engine](#AtivandooAppEngine)
* [Instalando o Google Cloud SDK](#InstalandooGoogleCloudSDK)
* [Ativando o Google Cloud Build API](#AtivandooGoogleCloudBuildAPI)
* [Fazendo deploy no Google Cloud](#FazendodeploynoGoogleCloud)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='GoogleCloudPlatformGCP'></a>Google Cloud Platform (GCP)

Existem diversos serviços de hospedagem muito bons disponíveis no mercado. Neste artigo vamos aprender a utilizar o Google Cloud, mas não é por nenhum motivo especial, simplesmente para estudos de como funciona uma hospedagem cloud e conhecer essa ferramenta.

Poderíamos ter utilizado Amazon AWS, Microsoft Azure, Digital Ocean ou Heroku e o resultado seria o mesmo no nosso caso. Nossa API é muito simples e não vamos aprender nesta série sobre escalabilidade de infraestrutura ou conceitos avançados de cloud. Só vamos subir a API para algum local para fechar o ciclo com nossa aplicação.

Vamos utilizar os serviços do Google App Engine para hospedar nossa aplicação e Cloud Build para gerar nossa aplicação e enviar para o servidor.

## <a name='CriandoumprojetonoGoogleCloud'></a>Criando um projeto no Google Cloud

Para utilizar os serviços de hospedagem do Google Cloud, vamos precisar criar a nossa conta no Google. Se você tem um Gmail, já pode utilizar os serviços, senão terá de fazer uma.

Também vamos criar um projeto no Google Cloud Console para poder associar as APIs do GCP (Google Cloud Platform) a nossa aplicação.

Acesse o seguinte link para criar o projeto: [criação de projeto no GCP](https://console.cloud.google.com/projectcreate).

Será aberta uma tela onde você deve colocar os dados do projeto.

![Criação de projeto no Google Cloud]({{site.postsImagesPath}}google-cloud-platform-create-project.png)

Dê um nome para o seu projeto e clique em criar (create).

Quando o projeto é criado, o Google Cloud Console nos redireciona para a interface administrativa onde temos todas as APIs que estão ativadas, o estado das aplicações e logs (de erro ou de utilização).

![Dashboard do Google Cloud Platform]({{site.postsImagesPath}}google-cloud-platform-dashboard.png)

## <a name='AtivandooAppEngine'></a>Ativando o App Engine

O App Engine é onde irá rodar a nossa aplicação. Imagine que ele isso significa que teremos um servidor na nuvem rodando o Node.js e tudo o que fizemos até aqui.

Ative o App Engine para Node.js utilizando este link: [ativar o App Engine usando Node.js](https://console.cloud.google.com/appengine/create?lang=nodejs&st=true)

Teremos que escolher uma região para rodar o nosso app. Estamos escolhendo onde ficará o servidor que responde com nosso software instalado. Escolha o mais próximo de onde você acredita ou sabe que estarão os seus usuários, no nosso caso, no Brasil.

![Selecionando a região no Google Cloud Platform]({{site.postsImagesPath}}google-cloud-platform-region.png)

Selecione o Brasil e clique em próximo (next). Aguarde a configuração do App Engine.

![Ativando o App Engine]{{site.postsImagesPath}}(google-cloud-platform-creating-app-engine.png)

Quando tudo estiver OK, teremos uma tela de confirmação.

![Confirmação do App Engine]({{site.postsImagesPath}}google-cloud-platform-app-engine-ok.png)

Agora podemos fazer o deploy da nossa aplicação no App Engine!

## <a name='InstalandooGoogleCloudSDK'></a>Instalando o Google Cloud SDK

Para enviar o nosso código para o App Engine, vamos precisar de um utilitário de linha de comando do GCP que é responsável por essa tarefa. 

Instale o Google Cloud SDK através do link: [GCP SDK](https://cloud.google.com/sdk/docs/).

Para cada sistema operacional funciona de uma maneira, por isso não abordei essa etapa aqui. Instale conforme manda na documentação do utilitário.

Depois de instalado, o comando **gcloud** estará disponível no nosso terminal.

Será necessário fazer login no GCP via terminal e configurar para qual projeto estamos enviando o nosso código.

Para fazer login, execute:

```bash
gcloud auth login
```

Será aberto o navegador para você fazer seu login com sua conta do Google.

Com o login feito, precisamos encontrar o ID do nosso projeto para configurar o nosso deploy para os recursos disponíveis neste domínio.

Na tela inicial do Google Cloud Console, temos um card chamado **Project info** (informações do projeto) no canto esquerdo da tela. Neste card temos o campo **Project ID**, copie esse código.

![Dashboard do Google Cloud Platform]({{site.postsImagesPath}}google-cloud-platform-dashboard.png)

Agora execute o comando abaixo, mudando de PROJECT_ID para o ID que você copiou:

```bash
gcloud config set project PROJECT_ID
```

## <a name='AtivandooGoogleCloudBuildAPI'></a>Ativando o Google Cloud Build API

Conforme comentei anteriormente, antes de fazer nosso deploy, será necessário ativar o Cloud Build API, que é o serviço responsável por gerar nosso projeto no GCP.

Para isso acesse o link: [GCP Build API](https://console.developers.google.com/apis/library/cloudbuild.googleapis.com)

![GCP Build API]({{site.postsImagesPath}}google-cloud-platform-build-api.png)

Basta clicar em enable (ativar) e aguardar a mágia acontecer.

Talvez seja necessário adicionar um cartão de crédito nesta etapa. Não se preocupe, dificilmente **essa** nossa API será cobrada, pois o acesso é para estudos e têm baixa taxa de builds por dia.

Agora vamos criar o arquivo que vai informar ao App Engine as configurações de servidor que vamos utilizar para rodar nossa aplicação.

Crie o arquivo **app.yaml** e adicione o seguinte conteúdo:

```bash
runtime: nodejs8
```

Este arquivo funciona como o nosso .env, informando algo para o servidor. Poderíamos informar a quantidade de memória, CPU, instâncias, etc que gostaríamos de ter no GCP e para isso bastaria informar esses dados neste arquivo.

No nosso caso só precisamos informar o ambiente de execução da nossa aplicação, o **nodejs8**, pois não temos (por agora) que configurar informações avançadas do servidor.

## <a name='FazendodeploynoGoogleCloud'></a>Fazendo deploy no Google Cloud

Com tudo configurado, vamos fazer nosso deploy e colocar isso disponível para outras pessoas verem que sabemos trabalhar com Node.js, Express, MongoDB e Google Cloud!

Execute o comando:

```bash
gcloud app deploy
```

![Rodando o gloud deploy]({{site.postsImagesPath}}google-cloud-platform-app-deploy.png)

Digite Y e aguarde o upload.

Quando o deploy finalizar, rode o comando:

```bash
gcloud app browse
```

O navegador será aberto com a nossa aplicação executando em um endereço do Google exibindo a resposta da nossa rota **“/”**.

Vamos listar as menções cadastradas através do Postman.

Copie o endereço que está no navegador e cole no campo URL do Postman. Vamos utilizar o verbo GET e complementar esse endereço com o **/mentions**, que é a rota de listagem das nossas menções cadastradas previamente.

O endereço será algo como: **https://mentions-api-245800.appspot.com/mentions**.

![Postman e GCP]({{site.postsImagesPath}}postman-google-cloud-platform.png)

Teremos o retorno da nossa API.

Agora podemos utilizar qualquer método, como o POST, PUT, UPDATE e DELETE, que configuramos nas nossas rotas até aqui.

## <a name='Concluso'></a>Conclusão

Este é o último artigo do desenvolvimento de uma API com Node.js, Express, MongoDB. Utilizamos o serviço do Atlas para hospedar nossos dados, o Google Cloud Platform para hospedagem da nossa aplicação e temos agora um servidor rodando nosso programa.

Nos próximos artigos vamos aprender mais sobre desenvolvimento web com Node.js, mas esta série está finalizada por aqui.

Se quiser acompanhar todo o conteúdo, me acompanhe no [Twitter](https://twitter.com/_uillaz), se inscreva no [meu canal](https://youtube.com/ouniversodaprogramacao) ou me adicione no [LinkedIn](https://linkedin.com/in/william-oliveira).

[Photo by Eric Ward on Unsplash](https://unsplash.com/photos/s0BBxQkvUgs).