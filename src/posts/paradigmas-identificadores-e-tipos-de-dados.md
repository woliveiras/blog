---
title: "Paradigmas, identificadores e tipos de dados"
date: '2019-04-05'
socialImage: "/images/posts/markus-spiske-518966-unsplash-min.jpg"
tags:
    - javascript
    - computação
    - programação
    - curso-fullstack
description: Uma introdução a programação de computadores utilizando a linguagem JavaScript nos exemplos. Paradigmas, variáveis, constantes o que é o quê, tipos de dados, coleções de dados e o que você precisa antes de embarcar nos operadores e laços de repetição.
---
Para aprender programação nos dias de hoje temos muitas opções. Existem milhares de linguagens e plataformas de desenvolvimento de software. JavaScript é uma excelente opção para nos introduzir ao universo da programação, pois tudo o que precisamos para aprender essa linguagem é saber como os programas de computadores funcionam (que você pode aprender [neste artigo](/posts/como-funciona-um-programa-de-computador/)), um editor de textos, que pode ser até um bloco de notas no Windows ou um Gedit/Xed no Linux e um navegador.

Pessoalmente eu recomendo a instalação do [VS Code](https://code.visualstudio.com/) e do [Google Chrome](https://www.google.com/chrome/), mas você pode utilizar o que achar interessante.

Além de rodar no nosso navegador, JavaScript pode ser executado no Node.js, uma plataforma que utilizamos para trabalhar no servidor, internet das coisas e afins. Não se preocupe com isso agora. Vamos aprender sobre tudo mais para frente nesta série, por agora precisamos focar no que é importante: **aprender programação**.

O que precisamos entender, inicialmente:

- paradigmas de programação
- sintaxe básica das linguagens
- identificadores
- variáveis e constantes
- tipos de dados

Depois (nos próximos artigos) vamos partir para operadores e laços de repetição.

<!-- vscode-markdown-toc -->
* [O que são paradigmas](#Oquesoparadigmas)
	* [Programação Imperativa](#ProgramaoImperativa)
	* [Programação Orientada a Objetos](#ProgramaoOrientadaaObjetos)
	* [Programação Funcional](#ProgramaoFuncional)
* [Linguagens podem ser multiparadigma](#Linguagenspodemsermultiparadigma)
* [Linguagens podem ser multiplataforma](#Linguagenspodemsermultiplataforma)
* [Sintaxe básica de JavaScript](#SintaxebsicadeJavaScript)
* [Criando nossos programas JavaScript](#CriandonossosprogramasJavaScript)
* [Instruções](#Instrues)
* [Variáveis](#Variveis)
* [Constantes](#Constantes)
* [Tipos de dados](#Tiposdedados)
	* [Strings](#Strings)
	* [Numbers](#Numbers)
	* [Booleans](#Booleans)
	* [Null e undefined](#Nulleundefined)
	* [Objects](#Objects)
* [Coleções](#Colees)
	* [Arrays](#Arrays)
		* [Criando arrays](#Criandoarrays)
		* [Adicionando dados no Array](#AdicionandodadosnoArray)
		* [Removendo dados do Array](#RemovendodadosdoArray)
	* [Maps](#Maps)
		* [Adicionando itens em um Map](#AdicionandoitensemumMap)
		* [Removendo itens em um Map](#RemovendoitensemumMap)
	* [Sets](#Sets)
		* [Adicionando itens em um Set](#AdicionandoitensemumSet)
		* [Removendo itens em um Set](#RemovendoitensemumSet)
* [Conclusão](#Concluso)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Oquesoparadigmas'></a>O que são paradigmas

Um paradigma é uma classificação para a linguagem de programação baseado em suas funcionalidades, como recursos que ela nos entrega para programarmos e/ou modo de escrever nosso programa. Cada paradigma dita como um programa é escrito/estruturado assim como executado.

Os paradigmas mais conhecidos são:

- programação imperativa
- programação orientada a objetos
- programação funcional

Mais abaixo vamos ver exemplos de código nesses paradigmas.

### <a name='ProgramaoImperativa'></a>Programação Imperativa

Na programação imperativa nós escrevemos nossos programas em sequências, que devem ser executadas uma após a outra. É como uma receita de bolo mesmo: “faça isso, faça aquilo...”. Este paradigma se baseia nas expressões e alterações de variáveis (vamos entender mais sobre variáveis a frente). 

Exemplos de linguagens imperativas: Fortran e C.

### <a name='ProgramaoOrientadaaObjetos'></a>Programação Orientada a Objetos

Em programação orientada a objetos, nós precisamos modelar nosso programa em pedaços, chamados de objetos, que, para que algo aconteça, para receber um valor, precisam trocar mensagens.

A grande diferença aqui é que nossos dados estão “dentro” desses objetos. Estão protegidos, garantindo a segurança de um dado durante a execução do programa. Para que eu mude um valor, em algum momento da execução do nosso programa, eu preciso pedir para um objeto mudar o dado para mim. Caso isso não possa acontecer, o objeto vai cuidar para que nada mude.

Exemplos de linguagens orientadas a objetos: Java e C#.

### <a name='ProgramaoFuncional'></a>Programação Funcional

Em programação funcional, nós escrevemos nosso programa compondo funções, o que significa que nós criamos pequenos pedaços de código que recebem um nome e podemos repetir isso em outros lugares “chamando” por este nome (executando o comando que inventamos). Trabalhar com composição de funções é utilizar várias funções para processar um determinado dado (ou dados) e enfim receber o resultado que desejamos.

Exemplos de linguagens funcionais: Haskell e OCaml.

## <a name='Linguagenspodemsermultiparadigma'></a>Linguagens podem ser multiparadigma

Utilizar um paradigma de programação é algo muito bom. Dominar isso é ter certeza que vamos escrever o código que vá trabalhar como pensamos na execução do software. Mas algumas linguagens tentam aproveitar o melhor dos mundos e misturam os paradigmas para ir mais além.

Um grande exemplo de linguagem multiparadigma é aquela que vamos estudar aqui, o JavaScript. Podemos escrever de modo imperativo, orientado a objetos e funcional!

Outros exemplos de linguagens multiparadigma: C++, Ruby e Python.

## <a name='Linguagenspodemsermultiplataforma'></a>Linguagens podem ser multiplataforma

As linguagens precisam de um ambiente para rodar. Seja no nosso sistema operacional, no navegador, em placas eletrônicas ou no celular. Algumas linguagens possuem a característica de serem multiplataformas, o que significa que podemos escrever o código uma vez e rodar em qualquer lugar.

Um grande exemplo é o Java. Linguagem utilizada para criarmos aplicações desktop (aquelas que estão dentro da janelinha no sistema operacional), sistemas web, aplicativos de celular e também em placas eletrônicas. Inclusive a frase "Escreva uma vez, rode em qualquer lugar" veio por causa do Java.

Com JavaScript, atualmente, temos o mesmo poder: podemos escrever um código que roda no servidor, utilizando Node.js, nos celulares, utilizando alguma tecnologia como o React Native (que serve para criarmos apps para Android e iOS), no navegador e também em placas eletrônicas (ainda utilizando Node.js).

Possuírmos linguagens que nos possibilitam isso é um poder muito grande. Por isso tome cuidado!

> Com grandes poderes vem grandes responsabilidades
> por Tio Ben, tio do Homem Aranha

## <a name='SintaxebsicadeJavaScript'></a>Sintaxe básica de JavaScript

Vamos partir logo para a linguagem JavaScript, para enfim aprendermos programação. Aqui aprenderemos a sintaxe básica da linguagem JavaScript, assim como faremos alguns exemplos práticos para nos prepararmos para os próximos desafios, onde iremos criar projetos e até subir isso para a internet.

A sintaxe de uma linguagem é a gramática na qual escrevemos a linguagem de programação. É como as regrinhas que precisamos seguir para que estejamos falando este idioma. Vamos aprender essa sintaxe conforme aprendemos a programar agora.

Em JavaScript podemos declarar um bloco de códigos simplesmente começando a escrever o código. Vou declarar uma variável de exemplo logo abaixo (depois vamos entender o que é uma variável):

```javascript
let exemplo = "Eu sou um exemplo";
```

Repare que, no final da declaração, precisamos adicionar um ponto-e-vírgula (;) para dizer que a nossa expressão acabou e o JavaScript já pode executar ela.

JavaScript é **case-sensitive** e utiliza o conjunto de caracteres **unicode**. A tabela de caracteres que podemos utilizar para nomear nossas variáveis e funções em JavaScript pode ser encontrada aqui: [Tabela de caracteres Unicode](https://unicode-table.com/pt/).

Ser case-sensitive significa que **william** é diferente de **William** em JavaScript.

Vamos começar a escrever nossas primeiras linhas nessa linguagem e, de acordo com os estudos, vamos aprendendo mais.

## <a name='CriandonossosprogramasJavaScript'></a>Criando nossos programas JavaScript

Como você sabe, programas são uma união de vários arquivos que fazem com que nosso computador execute ações. Para isso, o arquivo com um programa escrito em uma linguagem de programação deve ser salvo em um formato específico. Em JavaScript salvamos os arquivos com a extensão **.js**.

Vamos então criar um arquivo chamado **app.js**.

Primeiro acesse a sua pasta de trabalho (a workspace, que criamos no artigo de [introdução ao terminal](/posts/introdução-ao-terminal/)), cambiando entre diretórios com o comando **cd**. Chegando na pasta de trabalho, crie uma pasta chamada **aprendendo_javascript** com o comando **mkdir**, acesse essa pasta e rode o comando:

```bash
echo "console.log('hello world');" >> app.js
```

Agora vamos criar uma página HTML (não se preocupe se você ainda não sabe o que é HTML, vamos aprender isso depois). Rode o comando **touch index.html** e dentro deste arquivo cole o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Minha aplicação JavaScript</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

Agora dê dois cliques sobre o arquivo index.html. Será aberto o seu navegador padrão. Pressione F12 para abrir as ferramentas de desenvolvedor(a) do navegador e veja a aba **console**.

![Hello World no Chrome]({{site.postsImagesPath}}hello-world-chrome.png)

Acabamos de fazer nosso primeiro programa em JavaScript!

O navegador lê nosso código HTML, vê que estamos chamando um arquivo **.js**, carrega isso na memória, interpreta, compila em tempo de execução e enfim executa o nosso código. Se você não entende essa parte de compilação, confira o [artigo anterior](/posts/como-funciona-um-programa-de-computador/).

**Sempre que finalizar algum exemplo de código deste artigo, faça um commit e mande para o seu GitHub.**

Agora vamos começar a entender programação e o próprio JavaScript.

## <a name='Instrues'></a>Instruções

As instruções são unidades válidas de código que escrevemos no código para executar as ações. Aquele `console.log()` que fizemos anteriormente é uma instrução.

Chamamos de **unidade válida** porque um código escrito em um arquivo de um programa pode ser válido ou inválido. Ele é válido quando a instrução pode ser executada corretamente e inválida quando temos um erro no código.

Vamos gerar um erro no nosso código.

No app.js, adicione a seguinte instrução no final do arquivo (pode deixar aquele nosso hello world):

```javascript
console('Esse não funciona');
```

Atualize a página do navegador que está com nosso index.html carregado. Vai aparecer o seguinte erro:

```javascript
Uncaught TypeError: console is not a function
    at <anonymous>:1:1
```

![Erro no navegador]({{site.postsImagesPath}}erro-no-chrome.png)

Isso porque nossa instrução é um pedaço de código inválido. O modo correto de se usar o comando console, do JavaScript, é com o **.log()**. Toda vez que tivermos um erro em um código, precisamos analisar o código para encontrar o que está errado e vamos aprender os melhores modos de fazer isso nos próximos artigos.

## <a name='Variveis'></a>Variáveis

Imagina um monte de valores soltos em um código fonte, igual a isso aqui: um cálculo de IMC (Índice de Massa Corporal, que pode ajudar a identificar se uma pessoa está chegando próximo a obesidade, desnutrição ou está tudo bem).

```javascript
65
160
0.0025
```

Não dá para saber o que significa cada valor e nem vamos conseguir reutilizar isso mais a frente em nosso código. Para isso nós colocamos uma etiqueta no valor. Essa etiqueta é o identificador de uma variável. Uma variável é como uma caixa onde guardamos valores e podemos resgatar eles e/ou modificar quando necessário.

Vamos revisitar o código, agora com os devidos nomes de variáveis:

```javascript
let peso = 65;
let altura = 160;
let imc = peso / (altura * altura);
```

Agora sabemos que a fórmula para calcular o IMC de alguém é peso dividido por altura multiplicada por ela mesma. Mas somente essa clareza no código não é a vantagem das variáveis. Repare que reutilizamos os identificadores **peso** e **altura** para atribuir um valor ao identificador **imc**.

Quando declaramos uma variável, ela fica armazenada na memória do nosso computador e podemos acessar ela a qualquer momento pelo seu identificador (seu nome).

Para declarar a variável usamos a sintaxe: **let** nome  recebe valor**;**.

Ou seja:

```javascript
let minhaVariavel =  “essa é minha variável”;
```

Podemos mudar o valor de uma variável passando um novo valor para ela através do sinal de atribuição, o sinal de igual.

```javascript
minhaVariavel = “esse é o novo valor da minha variável”;
```

Vamos fazer um pequeno teste. Adicione as seguintes linhas no seu arquivo app.js:

```javascript
let minhaVariavel =  “essa é minha variável”;
console.log(minhaVariavel);

minhaVariavel = “esse é o novo valor da minha variável”;
console.log(minhaVariavel);
```

E recarregue a página. Será impresso em nosso console do navegador o valor da nossa variável **minhaVariavel** quando nós declaramos a variável e depois o novo valor, pois em seguida atribuímos um novo valor a esse identificador.

Em JavaScript ainda temos outra maneira de declarar variáveis, que é utilizando a instrução **var**, mas podemos analisar ela em outra hora. Por enquanto foque no uso de **let** e **const** (que vamos aprender mais abaixo).

A variável só pode ser acessada depois que já existe. Ou seja, se tentarmos rodar o **console.log(minhaVariavel)** antes de **let minhaVariavel =  “essa é minha variável”** teremos um erro no navegador informando que essa variável ainda não foi definida.

```javascript
VM84:1 Uncaught ReferenceError: minhaVariavel is not defined
    at <anonymous>:1:13
```

Faça esse teste! Execute o console.log antes de declarar a variável, recarregue a página e veja o que acontece.

## <a name='Constantes'></a>Constantes

Assim como na matemática tradicional, valores constantes são aqueles que não mudam durante uma conta. Eles existem para que uma fórmula faça sentido e para podermos reutilizar quantas vezes isso for necessário sem que nada dê errado.

Vamos pensar em uma conta de banco onde toda vez que executarmos um saque no caixa eletrônico tomamos uma taxa de -1 real no nosso saldo bancário. Confira o código abaixo.

```javascript
let saldoBancario = 1000;
const taxa = 1;

saldoBancario = (saldoBancario - 100) - taxa;
console.log(`Primeiro saque ${saldoBancario}`);

saldoBancario = (saldoBancario - 100) - taxa;
console.log(`Segundo saque ${saldoBancario}`);

saldoBancario = (saldoBancario - 100) - taxa;
console.log(`Terceiro saque ${saldoBancario}`);
```

Primeiro declaramos uma variável chamada **saldoBancario** com o valor de 1000 reais. Em seguida declaramos uma constante, que é a nossa taxa bancária para cada saque. Logo depois começamos a fazer os saques. Em cada linha nós reatribuimos o valor de saldoBancario (**let saldoBancario =**) recebendo o último valor que está em memória subtraindo o valor do saque (**- 100**) e também o valor da taxa (**- taxa**).

Copie este código e cole no arquivo app.js e atualize a página no seu navegador.

Se tentarmos, mesmo por engano, tentar mudar o valor que temos em **taxa**, vamos receber uma mensagem de erro no console do navegador.

Escreva a seguinte linha de código no final do seu app.js e execute no navegador.

```javascript
taxa = 5;
```

Nós recebemos o seguinte erro:

```text
app.js:13 Uncaught TypeError: Assignment to constant variable.
    at app.js:13
```

O interpretador do JavaScript está nos dizendo que não podemos assinar um novo valor para uma constante. Neste caso teríamos que utilizar uma variável, com o let.

## <a name='Tiposdedados'></a>Tipos de dados

Os dados, em um programa possuem tipos. Tipos são as regras para cada valor, se um valor é de um tipo número ele possui certas regras, se é do tipo texto ele possui outras regras para sua utilização. Podemos ter textos, números, valores verdadeiro e falso, coleções de dados, etc. Cada linguagem implementa de alguma maneira.

Em JavaScript temos os seguintes tipos de dados: string, number, boolean, null, undefined, objects, symbols e não precisamos dizer exatamente qual o tipo de um valor que um identificador está recebendo, pois o JavaScript cuida disso para nós através de uma técnica chamada **inferência de tipos**.

Em uma linguagem como o Java, deveríamos dizer exatamente o tipo do nosso dado, como no exemplo:

```java
int idade = 28;
float dinheiroNaConta = 10.00;
String nome = "William Oliveira"
```

Em JavaScript só precisamos dizer se estamos criando uma variável ou uma constante:

```javascript
const idade = 28;
let dinheiroNaConta = 10.00;
const nome = "William Oliveira"
```

Tipos existem para garantir segurança em nosso código, assim como para que saibamos exatamente o que está acontecendo em determinados trechos do código. Não queremos, por exemplo, tentar dividir um número por um texto.

Existe um método da linguagem JavaScript que podemos utilizar para descobrir o tipo de um valor, é o **typeof**. Vamos utilizar isso para entender os tipos.  Vamos aprender praticando, então abra o seu console do navegador (F12) e vamos conhecer cada tipo. Para cada exemplo abaixo, execute-os no navegador, mude o valor deles, como aprendemos anteriormente e veja o que acontece ao rodar o typeof.

### <a name='Strings'></a>Strings

Strings são os caracteres (ou coleções de caracteres) de texto que utilizamos em nosso código. 

Exemplo:

```javascript
let nome = “William Oliveira”
```

Estamos atribuindo um valor do tipo string a uma constante chamada nome. Tudo o que está dentro das aspas é nossa string.

Se rodarmos o método typeof para nome, teremos o seguinte retorno:

```javascript
typeof nome

"string"
```

### <a name='Numbers'></a>Numbers

Numbers são todos os valores numéricos que utilizamos em JavaScript. Tanto 10 quanto 10.01 são do tipo number em JavaScript. Em outras linguagens existem mais tipos definidos para números, como float para o valor 10.01, int para inteiros, bigint para números muito grandes, mas em JS temos somente number.

Exemplo:

```javascript
let idade = 28
let dinheiroNaCarteira = 42.00
```

Se rodarmos nosso typeof para as duas variáveis que criamos, temos o seguinte retorno:

```javascript
typeof idade
"number"
typeof dinheiroNaCarteira
"number"
```

### <a name='Booleans'></a>Booleans

Booleans são muito importantes para nosso futuro em programação. São os valores lógicos que utilizamos para que algo seja ou não executado em determinadas condições. Os dois valores lógicos que existem são **verdadeiro** ou **falso** (true ou false). Você verá o quanto isso é importante quando chegarmos na parte de tomadas de decisão.

Vamos entender através de um exemplo rápido:

Imagina que temos um identificador para idade e outro para o valor mínimo para que isso seja considerado a idade de uma pessoa na maioridade.

```
let idade = 28
let maioridade = 18
```

Existe uma maneira de comparar estes dois valores, que é utilizando o comando de comparação para maior ou igual **>=**. Veja o que ele retorna caso comparemos os dois valores:

```javascript
idade >= maioridade
true
```

O que fizemos aqui foi perguntar ao JavaScript: "O valor que eu tenho dentro de idade é maior ou igual a maioridade?". E ele nos responde: "Verdadeiro".

Se criarmos outro identificador com uma idade menor que a maioridade, veja o que seria o retorno:

```javascript
let deMenor = 15

deMenor >= maioridade
false
```

O JavaScript retorna "Falso".

### <a name='Nulleundefined'></a>Null e undefined

Null e undefined são tipos especiais do JavaScript que nos dizem quando um identificador é nulo (null) ou indefinido (undefined). A diferença de ambos é que:

- quando temos um valor null significa que nossa variável existe, porém seu valor é vazio
- quando recebemos um tipo undefined significa que aquele valor nem existe

Vamos entender com o exemplo abaixo:

Vamos definir uma variável que não recebe nenhum valor no momento de sua criação.

```javascript
let variavelSemNada = null;
```

Agora vamos criar outra variável que recebe essa nossa primeira.

```javascript
let outraVariavel = variavelSemNada
```

Se perguntarmos ao JavaScript o que tem dentro de *outraVariavel* — escrever o nome da variável e pressionar enter no console) — ele retorna em nosso console exatamente o que tem dentro dela, um valor nulo.

```javascript
outraVariavel
null
```

Agora, e se tentarmos passar para a nossa outraVariavel o identificador naoNasciAinda, que nós ainda não criamos?

Veja o que acontece:

```javascript
outraVariavel = naoNasciAinda
VM2683:1 Uncaught ReferenceError: naoNasciAinda is not defined
    at <anonymous>:1:1
```

Isso porque o identificador naoNasciAinda não existe na memória.

```javascript
typeof naoNasciAinda
"undefined"
```

Esses tipos existem, principalmente, para facilitar o dia a dia criando nossos algoritmos ou para que o JavaScript consiga nos dizer exatamente porque teve um problema ao tentar rodar uma instrução que enviamos para ele.

Podemos desejar criar uma variável e não atribuir um valor para ela neste exato momento, por isso criamos ela com o valor nulo. Em algum momento podemos receber um identificador que não existe e a maneira de confirmar se ele foi criado é verificando se ele não é undefined.

### <a name='Objects'></a>Objects

Objetos, em JavaScript, além de um módulo que podemos reutilizar em outras partes do código, como vimos na explicação do que é orientação a objetos, é uma estrutura de dados organizados por chave e valor; uma coleção de dados. Isso também é conhecido como array associativo, mas em JavaScript chamamos somente de objeto.

Objetos são muito úteis na organização dos dados que vamos utilizar em nosso programa. Por exemplo: imagina o cenário onde você precisa declarar dados de uma pessoa, mas precisa que tudo isso esteja em um lugar de fácil acesso. O que você faria? Criaria diversas variáveis e constantes?

Utilizando os objetos podemos fazer algo como:

```javascript
let pessoa = {
	nome: "William Oliveira", 
	idade: 28,
	profissao: "Fullstack Dev"
};
```

Nós juntamos alguns tipos de dados, como as strings e os numbers, e colocamos dentro do nosso objeto de maneira organizada. Sabemos agora que temos uma pessoa e essa pessoa tem um nome, idade e profissão. Podemos acessar os dados dentro de um objeto através de sua chave. Chamamos o nome do **objeto + ponto + nome da chave**.

Pegar o nome da pessoa, por exemplo:

```javascript
pessoa.nome
"William Oliveira"
```

Se chamarmos somente pessoa, recebemos o seguinte retorno:

```javascript
pessoa

{nome: "William Oliveira", idade: 28, profissao: "Fullstack Dev"}
```

Agora podemos fazer algo mais maneiro ainda e utilizar as coleções de dados em conjunto com nossos numbers, strings e booleans.

## <a name='Colees'></a>Coleções

Coleções são agrupamentos de dados. São tipos criados para que não precisemos ficar gerando diversos identificadores enumerados para uma porção maior de informação. 

Vamos imaginar que precisamos criar diversas "pessoas" em nosso programa em uma determinada rotina. Se precisamos ter três pessoas no nosso programa, precisaríamos fazer:

```javascript
let pessoa1 = {
	nome: "William Oliveira", 
	idade: 28,
	profissao: "Fullstack Dev"
};

let pessoa2 = {
	nome: "Robson Fernando", 
	idade: 23,
	profissao: "Frontend Dev"
};

let pessoa3 = {
	nome: "Marília Cláudia", 
	idade: 25,
	profissao: "Fullstack Dev"
};
```

Porém, e se a necessidade fosse criar 300 pessoas? Ficaria inviável codificar isso.

Para essas situações nós temos as coleções. Em JavaScript temos os Arrays, Maps e Sets. Vamos aprender cada um.

### <a name='Arrays'></a>Arrays

Os arrays são listas de dados indexáveis. Isso significa que quando criamos um array, nós podemos acessar os dados de dentro dessa lista através da posição deste item. Ficará mais claro no exemplo.


#### <a name='Criandoarrays'></a>Criando arrays

Para criar uma lista de dados utilizamos a seguinte sintaxe:

```javascript
let lista = []
```

Dentro de [] é onde vão os itens da lista, separados por vírgula.

```javascript
let listaDeCompras = ["Alface", "Abacate", "Batata doce", "Pera", "Maçã"];
```

Nós podemos trabalhar mixando os dados e criar listas mais complexas. Vamos pensar no caso anterior, onde nós precisamos de várias pessoas em nosso programa. Pessoas são objetos que possuem dados chaveados e precisamos criar uma lista com isso dentro agora. Fazemos então:

```javascript
let pessoas = [
    {
        nome: "William Oliveira", 
        idade: 28,
        profissao: "Fullstack Dev"
    },
    {
        nome: "Robson Fernando", 
        idade: 23,
        profissao: "Frontend Dev"
    },
    {
        nome: "Marília Cláudia", 
        idade: 25,
        profissao: "Fullstack Dev"
    }
];
```

Agora temos uma lista de pessoas e cada item dessa lista é um objeto com os dados de cada uma. Para acessar os itens dessa lista, fazemos **lista[posição]**, onde posição é o número da posição do item dentro da lista.

Por exemplo, **lista[1]** traz o segundo item da lista. Isso mesmo! O segundo item. Isso porque a indexação dentro de arrays começa a partir do zero. Se queremos pegar o primeiro item da lista, usamos **lista[0]**.

Vamos trabalhar com a nossa lista de pessoas. Se precisamos pegar o segundo item da nossa lista, basta fazer:

```javascript
pessoas[1]
{nome: "Robson Fernando", idade: 23, profissao: "Frontend Dev"}
```

#### <a name='AdicionandodadosnoArray'></a>Adicionando dados no Array

Para adicionar dados no final ou no começo da nossa lista utilizando **push** (no final) ou **unshift** (no começo).

Podemos fazer:

```javascript
lista.push(item)
```

Ou seja, **nome_da_lista + ponto + push** e dentro dos parênteses colocamos o item que será adicionado dentro da lista.

Vamos criar uma lista vazia e adicionar itens dentro:

```javascript
let lista = [];

lista.push('William')
lista.push('Robson')
lista.push('Marília')
```

Se acessarmos a lista agora, teremos:

```javascript
lista
(3) ["William", "Robson", "Marília"]
```

Se utilizarmos o unshift agora, podemos adicionar algum nome no começo da lista:

```javascript
lista.unshift("Vanessa");
```

```javascript
lista
(4) ["Vanessa", "William", "Robson", "Marília"]
```

#### <a name='RemovendodadosdoArray'></a>Removendo dados do Array

Podemos remover itens do começo ou do final do array com os métodos **shift** (do começo) e **pop** (do final).

Se fizermos:

```javascript
lista.shift()
```

Removemos "Vanessa" do nosso array lista, que foi criado anteriormente, pois este era o primeiro item.

```javascript
lista
(2) ["William", "Robson", "Marília"]
```

Se fizermos:

```javascript
lista.pop()
```

Removemos "Marília", pois este é o último item do array.

```javascript
lista
["William", "Robson"]
```

### <a name='Maps'></a>Maps

Um map é uma estrutura simples de chave e valor, como os objetos que aprendemos anteriormente. A diferença é que maps aceitam chaves de qualquer tipo de dado.

A sintaxe para utilização do map é: 

```javascript
let meuMapa = new Map()
```

Ou então:

```javascript
let meuMapa = new Map(iterável)
```

Dentro de um map precisamos de um dado que seja **iterável**. Ou seja, precisa ser algo que possamos acessar via posição e consigamos acessar um item por vez em uma rotina, um array.

Podemos fazer algo como:

```javascript
let meuMap = new Map([
  ['bla', 'bla'],
  [1, 2],
  [true, false],
]);
```

Onde o primeiro item do array vai se tornar a chave e o segundo é o valor.

Repare que temos uma chave que é do tipo string, "bla", outra que é do tipo number, 1, e mais uma do tipo boolean, true.

Diferente do array, map não é uma coleção indexável, não vamos acessar os seus valores através da posição em que ele está, mas através de sua chave com o método **get**.

```javascript
meuMap.get("bla")
```

Retorna "bla".

```javascript
meuMap.get(1)
```

Retorna 2.

Maps não aceitam itens repetidos, então, se fizermos algo como:

```javascript
let meuMapRepetido = new Map([
	["1", "William"],
	["1", "William"],
	["1", "William"]
])
```

Ao acessar o meuMapRepetido, teremos somente um item dentro dele:

```javascript
meuMapRepetido
Map(1) {"1" => "William"}
```

#### <a name='AdicionandoitensemumMap'></a>Adicionando itens em um Map

Para adicionar itens em um map, utilizamos o método **set** passando o item dentro de parênteses.

Vamos criar um novo map:

```javascript
let meuNovoMap = new Map();
```

Agora vamos adicionar itens dentro dele.

```javascript
meuNovoMap.set(1, 'William');
meuNovoMap.set(2, 'Robson');
meuNovoMap.set(3, 'Marília');
```

Agora vamos acessar os valores de dentro de Map:

```javascript
meuNovoMap
Map(3) {1 => "William", 2 => "Robson", 3 => "Marília"}
[[Entries]]: Array(3)
0: {1 => "William"}
1: {2 => "Robson"}
2: {3 => "Marília"}
```

Para acessar utilizamos o nosso get:

```javascript
meuNovoMap.get(1)
"William"
```

#### <a name='RemovendoitensemumMap'></a>Removendo itens em um Map

Utilizamos o método **delete** para remover itens de dentro de um map através de sua chave.

Vamos pensar no exemplo anterior, onde temos o map:

```javascript
meuNovoMap
Map(3) {1 => "William", 2 => "Robson", 3 => "Marília"}
[[Entries]]: Array(3)
0: {1 => "William"}
1: {2 => "Robson"}
2: {3 => "Marília"}
```

Vamos remover o item "William", cuja chave é o 1.

```javascript
meuNovoMap.delete(1)
```

Vamos receber um true, como retorno da execução de delete para confirmar que removemos o item 1 do map.

Se acessarmos seus valores agora, vemos que o valor "William" sumiu.

```javascript
meuNovoMap
Map(2) {2 => "Robson", 3 => "Marília"}
```

### <a name='Sets'></a>Sets

Sets são bem parecidos com os Arrays, porém não aceitam itens repetidos.

Isso significa que podemos fazer algo como:

```javascript
let meuSet = new Set([1, 2, 1, 2, 3, 4, 5, 6, 7, 9, 9]);
```

Se acessarmos o meuSet temos:

```javascript
meuSet
Set(8) {1, 2, 3, 4, 5, 6, 7, 9}
```

A sintaxe do set é:

```javascript
let meuSet =  new Set(iterável);
```

Não conseguimos acessar diretamente um item do set, como no array[posição]. Para isso precisamos iterar sobre ele utilizando algum método de JavaScript, como o **for**, mas veremos isso nos próximos artigos.

#### <a name='AdicionandoitensemumSet'></a>Adicionando itens em um Set

Utilizamos o método **add** para adicionar itens no set.

Exemplo:

```javascript
let meuSet =  new Set()
meuSet.add(1)
meuSet.add(2)
meuSet.add(3)
meuSet.add(4)
```

Se tentarmos adicionar novamente o item 4 no set, nada vai acontecer, pois ele não aceita duplicatas.

#### <a name='RemovendoitensemumSet'></a>Removendo itens em um Set

Conseguimos deletar um item de dentro do set utilizando exatamente o valor dele e o método **delete**.

Exemplo:

No nosso set meuSet, temos 4 valores, que definimos anteriormente. Para remover o número 1, fazemos:

```javascript
meuSet.delete(1)
```

Recebemos um retorno de true, para confirmar que nossa operação aconteceu.

Se desejamos deletar o número 4, fazemos:

```javascript
meuSet.delete(4)
```

## <a name='Concluso'></a>Conclusão

Este artigo é somente uma introdução a programação focado em entendermos que existem diferentes paradigmas de programação, que cada linguagem possui seu idioma próprio (sua sintaxe), entendermos os identificadores, variáveis e constantes, assim como conhecer os tipos de dados que existem em JavaScript. 

Nos próximos artigos vamos aprender sobre operadores matemáticos, de comparação, condicionais, laços de repetição e modularização de código.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/_uillaz).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/o-universo-da-programacao).

## <a name='Referncias'></a>Referências

- [MDN - JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN - Expressions and Operations](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Paradigmas de Programação - Imperativo, Orientado a Objetos e Funcional](https://www.slideshare.net/gustavolgcr/paradigmas-de-programao-imperativo-orientado-a-objetos-e-funcional)
- [Composição de funções](http://www.dmm.im.ufrj.br/projeto/projetoc/precalculo/sala/conteudo/capitulos/comp1.htm)
-[Wiki - Paradigmas](https://pt.wikipedia.org/wiki/Paradigma_de_programa%C3%A7%C3%A3o)
- [MDN - Objetos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)
- [MDN - Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Photo by [Markus Spiske](https://unsplash.com/@markusspiske) on [Unsplash](https://unsplash.com).
