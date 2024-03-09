---
title: Ferramentas para construção de sites com JAMstack
date: '2019-03-05'
socialImage: "/images/posts/jamstack.png"
tags:
    - jamstack
    - git
    - html
    - css
    - javascript
description: Ferramentas para facilitar o desenvolvimento utilizando JAMstack. CDNs, hospedagens, geradores estáticos, deploy contínuo, automatização e mais.
---
No último artigo da série sobre JAMstack tivemos uma introdução ao que é essa arquitetura. Se você não leu, confere aqui: [JAMstack introdução](/posts/jamstack-introdução-o-que-é-jamstack/).

Neste artigo vamos conhecer algumas ferramentas que podemos utilizar para construir sites JAMstack para facilitar as nossas vidas, como os geradores de site estático, CDNs, HTTPS, comentários, formulários e uma alternativa para hospedagem do site.

<!-- vscode-markdown-toc -->
* [Geradores de site estático](#Geradoresdesiteesttico)
* [CDNs](#CDNs)
* [Hospedagem de imagens e vídeos](#Hospedagemdeimagensevdeos)
* [HTTPS](#HTTPS)
* [Envio de formulários](#Enviodeformulrios)
* [Comentários no blog](#Comentriosnoblog)
* [Hospedagem do site](#Hospedagemdosite)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Geradoresdesiteesttico'></a>Geradores de site estático

Vamos conhecer a lista partindo dos mais famosos até os mais novos:

- [Jekyll](https://jekyllrb.com/)
- [Hugo](https://gohugo.io/)
- [Hexo](https://hexo.io/)
- [Pelican](https://blog.getpelican.com/)
- [Middleman](https://middlemanapp.com/)
- [Metalsmith](https://metalsmith.io/)
- [Gatsby](https://www.gatsbyjs.org/)

Destas ferramentas eu já utilizei o Hexo, quando migrei de [WordPress para geradores estáticos](/posts/Migrando-de-Wordpress-para-Hexo/), conheço o Hugo, pois fiz alguns testes antes de [migrar para o Jekyll](/posts/migrando-de-hexo-para-jekyll-facilmente-com-dunders/), utilizo o Jekyll neste blog e já mexi com Pelican.

Não vejo diferença na utilização de geradores estáticos, pois é a mesma proposta e no final é a mesma maneira de resolver, só muda a linguagem ao qual foi desenvolvido o gerador o que altera a performance do mesmo, como é o caso do Hugo.

Uma ferramenta que veio para mudar completamente a maneira como utilizamos os geradores estáticos é o Gatsby, que eu ainda não utilizei, porém ele utiliza React como sistema de templates e GraphQL para consulta de dados, o que pode ser muito familiar para quem trabalha com essa stack e bem legal para reutilizarmos componentes já existentes em React. Como ele veio com o ecossistema mais badalado do momento, já possui muitos plugins que podemos utilizar em nossos sites, assim como uma bela documentação. Recomendo fortemente que você dê uma olhada nessa ferramenta antes de bater o martelo sobre qual escolher.

Se você quer criar algo simples e nem se preocupar com hospedagem ou sistema de build, rodar um Jekyll com GitHub Pages é o processo mais rápido. E, caso você não goste de nenhum tema que encontrar para utilizar com Jekyll, pode usar o [Dunders](https://github.com/woliveiras/__s), que é uma estrutura prémontada para você criar seu site ou blog com Jekyll.

## <a name='CDNs'></a>CDNs

Vamos conhecer a lista dos CDNs que podemos utilizar em nosso site JAMstack:

- [CloudFlare](https://cloudflare.com)
- [AWS Cloudfront](https://aws.amazon.com/pt/cloudfront/)
- [Google Cloud CDN](https://cloud.google.com/cdn/)
- [Azure CDN](https://azure.microsoft.com/en-us/services/cdn/)
- [Netlify ADN](https://www.netlify.com/features/adn/)

Destes eu já utilize o CloudFlare, conheço o Cloudfront e atualmente utilizo o Netlify. Para um site simples podemos utilizar o CloudFlare ou Netlify, ambos tem pouco trabalho de configuração e possuem ferramentas e relatórios de todos os tipos, sendo o Netlify o mais recomendado para facilitar nosso dia a dia com um site JAMstack, afinal ele já possui tudo o que precisamos, como invalidação automática do cache e deploy automático.

Para aplicações muito robustas, que demandam maiores configurações e/ou monitoramento, as ferramentas mais corporativas são mais interessantes e, neste caso, eu recomendaria o Cloudfront pelo preço, mas não fiz cálculos ou testes com os do Google e Azure, então não é uma recomendação muito embasada. Vale a pena você conferir os preços nos sites e avaliar qual a melhor opção para o seu caso.

CloudFlare e Netlify são gratuitos para os casos mais simples.

## <a name='Hospedagemdeimagensevdeos'></a>Hospedagem de imagens e vídeos

Caso você queira hospedar imagens com direito a compressão e otimização da rede, podemos usar algumas ferramentas:

- [Netlify](https://www.netlify.com/)
- [Imgur](https://imgur.com/)
- [Cloudnary](https://cloudinary.com/)

Já utilizei as três opções e hoje estou com o Netlify pela facilidade de uso. Eu subo minhas imagens junto com minha aplicação e a plataforma trata de fazer a otimização para mim baseado nas minhas configurações.

O Cloudnary é de longe o mais completo quando falamos de hospedagem de imagens, vídeos e afins, pois possui muitas opções de uso e é bem utilizado pelo mercado.

Caso você possa fazer isso, eu recomendo a utilização do próprio YouTube (ou Vimeo ou outra plataforma) para hospedar os vídeos, pois é menos ferramentas para gerenciar.

## <a name='HTTPS'></a>HTTPS

Hoje temos várias opções de criação do nosso certificado para garantir a segurança do nosso domínio com HTTPS, dentre eles o mais utilizado e o que eu recomendo é o [Let’s Encrypt](https://letsencrypt.org/), pois é gratuito e fácil de gerenciar. 

O próprio GitHub Pages e o Netlify nos dão a opção de HTTPS utilizando o Let’s Encrypt.

## <a name='Enviodeformulrios'></a>Envio de formulários

Com um site no ar, muitas vezes vamos precisar de uma ferramenta para envio de formulários de contato ou algo relacionado.

O que eu recomendo é o [FORMSPREE](https://formspree.io/), pois é fácil de usar e nunca falhou comigo!

Basta colocar seu email no form que temos tudo configurado, como no exemplo abaixo:

```html
<form action="https://formspree.io/contato@aprendiz.dev" method="POST">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>
```

## <a name='Comentriosnoblog'></a>Comentários no blog

Neste caso também temos uma ferramenta que já superou as demais, o [Disqus](https://disqus.com/).

Além dele servir para adicionar comentários no blog, ele ainda auxilia a trazer tráfego para o seu conteúdo, assim como possui meios das pessoas darem um “like” nos seus artigos e é totalmente free!

Ainda podemos utilizar ele com vários domínios (até bater uma cota, claro).

## <a name='Hospedagemdosite'></a>Hospedagem do site

Assim como nas outras listas, temos alternativas gratuitas e outras pagas:

- [GitHub Pages](https://pages.github.com/)
- [Amazon S3](https://aws.amazon.com/pt/s3/)
- E temos Google Cloud e Azure também

Eu recomendo para sites cujo código fonte podem ficar públicos o uso do GitHub Pages, pois é gratuito, direto via GitHub e a ativação é somente uma configuração no repositório ou criar um repositório github.io.

Para opções maiores, as alternativas corporativas são as que mandam e o S3 é o mais utilizado de todos, além de ter um custo baixo também.

## <a name='Concluso'></a>Conclusão

Isso é tudo o que precisamos de ferramental para criar nossos sites JAMstack!

Espero que você consiga escolher o melhor para o seu caso com as opções que lhe dei.

No meu caso estou utilizando: GitHub Pages, Google Domains e Netlify e estou bem contente com o resultado final.
