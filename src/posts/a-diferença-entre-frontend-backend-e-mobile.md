---
title: A diferença entre frontend, backend e mobile
date: '2018-08-06'
socialImage: "/images/posts/diferent-drinks.jpeg"
tags:
    - carreira
    - programação
    - computação
    - backend
    - frontend
    - mobile
description: Um artigo para desmistificar as diferentes especialidades de uma pessoa desenvolvedora de software.
---
<!-- vscode-markdown-toc -->
* [O que faz uma pessoa desenvolvedora de software?](#Oquefazumapessoadesenvolvedoradesoftware)
* [E onde entram frontends, backends ou mobile devs?](#Eondeentramfrontendsbackendsoumobiledevs)
* [A similaridade das profissões](#Asimilaridadedasprofisses)
* [Plataforma](#Plataforma)
* [Precisa se preocupar com diversas plataformas?](#Precisasepreocuparcomdiversasplataformas)
* [Lida com dados vindo de terceiros?](#Lidacomdadosvindodeterceiros)
* [Precisa persistir dados na plataforma?](#Precisapersistirdadosnaplataforma)
* [Precisa se preocupar com sessão de usuário?](#Precisasepreocuparcomsessodeusurio)
* [Precisa se preocupar com a camada de rede?](#Precisasepreocuparcomacamadaderede)
* [Precisa se preocupar com o funcionamento offline da aplicação?](#Precisasepreocuparcomofuncionamentoofflinedaaplicao)
* [Precisa se preocupar com infraestrutura?](#Precisasepreocuparcominfraestrutura)
* [Precisa se preocupar com cache de dados?](#Precisasepreocuparcomcachededados)
* [Bibliotecas e Frameworks](#BibliotecaseFrameworks)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Constantemente precisamos explicar para as pessoas não técnicas o que fazemos em nosso nicho profissional. Principalmente quando trabalhamos com web e temos cargos como frontend, backend e fullstack.

Porém mesmo quando trabalhamos com programação ainda temos as nossas questões sobre o que as pessoas de outras áreas fazem. Graças a essa falta de conhecimento da outra área, normalmente existe o preconceito entre profissões. Como backends achando que seu trabalho é mais difícil do que frontend ou mobile, porque ambos só consomem o serviço do backend, mobile achando que seu trabalho é mais complicado, pois precisam dar atenção a diversas plataformas e também frontends achando que seu trabalho é mais complicado que o de todo mundo por ter que dar suporte ao IE.

Pois bem, vamos raciocinar um pouco sobre as responsabilidades de cada profissional para tentarmos encontrar um padrão e remover de vez este preconceito entre áreas.

Diferentes profissões com um mesmo objetivo são o mesmo que diferentes drinks com diversos sabores, mas todos eles matam a sede.

> Ninguém é tecnicamente mais capaz do que o outro por causa de sua especialidade

## <a name='Oquefazumapessoadesenvolvedoradesoftware'></a>O que faz uma pessoa desenvolvedora de software?

Independente da área de atuação, todas essas profissões são de pessoas desenvolvedoras de software, então elas têm algo em comum.

Pessoas desenvolvedoras de software tem a responsabilidade de resolver problemas de negócios, pessoais, produtividade ou qualquer problema utilizando automação, ou seja, com a criação de softwares.

Vamos pensar em um exemplo prático e analisar o caso de uma empresa fictícia:

> Essa empresa nasceu para resolver um problema. Quem fundou essa empresa percebeu que, com o crescimento da web, as informações estavam ficando difíceis de serem encontradas. Para localizar um artigo científico ou uma receita de bolo precisávamos decorar os endereços das páginas e saber exatamente onde existiria a informação que procurávamos. O que a pessoa fundadora da empresa enxergou foi que todo mundo precisava de um lugar para encontrar informação de maneira mais fácil. Então por que não criar um site que fizesse buscas na internet e encontra-se o que estamos precisando somente colocando algumas palavras-chave, como “como fritar qualquer coisa sem respingar na casa toda”?
>
> E assim foi feito! Foi reunida uma gama de pessoas desenvolvedoras de software para criar este site e foi, então, criada uma empresa que dominaria o mundo com sua organização dos dados do planeta terra, a Toodle. Um site de busca de informações na internet.

Percebemos que algo foi feito. Existia um problema e ele foi resolvido com o desenvolvimento de um software. Então, basicamente, é para isso que nossas profissões existem: criar software que resolva o problema das pessoas, de coisas ou processos, etc.

## <a name='Eondeentramfrontendsbackendsoumobiledevs'></a>E onde entram frontends, backends ou mobile devs?

Essas profissões nasceram devido a especificidade e problemas que somente uma certa especialização conseguiu resolver. Problemas que empresas menores muitas vezes nem pensam em passar, como:

- Questões de performance em aplicativos de celular que precisam enviar milhares de informações em poucos instantes para algum servidor.
- O processamento intenso desses milhares de dados chegando tão rapidamente.
- A exibição desses milhares de informações no navegador em um dashboard em real time.

Problemas esses que, **talvez**, pessoas fazendo um fluxo completo (fullstacks) não conseguem entregar tão rapidamente como a paralelização do desenvolvimento de um software.

Se a especialização ou generalização é um bom caminho profissional a se escolher ou não, isso varia de localidade (país, região, cidade) e até de empresas em que desejamos trabalhar. Isso não cabe neste artigo, pois a ideia aqui é entendermos as similaridades entre as áreas de trabalho.

Eu, **pessoalmente**, prefiro a carreira em T, citada nestes artigos:

- [Criando nosso plano de carreira e assumindo o controle do nosso futuro profissional](/posts/criando-nosso-plano-de-carreira-e-assumindo-o-controle-do-nosso-futuro-profissional/)
- [Criando nosso plano de carreira no Trello](/posts/criando-nosso-plano-de-carreira-no-trello)

## <a name='Asimilaridadedasprofisses'></a>A similaridade das profissões

Por mais que saibamos que toda profissão possui suas próprias peculiaridades, as pessoas continuam a achar que suas áreas são as mais importantes dentro de um trabalho de criação. Eu, como frontend, atualmente, posso achar que o que eu faço é mais importante que a pessoa de backend ou a de mobile e vice-versa.

Sabendo que todo mundo está aqui por um mesmo objetivo, que é resolver problemas, como entender que todo mundo tem seus próprios problemas e que não… Não existe área mais importante do que a outra?

Pensei em usar uma tabela para raciocinar em cima, então vamos observar o que existe de similar em todas essas profissões. Analise a tabela abaixo (possui rolagem lateral).

<script src="https://gist.github.com/woliveiras/b2937904ba3b98ef64a1fe2c9a9bf3d5.js"></script>

*Tabela de relacionamento entre profissões*

Vamos entender cada ponto.

## <a name='Plataforma'></a>Plataforma

Quando estamos desenvolvendo software precisamos atender diversas plataformas. Se é um programa desktop, por exemplo, a nossa plataforma será o sistema operacional.

Quando trabalhamos como backends possuímos o sistema operacional (Windows, Linux, BSD, etc) como a plataforma que irá executar o nosso software. Quando atuamos como mobile devs, o sistema operacional mobile (Android, iOS, entre outros) é nossa plataforma. E quando nossa profissão é frontend, temos o navegador (Chrome, IE, Firefox, etc) como nossa plataforma.

Isso implica em: precisamos conhecer muito bem as plataformas nas quais nosso software irá rodar. A pessoa de backend precisa conhecer os problemas que pode ter com relação a memória disponibilizada via sistema operacional, em não sobrecarregar o processador e não abusar da camada de rede. O mesmo acontece com mobile e frontend, uma pessoa descuidada trabalhando nessas duas frentes pode travar um celular por colocar uma rotina para processar intensamente não levando em consideração a capacidade disponível na plataforma. Ninguém quer usar um aplicativo ou entrar em um site que acaba com a memória do celular também e ninguém quer que uma aba do navegador puxe todos os recursos do seu computador.

## <a name='Precisasepreocuparcomdiversasplataformas'></a>Precisa se preocupar com diversas plataformas?

Como já é de se perceber acima, como temos que trabalhar com nossas plataformas, precisamos conhecer profundamente as mais utilizadas.

Uma pessoa de backend, bem provavelmente, precisará conhecer mais que uma distribuição de Linux para utilizar de acordo com a verba disponível para investir em hardware.

Uma pessoa de mobile precisa conhecer diversas versões de um mesmo sistema que muda muito de uma para a outra, o Android, por exemplo, está na versão 27 de sua API e isso implica em funcionalidades novas ou funcionalidades antigas parando de funcionar.

Uma pessoa de frontend, além dos diferentes navegadores disponíveis, que implementam suas APIs de acordo com que dá vontade, ainda precisam atuar em diferentes versões do mesmo navegador, que às vezes ainda não possui algum recurso que ela deseja usar para resolver algum problema em sua aplicação.

## <a name='Lidacomdadosvindodeterceiros'></a>Lida com dados vindo de terceiros?

Dados vindo de terceiros seria a utilização de APIs externas, como parceiros ou APIs que fornecem informações que precisamos para alguma funcionalidade de nossa aplicação.

Muitas vezes a pessoa de backend centraliza todas as chamadas a APIs de terceiros em sua parte do trabalho. Elas utilizam os recursos disponíveis para cachear os dados vindos de terceiros para não precisar solicitar uma informação (que não é atualizada com certa frequência) toda vez que alguém solicitar (frontends e apps mobile).

Porém existem coisas que não podem ficar no backend, como APIs de rastreamento de experiência de usuários e afins. Um grande exemplo é o uso do Google Analytics e Hotjar. Essas ferramentas precisam estar no frontend ou no app mobile para o rastreamento.

Assim como essas libs, existem também informações de terceiros que mudam tanto que não vale a pena deixar na aplicação backend, então a responsabilidade de solicitar esses dados fica com as aplicações que rodam do lado do cliente. Isso só aumentaria o tempo de resposta do servidor, levando a uma demora no carregamento das páginas ou dos aplicativos e ao abandono por parte do usuário do nosso software.

## <a name='Precisapersistirdadosnaplataforma'></a>Precisa persistir dados na plataforma?

Constantemente os softwares precisam dos seus dados armazenados em algum lugar para consultas futuras ou mesmo para compartilhar com outros softwares.

No caso da pessoa de backend, ela precisará armazenar estes dados em bancos de dados e para isso utilizam algum SGBD como PostgreSQL, MongoDB, etc. Muitas vezes, por ter que lidar com mais de um software além de suas stacks básicas (linguagem de programação e ferramentas de desenvolvimento) as pessoas de backend acreditam que seu trabalho é mais difícil, mas a realidade é que o SGBD é só mais uma API a ser consumida (igual as APIs do navegador ou do Android) e utilizando os ORMs fica ainda mais fácil utilizar essas aplicações.

ORM é uma técnica de desenvolvimento onde a pessoa desenvolvedora não precisa conhecer a linguagem SQL para trabalhar com os dados, basta utilizar seu conhecimento na linguagem de programação e deixar que uma lib (de terceiros ou não) faça o trabalho de lidar com SQL.

Antigamente, e ainda em algumas empresas com grandes massas de dados e problemas específicos com bancos de dados, existiam pessoas responsáveis só pela modelagem dos dados, mas hoje em dia a própria pessoa de backend é responsável por modelar o dado. Na maioria das vezes recorrendo aos ORMs.

Pessoas de mobile também precisam persistir dados, elas persistem diretamente no dispositivo do usuário (o celular) seja em formato de texto ou utilizando um banco de dados nativo da plataforma, como no caso do Android que utiliza o SQLite. Para facilitar o trabalho, também existem ORMs para trabalhar nos apps móveis, como ainda no caso do Android, o OrmLite.

Pessoas de frontend acabam lidando também com a persistência no dispositivo do usuário, nesse caso utilizando o navegador para essa persistência utilizando cookies, localStorage, sessionStorage, IndexDB e afins, dependendo da necessidade ou tamanho de dados.

## <a name='Precisasepreocuparcomsessodeusurio'></a>Precisa se preocupar com sessão de usuário?

O interessante de pensarmos na persistência de dados é que em muitos casos precisamos persistir por uma sessão do usuário, ou seja o dado é destruído quando o usuário finalizar uma conexão com o backend, fecha o navegador ou o app mobile.

Em todo caso precisamos lidar com sessão de usuário.

Em todos os casos a sessão é controlada, normalmente, utilizando os recursos da linguagem de programação, que já abstrai esse trabalho de criação, permanência e finalização de sessão.

## <a name='Precisasepreocuparcomacamadaderede'></a>Precisa se preocupar com a camada de rede?

Antigamente os dados ficavam todos em nosso software local, direto na máquina do usuário em nossas aplicações desktop. Assim como acontece com a calculadora em nosso celular que armazena o histórico de operações que realizamos e podemos acessar isso depois.

Hoje em dia os dados são trafegados pela rede em diversos formatos, como JSON, XML e afins para armazenamento em um servidor, no backend, e ser possível acessar de outros locais, como outros backends, frontends ou mobile apps.

Em todos os casos precisamos consumir e enviar dados o tempo todo pela rede.

Também, em todo caso, precisaremos conhecer verbos HTTP, diferentes protocolos de rede, como FTP, SMTP, SSH, etc.

Isso porque o backend, muitas vezes, precisa enviar um email para os usuários utilizando o protocolo SMTP, precisa acessar arquivos de outros servidores através do protocolo FTP e/ou acessar outros serviços via SSH.

Para a pessoa de frontend ou mobile o conhecimento do protocolo HTTP seria suficiente se nós só fizéssemos requisições POST, GET, PUT, UPDATE, DELETE para servidores, mas em nosso dia a dia não trabalhamos somente com isso e precisamos acessar algum serviço utilizando SSH ou pegar um arquivo de rede utilizando FTP.

Fora esse trabalho com protocolos, em todos os casos precisamos nos preocupar com conexões lentas ou queda de internet, com menos prioridade no backend que na maioria das vezes trafega em rede controlada onde conseguimos disponibilizar alta velocidade e disponibilidade, porém no frontend e mobile nós dependemos da internet do usuário que pode ser desde uma de gigas até uma banda larga popular de 256Kb/s.

## <a name='Precisasepreocuparcomofuncionamentoofflinedaaplicao'></a>Precisa se preocupar com o funcionamento offline da aplicação?

Como citado acima, a internet pode cair e, nesse caso, quem tem que se cuidar são as aplicações que atuam no frontend.

Precisamos manter uma forma de comunicação visual (desenvolvida por uma pessoa de design, claro) com o usuário mostrando para o usuário que ele está sem conexão.

Ultimamente tem se falado muito de PWAs, para o frontend, que, além de possuir uma experiência parecida com os aplicativos, ainda possui o funcionamento básico offline.

Nos apps mobile isso já era pauta antigamente, onde eles utilizam técnicas de cache para armazenar alguns dados e não deixar o usuário sem utilizar o app caso ocorra uma falha de comunicação ou mesmo um desligamento na conexão.

No backend, normalmente, as pessoas não criam aplicações que funcionam offline, afinal o servidor precisa estar funcionando para enviar os dados para o frontend ou mobile. Aqui não se encaixa o caso de resiliência caso as ferramentas de terceiros não respondam, pois isso não é uma falha de internet, mas uma falha de aplicação.

## <a name='Precisasepreocuparcominfraestrutura'></a>Precisa se preocupar com infraestrutura?

Em todos os casos podemos nos preocupar com infraestrutura ou não. Isso porque, na maioria das empresas hoje em dia, existem times responsáveis por cuidar da infra e disponibilizar tudo o que precisamos para trabalhar com nossos sistemas em servidores.

Porém existem casos onde esse time não existe e para que um servidor esteja no ar é necessário a intervenção da pessoa de backend, frontend ou mobile, dependendo do caso.

Uma pessoa de backend precisa colocar a aplicação no ar e para isso ela precisa que o servidor esteja em pé.

Uma pessoa de frontend precisa de um servidor entregando os estáticos para o usuário final e, na maioria das aplicações SPA, existe um servidor responsável somente por servir o frontend, isso para que a entrega do primeiro byte seja muito mais veloz do que aguardar o processamento de algum dado pelo backend ou o carregamento dos frameworks backend. Claro que não é toda empresa que faz isso, por isso está como talvez na planilha.

Pessoas de mobile não precisam colocar um servidor no ar, pois a entrega do aplicativo é feita via plataforma nativa (loja de aplicativos da Apple, Google, Microsoft, etc), porém pode ainda acontecer de ser necessário hospedar o app em um servidor específico e não utilizar as lojas e nesse caso pode acabar sobrando para a pessoa de mobile.

## <a name='Precisasepreocuparcomcachededados'></a>Precisa se preocupar com cache de dados?

Como já citado até aqui, existem dados que podem ser armazenados para futura consulta em um armazenamento mais veloz, em memória, como o Redis ou um localStorage, por exemplo e, em todas as áreas precisamos nos preocupar com isso.

Também existem os casos mais específicos, como é o caso dos arquivos estáticos, que podem ser armazenados pelo navegador do usuário para não precisar baixar novamente, para as aplicações frontend.

Na maioria dos casos client-side (mobile e frontend) a necessidade de cache é para dados que sabemos que não precisamos ficar pedindo para o servidor, para que a resposta da aplicação seja mais rápida do que enviar uma requisição e aguardar a resposta, onde o envio pode demorar caso a internet do usuário seja ruim ou a entrega pode demorar caso o backend passe por algum problema.

## <a name='BibliotecaseFrameworks'></a>Bibliotecas e Frameworks

Bibliotecas e frameworks agilizam muito o nosso trabalho e as entregas de software e em todas as frentes de trabalho nós os utilizamos largamente (seja isso bom ou ruim).

Quando trabalhamos como backends precisamos dominar as bibliotecas e frameworks que agilizam a criação de uma aplicação backend, como as libs requests, Scrapy e SQL Alchemy de Python ou os frameworks Django, Ruby on Rails, Express.

Quando trabalhamos como mobile devs temos (vou citar Android, pois não manjo nada de iOS) libs como gson, Retrofit e EventBus e o próprio Android framework e recentemente o Flutter.

Ao citar frontend nem precisamos comentar esse ponto, pois uma das principais piadas da internet é relacionado a quantidade de libs e frameworks JavaScript nascendo todos os dias.

Então, sim… Em todos os casos precisamos aprender e nos preocupar com libs e frameworks.

## <a name='Concluso'></a>Conclusão

O objetivo deste artigo é remover os estigmas da área de desenvolvimento de que existe uma área mais importante do que a outra. Todos temos a nossa importância dentro de um projeto ou de uma empresa e ninguém é mais tecnicamente capaz do que o outro por causa da área de atuação.

Cada pessoa possui uma especialidade e habilidades específicas, além dos pontos citados aqui que demonstra que é quase tudo igual, e que não fazem ninguém mais capaz que os demais.

Se você tinha esse preconceito, espero que ele tenha sido eliminado com o artigo. :heart:

Sejamos todos e todas engenheiros(as) de software.
