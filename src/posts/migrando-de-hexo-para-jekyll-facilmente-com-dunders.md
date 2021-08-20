---
title: Migrando de Hexo para Jekyll facilmente com Dunders
date: '2018-09-23'
tags:
  - jekyll
  - comunidade
  - carreira
  - jamstack
description: O processo de migraçãdo do meu blog de Hexo para Jekyll utilizando o Jekyll Template Dunders
---
Recentemente eu estava procurando alternativas para deixar a entrega dos artigos no meu blog um pouco mais rápidas. Isso porque, toda vez que eu subia um artigo novo, era necessário aguardar o build e merge via [Travis CI](/posts/postando-no-blog-estático-direto-pelo-github-com-hexo-e-travis-ci/). Isso poderia demorar alguns segundos ou até 3 minutos, por eu utilizar a versão gratuita do Travis junto com GitHub Pages.

Encontrei diversas maneiras de agilizar isso, mas confesso que a mais rápida é utilizar o Jekyll, um gerador de sites estáticos, com o GitHub Pages, utilizando o GitHub para hospedar os sites em HTML, CSS e JavaScript, pois são uma ferramenta e uma plataforma desenvolvidas pelo mesmo player e por isso estão em perfeita conexão.

*Com a vontade de migrar o blog para Jekyll, aproveitei para dar uma repaginada no layout do site alterando todo o tema. Eu não sou designer e por isso o tema pode estar meio feinho. Então, se tiver alguma dica para eu melhorar o layout, pode me dar um toque.*

Utilizando o [Dunders](https://github.com/woliveiras/__s), um tema/uma estrutura em branco que tem tudo o que precisamos para criar um tema para o Jekyll, o desenvolvimento foi bem rápido. Gastando somente 5 horas e alguns minutos para fazer tudo (design, layout e código).

![Tempo gasto trabalhando com Sass na criação do tema]({{site.postsImagesPath}}tempo-gasto-em-sass.png)

Como eu costumo desenvolver o tema direto via HTML e CSS, isso aumenta um pouco o tempo de criação, pois eu passo mais tempo testando opções do que codificando o resultado final. E por isso eu passei mais tempo fazendo CSS do que todo o resto do trabalho.

Passei 100% do tempo no VS Code e foi muito produtivo pra mim.

![Tempo gasto no VS Code]({{site.postsImagesPath}}tempo-gasto-no-vscode.png)

Como imaginado, assim que eu virei a chave, fazendo um merge da branch onde trabalhei com a master, o deploy aconteceu em segundos e estamos aqui, com a nova versão do blog no ar!

Se você quiser ver o código fonte do meu blog, pode olhar neste link: [github/woliveiras.github.io](https://github.com/woliveiras/woliveiras.github.io).

Anteriormente eu havia migrado de WordPress para Hexo, o que foi muito legal também, mas estou acreditando fortemente que, com essa nova versão, vou passar menos ansiedade esperando o build a cada post! :joy:

## Como ocorreu a migração

Primeiro foi criado uma nova branch, para que eu não poluísse a master durante o desenvolvimento e o Travis ficasse “rebuildando” o tempo todo.

Nesta nova branch, clonei o conteúdo do Dunders com o comando `git clone git@github.com:woliveiras/__s.git .`, conforme descrito na documentação.

Em seguida bastou mover todos os artigos, que ficavam na pasta **_posts** do Hexo, para a pasta _posts no Jekyll.

Com isso eu já tinha o blog configurado, com todos os meus artigos, porém sem nenhum estilo.

Daí pra frente foi só seguir desenhando o layout e codificando tudo.

![Codificando o novo tema]({{site.postsImagesPath}}codando-o-novo-tema.png)

## Principais preocupações e mudanças

As principais preocupações são as configurações dos temas.

Os arquivos necessários para configuração de domínio e SEO, como CNAME e robots.txt, permanecem os mesmos, mas o **config.yml** muda bastante. E um erro ali pode significar queda do blog em SEO também.

Algo importante, que mudou bastante, foi o foco deste blog.

Eu gostava de deixar claro que sou desenvolvedor front-end e o conteúdo aqui era relacionado a isso, mas essa não é uma verdade absoluta. Como desenvolvedor eu gosto de conhecer tudo o que envolve trabalhar com desenvolvimento, como infra, agilidade, backend, etc.

Além disso, acho importante o posicionamento relacionado à inclusão e diversidade ser explícito, para que as os demais saibam quem realmente somos e o que pensamos como pessoas. Somos desenvolvedores (as), mas, além disso, somos seres humanos, que enxergamos o que acontece ao nosso redor e podemos nos posicionar a respeito disso. Não precisamos ficar presos em nosso mundinho de código e homens brancos de classe média alta. E por isso a nova descrição do meu blog é:

- **título**: William Oliveira - Desenvolvedor de Software
- **subtitulo**: Pintor de software
- **descrição**: Um blog sobre desenvolvimento de software e programação no geral, com foco em JavaScript, Nodejs, Performance Web, Git, GitHub, Linux, Open Source, mas também falo sobre coisas importantes de verdade como inclusão, diversidade e afins - Da periferia pro mundo

E com essa nova configuração, eu inicio uma nova fase da minha vida, onde vou falar mais sobre o que eu gosto/com o que eu trabalho aqui no blog e não mais no [Medium](https://medium.com/@woliveiras) onde eu estava postando com maior frequência para contribuir com o [Training Center](https://trainingcenter.io/) e por sua facilidade de publicação.

Nesse novo tema eu também tive uma preocupação maior em direcionar as pessoas para um caminho certo partindo direto do meu blog, por isso temos novidades no rodapé, com links legais para quem busca conhecimento.

Se você quer se tornar front-end ou aprender VIM, por exemplo, já temos alguns links lá.

![Novo footer do site]({{site.postsImagesPath}}footer-do-site.png)

Além disso, me preocupei em deixar o tema o mais limpo possível, com o tamanho de fonte maneiro, um bom espaçamento entre linhas e estou focando em escrever menos por parágrafo, o que ajuda pessoas dislexicas.



## Novidades legais

No tema antigo eu não tinha me preocupado em colocar meios de compartilhar os textos nas redes sociais, nem com artigos relacionados, por isso eu dei certa atenção para isso aqui.

Agora conseguimos compartilhar os textos em algumas redes e surgirão artigos relacionados via categorias ou tags aqui em baixo. Não deixa de divulgar os posts ou olhar os relacionados, pois pode ter algo bom ali e você ajuda a informação a chegar a mais pessoas.

Eu adicionei alguns plugins maneiros no Jekyll e o mais legal é o de usar [emojis](https://en.wikipedia.org/wiki/Emoji) nos artigos, pois eu adoro esse negócio!

:joy: :cat: :heart: :white_check_mark: :dog:

Também estou utilizando um plugin para importar Gists dentro dos meus textos, o que pode facilitar a leitura e compartilhamento de código fonte. :octocat:

## Conclusão

A migração foi muito simples, apesar de trabalhosa na parte de design graças ao uso do Dunders, que já me dá todas as páginas e configurações básicas prontas.

A finalização da mudança do tema do meu blog é uma pequena conquista, pois era uma meta pessoal para este ano. Por isso terei algo maneiro pra falar sobre as metas no artigo de retrospectiva de 2018!

Se você quiser acompanhar meus artigos sobre os assuntos que eu comentei acima, assine o [RSS feed](/atom.xml) deste site ou me siga no Twitter, [@_malabarizando](https://twitter.com/_malabarizando) para receber os próximos artigos.
