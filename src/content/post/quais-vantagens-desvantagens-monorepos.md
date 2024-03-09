---
title: Quais as vantagens e desvantagens de se utilizar monorepos
publishDate: '2022-08-30'
category: Engenharia de Software
tags:
  - JavaScript
  - Nodejs
  - frontend
  - engenharia
excerpt: Escolher seguir entre utilizar polyrepos ou monorepos é um trabalho complicado. Precisamos avaliar muito bem as vantagens e desvantagens de cada tecnologia, por isso levantei neste artigo as vantagens e desvantagens do uso de monorepos.
---

Sempre que temos que escolher o uso de uma nova tecnologia, abordagem ou arquitetura, precisamos levantar suas vantagens e desvantagens. Afinal de contas, podemos tomar decisões que levam ao sucesso de um projeto ou ao total fracasso. E existem vantagens e desvantagens de se utilizar monorepos. Vamos conhecer elas aqui.

## O que são monorepos

Monorepos são um modelo de arquitetura onde temos todas as partes da nossa aplicação (ou até mesmo todo o código fonte da empresa) em um único repositório isoladamente. Ou seja, mesmo que os códigos estejam todos em um único lugar, não significa que não estejam separados lógicamente e até mesmo possam ser publicados sem interferir uns nos outros.

Para saber mais, como contexto histórico e exemplos práticos, leia este artigo: [o que é monorepo](/posts/o-que-é-monorepo/).

## Vantagens da utilização dos monorepos

Para facilitar nosso trabalho em analisar as vantagens e desvantagens do uso de monorepos, vou compartilhar em formato de lista nesta sessão e, logo abaixo, aprofundo em cada tópico para deixar mais claro.

Algumas das vantagens do uso de monorepos:

- facilidade de compartilhar código
- facilidade de gestão de dependências
- atomic commits
- rápida refatoração a nível organizacional
- facilitação da colaboração entre times via inner source
- rápido onboarding de novos membros no code base
- visibilidade dos códigos da empresa ou da comunidade
- CI/CD/Configurações unificadas
- colaboração entre times

### F**acilidade de compartilhar código**

Compartilhar código hoje em dia não é algo difícil, você pode facilmente criar uma biblioteca, exportar para um registro (como o NPM, pip, Ruby Gems) e importar em outro projeto; porém, com os monorepos, acaba ficando mais fácil, sem a necessidade de um gerenciador de pacotes ou novo deploy para que todos os projetos tenham acesso ao novo código quando realizamos alguma alteração.

Utilizando monorepos, podemos simplesmente escrever o código do novo módulo e importar em todas as aplicações com um único PR. Não seria necessário um deploy desse módulo em um registro, a instalação em uma aplicação e só então poder o utilizar.

### Gestão de dependências

Quando temos muitos projetos espalhados por uma empresa ou comunidade, em determinado momento teremos o desafio de atualizar dependências em todos estes repositórios. E, na maior parte do tempo, devido a esse trabalho, os projetos estão rodando com versões diferentes de uma mesma biblioteca.

Isso pode não parecer um grande problema, mas quando estamos em times e projetos de larga escala, essa falta de consistência gera dificuldade em debugs, problemas de segurança da informação e inconsistência de fluxo para o usuário final.

No monorepo temos uma única fonte de verdade que controla as versões das bibliotecas instaladas no nosso projeto e em todos os lugares são instaladas essas versões. Subindo a versão de alguma lib para o repositório, todas as aplicações passam a utilizar essa nova versão.

### Atomic commits

Quando precisamos alterar algo comum entre projetos, como no caso de uma nova convenção, novo padrão ou mesmo a gestão de dependências, em grandes times, o maior desafio é o de ter que avisar todos os times ou entrar em cada repositório realizando essa alteração.

Commits atômicos são essas grandes alterações de uma vez só. Como temos acesso a todo o codebase dos times, podemos realizar uma rápida refatoração mudando tudo de uma só vez.

Assim conseguimos a **rápida refatoração a nível organizacional**. Qualquer alteração que precisa acontecer em toda empresa, pode ser feita de uma só vez e, muitas vezes, por alguma IDE ou linha de comando.

### Facilitação da colaboração entre times via inner source

Outro desafio em grandes times é incentivar o inner source. Ou seja, incentivar que pessoas de outros times realizem PRs ou alterações em nossos códigos. Normalmente o time A não envia PRs para o time B ou não faz refatorações por conta da falta de tempo ou mesmo por conta da falta de padrões entre projetos.

Como todos os códigos estão em um único local, realmente padronizados através das automações que garantem essa consistência, o problema de tentar ajudar e não saber o que está acontecendo naquele código diminui bastante.

### Rápido onboarding de novos membros no code base

Uma barreira de entrada de novas pessoas em um time é sobre a governança dos repositórios. Normalmente recebemos acesso a alguns repositórios do nosso time e depois precisamos pedir acesso a outros, como no caso de acesso ao local onde estão os scripts para o Terraform ou outros recursos de infraestrutura como código.

Não somente o acesso a repositórios que nos são importantes, mas o fato de um mesmo time, com vários projetos, possuir muitos repositórios é um desafio. A pessoa procura um trecho de código em um web service e quando entende o que está buscando, este trecho está em outro web service em outro repositório. Esse desafio aumenta a fricção de entrada em novos times.

Como o código arquitetado em monorepo está todo em um único local, com um CTRL + F podemos encontrar qualquer coisa que precisarmos.

### Visibilidade dos códigos da empresa ou da comunidade

Assim como no caso de onboarding de novos membros, a visualização de convenções ou debug em repositórios espalhados é um desafio. Muitas vezes nos pegamos na barra de busca de ferramentas como o GitHub procurando um trecho de código em toda a nossa organização para conseguir entender alguma implementação, por exemplo.

O problema é quando não temos acesso ao repositório certo com essa implementação. No caso dos monorepos, tudo está a uma busca via editor de textos/IDE/Terminal.

### CI/CD/Configurações unificadas

Mesmo com muita conversa, muita documentação e muito treinamento sobre como realizar certos procedimentos, com o tempo os projetos vão deixando de ter a mesma consistência de antes. Isso porque acontecem mudanças de membros do time, acontecem bugs que precisam ser realizados com algum workaround (conhecido no Brasil como gambiarra ou desvio técnico condicional). O processo de CI e CD sofre com essas inconsistências.

Com o monorepo, temos uma única configuração para todos os projetos e por isso conseguimos garantir que todas as aplicações estão passando pelo mesmo pipeline de qualidade, segurança, performance e afins.

Dá para modificar algo somente para uma aplicação ou outra. Porém isso não é incentivado e se faz menos necessário, uma vez que qualquer problema que você estiver enfrentando no seu projeto, várias outras pessoas também vão passar e/ou estarão olhando isso no codebase para poder te ajudar.

### Colaboração entre times

É muito difícil conseguir fazer com que os times colaborem entre si através de repositórios espalhados, uma vez que o contexto do dia a dia suga o nosso tempo e não conseguimos sair do nosso fluxo de entregas para apoiar outros times. Muitas vezes não conseguimos fazer isso nem mesmo dentro da nossa própria tribo/line/business unit.

O fato de todas as aplicações da empresa estarem em sua responsabilidade aumenta a necessidade de colaborar com outros times/projetos. Também é mais simples enxergar duplicações de código, falta de padrões e afins quando começamos a debugar as dependências das aplicações e aplicações em si e já resolver com uma refatoração sem precisar pedir permissão, pois todos os códigos são da responsabilidade de todos de fato.

## Desvantagens da utilização dos monorepos

Seguindo o mesmo processo da sessão de vantagens, vamos a lista de desvantagens do uso de monorepos e depois aprofundamos em cada tópico.

Algumas das desvantagens do uso de monorepos:

- problemas de performance com o fluxo padrão de trabalho com versionamento de código
- o risco de quebrar a master/main e bloquear a empresa
- alto volume de commits ou pull requests por dia
- tempo de deploy é maior
- o tempo de download do repositório é muito maior
- a dificuldade de colaboração no open source
- risco de segurança para o caso de o codebase ser roubado

### Problemas de performance do versionamento

Trabalhando em projetos que recebem muita modificação percebemos que a quantidade de versões escala rapidamente. Você já deve ter passado por algum código que foi modificado muitas vezes e, por isso o comando `git blame` demorou muito para acontecer. Trocar de branch se torna um desafio.

Agora imagina todos os times criando várias versões todos os dias, o dia inteiro. Trabalhar com o modelo convencional de versionamento se torna complicado e por isso é necessário aprender novas maneiras de gerenciar os repositórios quando começamos a trabalhar com monorepos.

Muitas pessoas incentivam o uso de trunk based development por conta deste problema de performance. O modelo trunk based não é utilizado somente para monorepos, muito pelo contrário. Porém é incentivado por pessoas que utilizam monorepos devido ao fato de que fazer um `git checkout` pode acabar com suas horas produtivas do dia.

### O risco de quebrar a main

Quando estamos desenvolvendo o nosso código, na maior parte do nosso tempo, quebramos os nossos projetos. Isso é um fato. O risco de quebrar um build e demorar para resolver quando temos um repositório de um time com problema é simples de gerenciar. O desafio em monorepos é garantir que ninguém vai quebrar o build do monorepo, travando os deploys da empresa ou comunidade inteira.

Para isso, se utiliza forte e expressivamente os testes de integração e automações que garantem que você não consiga fazer um push sem que tudo esteja funcionando corretamente. Mas, ainda que um risco controlado, é um risco.

### O alto volume de commits e pull requests por dia

Em uma pequena equipe, é comum revisarmos 3/5 pull requests por dia. Além de o fato de que podemos fazer um `git pull` e baixar dezenas de commits de uma só vez. Caso aconteça um conflito, vai dar trabalho.

No caso de monorepos, o número de pull requests abertos pode chegar aos milhares por dia. Será necessário um grande trabalho de governança para garantir que está tudo sendo revisado e realizando o merge a tempo para não atrasar a entrega de algum time.

### A demora no download do repositório

Um grande desafio que tinhamos ao utilizar o Microsoft Teams Foundation antes dele se tornar parte do Azure e começar a utilizar o Git era a demora ao baixar um repositório com muitos arquivos, várias branches ou vários commits. O Git resolveu isso com muia maestria. Mas em monorepos a quantidade de arquivos é muito grande, assim como era no MS Foundation então o tempo de download vai escalar de acordo com a quantidade de arquivos e o histórico do Git.

Este realmente será um grande desafio de governança, mas, normalmente, ao trabalhar com monorepos vamos escolher o compartilhamento de código entre aplicações acima de tudo. Sempre teremos por volta de 80% do nosso código compartilhado entre aplicações e o restante são as aplicações em si. Essa filosofia, por si, pode reduzir a quantidade de código escrito, porém o problema da quantidade de arquivos sempre vai existir, tornando o download mais demorado.

### O tempo de deploy

Para realizar o deploy de uma aplicação em um monorepo, serão realizados muitos testes de integração, que são mais demorados de acontecer, mas extremamente necessários para garantir que uma alteração não quebra todas as outras aplicações e por isso o tempo de deploy vai aumentar.

Utilizando os processo de caching nas ferramentas de CI/CD, conseguimos reduzir bastante o tempo de deploy. As ferramentas de gestão de monorepos também conseguem realizar o cache de alterações e por isso realizar procedimentos somente para o que realmente foi alterado. Porém um repositório com muito código vai sim demorar para passar no pipeline de CI/CD.

### A dificuldade de contribuir com monorepos open source

Você deve utilizar alguma biblioteca ou pacote que recebe milhares de contribuições por dia. Esses times passam por todo o trabalho que já comentei até aqui sobre governança do repositório. Tanto sobre padronizar código fonte, garantir convenções, revisar milhares de pull requests, etc.

O nosso maior desafio quando vamos contribuir com um projeto que está em um monorepo é o fato de que não dá para fazer fork somente daquele pedaço de código que gostaríamos de mexer. Será necessário passar por todos os problemas que eu citei até aqui sobre tempo de download, risco de quebrar outros pacotes e os problemas de performance do versionamento.

### O risco de segurança do codebase roubado

Você já deve ter ouvido algum caso de uma pessoa desenvolvedora ser hackeada, perdendo o controle do seu sistema operacional e isso se espalhando para a empresa. Quando algo assim acontece, se estamos em times controlados e espalhados, pode ser que o codebase roubado possa ser somente o relacionado a um trecho da aplicação. Mas quando em monorepos, o código fonte de toda a empresa está a disposição da pessoa desenvolvedora e agora da pessoa que lhe roubou.

Existem diversas práticas de application security que utilizamos para que esse tipo de problema não afete uma organização inteira, como o uso de secrets separados do repositório em soluções como o Vault, a necessidade de usar VPN para fazer qualquer coisa relacionada a organização e afins, mas o código em si agora estará nas mãos de uma pessoa fora da organização.

## Monorepo não é somente sobre repositórios

Quando você escolhe uma tecnologia para trabalhar em times, a escolha não é somente sobre tecnologia. Esta escolha vai influenciar toda a empresa ou comunidade que trabalha em cima daquele código.

Existe uma citação muito importante que seguimos na engenharia de software que é a Lei de Conway.

> Qualquer organização que projeta um sistema produzirá um projeto cuja estrutura é uma cópia da estrutura de comunicação da organização.
> – Melvin E. Conway (em tradução livre)

Utilizar monorepos muda a forma como toda a empresa trabalha. Muda como acontecem as contratações, os fluxos de onboarding, as ferramentas de build, deploy e muito mais.

Trabalhar com polyrepos tem suas complicações, trabalhar com monorepos também. Será necessário avaliar quais os prós e contras que queremos conviver no dia a dia.

## Conclusão

Com todos os prós e contras do uso de monorepos, sinto que é mais fácil gerenciar um codebase em um repositório único do que a gestão de equipes, expectativas de stakeholders, alinhar prazos para poder realizar um refactoring ou coisa do tipo.

Talvez, ao estudar os cenários, você chegue a solução de utilizar mono e polyrepos, assim como não utilizar monorepos ou só utilizar monorepos. Será uma decisão que precisa se basear em muita informação, como aprendemos ao pensar que essa escolha não é somente sobre a tecnologia, mas sobre tudo dentro da organização.

Abaixo você encontra alguns links que podem ajudar a tomar uma decisão baseado na experiência de outras empresas e projetos.

- [Uber Technology Day: Monorepo to Multirepo and Back Again](https://www.youtube.com/watch?v=lV8-1S28ycM&ab_channel=UberEngineering)
- [From Monorail to Monorepo: Airbnb’s journey into Microservices](https://www.youtube.com/watch?v=sakGeE4xVZs&ab_channel=SFHTML5)
- [Why Google Stores Billions of Lines of Code in a Single Repository](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)
- [Facebook: Monorepos: Moving Fast in a Huge Repository](https://www.facebook.com/atscaleevents/videos/systems-scale-2019-monorepos-moving-fast-in-a-huge-repository/457153524992062/)
- [Twitter e o Pants](https://www.notion.so/Quais-as-vantagens-e-desvantagens-de-se-utilizar-monorepos-cef3acfa71a04b08a99bcb0426e9ebb5)
- [A Netflix segue com multi-repos](https://netflixtechblog.com/towards-true-continuous-integration-distributed-repositories-and-dependencies-2a2e3108c051)
- [O Android é versionado de maneira híbrida](https://source.android.com/docs/setup/create/coding-tasks)

## Referências

[https://en.wikipedia.org/wiki/Monorepo](https://en.wikipedia.org/wiki/Monorepo)
[https://trunkbaseddevelopment.com/](https://trunkbaseddevelopment.com/)
[https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/what-is-tfvc?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/what-is-tfvc?view=azure-devops)
[https://nx.dev/concepts/mental-model](https://nx.dev/concepts/mental-model)
[https://www.vaultproject.io/](https://www.vaultproject.io/)
[https://www.perforce.com/blog/vcs/what-monorepo](https://www.perforce.com/blog/vcs/what-monorepo)
[https://www.thoughtworks.com/insights/articles/demystifying-conways-law](https://www.thoughtworks.com/insights/articles/demystifying-conways-law)
[https://semaphoreci.com/blog/what-is-monorepo](https://semaphoreci.com/blog/what-is-monorepo)
[https://kinsta.com/blog/monorepo-vs-multi-repo/](https://kinsta.com/blog/monorepo-vs-multi-repo/)
[https://circleci.com/blog/monorepo-dev-practices/](https://circleci.com/blog/monorepo-dev-practices/)
[https://www.toptal.com/front-end/guide-to-monorepos](https://www.toptal.com/front-end/guide-to-monorepos)
[https://github.com/korfuri/awesome-monorepo](https://github.com/korfuri/awesome-monorepo)
[https://monorepo.tools/](https://monorepo.tools/#what-is-a-monorepo)
