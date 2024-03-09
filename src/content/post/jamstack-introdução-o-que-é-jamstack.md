---
title: 'JAMstack introdução: o que é JAMstack?'
publishDate: '2019-03-05'
image: '~/assets/images/posts/jamstack.png'
category: JAM Stack
tags:
  - jamstack
  - git
  - html
  - css
  - javascript
excerpt: O que é JAMstack, o que não é e como funciona essa nova arquitetura de desenvolvimento de websites e aplicações web
---

JAMstack, segundo o site oficial, é uma:

> Arquitetura de desenvolvimento web moderna baseada em JavaScript do lado do cliente, APIs reutilizáveis e marcação pré-construída. ([jamstack.org](https://jamstack.org/))

A intenção desta proposta de modelo de desenvolvimento de sites e aplicativos web (PWAs, por exemplo) é que o resultado final do nosso trabalho - vou explicar mais para frente o que é este trabalho - seja algo de alta performance, maior segurança menor custo para escalabilidade e uma melhor experiência de desenvolvimento.

O termo foi criado pela galera do Netlify, uma plataforma muito maneira para deploy contínuo, que inclusive eu também uso no meu blog e você pode saber mais da história aqui: [Netlify#JAMstack](https://en.wikipedia.org/wiki/Netlify#JAMstack).

**JAM** é como LAMP (Linux, Apache, MySQL e PHP), um acrônimo para **J**avaScript, **A**PIs e **M**arkup. Onde temos uma marcação (HTML), que é gerada durante o deploy com um gerador de site estático, como o [Hexo](/categoria/hexo) ou o [Jekyll](/posts/migrando-de-hexo-para-jekyll-facilmente-com-dunders/), que usei para criar este blog; caso seja um PWA o app será gerado durante o deploy e todo o restante é com o JavaScript e as APIs. Qualquer alteração de conteúdo, ação na interface ou algo do tipo, deve ser feito com JavaScript e os dados devem vir através de uma API. É o que já fazemos em [Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application), mas agora também pensando em websites. Assim como nas SPAs, não devemos consultar o banco de dados, renderizar o HTML e enviar para o cliente via backend (com um PHP, Python ou a ferramenta que for), pois todo o conteúdo já foi renderizado e enviado para o usuário final.

Visando desmistificar um pouco essa nova abordagem te mostrar o que é e o que não é essa arquitetura e também te incentivar a utilizar isto, escrevi essa série de artigos para ajudar a entender e utilizar [JAMstack](/categoria/jamstack).

## <a name='AntigamentejeraassimOquemudacomJAMstack'></a>Antigamente já era assim! O que muda com JAMstack?

Antigamente já era assim… As pessoas que vieram antes de nós (brincadeira com a galera das antigas) escreviam HTML + CSS + JS e hospedavam isso em um servidor via [FTP](https://pt.wikipedia.org/wiki/File_Transfer_Protocol), um protocolo de comunicação em rede, e era isso que era enviado para o navegador do usuário final. Mas era tudo estático e custoso para se desenvolver. Imagina a quantidade de copy & paste. Depois vieram linguagens como [Perl](https://en.wikipedia.org/wiki/Perl), PHP e outras que facilitaram o desenvolvimento web na época e fez isso valer a pena - antigamente tudo era feito com linguagens como o **C**zão da massa. Linguagens essas que consultam bancos de dados e webservices de terceiros, pegam esses dados e adicionam na marcação (normalmente em templates da própria linguagem, como o [Jinja para o Python](https://jinja.pocoo.org/)), renderizam o HTML no servidor e enviam para o cliente. Com a revolução do JavaScript, hoje temos a aplicação ou mesmo o site, sendo renderizado direto no navegador do usuário usamos frameworks como o [React](https://imasters.com.br/desenvolvimento/pensando-em-componentes-de-interface-com-exemplos-em-react) e consultando APIs que nos devolvem somente dados em formato [JSON](https://www.json.org/).

Você pode estar pensando: “eu acho engraçado como o desenvolvimento web vai e volta: antigamente escrever HTML e CSS tudo junto era ruim, hoje escrevemos e HTML e CSS tudo dentro do JavaScript com React, Vue.js e Styled Components; o mesmo se deu com o advento do desenvolvimento web com tudo sendo renderizado no backend, com o tempo foi criado uma alternativa para o carregamento ser mais rápido e até mesmo economizar recursos do servidor e do cliente, as SPAs e agora voltamos a renderizar tudo no backend e enviar para o usuário final somente o resultado”. Mas calma, são abordagens diferentes. O HTML e o CSS feitos no meio do JavaScript utilizando JSX e Styled são notações, não são HTML e CSS de fato, mas algo que vai gerar HTML e CSS através de uma renderização no navegador do usuário, o mesmo para utilizar essa nova abordagem para gerar o website direto no deploy: o site será gerado uma única vez, será hospedado em um [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) e não precisará ser renderizado novamente e reenviado para o usuário final.

O que acontecia antigamente era: o usuário solicita uma página em um domínio (woliveiras.com.br), a aplicação hospedada neste domínio recebe essa requisição, busca dados no banco de dados ou nos webservices, monta o HTML e devolve isso para o usuário final. A cada nova requisição (woliveiras.com.br/posts/jamstack) a aplicação vai buscar os dados, processar a nova marcação e devolver o resultado para o usuário. O que tínhamos era um response time maior ou um trabalho maior para diminuir este response time do servidor.

O que acontece hoje, com você acessando o meu blog, é: você solicita uma página em um domínio (woliveiras.com.br) e recebe o HTML todo processado já com os dados que você gostaria de ver, como o conteúdo deste artigo, se você quiser outra página, então entra nela e vai receber novamente todo o HTML já processado. Esse conteúdo já foi processado no Netlify durante o deploy do meu blog e está todo disponível para você via o CDN da plataforma.

## <a name='RequisitosdoJAMstack'></a>Requisitos do JAMstack

Temos um guia de boas práticas para o uso dessa arquitetura no site jamstack.org que diz que um site **não** foi feito com a JAMstack quando:

- é criado com uma tecnologia de renderização no servidor, como um CMS (WordPress, Drupal, Joomla, etc)
- é uma SPA isomórfica que renderiza no servidor em tempo de execução
- é um monolito que depende de alguma tecnologia rodando no backend como Ruby, Node, etc

Lembrando que essa dependência da linguagem é sobre aplicações rodando e respondendo em tempo de execução como o Django ou Express. O Jekyll é feito em Ruby, o Hexo é feito com Node.js e o Pelican com Python. A grande diferença é que essas ferramentas só são executadas uma vez, no deploy.

Então precisamos seguir regras a seguir para estar utilizando JAMstack.

### <a name='TodooprojetoservidoviaCDN'></a>Todo o projeto é servido via CDN

Como o conteúdo não deve ser renderizado em tempo de execução, tudo deve estar em um CDN e disponível para o usuário final.

Isso ajuda a ter uma performance melhor.

### <a name='TudodeveestarnoGit'></a>Tudo deve estar no Git

Não vamos usar um FTP para subir o conteúdo para o servidor, mas hospedar nossa aplicação no Git e fazer um build durante o deploy que leva nosso conteúdo para o CDN.

Deve ser possível fazer um _git clone_, instalar todas as dependências e gerar o website.

### <a name='Ferramentasdebuild'></a>Ferramentas de build

Devemos utilizar ferramentas de build (normalmente as mais modernas) para gerar nosso site, como o Babel, webpack, PostCSS e afins.

O Jekyll, Hexo, Pelican e similares também entram nessa sessão.

### <a name='Oprocessodebuilddeveserautomatizado'></a>O processo de build deve ser automatizado

Como tudo é gerado durante o deploy, precisamos ter um processo de build automatizado, o que vai nos evitar uma frustração de ter que rodar o comando de geração do website toda vez que formos subir algo novo para produção.

### <a name='Deploysautomticos'></a>Deploys automáticos

Tudo deve ir para o ar quando algo novo entrar em uma branch de deploy (normalmente configuramos isso no Jenkins, Circle ou Travis da vida). Imagina que o processo de deploy agora é: gerar o conteúdo com o comando de build e subir isso para um CDN, fica mais divertido se isso for automático (aquela tal developer experience que o site do JAMstack ressalta, mas isso também agiliza nosso trabalho).

### <a name='Invalidaodocacheinstantneamente'></a>Invalidação do cache instantâneamente

Durante o deploy vamos precisar invalidar o cache, afinal todo o HTML está em um CDN e ele não vai mudar até que o cache expire. Então precisamos ter algum esquema de invalidação de cache assim que o deploy é feito. Via [CloudFlare](https://cloudflare.com) ou o próprio Netlify temos isso facilmente.

Com todos esses pré-requisitos atendidos, agora temos um site desenvolvido com a JAMstack!

## <a name='ComopossocriarumsiteutilizandoJAMstackhoje'></a>Como posso criar um site utilizando JAMstack hoje

Para seguir todos os requisitos da arquitetura e criar um site à utilizando podemos desenvolver com geradores de site estático, colocar tudo em uma hospedagem de códigos, como o GitHub e utilizar algum CDN legal, como o CloudFlare ou o Netlify.

Caso você queira criar um site simples, pode desenvolver utilizando o GitHub Pages, ele já tem o build e deploy automatizados, então seria somente adicionar um CDN para servir este conteúdo. Eu recomendo fortemente o CloudFlare, que eu utilizava para servir o meu blog e é o CDN do [Medium](https://medium.com), então é uma ferramenta bem poderosa e a versão free atende todas as nossas necessidades.

Senão, se for criar algo mais complexo, eu recomendo o uso do Netlify, pois ele faz uma integração perfeita com várias hospedagens de código (GitHub, Bitbucket e GitLab), já roda os comandos de build e faz o deploy automático para o seu CDN com invalidação do cache.

Dos geradores de site estático que já utilizei, eu gosto muito do [Jekyll](https://jekyllrb.com/), porém o mais rápido de todos (no build) é o [Hugo](https://gohugo.io/), um gerador escrito em Golang, mas também temos um concorrente a altura, o [Zola](https://www.getzola.org/) escrito em Rust.

Se precisar de mais dicas de ferramentas, confere este outro artigo: [ferramentas para construção de sites com JAMstack](/posts/ferramentas-para-construção-de-sites-com-jamstack/).

## <a name='Concluso'></a>Conclusão

Espero ter conseguido te mostrar a diferença entre o que era feito antigamente e como funciona a proposta da JAMstack. Existem vários exemplos de sites e aplicações criadas seguindo essa nova abordagem que você pode conferir no [showcase do jamstack.org](https://jamstack.org/examples/).

Nos próximos artigos vamos aprender a utilizar o GitHub Pages para hospedar nosso site, como utilizar um domínio customizado com GitHub Pages + Google Domains , como iniciar um blog com Jekyll + GitHub Pages + Google Domains e enfim como colocar isso no Netlify.
