---
layout: post
title: 'Introdução a programação de computadores: operadores matemáticos, de comparação,
  condicionais e lógicos'
date: 2019-04-08 06:34 -0300
categories:
    - javascript
    - computação
    - programação
    - série fullstack
image: "/images/posts/markus-spiske-518966-unsplash-min.jpg"
tags:
    - javascript
    - computação
    - programação
    - série fullstack
description: Uma introdução a programação de computadores utilizando a linguagem JavaScript nos exemplos. Neste artigo vamos entender o que são operadores, conheceremos os operadores matemáticos, de comparação, condicionais e lógicos e aprenderemos como utilizá-los.
---
Continuando nosso [curso como fullstack JavaScript](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/), até aqui já aprendemos [como funciona um programa](/posts/como-funciona-um-programa-de-computador/), como criar um programa, o que são paradigmas de programação e conhecemos os principais paradigmas (orientação a objetos, funcional e imperativo), sintaxe básica de JavaScript, identificadores, variáveis, constantes e tipos de dados. Com isso em mãos já estamos com um arsenal pesado de programação, porém existe muito mais conteúdo para absorvermos antes de começarmos a criar softwares completos.

Neste artigo vamos aprender sobre os operadores. Operadores matemáticos, de comparação, condicionais e lógicos que utilizamos para controlar o fluxo do nosso software.

No último artigo criamos um arquivo index.html e um app.js, onde trabalhamos do começo ao final. Neste texto vamos seguir o mesmo esquema. Então, se você não leu o conteúdo anterior ou não criou o arquivo ainda, confere aqui: [Criando nosso programa em JavaScript](r/posts/introdu%C3%A7%C3%A3o-a-programa%C3%A7%C3%A3o-de-computadores-paradigmas-identificadores-e-tipos-de-dados/#CriandonossosprogramasJavaScript).

<!-- vscode-markdown-toc -->
* [O que são operadores](#Oquesooperadores)
* [Operadores matemáticos](#Operadoresmatemticos)
* [Operadores de comparação](#Operadoresdecomparao)
* [Operadores condicionais](#Operadorescondicionais)
	* [if, else, else if](#ifelseelseif)
* [Operadores lógicos](#Operadoreslgicos)
	* [Operador OR](#OperadorOR)
	* [Operador AND](#OperadorAND)
	* [Operador NOT](#OperadorNOT)
* [Precedência de operadores em JavaScript](#PrecednciadeoperadoresemJavaScript)
* [Conclusão](#Concluso)
* [Referência](#Referncia)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem de uma sessão de códigos no editor de textos" %}

## <a name='Oquesooperadores'></a>O que são operadores

Os operadores são comandos que aplicamos as expressões que escrevemos em nossos programas para executar uma ação (a operação).

Um exemplo é uma operação de soma (+), que utilizamos em nossas calculadoras: nós recebemos dois operandos, uma operação e o programa nos retorna o resultado da execução dessa expressão.

```shell
1 + 1
```

Operando 1, operação +, operando 1. Isso retornaria um 2, pois a calculadora executa suas instruções internas afim de analisar a expressão e rodar os comandos e depois nos retorna este resultado.

## <a name='Operadoresmatemticos'></a>Operadores matemáticos

Operadores matemáticos são os já conhecidos comandos para fazermos contas em linguagens de programação.

Em JavaScript temos os seguintes operadores matemáticos:

| operador | operação |
| ---- | ---- |
| + | Adição |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| %| Resto da divisão |

No arquivo app.js, adicione as seguintes linhas de código:

```javascript
console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 1);
console.log(2 / 1);
console.log(3 % 1);
```

Veja qual foi o resultado das operações e mude os números para ver a mágica das contas acontecendo diretamente do seu programa JS.

Podemos declarar variáveis e fazer contas baseadas em seus valores.

Lembra da nossa conta do IMC, no exemplo do artigo anterior. Estávamos manipulando os valores das variáveis e fazendo operações matemáticas nelas.

```javascript
let peso = 65;
let altura = 160;
let imc = peso / (altura * altura);
```

O que fizemos foi uma divisão e uma multiplicação utilizando as variáveis.

Em linguagens de programação, assim como na matemática, temos a precedência de operadores e por isso temos o altura * altura dentro de parênteses, para que essa conta fosse executada antes da divisão pelo peso.

Mais abaixo neste artigo temos uma pequena tabela com a precedência do que estamos aprendendo aqui.

## <a name='Operadoresdecomparao'></a>Operadores de comparação

Os operadores de comparação analisam dois itens e retornam um valor verdadeiro ou falso (os booleans) caso a comparação seja atendida ou não.

Em JavaScript temos os seguintes operadores de comparação:

| operador | operação |
| ---- | ---- |
| > | Maior que |
| < | Menor que | 
| >= | Maior ou igual |
| <= | Menor ou igual |
| == | Valor igual à |
| === | Valor igual e do mesmo tipo que |
| != | Valor diferente de |
| !== | Valor diferente e do mesmo tipo que |

Podemos fazer algo como: descobrir se uma pessoa é maior de idade.

```javascript
const maioridade = 18;
const idade = 16;
console.log(idade >= maioridade);
```

O retorno dessa validação será `false`, pois **idade** não é maior e nem igual a **maioridade**. 

Mas precisamos manter atenção em um ponto quando trabalhamos com JavaScript: utilizar comparadores de igualdade.

Se rodarmos a seguinte expressão em nosso console, o retorno será verdadeiro:

```javascript
1 == "1"
```

Em outras linguagens teríamos um erro, pois não deveria ser possível comparar um valor do tipo inteiro (1) com um valor do tipo texto ("1").

O mesmo para esse caso:

```javascript
1 != "1"
```

Estamos comparando se 1 é diferente de "1" e deveria ser, afinal estamos analisando um número e um texto, porém não temos essa análise forte em JavaScript.

Para garantir que nada fuja do nosso controle, sempre verificamos a igualdade através de **===** e **!==**, onde o valor precisa possuir a igualdade ou negação e ser do mesmo tipo.  Se fizermos 1 === "1" temos um retorno como false, pois um número é diferente de texto. E temos um retorno true se fizermos 1 !== "1" pelo mesmo motivo.

## <a name='Operadorescondicionais'></a>Operadores condicionais

Os operadores condicionais, misturados com operadores de comparação, podem mudar totalmente o fluxo do nosso programa.

Lembra que nosso programa é executado em cascata, onde o sistema vai lendo nosso código fonte e executando linha por linha?

Com um operador condicional podemos executar outra coisa caso a condição seja verdadeira ou falsa, baseado em nossa premissa (nossa validação lógica).

Vamos conhecer os operadores e tudo se tornará mais entendível.

### <a name='ifelseelseif'></a>if, else, else if

Imagina que temos o seguinte problema: estamos conferindo o estoque de um mercado, quando um item estiver com o prazo de validade ultrapassado, precisamos descartá-lo. Como isso poderia ficar em um programa?

Para isso utilizamos a condição **SE**, em inglês, **IF**. Onde a sintaxe seria: **SE algo for verdadeiro, FAÇA…***.

```
If (condição) {
  faça...
}
```

Podemos executar comparações e então tomar decisões com as devidas condições.

Vamos seguir nosso exemplo do prazo de validade. Teremos uma constante que é o prazo máximo para descarte de um produto e a nossa comparação vai analisar o item lido pelo leitor de código de barras com o valor da nossa constante.

```javascript
const prazoMaximoParaDescarte = 10;
let validadeDoItemLido = 11;

if (validadeDoItemLido > prazoMaximoParaDescarte) {
    console.log("Devemos descartar este item");
}
```

Faça o teste em seu navegador. Mude os valores de dentro dos nossos identificadores e recarregue a página com o seu index.html aberto conferindo os casos.

Mas e se existisse uma outra condição, como, por exemplo: se a validade do item lido for igual ao prazo máximo, devemos colocar este item logo na entrada do mercado para vender logo e não desperdiçarmos o produto.

Então utilizamos o **SENÃO**, em inglês, **ELSE**. Onde a sintaxe seria: **SE algo for verdadeiro, FAÇA… SENÃO, faça...**.

```
If ( condição ) {
    faça...
 } else {
    faça...
}
```

Vamos modificar nosso exemplo para contemplar a nova regra:

```javascript
const prazoMaximoParaDescarte = 10;
let validadeDoItemLido = 11;

if (validadeDoItemLido > prazoMaximoParaDescarte) {
    console.log("Devemos descartar este item");
} else {
    console.log("Devemos colocar este item na promoção");
}
```

Com isso, toda vez que o nosso item estiver abaixo do prazo de validade ele entrará em promoção. Mas espera! Neste caso qualquer produto não próximo da validade também será vendido com promoção, certo? Ainda não contemplamos o caso do item estar no mês de vencimento, que foi a real premissa que deveríamos analisar.

Para que isso não aconteça, precisamos colocar mais uma validação: **SE isso, faça aquilo, SENÃO, SE isso, faça aquilo outro, SENÃO, faça isso**.

```
If ( condição ) {
    faça...
} else if (condição ) {
    faça...
} else {
    faça...
}
```

Vamos atualizar nosso exemplo.

```javascript
const prazoMaximoParaDescarte = 10;
let validadeDoItemLido = 11;

if (validadeDoItemLido > prazoMaximoParaDescarte) {
    console.log("Devemos descartar este item");
} else if (validadeDoItemLido === prazoMaximoParaDescarte) {
    console.log("Devemos colocar este item na promoção");
} else {
    console.log("Produto OK, devolver a prateleira");
}
```

Faça um teste em seu código. Mude os valores e veja o que acontece. 

Repare que utilizamos o operador de comparação do valor e do mesmo tipo, o sinal de **===***.

## <a name='Operadoreslgicos'></a>Operadores lógicos

Os operadores lógicos também são utilizados em conjunto com os nossos operadores condicionais para decidir o fluxo de um programa. Eles também retornam verdadeiro ou falso caso a premissa seja atendida ou não.

Temos os seguintes operadores lógicos: OU (`OR ||`), E (`AND &&`), NÃO (`NOT !`).

Vamos entender cada um.

### <a name='OperadorOR'></a>Operador OR

O OR (`||`) retorna verdadeiro caso alguma das premissas seja verdadeira.

Exemplo:

```javascript
const umOuOutro = 1 || 2;
```

O primeiro item verdadeiro será retornado. Neste caso o item 1. Se o primeiro item avaliado fosse um valor falso, como `1 > 2 || 2`, então o valor 2 seria retornado.

```javascript
const umOuOutro = 1 > 2 || 2;
```

Isso acontece porque o 1 não é maior que 2, então ele não será retornado. Na validação do número 2, ele é avaliado como um valor verdadeiro.

Vamos imaginar uma operação condicional onde precisamos garantir que uma mensagem será enviada se o número de caracteres do nome de um usuário for maior que 100 ou o nome seja igual a "anônimo".

Para verificar a quantidade de caracteres do nome de usuário, vamos utilizar um método da linguagem JavaScript chamado length. Usamos a seguinte sintaxe para saber quantos caracteres uma string possui: **string.length**.

Vamos ao exemplo:

```javascript
const usuario = "anônimo";

if (usuario.length > 100 || usuario === "anônimo") {
    console.log("Enviar a mensagem");
} else {
    console.log("A mensagem não pode ser enviada");
}
```

O retorno da execução deste bloco de código será "Enviar a mensagem", pois o nome de usuário está igual a "anônimo". Neste caso a segunda condição do nosso OU está verdadeira e por isso a nossa premissa (`usuario.length > 100 || usuario === "anônimo"`) retorna verdadeiro.

Faça um teste. No seu arquivo app.js, mude o valor do texto que é armazenado na constante **usuario** para qualquer coisa e verifique o que vai acontecer.

A mensagem que mostramos para o usuário que está tentando enviar a mensagem está tão genérica que não serviria para muito se acontecesse em um sistema real. Para uma real compreensão é necessário dizer para o usuário o que foi que ele fez de errado. Vamos modificar um pouco nosso `if` para que atenda os dois cenários utilizando nosso **else if** (que aprendemos acima) e as operações de comparação.

```javascript
const usuario = "anônimo";

if (usuario.length > 100 || usuario === "anônimo") {
    console.log("Enviar a mensagem");
} else if (usuario.length < 100){
    console.log("A mensagem não pode ser enviada, pois o número de caracteres do nome de usuário é menor que 100");
} 
```

### <a name='OperadorAND'></a>Operador AND

Ao contrário do operador OU, o AND (`&&`) somente retorna verdadeiro caso as DUAS premissas sejam verdadeiras.

Vamos seguir o mesmo exemplo da mensagem de texto, mas vamos aumentar a complexidade do nosso software. Agora nós queremos que o usuário tenha escrito uma mensagem com, no mínimo, 140 caracteres e seu nome de usuário tenha mais de 100 caracteres OU seja igual a "anônimo".

```javascript
const usuario = "anônimo";
const mensagem = "";

if (mensagem.length > 140 && (usuario.length > 100 || usuario === "anônimo")) {
    console.log("Enviar a mensagem");
} else {
    console.log("A mensagem não pode ser enviada");
}
```

Precisamos colocar os parênteses em volta da premissa `usuario.length > 100 || usuario === "anônimo"` para garantir a comparação do AND não seja entre `mensagem.length > 140` e `usuario.length > 100`.

Mas essa premissa está muito grande dentro do nosso if. Podemos simplificar nosso código utilizando variáveis e os condicionais. Vamos fazer isso antes de melhorar nossa mensagem de erro, que mais uma vez ficou subjetiva para o usuário.

```javascript
const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";

if (mensagemValida && usuarioValido) {
    console.log("Enviar a mensagem");
} else {
    console.log("A mensagem não pode ser enviada");
}
```

Repare que até mesmo o entendimento do nosso `if` ficou melhor, agora sabemos que, para que uma mensagem seja enviada precisamos ter uma mensagem válida e um usuário válido.

Mas nossa mensagem de erro volta a ser genérica, pois agora temos vários cenários: 

- mensagem e usuário válidos
- mensagem inválida e usuário válido
- mensagem válida e usuário inválido
- mensagem e usuário inválidos

Vamos contemplar esses casos:

```javascript
const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";

if (mensagemValida && usuarioValido) {
    console.log("Enviar a mensagem");
} else if (mensagemValida === false && usuarioValido) {
    console.log("A mensagem não pode ser enviada, pois possui menos de 140 caracteres");
} else if (mensagemValida && usuarioValido === false) {
    console.log("A mensagem não pode ser enviada, pois o nome de usuário é inválido");
} else {
    console.log("A mensagem não pode ser enviada, pois não atende os requisitos para envio");
}
```

As condições ficaram muito grandes de novo, não é? Vamos melhorar as coisas usando mais variáveis.

```javascript
const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";
const todosOsRequisitosValidos = mensagemValida && usuarioValido;
const mensagemInvalida = mensagemValida === false && usuarioValido;
const usuarioInvalido = mensagemValida && usuarioValido === false;

if (todosOsRequisitosValidos) {
    console.log("Enviar a mensagem");
} else if (mensagemInvalida) {
    console.log("A mensagem não pode ser enviada, pois possui menos de 140 caracteres");
} else if (usuarioInvalido) {
    console.log("A mensagem não pode ser enviada, pois o nome de usuário é inválido");
} else {
    console.log("A mensagem não pode ser enviada, pois não atende os requisitos para envio");
}
```

### <a name='OperadorNOT'></a>Operador NOT

O operador NOT (`!`) inverte o valor boolean ao qual for atribuído. Isso significa que, se recebermos um true e utilizar o operador !!, então esse true vira um false e vice-versa.

```javascript
!true
```

Isso retorna false.

```javascript
!false
```

Isso retorna true.

No nosso exemplo de envio de mensagens, temos as seguintes premissas: `mensagemValida === false && usuarioValido` e `mensagemValida && usuarioValido === false`. Estamos validando se mensagemValida é igual a false e se usuarioValido é igual a false, isso para garantir que eles não são válidos. Podemos, ao invés disso, executar o operador NOT da seguinte maneira:

```javascript
const mensagemInvalida = !mensagemValida && usuarioValido;
const usuarioInvalido = mensagemValida && !usuarioValido;
```

Isso faz com que ` !mensagemValida && usuarioValido` e `mensagemValida && !usuarioValido` se tornem true caso as premissas anteriores sejam verdadeiras, pois estamos invertendo o valor de false que veio e era analisado via operador de comparação e só estamos confirmando se ambos os valores são verdadeiros com o operador && novamente, o que nos retornará um true caso a mensagem ou usuário sejam inválidos.

Vamos analisar como ficaria o código final.


```javascript
const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";
const todosOsRequisitosValidos = mensagemValida && usuarioValido;

**const mensagemInvalida = !mensagemValida && usuarioValido;**
**const usuarioInvalido = mensagemValida && !usuarioValido;**

if (todosOsRequisitosValidos) {
    console.log("Enviar a mensagem");
} else if (mensagemInvalida) {
    console.log("A mensagem não pode ser enviada, pois possui menos de 140 caracteres");
} else if (usuarioInvalido) {
    console.log("A mensagem não pode ser enviada, pois o nome de usuário é inválido");
} else {
    console.log("A mensagem não pode ser enviada, pois não atende os requisitos para envio");
}
```

## <a name='PrecednciadeoperadoresemJavaScript'></a>Precedência de operadores em JavaScript

A tabela a seguir mostra a precedência de operadores em JavaScript da mais alta para a mais baixa. A mais alta sempre será executada antes da mais baixa.

| operação | operador |
| ---- | ---- |
| multiplicação / divisão / resto ou módulo | `*` `/` `%` |
| adição / subtração | `+` `-` |
| relacional | `<` `<=` `>` `>=` |
| igualdade | `==` `!=` `===` `!==` |
| E | `&&` |
| OU | `||` |

## <a name='Concluso'></a>Conclusão

Até aqui já sabemos muita coisa e logo logo estaremos prontos(as) para começar nosso trabalho prático no desenvolvimento de software.

Neste artigo aprendemos sobre os operadores matemáticos, de comparação, condicionais  e lógicos utilizando a linguagem JavaScript. Isso nos será muito útil no desenvolvimento, pois os utilizamos para tudo dentro de um programa.

Nos próximos artigos vamos aprender sobre laços de repetição e modularização de código.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/w_oliveiras).

## <a name='Referncia'></a>Referência

- [MDN - operadores e expressões](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operator)
- [MDN - matemática básica no JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Matematica)
