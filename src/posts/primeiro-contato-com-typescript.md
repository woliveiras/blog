---
title: Meu primeiro contato com TypeScript
date: '2021-01-01'
tags:
    - typescript
    - engenharia
description: Depois de muito fugir, dei uma chance para aprender TypeScript e o resultado dessa busca vamos ver juntos.
socialImage: '/images/posts/fionn-claydon-zu9l6Lqi4bE-unsplash.jpg'
---

TypeScript é um superset de JavaScript e eu já [utilizei ferramentas que se propunham a “melhorar” o JavaScript](https://coffeescript.org/) (talvez a proposta não fosse melhorar o JavaScript, mas as pessoas que me ensinaram disseram que era pra isso que alguns supersets existiam), afinal de contas sabemos que a linguagem que domina a web possui [vários casos](https://wtfjs.com/) que incomodam a pessoa desenvolvedora de software, nos obriga a adotar práticas de [programação defensiva extensivamente](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_defensiva).

E é por isso que, durante um bom tempo, eu corri de aprender essa nova linguagem da Microsoft. 

Além do mais, eu nunca gostei de ter que ficar escrevendo qual o tipo do dado que está sendo adicionado a um identificador. Porém dei o braço a torcer e comecei a estudar com mais carinho essa linguagem/superset e o TypeScript me chamou a atenção por conta de uma abordagem diferente de utilização que vou comentar melhor durante o texto.

Em primeiro lugar vou explicar o porquê busquei aprender a linguagem e depois vamos aprofundar no que estou sentindo quanto aos meus estudos.

## Ferramentas de trabalho para TypeScript

Como qualquer linguagem, precisamos de ferramentas para trabalhar com ela: um editor de textos ou IDE, o compilador ou interpretador da linguagem e uma plataforma de execução do código final.

Como editor de textos, é claro que o VS Code seria a minha escolha e com TypeScript o negócio está brilhando lindamente, uma vez que ambos são tecnologias do mesmo grupo. Não encontrei valor em trocar o VS Code por nenhuma outra ferramenta.

> [VS Code](https://code.visualstudio.com/)

O TypeScript possui o seu compilador, o **TSC**, e tudo o que precisamos para ele funcionar é ter o Node.js instalado em nosso sistema operacional e rodar o comando do gerenciador de dependências que preferimos ([Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)).

Caso não tenha o Node.js instalado em sua máquina, recomendo a utilização do NVM para isso e, se não conhece o NVM nem o Node, venha neste artigo configurar o seu ambiente de desenvolvimento JavaScript (agora TypeScript): [configurando o ambiente fullstack JavaScript](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/).

Se você não tem conhecimento em linha de comando, pode aproveitar este artigo para aprender rapidamente: [introdução a linha de comando](/posts/introdução-ao-terminal/).

Para rodar o código gerado pelo TSC, vamos utilizar o próprio Node.js ou o navegador, dependendo do que queremos fazer.

No meu caso, como estou aprendendo a linguagem, fui pelo caminho mais rápido, que é executar diretamente no Node.js (depois de compilar o código .ts para .js, basta rodar o `node nome_do_arquivo.js`).

## Meu primeiro contato com TypeScript

O meu primeiro contato com TypeScript foi através do próprio Playground da ferramenta no site oficial: [typescriptlang.org/play](https://www.typescriptlang.org/play). Ali, lendo código fonte, uma pessoa experiente consegue aprender bastante coisa e tirar várias conclusões sobre a sintaxe ou o que mais quiser ver.

Mas o conteúdo que eu mais curti foi através do livro que inspirou a escrita dos meus artigos sobre TS, o livro [Programming TypeScript: Making Your JavaScript Applications Scale](https://amzn.to/34XGRXZ).

Para registrar meus estudos, uso projetos práticos, por isso criei um monorepo onde estou colocando os códigos que estou desenvolvendo: [woliveiras/learning-typescript](https://github.com/woliveiras/learning-typescript).

Alguns anos atrás, quando tive o verdadeiro primeiro contato, achei o uso de tipagem estática desnecessário nos projetos em que desenvolvia. Isso devido ao fato de já seguirmos boas práticas, o código final é gerado pelo [Babel](https://babeljs.io/) e os design patterns e arquiteturas que aprendemos em livros como [Refactoring to Patterns](https://amzn.to/3hyI50P), [Clean Code](https://amzn.to/3522yWS) ou [Clean Architecture](https://amzn.to/2LdDqFe) me deixam confortável o suficiente com a segurança e escalabilidade do que eu produzi até aqui. Então foi por isso que demorei tanto para abrir o coração e aprender a linguagem.

O segundo contato, agora com a mente vazia e esperando menos, está sendo muito bom. O que eu detestava era o fato de que a partir do momento em que eu via código TypeScript logo vinham milhares de linhas de código extra ou OOP sendo usada desordenadamente em qualquer situação, me levando ao sentimento de estar escrevendo código Java e não algo novo (nada contra a linguagem Java, só o fato de ser verbosa).

Mas o fato é que não precisa ser assim, inclusive é nisso que estou focando. Utilizar tipagem em nosso código fonte garante sim mais segurança em nosso código, o compilador do TypeScript é ótimo, me lembra até mesmo o compilador de [Rust](https://www.rust-lang.org/), um amorzinho que pega na nossa mão e nos mostra os erros e como corrigir. TSC não chega a ser como o rust compiler, porém traz belas mensagens de erro que nos mostram realmente onde temos que focar. 

Rodar JavaScript depois de compilar pelo TSC também nos ajuda a confiar mais no que estamos colocando em produção, já que a maioria dos possíveis erros estáticos nós já corrigimos em tempo de desenvolvimento.

Estou na metade dos meus estudos e, até agora, não precisei escrever nenhuma classe! E isso me deixa bem feliz.

Para quem gosta de programação funcional, o TypeScript também nos agrega conforto, visto que saber realmente o que está chegando nos argumentos da execução da função e qual é o tipo do retorno de outro módulo facilita um pouco a nossa vida. 

Outra coisa que me deixa feliz é o fato do VS Code funcionar tão competentemente com TypeScript que a produtividade realmente aumenta (pensando somente na escrita de código fonte).

Mas vamos ao ponto principal que comentei logo no começo do texto: preciso realmente deixar o meu código mais verboso ao utilizar TypeScript?

A resposta curta é **não**.

Pelo contrário do que eu estava acostumado ver nos exemplos de código nas palestras e artigos na internet, escrever código em TS não precisa ter tipagem explicita em TODO canto. Podemos confiar no compilador (sério), pois a inferência de tipos funciona muito bem e, se você tiver alguma dúvida, pode  fazer o teste de criar um arquivo .ts, colocar o seguinte conteúdo e abrir no VS Code (assim você não precisa nem executar o compilador, o editor já vai te mostrar a tipagem)

```typescript
let a = 1042
let b = 'Libreflix is cool'
const c = 'Banana'
let d = [true, false, true]
let e = { type: 'script' }
let f = [1, false]
const g = [3]
let h = null
```

## Conclusão

Claro que eu ainda não tenho todas as respostas para as questões que eu busco responder sobre escalabilidade no design de código, mas o TypeScript parece ser uma ferramenta que vai me ajudar bastante em minha caminhada e é por isso que estou investindo tempo estudando a linguagem.

Outras vantagens, que eu não comentei anteriormente, mas você pode encontrar em qualquer listagem de “porque usar TypeScript” da vida são os decorators, modulos, namespaces, interfaces, type aliases, enums, mixins, parâmetros opcionais, index signatures,  e assim vai.

O Matheus Mariano escreveu um artigo bem legal que pode ser mais introdutório e menos opinativo sobre a linguagem, confira [aqui](https://medium.com/@matheusmariano/o-m%C3%ADnimo-que-voc%C3%AA-precisa-saber-sobre-typescript-58d1b418f78b).

Caso você esteja pensando em utilizar TypeScript, recomendo a leitura do livro indicado anteriormente [Programming TypeScript: Making Your JavaScript Applications Scale](https://amzn.to/34XGRXZ), assim como assinar minha campanha no Apoia.se ([apoia.se/uillaz](https://apoia.se/uillaz)) para não perder o meu conteúdo.

<span>Photo by <a href="https://unsplash.com/@fclaydon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Fionn Claydon</a> on <a href="https://unsplash.com/s/photos/climbing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
