---
layout: post
title: 'Laços de repetição: for, for...in, for...of'
date: 2019-04-17 08:01 -0300
categories:
    - javascript
    - computação
    - programação
    - série fullstack
image: "/images/posts/celine-haeberly-573087-unsplash-min.jpg"
tags:
    - javascript
    - computação
    - programação
    - série fullstack
description: Repetir processos é importante em um software, muitas vezes precisamos executar uma mesma ação e ficaria inviável escrever uma mesma linha de código várias e várias vezes, assim como acessar um dado dentro de um array somente pelo seu indice. Para facilitar nossas vidas existem os laços de repetição.
---
Continuando nossos estudos sobre laços de repetição, vamos aprender outras maneiras de iterar sobre dados em JavaScript.

No artigo anterior aprendemos sobre o [while e do...while](/posts/laços-de-repetição-while-e-do-while/), que dizem para o nosso programa “enquanto essa condição for verdadeira faça isso”. No for, for...in ou for...of a nossa premissa é outra e vamos entender ela para cada opção de laço for que temos no JavaScript.

Vamos aprender cada uma das opções.

<!-- vscode-markdown-toc -->
* [For](#For)
* [For… In](#ForIn)
* [For… Of](#ForOf)
* [Iterando sobre Sets e Maps](#IterandosobreSetseMaps)
* [Conclusão](#Concluso)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Imagem uma montanha russa" %}

## <a name='For'></a>For

A sintaxe do for é a seguinte:

```
for(inicialização, condição, iteração) {
	faça...
}
```

O for é um loop mais simples que o while. O while é algo muito poderoso, porém mais utilizado quando queremos fazer algo recursivo (aprenderemos sobre isso depois). Perceba que, num laço for, já temos uma inicialização de uma variável de controle e a iteração obrigatória, o que garante certa "segurança" na repetição, visto que no while podemos esquecer de fazer isso.

Vamos continuar com nosso exemplo de dados de usuários de um sistema, que utilizamos no artigo anterior. Temos o seguinte array:

```javascript
const usuarios = [
    {nome: "Robinson", idade: 18},
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maíra", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
    {nome: "Carlinhos", idade: 22},
    {nome: "Jamilso", idade: 29},
    {nome: "Claudio", idade: 30}
];
```

Vamos iterar sobre esse array, utilizando o for e imprimir no console do navegador cada vez que o corpo do nosso laço de repetição for executado com o console.log(). Pressione o F12 ou CTRL+C para abrir o console do seu navegador.

```javascript
const quantidadeDeUsuarios = usuarios.length;

for (let i = 0; i < quantidadeDeUsuarios; i++) {
	console.log(usuarios[i].nome);
	console.log(usuarios[i].idade);
}
```

Estamos guardando o valor da quantidade de usuários que temos dentro do nosso array com o .length e em seguida utilizamos ela na condicional do nosso laço. Perceba que criamos uma variável dentro da expressão do laço (let i = 0), adicionamos a condição (i < quantidadeDeUsuarios) e em seguida somamos mais um a nossa variável de controle (i++).

Execute esse código no seu navegador e veja o que acontece.

Temos, dentro do corpo do laço o acesso ao valor do nosso [identificador](/posts/paradigmas-identificadores-e-tipos-de-dados) **i**, por isso podemos dizer que: dentro do array usuarios, na posição i, imprima a chave nome do objeto que temos nessa posição (usuarios[i].nome).

## <a name='ForIn'></a>For… In

O for...in e o for...of, que aprenderemos abaixo, vão parecer extremamente mais bonitos depois que você conheceu o for.

A sintaxe do for...in é a seguinte:

```javascript
for (let variavel in objeto) {
faça...
}
```

Legal, não? Não precisamos inicializar um identificador para controlar o fluxo de repetição e nem iterar sobre isso. A própria linguagem se encarrega de saber quantos itens existem dentro do objeto a ser iterado e, com base nisso, repete até que essa lista de itens seja toda percorrida.

Vamos imprimir a nossa lista de usuários de novo, agora com o for...in:

```javascript
for (let item in usuarios) {
	console.log(usuarios[item].nome);
	console.log(usuarios[item].idade);
}
```

Nós estamos dizendo o seguinte: para item dentro do nosso array usuarios, imprima o nome da chave item dentro de usuarios.

Nós podemos iterar sobre objetos ou arrays utilizando o for...in. 

## <a name='ForOf'></a>For… Of

O for...of é o laço mais bonito já inventado pelos artistas da modernidade, os desenvolvedores que escrevem as linguagens de programação, na minha opinião. Eu acho sua sintaxe clara e o acesso aos dados é mais explícito dentro do corpo do laço.

A sintaxe do for...of é:

```javascript
for (let variavel of objeto) {
	faça
}
```

Muito parecido com o for...in, não é? 

A grande diferença será agora, no acesso aos dados que acabamos de extrair de objeto. Confira o exemplo sobre o nosso array de usuários.

```javascript
for (let item of usuarios) {
	console.log(item.nome);
	console.log(item.idade);
}
```

Repare que não temos que dizer que vamos imprimir o **objeto[item].chave**, basta pedir que o JavaScript imprima no console o **item.chave**, isso porque a criação da variável item é igual a receber o valor do item que está dentro do nosso objeto no momento de sua criação.

Seria o mesmo que fazer algo assim:

```javascript
let usuario1 = usuarios[1];
let usuario2 = usuarios[2];
let usuario3 = usuarios[3];
let usuario4 = usuarios[4];
let usuario5 = usuarios[5];
let usuario6 = usuarios[6];
``` 

E cada variável recebeu um objeto com as chaves nome e idade (usuario1.nome, usuario1.idade), mas não precisamos fazer isso graças ao poder do for...in que já executa este trabalho por baixo dos panos.

## <a name='IterandosobreSetseMaps'></a>Iterando sobre Sets e Maps

Você se recorda que, no artigo sobre tipos de dados, eu comentei que não conseguimos acessar o tipo Set e Map? Se não se lembra, confere [aqui](/posts/paradigmas-identificadores-e-tipos-de-dados#Sets).

Para iterar sobre os Sets e Maps vamos precisar utilizar mais os poderes desses conjuntos de dados.

Vamos imaginar um Map com os perfis de usuários do Twitter que devemos seguir para ter um dia mais feliz ao utilizar a internet. Teríamos, então, o seguinte Map:

```
let mapDaFelicidadeOnline = new Map([
  ['iti malias', 'https://twitter.com/_iti_malia'],
  ['Eu Amo os Animais','https://twitter.com/_IloveAnimais_'],
  ['bichos triste fofo', 'https://twitter.com/BichosTriste']
]);
```

Copie esse código para o console do seu navegador e agora acesse ele, para conferir como os dados estão organizados.

```javascript
mapDaFelicidadeOnline
Map(3) {"iti malias" => "https://twitter.com/_iti_malia", "Eu Amo os Animais" => "https://twitter.com/_IloveAnimais_", "bichos triste fofo" => "https://twitter.com/BichosTriste"}
```

Para acessar algum item de um array, deveríamos fazer array[posição], mas em Maps e Sets é diferente. Os dados dentro de um Map nós acessamos com a seguinte sintaxe para acesso aos dados:

- map.keys(): retorna uma lista das chaves do nosso map
- map.values(): retorna uma lista dos valores do nosso map
- map.entries(): retorna uma lista de chave e valor (objetos) do nosso map

O Set possui os mesmos métodos de acesso aos seus dados.

- set.keys()
- set.values()
- set.entries()

Se sabemos que não é possível pegar os dados utilizando a posição, como faríamos um for para imprimir os valores do nosso mapDaFelicidadeOnline?

Vamos conferir o seguinte código:

```javascript
for (let item of mapDaFelicidadeOnline.entries()) {
	console.log(item[0]);
	console.log(item[1]);
}
```

Pronto! Temos a lista de entradas do Map `mapDaFelicidadeOnline` sendo impressa no console do navegador.

A grande diferença é o uso do mapDaFelicidadeOnline.entries() dentro do nosso for...of. Esse método nos retorna um iterável, ou seja, um objeto que podemos percorrer e executar ações para cada posição. Então, quando se fizer necessário iterar sobre essas coleções de dados podemos utilizar essa abordagem.

## <a name='Concluso'></a>Conclusão

Neste artigo conhecemos a sintaxe dos fors (for, for...in e for...of) e aprendemos a iterar sobre Maps e Sets. Com isso já temos muita ferramenta em mãos para criar nossos programas de um modo extremamente poderoso e conciso. Sem criarmos um monte de variável com numeros (usuario1, usuario2, usuario3), mas utilizando os tipos de dados certos, as coleções, e os laços de repetição.
No próximo artigo vamos aprender a criar nossas próprias funções e também vamos conhecer algo novo, o **escopo dos identificadores**.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/etc_william).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/o-universo-da-programacao).

## <a name='Referncias'></a>Referências

- [for...in - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Map, Set, WeakMap & WeakSet](http://javascript.info/map-set-weakmap-weakset)

Photo by Céline Haeberly on Unsplash