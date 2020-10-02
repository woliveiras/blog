---
title: Migrando de WordPress para Hexo
tags:
  - hexo
  - javascript
  - nodejs
  - jamstack
date: '2015-08-04'
description: Migrar de WordPress para Hexo. Como migrar de WordPress para um gerador estático?
---

A um bom tempo sinto vontade de mudar meu Blog de WordPress para uma plataforma de  conteúdo estático, mas não achava nenhuma alternativa, pois que queria usar Nodejs. Por isso não fui para o, muito usado na comunidade, [Jekyll(Ruby)](https://jekyllrb.com/) , nem para o [Pelican(Python <3)](https://blog.getpelican.com/).

![Hexo Blog]({{site.postsImagesPath}}hexo-logo.png)

Em busca de uma alternativa encontrei o [Hexo](https://hexo.io) e, um pouco depois de eu conhecer essa plataforma, o [Daciuk](https://blog.da2k.com.br/) escreveu um [post](https://blog.da2k.com.br/2014/01/05/hexo-criando-um-blog-ao-estilo-miojo/) muito maneiro incentivando o seu uso. Foi então que eu decidi de vez usar essa plataforma!

Bora conhecer ela e como foi a migração de WordPress para Hexo?

## Levantando as necessidades

Antes de migrar nosso Blog(Ou o de um cliente) de uma plataforma para outra precisamos fazer um levantamento para que não tenha impacto negativo como perder os posts que já existem ou alguma funcionalidade importante aos leitores.

Minha primeira preocupação foi com os posts que eu já havia escrito, mas no próprio site do Hexo temos uma [solução para isso](https://hexo.io/docs/migration.html).

As dicas sobre instalação do Hexo você encontra no Blog do [Daciuk](https://blog.da2k.com.br/2014/01/05/hexo-criando-um-blog-ao-estilo-miojo/) e no Blog do [Willian Santos](https://dwoond.github.io/Criando-seu-site-com-Hexo/).

## Como escrever os posts

Os posts no Hexo funcionam como em qualquer outro gerador estático. Escrevemos em Markdown e a postagem é gerada em HTML.

Markdown não é difícil e podemos usar algumas ferramentas boas que auxiliam nisso como o [Haroopad](https://pad.haroopress.com/) ou o [Stackedit](https://stackedit.io/editor#), mas o Hexo também tem uma espécie de wp-admin, basta instalar o [Hexo Admin](https://github.com/jaredly/hexo-admin) se você sente necessidade.



## Migrando os posts do WordPress para o Hexo

Basta instalar o plugin **hexo-migrator-wordpress** com o comando:

```bash
npm i hexo-migrator-wordpress --save
```

*Obs: Lembre-se de rodar esses comandos dentro da pasta do seu blog em Hexo.*

Agora você precisa entrar no **Admin** do seu WordPress e seguir os passos:

```bash
Tools → Export → WordPress
```

Fica no canto esquerdo da tela.
E então você seleciona o que deseja exportar. Se tiver alguma data em específico que você não queira importar no novo blog, basta setar a faixa de data e clicar em Download do arquivo de exportação. Será gerado um .xml com suas postagens configuradas com data de postagem, tags que usou, marcações especiais, etc.

Em seguida basta executar o comando:

```bash
hexo migrate wordpress <caminho onde está o arquivo gerado pelo WP>
```

E todas as suas postagens serão importadas. O que estava em rascunho vai ficar em rascunho o que foi postado será postado normalmente.
Só uma coisa ruim de tudo isso: O WordPress gera o .xml com caminhos absolutos em imagens ou outras mídias que você tenha inserido na postagem, então é bom revisar as postagens para ver se não quebrou alguma coisa. ~~Por isso que eu vou demorar um pouco para subir as postagens antigas aqui pro blog.~~

## Gerando o RSS

Basta colocar essa linha no seu arquivo de configuração do Blog(O _config.yml):

```ruby
# Feed
feed:
  type: atom
  path: atom.xml
  limit: você escolhe ;)
```

## Comentários

Como eu já utilizava uma plataforma de comentários que é o [Disqus](https://disqus.com/) ficou fácil manter os comentários lá. :)
Basta adicionar o shortname(Que você encontra nas configurações do seu site no Disqus) do site no arquivo de configuração:

```ruby
# Disqus
disqus_shortname: <shortname>
```

## Hospedagem

Como é puro HTML, você pode hospedar em qualquer lugar! Muita gente usa o Github pages e eu também coloquei para lá.
Basta configurar o deploy para o caminho do seu servidor:

```ruby
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: <seu repositório no gh pages>
```

E, assim que executar o comando hexo deploy, o site estará atualizado.

## Domínio

Você pode usar seu próprio domínio ou deixar com o .github.io, depende só de você. ;)
Para ter seu próprio domínio você pode seguir esses passos do [Willian Justen](https://willianjusten.com.br/dominio-proprio-no-github-pages/)(Quanto Willian/m em um só post...)

Por enquanto é só isso. Logo menos vou postar mais sobre o Hexo e como está sendo meu dia-a-dia com ele. Se você já tem experiência com Hexo ou outros geradores e quer deixar sua opinião, comenta aí! ;)
