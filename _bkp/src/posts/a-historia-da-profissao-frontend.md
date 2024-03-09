---
title: A história da profissão frontend
date: '2020-10-30'
tags:
    - carreira
    - frontend
description: Há muito tempo atrás nascia uma profissão, a profissão frontend. A história por trás disso é contada de diversas maneiras, então eu decidi reunir tudo isso em um local só. Vem comigo conhecer um pouco sobre essa profissão maravilhosa!
socialImage: '/images/posts/ross-findon-mG28olYFgHI-unsplash.jpg'
---
<!-- vscode-markdown-toc -->
* [Uma janela para o mundo virtual](#Umajanelaparaomundovirtual)
* [Como eram os primeiros sites](#Comoeramosprimeirossites)
* [Mudanças trouxeram a profissão frontend](#Mudanastrouxeramaprofissofrontend)
* [Evoluções não param de acontecer](#Evoluesnoparamdeacontecer)
* [Outras referências](#Outrasreferncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Há muito tempo atrás, em um mundo totalmente diferente do que vivemos hoje, as pessoas não tinham aparelhos de comunicação móveis que são verdadeiros computadores de bolso, muito menos conexões de rede tão velozes que conseguimos assistir vídeos de altíssima qualidade em televisões de alta resolução.

Você se imagina hoje viver sem sua conexão com a internet? Sem os contatos nas redes sociais ou aquele bate papo no app de chat da moda?

Pois é! Antigamente nossos ancestrais viviam sem isso. 

Você está aqui hoje porque quer conhecer a história da área de frontend e para entender isso vamos precisar dar um salto no tempo até a invenção da internet e como os computadores daquela época funcionavam. Depois podemos ir evoluindo no tempo e observar as tecnologias físicas e virtuais tomando patamares elevados em paralelo até chegar nos dias de hoje.

## <a name='Umajanelaparaomundovirtual'></a>Uma janela para o mundo virtual

Antes do Windows, os computadores eram máquinas difíceis de serem utilizadas. Tudo via linha de comando e com uso muito específico como fazer grandes cálculos rapidamente ou de-criptografar uma mensagem.

Claro que existia uma ferramenta similar ao Windows (ou o Windows similar a ela) de outra grande montadora de computadores pessoais, os famosos PCs, da Apple, mas as sacadas de mercado da Microsoft fizeram o Windows rapidamente se tornar onipresente nos computadores pelo mundo todo e é por isso que muita gente dá os créditos do impacto do computador pessoal ao Janelas.

Se você quiser ver um pouco mais sobre esse contexto histórico muito legal de ser analisado, recomendo as seguintes fontes:

- assista o filme [Pirates of Silicon Valley](https://pt.wikipedia.org/wiki/Pirates_of_Silicon_Valley)
- leia a [história dos Windows](https://en.wikipedia.org/wiki/Microsoft_Windows)

Depois volte aqui para continuar nossa viagem nesta janela do tempo.

Aqueles computadores ainda não possuíam o acesso a internet, que seria criada somente em 1989. Mas em 1950 alguns computadores, principalmente para uso militar, já conseguiam se comunicar em rede local, para compartilhar arquivos, periféricos de rede (como aparelhos de [fax](https://en.wikipedia.org/wiki/Fax)) e isso por si já é algo revolucionário. Se imagine utilizando um computador ou qualquer dispositivo hoje em dia onde você produza algo, como imagens, vídeos, etc e não consegue compartilhar com outra pessoa.

Mas, graças a um amigo meu chamado [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) a web nasceu e, junto aos recursos visuais que facilitaram o uso do computador, foi possível uma transformação gigantesca em todo o mundo através da tecnologia.

## <a name='Comoeramosprimeirossites'></a>Como eram os primeiros sites

Em 1990 Lee escreveu três tecnologias que seriam fundamentais para que possamos compartilhar informação pela rede mundial de computadores (que estava em construção): 

- HTML, a linguagem de marcação de conteúdo para a web
- URI, uma [maneira de identificar os recursos na internet](/posts/url-uri-qual-diferenca/), uma parte do endereço que utilizamos para acessar um site
- HTTP, o protocolo de comunicação que utilizamos para transferência de pacotes em rede até hoje

Perceba, não existia o CSS, a linguagem utilizada para estilizar as páginas web que seria lançada em [1996](https://en.wikipedia.org/wiki/CSS), nem o JavaScript, linguagem de programação para a web que viria um pouco antes, em [1995](https://en.wikipedia.org/wiki/JavaScript). 

Então as páginas web eram basicamente o que fazemos quando criamos o [nosso primeiro documento HTML](/posts/criando-um-currículo-com-node-js-express-e-templates-ejs/).

Dá uma olhada em como era o site da Amazon em 1995.

![Amazon em 1995](/images/posts/amazon-1995.jpg)

Você se imagina comprando um livro neste side?

E perceba que, a Amazon já tinha um catálogo de milhares de livros.

O Google também não era lá grande coisa, não que hoje seja um site tão robusto quanto o Facebook. Confira outros sites aqui neste artigo do Canaltech: [os sites de 24 grandes empresas nos anos 90](https://canaltech.com.br/internet/veja-como-eram-os-sites-dessas-24-empresas-nos-anos-90-62851/).

Já dá para imaginar que, dentro da história do desenvolvimento web, muita coisa mudou até que a profissão frontend se tornasse o que é hoje e estamos passando por alguns pedacinhos disso. Existe mais história da internet neste artigo: [History of the Web](https://webfoundation.org/about/vision/history-of-the-web/?gclid=CjwKCAjw8-78BRA0EiwAFUw8LCeiE6Fam9PqRGbMBdkocnESnsIlb1frTwmKMmJ2PeBHYyXv9FV-tRoC-g8QAvD_BwE) no Web Foundation.

## <a name='Mudanastrouxeramaprofissofrontend'></a>Mudanças trouxeram a profissão frontend

Na época dos primeiros sites ainda não existia a diferença entre pessoa desenvolvedora backend e frontend. Basicamente existia alguém que sabia uma linguagem de scripts CGI que rodava no servidor e criava as páginas. 

CGI é um recurso que possibilita que acessemos recursos de um servidor, construamos as páginas web e depois enviemos para quem solicitou através do HTTP. Muita gente lembra de CGI quando falamos de uma linguagem muito antiga de construção de páginas web chamada [Perl](https://pt.wikipedia.org/wiki/Perl), porém depois veio o PHP, Python, Ruby e várias outras que utilizam essa especificação para a construção de páginas web.

As pessoas precisavam centralizar o acesso a informação, por isso foram criados os sites. Mas só isso não ajudava muito, uma vez que escrever diversos documentos HTML não seria nada divertido. Então foram construídos sistemas em cima de bancos de dados onde as pessoas, principalmente cientistas, docentes e militares, poderiam armazenar um dado, a linguagem de scripts acessaria isso, transformaria no documento HTML e então devolveria para a pessoa que abriu a requisição. E, até aí, quem desenvolvia estes scripts, assim como os documentos HTML, eram as pessoas conhecidas como **webmasters**!

Como você reparou no exemplo dos sites antigos, uma página web não precisava de muito recurso visual. Por isso ainda não existiam as pessoas conhecidas como **web designers**. Webmasters possuíam a responsabilidade de escrever o HTML, da forma como seria exibida na tela, e tudo o que fosse necessário para que um site estivesse no ar.

Perceba, até agora estou falando sites, não aplicações web. Você vai entender o porque disso um pouco mais há frente.

Foi durante o que ficou chamado como [guerra dos navegadores](https://en.wikipedia.org/wiki/Browser_wars#First_Browser_War_(1995%E2%80%932001)), onde as empresas estavam se digladiando para conquistar o espaço com um navegador padrão mais utilizado pelos usuários e poderia ditar as regras da internet, entre 1995 até 2001, que o cuidado com a experiência do usuário e com a beleza dos sites se tornou algo importante. 

Era a hora de colocar muito CSS, imagens e muito Flash nas páginas (antes do JavaScript dominar a web, tivemos o Flash e outras linguagens que rodavam no navegador para colocar dinamismo em nossos sites). Para isso, foi necessário que alguém especialista em artes começasse a construir layouts para a internet, então o web design nasceu como um braço do design gráfico e depois ganhou mais moral ainda como design digital. Hoje temos áreas ainda mais especializadas, como User Experience Design (UX) e User Interface Design (UI) para que sejam criados sites e aplicações com um diferencial tão otimizado que nós, usuários, queiramos ficar com essa experiência (ao ponto de não querer usar outros sites/aplicações por possuírem uma experiência diferente ou ruim).

Perceba que, de acordo com que o mercado foi se digitalizando e as empresas e outras entidades, assim como pessoas físicas, caiam para dentro da web, a necessidade profissional também se transformava.

O que antes podia ser feito e mantido por poucas pessoas em cargos de webmasters, logo depois precisava de mais gente, então tivemos a separação entre webmasters e webdesigners. Em algum momento uma pessoa fazia código e a outra desenhava os layouts e planejava a experiência de usuário.

Até aqui, ainda está tudo bem, temos a pessoa webmaster fazendo o que sempre fez; mexendo com código. Mas, as tecnologias evoluíram e evoluíram muito (e rápido demais para algumas pessoas acompanharem). A preocupação em fazer sites começou a se tornar em fazer aplicações, sistemas web. As empresas começaram a migrar os seus sistemas de gestão, que antes eram instalados em cada computador através dos arquivos executáveis e escritos em linguagens como C, VB ou COBOL para a internet e o acesso e gestão dos sistemas ser facilitado através do uso de um navegador web.

Neste instante já começou a rolar uma outra grande revolução, que ficou conhecida como web 2.0. Nessa nova maneira de fazer web, temos a preocupação com uma web semântica, com a criação de novas tags HTML que permitiram que o conteúdo ganhe muito mais relevância para o usuário final além de maior acessibilidade para pessoas com deficiência. O usuário é o foco da web 2.0, então termos como experiência do usuário, participação do usuário, internet rica e internet social (se falando de redes sociais mesmo) ganharam muito destaque. Mas o que forçou a quebra da profissão webmaster em várias foi a adoção de algo chamado SaaS.

Software como serviço (Software as a Service, SaaS) é o fato de que, agora, você não paga pelo software, mas por utilizar ele. E isso é muito mais prático e fácil de fazer através da internet. Se você é uma pessoa desenvolvedora de software, tem noção do quão chato é trabalhar com autenticação de usuários em sistemas quanto mais trabalhar com as permissões de usuários. Agora imagine controlar isso e ainda precisar se preocupar com crackers e outras maneiras de burlar os softwares instalados nos sistemas operacionais. A web foi vista como uma plataforma perfeita para este e outros modelos de entrega de software.

Mas fazer software não é o mesmo que fazer sites. O trabalho da pessoa webmaster agora se tornou algo impraticável. Não teria como esta pessoa se manter atualizada dentro de tantas tecnologias, falhas de segurança, boas práticas e outros detalhes importantes de partes específicas dos sistemas. Por isso nasceram diversas profissões, como frontend, backend, site reliability engineer, DBAs, analistas de infraestrutura, suporte técnico, administradores de redes e por aí vai. Tudo isso para entregar a maior qualidade possível para o usuário final, garantir a disponibilidade, qualidade e segurança dos softwares que vieram para a internet e, claro, o lucro das empresas.

Agora a preocupação da pessoa desenvolvedora frontend se tornou construir aplicações com experiências ricas, alta performance, escalabilidade, compatibilidade entre diversos dispositivos e navegadores, animações, além do cuidado com processos de desenvolvimento de software como testes de unidade, integração e deploy contínuo, versionamento de código fonte e diversas outras práticas que ainda não estavam na indústria web.

A diferença entre backend, mobile e frontend eu já tratei em outro artigo que você pode conferir: [a diferença entre frontend, backend e mobile](/posts/a-diferen%C3%A7a-entre-frontend-backend-e-mobile/).

## <a name='Evoluesnoparamdeacontecer'></a>Evoluções não param de acontecer

Assim como a front e backend, nasceu o cargo fullstack. Uma pessoa que continua trabalhando em toda a pilha de desenvolvimento de softwares web ou sites. Profissão que, inclusive, é muito criticada por algumas pessoas que afirmam que é impossível dominar **tudo** o que o mercado de tecnologia produz e precisamos para criar boas aplicações web.

Eu acredito que as pessoas podem fazer o que quiserem e, se tiverem tempo, conseguem fazer qualquer coisa. Não critique a profissão fullstack, jovem. 

Alguns gerentões ainda dizem que a profissão frontend vai acabar por causa da evolução da inteligência artificial e como os softwares gráficos hoje conseguem escrever código frontend melhores do que antigamente e muitas vezes não precisam de alguém especialista para cuidar do seu produto.

Olha, o Wix é uma ferramenta incrível para construirmos sites completos, WordPress é um CMS maravilhoso, o Hasura cria APIs maravilhosas, dá pra criar apps sem nem saber programar usando o App Inventor, o uso de Cloud possibilitou construir uma infraestrutura inteira sem mexer com um cabo de rede e nem por isso deixamos de precisar de especialistas em backend, infraestrutura, mobile e por aí vai. 

As coisas evoluem e as pessoas evoluem junto. O mundo de hoje não se compara com a Web 1.0 e o mundo de amanhã não vai se comparar com o que fazemos hoje.

É importante que você acompanhe o mercado para não se tornar o tiozão que se impressiona com uma inovação e já sai gritando por aí que as coisas vão morrer. O Java não morreu, o COBOL não morreu, só o que morre é a nossa capacidade de raciocinar criticamente quando estamos emocionados.

Esteja, você, pessoa desenvolvedora de software, preparada para as próximas evoluções. Acompanhe pessoas que compartilham conhecimento e utilidades para que as novidades não te assustem e vamos juntos continuar dominando este imenso [universo da programação](https://www.casadocodigo.com.br/products/livro-universo-programacao).

Qual será que é o futuro da nossa profissão?

Envie sua opinião pro meu Twitter, [@1ilhas](https://twitter.com/1ilhas), e vamos bater um papo. 


## <a name='Outrasreferncias'></a>Outras referências

- [Profissional Webmaster](https://pt.wikipedia.org/wiki/Webmaster)
- [Web Design](https://pt.wikipedia.org/wiki/Web_design)
- [CGI](https://en.wikipedia.org/wiki/Common_Gateway_Interface)
- [web.archive Amazon](https://web.archive.org/web/*/www.amazon.com)
- [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee)
- [Web 3.0](https://en.wikipedia.org/wiki/Semantic_Web#Web_3.0)
