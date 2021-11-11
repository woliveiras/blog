---
title: Qual a diferença entre server side render (SSR) e static site generator (SSG)
date: '2020-06-26'
socialImage: "/images/posts/mohdammed-ali-9TUIfLylgw8-unsplash.jpg"
tags:
    - web
    - jamstack
    - ssr
    - ssg
    - server-side-render
    - static-site-generator
videoId: 
description: Qual a grande diferença entre SSR e SSG, como funciona cada abordagem e porquê isso existe?
---

O desenvolvimento web mudou muito desde que a internet era somente documentos HTML servidos por um servidor para o nosso Netscape ou Internet Explorer e para entender realmente a diferença entre server side render e static site generator esse contexto histórico é extremamente importante.

## Prólogo

No princípio existiam os computadores. Máquinas gigantes que ocupavam toda a sala de uma empresa para fazer contas que nem eram tão complexas ainda, porém eles faziam muito mais contas em um curto espaço de tempo do que um ser humano.

Era uma época difícil. Imagina como se fazia para compartilhar dados entre um computador em um prédio localizado em uma cidade para outro computador em outro prédio da mesma empresa em outra cidade. Não devia ser nada simples. Ainda mais porque ainda não existiam os dispositivos de armazenamento impressionantes que temos hoje em dia, como pen drives de 256G ou até de 1T! 

A comunicação entre computadores era um bom desafio a ser resolvido e a pesquisa para trabalhar nesta empreitada acontecia desde 1960 e foi em 1982 quando finalmente criaram um protocolo de comunicação que seria utilizado pelos computadores de todo o mundo (literalmente), o TCP/IP.

Com essa possibilidade agora em mãos, logo a internet seria comercializada e em 1995 a internet foi totalmente comercializada nos Estados Unidos.

Em 1989 o meu amigo Tim Berners-Lee trabalhava no que ficou conhecido como World Wide Web ou a rede mundial de computadores e em 1991 o seu projeto de hipertexto foi disponibilizado mundialmente, possibilitando que as pessoas criassem documentos com informações que seriam lidas por outras pessoas em outro lugar do mundo. Muito parecido com o que você está fazendo agora, não é mesmo?

O crescimento da internet foi exponencial. De 2000 a 2009, o número de usuários da rede subiu de 394 para 1,858 bilhão. Em 2010, 22% da população mundial tinha acesso a computadores e hoje mais da metade da população mundial, ou 4,1 bilhões de pessoas, usam a internet todos os dias.

Mas com esse crescimento tão rápido, muita coisa foi mudando de uma época para outra. Antigamente os servidores hospedavam unicamente arquivos .html com pouco texto, algumas imagens e links entre arquivos. Hoje em dia essas máquinas carregam dentro de si sistemas complexos que, além de gerar e entregar para nós, usuários, a informação, processam milhares de dados em questão de segundos.

Veja, antigamente os sites eram somente arquivos HTML **estáticos** com pouquíssima informação e alguns links entre arquivos no mesmo servidor ou em outro sítio na rede. Com o tempo essa quantidade de informação foi ficando maior e escrever um documento HTML gigante (ou vários) se tornou impraticável. 

Além disso, as pessoas queriam guardar as informações em lugares mais seguros e espalhados em outros servidores. Queriam colocar essas coisas em sistemas gerenciadores de dados, os bancos de dados. Para que isso fosse possível seria necessário utilizar linguagens de programação que buscariam dados em um banco de dados, processariam templates (arquivos que possuem a localização onde cada informação deve entrar), escreveriam esses dados em arquivos HTML baseado nos templates e então os servidores web enviariam somente essa informação já processada para o usuário final.

Este é o contexto necessário para entendermos sobre geração de sites estáticos (static site generation) e renderização no servidor (server side render).

## Páginas estáticas e páginas dinâmicas

Como vimos uma página estática é um arquivo HTML que não sofre processamento no servidor. Ela é enviada para o usuário do jeito que está.

Já uma página dinâmica (ou processada no servidor) sofre alterações no momento em que o sistema recebe uma requisição, ela é gerada na hora e enviada para o usuário na sequência.

Agora nós sabemos o que é server side render (renderizar no servidor) e o que é uma página estática, mas o que é o static site generator? Antes de continuar e chegar nesse assunto de SSG, vamos continuar no fluxo histórico e entender como o SSR funciona. Prometo que já estamos chegando lá.

## Server Side Render (SSR)

Quando acessamos um endereço de internet, esse endereço aponta para um servidor web que vai disparar diversos processos em um servidor. Se estamos utilizando server side rendering, um desses processos será o do interpretador de uma linguagem de programação, como o JavaScript, que irá rodar uma aplicação web.

Essa aplicação será responsável por consumir dados de algum banco de dados, arquivo de textos, do sistema operacional ou até mesmo outras aplicações web armazenar isso em memória (na memória do servidor mesmo) e na sequência injetar isso em algum template e criar as páginas HTML. Com essas páginas criadas, com os dados que foram solicitados, agora o servidor web recebe o texto e envia para o usuário que requisitou os dados.

Eu já ensinei a criar páginas geradas no servidor no artigo [criando um currículo com Node.js, Express e EJS](/posts/criando-um-currículo-com-node-js-express-e-templates-ejs/). Caso você deseje conhecer um pouco mais sobre como as coisas funcionam, recomendo que leia o artigo logo depois deste aqui.

## Static Site Generation (SSG)

Agora que sabemos que as aplicações web tem o poder de consumir dados e gerar as páginas em tempo de execução, fica desnecessário escrevermos HTML simples, as páginas estáticas, e guardar em um servidor, certo?

*Errado.*

Existem sim momentos em que é excelente criarmos páginas estáticas ao invés de páginas dinâmicas e você vai entender o porquê agora.

Um servidor de aplicações web precisa ter uma certa quantidade de memória ram, processador e espaço em disco para as coisas acontecerem. E tudo isso, adivinha, tem um custo. Hoje em dia, com os serviços de provedores de computação em nuvem, manter uma aplicação web é muito mais barato, porém é sempre legal conseguirmos economizar um pouco mais, não é mesmo?

A criação dinâmica das páginas web se torna desnecessária quando um dado quase nunca sofre alteração. Ou seja, imagina que você tem um site pessoal, como um blog ([como este](https://github.com/woliveiras/woliveiras.github.io/)), ou o site institucional de uma empresa. Essas páginas recebem dados uma vez e isso só vai mudar depois de muito tempo, não é algo que precisa ser recriado ("re-gerado") a cada requisição que o servidor web receber. E é em casos parecidos com esse que os geradores de sites estáticos entram em cena para nos ajudar.

## Static Site Generators

O site estático é hospedado no servidor como ele é e, quando requisitado, é enviado para o usuário final. Essa hospedagem precisa de muito menos processador, memória e talvez até mesmo espaço em disco. Mas escrever esse HTML todo na mão não deve ser nada divertido.

Assim como temos aplicações que geram o conteúdo quando recebem uma requisição para o SSR, temos aplicações que geram o site estático quando precisamos. São os geradores de sites estáticos. 

Essas ferramentas rodam uma vez, quando mandamos elas serem executadas e logo depois temos um build (uma versão do nosso produto final) que vamos guardar em um servidor que só precisa entregar esses arquivos para o usuário final.

Perceba: a geração do site estático não implica em não consumir dados. A aplicação que gera o produto final pode (e vai) consumir dados de algum lugar, injetar em um template e gerar o HTML. A grande diferença é que realmente vamos guardar esses arquivos em algum local para serem enviados para o usuário final ao invés de enviar direto para o usuário, como acontece no SSR.

Quer ver um site estático sendo gerado? Confere este artigo aqui: [desenvolvendo um blog com Hugo e Netlify](/posts/desenvolvendo-um-blog-com-interface-administrativa-com-hugo-e-netlify/)

## Entendendo melhor a arquitetura web SSR e SSG

Para ilustrar melhor o que entendemos até aqui, desenhei alguns diagramas que vão explicar como que funciona uma aplicação via SSR e via SSG. Confira abaixo.

### A arquitetura de uma aplicação SSR

De uma maneira muito, mas realmente muito simplificada: temos você acessando um site com o seu navegador, o servidor utilizando a aplicação que bate em um banco de dados, processa a informação, devolve para o servidor e o servidor te envia uma página.

![Arquitetura SSR (Server Side Rendering)]({{site.postsImagesPath}}arquitetura_SSR.png)

### A arquitetura de uma aplicação SSG

Agora o mesmo processo, porém não temos mais um servidor processando informações em tempo de execução, somente o envio do conteúdo estático para o seu navegador. Não que não tenha acontecido um processo de construção da página e envio para o servidor de conteúdo estático, mas isso não acontece **agora**.

![Arquitetura SSG (Static Site Generated)]({{site.postsImagesPath}}arquitetura_SSG.png)

## Conclusão

Chegamos ao entendimento de que um site estático é uma página que não é gerada em tempo de execução de uma aplicação web e esses sites são criados por um programa chamado static site generator. E que site dinâmico é gerado no servidor e enviado para o usuário final durante um processamento.

Compreendemos que os dois casos são úteis em cenários diferentes e que precisamos analisar esses cenários antes de escolher qual abordagem seguir.

Se você tiver qualquer dúvida sobre o assunto ou quiser que eu complemente este assunto com mais artigos, compartilhe esse artigo me marcando no Twitter ([@1ilhas](https://twitter.com/1ilhas)) e diga como eu posso ajudar. Estou aqui para isso mesmo! 

### Referências

- [Wikipedia/História da Internet](https://pt.wikipedia.org/wiki/Internet#Hist%C3%B3ria)
- [Wikipedia/HTML](https://pt.wikipedia.org/wiki/HTML)

<span>Photo by <a href="https://unsplash.com/@mohdali_31?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mohdammed Ali</a> on <a href="https://unsplash.com/s/photos/web?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
