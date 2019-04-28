---
layout: post
title: Trabalhando com funções
date: 2019-04-27 21:56 -0300
categories:
    - javascript
    - computação
    - programação
    - série fullstack
image: "/images/posts/peter-ivey-hansen-1504523-unsplash-min.jpg"
tags:
    - javascript
    - computação
    - programação
    - série fullstack
description: Parte extremamente importante do desenvolvimento de software é parar de escrever o mesmo código várias e várias vezes, além do isolamento de escopo, que garante a segurança do nosso código. Vamos aprender a utilizar funções em JavaScript para fazer isso.
---
Aprendemos anteriormente a criar pequenos programas que executam ações baseado em um fluxo de expressões que nós estruturamos em rotinas que executam passo a passo enquanto nosso programa roda em alguma plataforma. No nosso caso pode ser no navegador ou no Node.js, pois anteriormente [instalamos o Node em nosso sistema operacional](/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/).

Porém existem rotinas que acabam sendo repetitivas e não estou falando da utilização de laços de repetição, como [while](/posts/laços-de-repetição-while-e-do-while/) e [for](/posts/laços-de-repetição-for-for-in-for-of/), mas aquelas vezes em que vamos precisar repetir um mesmo pedaço de código em outra parte do nosso código.

Funções existem para nos salvar nessas horas. Quando você perceber que está copiando e colando código de um arquivo para o outro em seu programa, será a hora de criar uma função. Mas elas não são úteis somente neste momento. 

Elas também são úteis para deixar o nosso código mais claro. Podemos criar uma sub rotina (uma função) quando precisamos dizer claramente o que está acontecendo e porque está acontecendo algo em um trecho do nosso código.

E temos outro motivo muito importante pelo qual utilizamos funções: o isolamento de escopo. Ter variáveis e rotinas que só existem dentro da função, para que o que fazemos ali não influencie no estado do nosso software sem realmente desejarmos que isso aconteça.

No decorrer do artigo ficará mais claro o quão importantes são as sub rotinas nas nossas vidas, como pessoas desenvolvedoras de software. Vamos aprender a criar, utilizar, entender os parâmetros de funções e com isso facilitar nossas vidas.

## Criando funções em JavaScript

JavaScript, devido a sua capacidade de ser multiparadigma, possui algumas maneiras de se criar uma função.

Vamos por partes:

- criar uma função nomeada
- passar uma função como valor para um [identificador](/posts/paradigmas-identificadores-e-tipos-de-dados/)
- criando uma função anônima

Entender que existem todas essas maneiras de se criar uma função é importante, mas vamos tentar focar no porque utilizamos cada abordagem, pois no nosso dia a dia é necessário saber escolher qual ferramenta utilizar em cada momento.

### Criando uma função nomeada

A estrutura básica para a criação de uma função é a seguinte:

```
function nomeDaFunção(parametros) {
	O que essa função faz...
}
```

Imagina que queremos deixar mais claro aquele exemplo de repetição onde temos um mapa de contas do Twitter que todo mundo deveria seguir. O código do mapa é o seguinte, copie e cole em um arquivo JavaScript conforme aprendemos nos artigos anteriores.

```javascript
let mapDaFelicidadeOnline = new Map([
  ['iti malias', 'https://twitter.com/_iti_malia'],
  ['Eu Amo os Animais','https://twitter.com/_IloveAnimais_'],
  ['bichos triste fofo', 'https://twitter.com/BichosTriste']
]);
```

Para imprimir os valores no console do Node.js, podemos colocar o seguinte trecho de código em nosso arquivo:

```javascript
for (let item of mapDaFelicidadeOnline.entries()) {
	console.log(item[0]);
	console.log(item[1]);
}
```

Mas, perceba que, apesar de nós sabermos o que faz o *console.log*, alguém pode querer entender mais sobre esse pedaço de código e para isso ela teria que pesquisar no Google o que isso faz. Claro que aqui estamos sendo bem simplistas, pois seria o caso da pessoa realmente pesquisar no Google, mas imagina que queremos deixar a vida dos outros mais simples e para isso vamos criar nossa própria função de imprimir coisas no console com um nome mais explícito.

Logo após a criação do mapa, coloque o seguinte trecho de código:

```javascript
function imprimeContas(contas) {
	console.log(contas);
}
```

O que estamos fazendo aqui é dizer para o interpretador JavaScript que existe uma função chamada **imprimeContas** que recebe como parâmetro uma **conta** e sempre que a nossa função for executada ela deve executar a funcionalidade do sistema **console.log** com o nosso parâmetro.

Não precisa executar esse código no Node ainda, vamos fazer isso logo abaixo, depois de entender como executamos uma função.

### Executando funções

Assim que uma função é criada, ela está disponível no **escopo** onde foi definida. Isso pode ser o **escopo global** ou o **escopo local**. Daqui a pouco vamos aprender mais sobre o escopo, por enquanto você precisa saber que ela estará disponível para utilização assim que for criada, porém ela ainda não está sendo executada.

Para executar uma função, utilizamos a seguinte sintaxe: 

```
function nomeDaFunção(parametros) {
	O que essa função faz...
}

nomeDaFunção(parametros)
```

Ou seja, nós chamamos a função (nomeDaFunção()) passando os parâmetros necessários para ela funcionar. O ato de invocar uma função é através do seu nome junto aos parênteses **()**. Se você somente colocar o nome da função, sem os parênteses, nada irá acontecer.

Vamos executar a função que acabamos de criar, a **imprimeContas**, no lugar do nosso console.log.

```javascript
let mapDaFelicidadeOnline = new Map([
  ['iti malias', 'https://twitter.com/_iti_malia'],
  ['Eu Amo os Animais','https://twitter.com/_IloveAnimais_'],
  ['bichos triste fofo', 'https://twitter.com/BichosTriste']
]);

function imprimeContas(conta) {
	console.log(conta);
}

for (let item of mapDaFelicidadeOnline.entries()) {
	imprimeContas(item[0]);
	imprimeContas(item[1]);
}
```

Agora sim, execute esse código rodando o comando **node nome_do_arquivo**. No meu caso, eu chamei o arquivo de **functions.js**, então o resultado no meu terminal é esse:

```shell
➜  exemplos-javascript git:(master) node functions.js
iti malias
https://twitter.com/_iti_malia
Eu Amo os Animais
https://twitter.com/_IloveAnimais_
bichos triste fofo
https://twitter.com/BichosTriste
```

Vamos deixar a nossa função mais poderosa ainda?

Executar a mesma função, duas vezes seguidas, ainda parece estranho. Podemos melhorar isso. Temos a possibilidade de passar um único parâmetro para essa função e ela mesma se virar quanto ao resultado que será impresso na tela. Com essa abordagem acabamos deixando nossa função mais poderosa, garantimos que a sua existência não é desnecessária (somente para chamar um console.log) e **isolamos a nossa regra de negócios**.

> Regras de negócio são a maneira como o nosso software irá funcionar para resolver um problema ou executar uma ação baseada nas necessidades de uma empresa, pessoa ou grupos

Existe ainda outro problema que nossa função pode resolver: a segurança do código. Se nós executarmos a função com um parâmetro que não seja um Map, o que acontece? 

A resposta é: ela funciona, mas não da maneira como esperamos. Nós definimos que ela deve receber uma conta e deve imprimir os detalhes dessa conta, certo? Porém se passarmos uma string, como **imprimeContas("Não sou uma conta");**, ela será impressa no terminal e não queremos que isso aconteça.

Primeiro vamos isolar a regra de negócios a respeito de impressão de nomes de usuários. A nossa regra está da seguinte maneira: ao receber uma lista de contas de usuários e seus links, vamos imprimir isso no console do Node.js. Mas quem faz isso é o nosso for e ele está fora da função. Vamos mover ele para dentro do escopo isolado:

```javascript
function imprimeContas(contas) {
    for (let item of contas.entries()) {
        console.log(item[0]);
        console.log(item[1]);
    }
}
```

Mas com essa abordagem temos de volta o nosso console.log duas vezes e a impressão dos dados não está clara. Podemos melhorar esse comportamento imprimindo uma string dizendo exatamente o que estamos imprimindo no console.

```javascript
function imprimeContas(contas) {
    for (let item of contas.entries()) {
        console.log(`Nome de usuário: ${item[0]}, Link: ${item[1]}`);
    }
}

imprimeContas(mapDaFelicidadeOnline);
```

Ao executar nosso código agora, temos o seguinte retorno no console do Node.js:

```javascript
Nome de usuário: iti malias, Link: https://twitter.com/_iti_malia
Nome de usuário: Eu Amo os Animais, Link: https://twitter.com/_IloveAnimais_
Nome de usuário: bichos triste fofo, Link: https://twitter.com/BichosTriste
```

Se pensarmos no futuro, podemos não lembrar o porque utilizamos o índice para acessar os dados e imprimir no console. Quando outra pessoa ler o nosso código pode também não entender, pois não sabe o que estávamos pensando ao escrevermos isso. Podemos utilizar os identificadores para melhorar ainda mais a nossa premissa.

```javascript
function imprimeContas(contas) {
    for (let item of contas.entries()) {
        const [usuario, link] = item;

        console.log(`Nome de usuário: ${usuario}, Link: ${link}`);
    }
}
```

Vamos entender o que aconteceu aqui.

Adicionamos uma linha onde utilizamos uma regra de sintaxe do JavaScript chamada **destructuring assignment**. Com ela nós dizemos ao JavaScript: pega o primeiro item do array e coloca dentro de **usuario**, pega o segundo item do array e coloca dentro de **link**.

```javascript
const [usuario, link] = item;
```

Depois nós utilizamos um conceito chamado **template literals** ou **template strings**, que é utilizado em JavaScript para interpolar nossos identificadores com a nossa string. Ou seja, construir uma string (um novo conjunto de dados) a partir dos dados existentes (nossos identificadores).

```javascript
console.log(`Nome de usuário: ${usuario}, Link: ${link}`);
```

Com isso temos uma regra um pouco mais clara, mas ainda não está seguro. Se um usuário do nosso código (outro programador) executar a nossa função sem passar um valor iterável, teremos uma quebra no contrato (esperamos receber um valor e o usuário do código passa outro valor). Precisamos validar se o tipo de dados é um iterável e só depois disso rodamos o nosso código, se não retornamos um erro e para isso vamos precisar aprender a retornar valores nas funções.

Sabemos que queremos receber um objeto como parâmetro da nossa função, por isso podemos utilizar os operadores lógicos e as estruturas de decisão assim:

```javascript
function imprimeConta(contas) {
  const podemosExecutarATransformacao = typeof contas === 'object';
  if (podemosExecutarATransformacao) {
    for (let item of contas.entries()) {
      const [usuario, link] = item;

      console.log(`Nome de usuário: ${usuario}, Link: ${link}`);
    }
  } else {
    console.log('Por favor, passe um Map como parâmetro da função');
  }
}
```

Criamos uma constante que recebe verdadeiro ou falso caso o tipo do nosso parâmetro esteja correto **const podemosExecutarATransformacao = typeof contas === 'object';**. Em seguida acrescentamos um **if**, **if (podemosExecutarATransformacao)**, e logo depois um **else** para trazer um feedback a pessoa que executou a função e não passou os parâmetros corretos, **console.log('Por favor, passe um Map como parâmetro da função');**.

Com isso temos agora uma função mais segura, pois se rodarmos algo como:

```javascript
imprimeConta('Uma frase <3');
```

Recebemos o seguinte retorno no nosso terminal:

```javascript
Por favor, passe um Map como parâmetro da função
```

Mas até agora só sabemos executar a função, criar um controle de fluxo e invocar outras funções dentro do nosso bloco de código da função, mas elas não existem somente para isso. As funções existem para processar dados e retornar algo.

### Retornando valores

Uma função existe para processar valores e retornar algo para utilizarmos a partir de sua transformação.

Para retornar um valor, utilizamos a palavra **return**, conforme a sintaxe abaixo:

```javascript
function executaAlgumaCoisa(parametros){
...regras de implementação
return algumaCoisa;
}
```

Vamos imaginar o nosso exemplo de lista de contas do Twitter. Queremos criar uma função que pegue os valores de uma lista (como algo que vem do banco de dados) e transforme em uma outra lista, uma lista de frases (aquela que criamos anteriormente “Nome de usuário...”). Para tal precisamos fazer a seguinte alteração no nosso programa:

```javascript
function transformaListaEmFrases(listaDeLinks) {
  const podemosExecutarATransformacao = typeof listaDeLinks === 'object';
  
  if (podemosExecutarATransformacao) {
    let frases = [];

    for (let item of listaDeLinks.entries()) {
        const [usuario, link] = item;
  
        frases.push(`Nome de usuário: ${usuario}, Link: ${link}`);
    }
  
    return frases;
  } else {
    console.log('Por favor, passe um Map como parâmetro da função');
  }
}
```

A função imprimeContas agora mudou para **transformaListaEmFrases** e retorna um array com as frases já transformadas (com os dados das contas dentro de uma string). E a partir daí podemos fazer qualquer coisa com esse array.

Podemos fazer algo como criar um identificador que recebe o array transformado:

```javascript
const listaDeFrases = transformaListaEmFrases(mapDaFelicidadeOnline);
```

O que está acontecendo nesta linha é:

- criamos um identificador para um dado constante chamada listaDeFrases
- executamos a função listaDeFrases
- o retorno da função é colocado dentro do nosso identificador
- temos agora listaDeFrases como um array de strings

Um console.log retorna algo assim:

```javascript
[ 'Nome de usuário: iti malias, Link: https://twitter.com/_iti_malia',
  'Nome de usuário: Eu Amo os Animais, Link: https://twitter.com/_IloveAnimais_',
  'Nome de usuário: bichos triste fofo, Link: https://twitter.com/BichosTriste' ]
```

### Funções como valores

De acordo com que vamos ganhando experiência em programação, vamos dando mais valor a reutilização de código e a uma boa criação de módulo no nosso software. Isso nos ajuda a economizar tempo evitando passar várias vezes pelos mesmos problemas.

Algo bem legal de uma função em JavaScript é que podemos colocar uma função dentro de uma variável ou de uma constante e passar ela como parâmetro para outra função e ela ficará disponível para uso dentro deste escopo.

Vamos imaginar que precisamos isolar de novo a impressão dos itens na tela. Até aqui temos o seguinte código:

```javascript
let mapDaFelicidadeOnline = new Map([
  ['iti malias', 'https://twitter.com/_iti_malia'],
  ['Eu Amo os Animais','https://twitter.com/_IloveAnimais_'],
  ['bichos triste fofo', 'https://twitter.com/BichosTriste']
]);

function transformaListaEmFrases(listaDeLinks) {
  const podemosExecutarATransformacao = typeof listaDeLinks === 'object';
  
  if (podemosExecutarATransformacao) {
    let frases = [];

    for (let item of listaDeLinks.entries()) {
        const [usuario, link] = item;
  
        frases.push(`Nome de usuário: ${usuario}, Link: ${link}`);
    }
  
    return frases;
  } else {
    console.log('Por favor, passe um Map como parâmetro da função');
  }
}

const listaDeFrases = transformaListaEmFrases(mapDaFelicidadeOnline);

console.log(listaDeFrases);
```

Vamos recriar nossa função de imprimeContas para que ela receba uma lista de dados, uma função que transforma esses dados e então ela execute a impressão.

```javascript
function imprimeContas(funcaoTransformadora, listaDeLinks) {
  return funcaoTransformadora(listaDeLinks);
};
```

Repare que nós utilizamos um **return**, chamando a função que foi passada como parâmetro para a imprimeContas passando a listaDeLinks para dentro dessa função a ser executada.

Vamos executar isso.

```javascript
const listaDeFrases = imprimeContas(transformaListaEmFrases, mapDaFelicidadeOnline);
```

Esta linha está trazendo exatamente o retorno da função transformaListaEmFrases para dentro de listaDeFrases. Podemos executar um console.log(listaDeFrases) e teremos o resultado esperado.

```javascript
[ 'Nome de usuário: iti malias, Link: https://twitter.com/_iti_malia',
  'Nome de usuário: Eu Amo os Animais, Link: https://twitter.com/_IloveAnimais_',
  'Nome de usuário: bichos triste fofo, Link: https://twitter.com/BichosTriste' ]
```

Utilizamos essa abordagem para isolar o escopo e executar uma função após a outra quando temos diversas funções a serem chamadas para termos uma transformação do dado. Podemos pegar uma massa de dados, rodar uma função, pegar o retorno dela e passar para a próxima que vai executar uma transformação e retornar para outra. Assim vai. E no final temos somente uma chamada para essas outras funções, em um único local de fácil acesso.

## Escopo e hoisting

Agora sim, chegamos no momento de entender o tal do escopo e porque isso foi tão citado até aqui. Quando definimos um valor, muitas vezes queremos que ninguém tenha acesso a isso fora da expressão que estamos criando isso para garantir que ninguém vai alterar algo que não deveria alterar.

Ao programar, existem processos e dados que são repetidos nos programas. Normalmente esses processos e dados recebem o mesmo nome em vários arquivos. Se não existir o isolamento de escopo, o que pode acontecer é que nós tentamos acessar um valor, mas recebemos outro.

Uma característica do JavaScript é o **hoisting**. Existe outra maneira de declarar variáveis fora o let e o const que foram adicionados somente na versão de 2015 do JavaScript, o ES6. O var sofre o hoisting, que significa que ao declarar um valor, ele pode subir no escopo até chegar no global.

Vamos analisar o seguinte exemplo:

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

Esse código irá imprimir em nosso console os números 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9. Uma vez que rodamos o for, não queremos que o **i** seja utilizado em nenhum outro lugar, afinal pode fazer outro for nem funcionar. Porém o nosso i, criado com var, está agora no escopo de cima (que nesse caso é o escopo global).

Se rodarmos um console.log(i) recebemos o valor **10**. Para evitar esse comportamento, utilizamos o let e o const, pois a partir da utilização deles temos o escopo de bloco. Eles só existem onde foram criados.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
```

Se rodarmos esse código temos o erro:

```javascript
console.log(i);
            ^

ReferenceError: i is not defined
```

Inicialmente podemos imaginar que isso não é problema algum, mas isso porque i não é um nome de variável que vamos criar o tempo todo, mas e se o nome dessa variável não fosse i, mas **contador** e algo dependa de contador para executar?

```javascript
var contador = 50;

for (var contador = 0; contador < 10; contador++) {
  console.log(contador);
}

console.log(contador);
```

O resultado do nosso console.log(contador) é 10! Não 50, que foi o valor que nós criamos. Isso porque durante o var contador = 0 nós recriamos essa variável. Se utilizar o let, isso não acontecerá.

```javascript
var contador = 50;

for (let contador = 0; contador < 10; contador++) {
  console.log(contador);
}

console.log(contador);
```

O retorno do Node.js será:

```javascript
0
1
2
3
4
5
6
7
8
9

50
```

## Conclusão

Vamos utilizar e criar muitas funções em nossas vidas como pessoas desenvolvedoras de software. Espero que o que eu te ensinei neste artigo sobre declaração de funções, parâmetros, escopo, hoisting e boas práticas sirvam para que você pense em código reutilizável enquanto estiver escrevendo seus programas.

Ainda existe mais conteúdo sobre funções que você poderia absorver, para aprender também sobre programação funcional, mas isso não é interessante agora, visto que estamos seguindo uma trilha de estudos.

Tudo tem o seu tempo e, se você é iniciante, ainda vai aprender muito pela frente.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/w_oliveiras).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/william-oliveira).

## Referências

- [MDN - Destructuring Assignment] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)

Photo by Peter Ivey-Hansen on Unsplash