---
title: 'Laços de repetição: while e do... while'
date: '2019-04-14'
image: "/images/posts/priscilla-du-preez-101759-unsplash-min.jpg"
tags:
    - javascript
    - computação
    - programação
    - curso-fullstack
description: Repetir processos é importante em um software, muitas vezes precisamos executar uma mesma ação e ficaria inviável escrever uma mesma linha de código várias e várias vezes, assim como acessar um dado dentro de um array somente pelo seu indice. Para facilitar nossas vidas existem os laços de repetição.
---
Nos últimos artigos aprendemos como criamos rotinas para que o nosso computador execute e aconteça algo que nós desejamos. Criar variáveis, imprimir mensagens, condicionais para mudar o fluxo do programa e um pouco mais.

Nós escrevemos programas principalmente para automatizar processos repetitivos. Para facilitar nossas vidas. No processo de desenvolvimento de um software existem ações que precisam ser repetidas naturalmente, como imprimir diversas linhas de dados ou ler vários itens de dentro de um array. Para isso temos comandos específicos das linguagens de programação que servem para executar essa repetição, são os **laços de repetição**.

Vamos aprender o que são laços de repetição, como utiliza-los e aprender nosso primeiro laço, o **while**.

<!-- vscode-markdown-toc -->
* [Laços de repetição](#Laosderepetio)
* [While](#While)
* [Do..while](#Do..while)
* [Praticando](#Praticando)
* [Conclusão](#Concluso)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Laosderepetio'></a>Laços de repetição

Em JavaScript temos os seguintes laços de repetição:  **while**, **do... while**, **for**, **for... in** e o **for... of**. Todos servem o mesmo objetivo, mas possuem algumas características que os diferem e existem para uma necessidade durante a execução dos nossos programas.

Chamamos laços de repetição de loops, em programação. A partir de agora vamos ver essas duas maneiras de falar enquanto estudamos [nesta série de artigos](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/).

## <a name='While'></a>While

O loop while existe para dizermos ao computador: **"enquanto algo, faça isso"**.

A sintaxe do while é a seguinte:

```
while (condição) {
 faça algo
}
```

Para exemplificar, vamos imaginar que queremos criar uma pequena tabela que exibe os usuários que temos cadastrados em um sistema. 

Temos o seguinte array de usuários:

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

Copie este código e cole no arquivo **app.js**, que foi criado no nosso primeiro artigo dessa série, [paradigmas, identificadores e tipos de dados](/posts/paradigmas-identificadores-e-tipos-de-dados#criando-nossos-programas-javascript).

Temos agora uma lista com 10 usuários que estão cadastrados em nosso sistema. Primeiro vamos imprimir os 10 itens no console do navegador para entender o uso do while.

Escreva o seguinte código no arquivo app.js:

```javascript
const quantidadeDeUsuarios = usuarios.length;
let contador = 0;

while(contador < quantidadeDeUsuarios) {
    console.log(usuarios[contador].nome);
    console.log(usuarios[contador].idade);
    contador++;
}
```

Perceba que existe uma condição para o corpo do loop while continuar sendo executado: enquanto **contador < quantidadeDeUsuarios**, faça **imprimir o nome e idade do usuário** (console.log...) e, por fim, somar mais um ao contador (contador++).

> O ++ é um operador de incremento que adiciona **+ 1** ao valor da nossa variável e reatribui o valor da soma a ela. Seria o mesmo que fazer:
>
> let contador = 0;
>
> contador = contador + 1;
>
> Também podemos fazer o mesmo para operações de decremento, com o `--` (`contador--`).

Quando rodamos nossa página, o index.html, vemos o seguinte retorno no console do navegador:

```javascript
Robinson
18
William
28
Janaina
19
Carla
25
Maíra
32
George
30
Camila
27
Carlinhos
22
Jamilso
29
Claudio
30
```

Isso acontece porque, a cada entrada do nosso while, o contador está valendo um novo valor e nós pegamos o dado de dentro do **array** com a sintaxe array[**indice**].

Você se recorda que: para acessar dados de dentro de um [**object**](/posts/paradigmas-identificadores-e-tipos-de-dados/#Objects) usamos o nome do objeto e a chave que desejamos acessar?

Então, para cada iteração no nosso array (cada vez que o loop volta a acessar o próximo item do array utilizando o novo valor do contador), temos algo como:

```javascript
usuarios[0]
```

Retorna **{nome: "Robinson", idade: 18}**. E então podemos acessar a chave de dentro deste objeto. Podemos buscar nome e idade assim: 

```javascript
usuarios[0].nome
usuarios[0].idade
```

O que acontece em nosso loop é o seguinte:

```javascript
while(0 < 10) {
    console.log(usuarios[0].nome);
    console.log(usuarios[0].idade);
}
```

```javascript
while(1 < 10) {
    console.log(usuarios[1].nome);
    console.log(usuarios[1].idade);
}
```

```javascript
while(2 < 10) {
    console.log(usuarios[2].nome);
    console.log(usuarios[2].idade);
}
```

Até que a condição para entrar no loop seja false (**10 < 10**), então a repetição acaba.

Se nós não colocarmos uma expressão de controle (neste caso, nosso contador que é incrementado a cada repetição), a nossa condição nunca será atendida e vamos cair em um **loop infinito**! Isso pode fazer o navegador ou sistema operacional travar.

Poderíamos também fazer o contrário e decrementar um valor ao invés de incrementar e então nem precisaríamos da verificação. Podemos somente dizer que temos 10 usuários/registros dentro do nosso array e decrementar sobre isso e nosso código fica mais simples.

```javascript
let quantidadeDeUsuarios = usuarios.length;

while(quantidadeDeUsuarios) {
    const indice = quantidadeDeUsuarios - 1;
    console.log(usuarios[indice].nome);
    console.log(usuarios[indice].idade);
    quantidadeDeUsuarios--;
}
```

Escreva esse código no seu app.js e execute para analisar o que acontece. 

Perceba que temos que fazer um controle do nosso contador **const indice = quantidadeDeUsuarios - 1**. Precisamos fazer isso porque **usuarios.length** retorna 10, mas para acessar o último item do nosso array (de 10 posições) nós precisamos usar o número 9, pois sabemos que o índice para acessar as posições dos arrays começa em 0. Então não existe um item na posição 10, somente na posição 9.

O while para quando quantidadeDeUsuarios chega a 0 porque 0 é considerado um valor **falsy**. Um valor que pode ser considerado falso quando necessário uma comparação booleana. 

Veja:

Se fizermos:

```javascript
0 == true
```

Ou, se fizermos:

```javascript
1 == true
```

A comparação simples (**==**) irá retornar **true** para 1 e **false** para 0.

Neste exemplo só temos um problema de implementação: quando imprimimos o valor na primeira vez, incrementando o contador, tivemos a posição exata dos registros do array.

```javascript
Robinson
18
William
28
Janaina
19
Carla
25
Maíra
32
George
30
Camila
27
Carlinhos
22
Jamilso
29
Claudio
30
```

Agora temos o resultado invertido:

```javascript
Claudio
30
Jamilso
29
Carlinhos
22
Camila
27
George
30
Maíra
32
Carla
25
Janaina
19
William
28
Robinson
18
```

Isso acontece porque, na primeira vez, começamos iterar o array do 0 até a última posição, mas na segunda vez começamos da última posição até o 0. Para resolver isso utilizamos um método de array chamado **reverse**.

A sintaxe do reverse é: 

```
array.reverse();
```

Ele pega uma cadeia de registros e muda suas posições.

Exemplo:

```javascript
let meuArray = [0, 1, 2, 3, 4, 5];

meuArray.reverse();
```

Se acessar o array, temos agora algo assim:

```javascript
[5, 4, 3, 2, 1, 0]
```

Então vamos inverter nosso array antes de iterar sobre e fazer com que nosso console.log imprima o que realmente queremos.

Na linha onde pegamos a quantidade de usuários, vamos utilizar o método reverse e logo depois pegar a quantidade de itens dentro da lista.

```
let quantidadeDeUsuarios = usuarios.reverse().length;
```

Aqui vemos algo legal da linguagem JavaScript, podemos encadear métodos dos nossos objetos. Fizemos .reverse() e .length um após o outro e temos o resultado esperado. Primeiro o array é reordenado e em seguida pegamos a quantidade de itens que temos na lista.

Faça essa alteração no seu app.js e em seguida recarregue a página e veja o resultado esperado no console do navegador.

## <a name='Do..while'></a>Do..while

Além de aprender a utilizar o while acima, aprendemos mais comandos legais, como o reverse e também a acessar valores de objetos dentro de arrays. Estamos progredindo bastante em nossa estrada rumo a aprender programação do zero!

Existe uma variação do while que poderemos precisar em algum momento de nossas vidas. O while executa caso uma condição seja atendida, mas se ela não for atendida, pelo menos uma vez, o while nunca é executado.

Por exemplo:

Imagina que estamos executando uma rotina que imprime os valores de dentro de um contador, mas não queremos que apareça o número zero no console.

```javascript
let contador = 0

while(contador > 1 && contador < 10) {
	console.log(contador);
	contador++;
}
```

Como o nosso contador começa com zero, nossa condição nunca é atendida e não entra no laço de repetição. Para isso, então, utilizamos o **do.. while**.

O do… while executa pelo menos uma vez e então entra no laço while.

```javascript
let contador = 0

do {
	contador++;
	console.log(contador);
} while(contador < 10);
```

## <a name='Praticando'></a>Praticando

No começo do artigo pensamos no exemplo da criação de uma tabela. Vamos agora colocar isso em prática e realmente transformar nosso programa em um gerador de tabelas na interface.

Para este exemplo eu estou assumindo que você ainda não sabe HTML e por isso eu vou deixar o código pronto e explicar somente a parte lógica do trabalho, não a diagramação, mas não se preocupe, até o final desta série você vai aprender mais sobre HTML e também sobre CSS, que são as linguagens de marcação e estilos utilizadas no desenvolvimento client side para o navegador.

Copie o seguinte código para o seu arquivo **index.html**. Neste código estamos criando uma tabela que vai receber nossos dados do array.

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
    <table>
        <thead>
            <tr>
                <th colspan="2">Tabela de usuários</th>
            </tr>
            <tr>
                <td><b>Nome</b></td>
                <td><b>Idade</b></td>
            </tr>
        </thead>
        <tbody id="corpoDaTabela">
        </tbody>
    </table>
    <script src="app.js"></script>
</body>
</html>
```

E agora vamos alterar nosso app.js adicionando as seguintes linhas:

Antes do while, adicione:

```javascript
let minhaTabela = document.querySelector('#corpoDaTabela');
```

E no lugar de console.log vamos inserir dados na tabela com:

```javascript
minhaTabela.insertAdjacentHTML('beforeend', `
<tr>
    <td>${usuarios[indice].nome}</td>
    <td>${usuarios[indice].idade}</td>
</tr>
`);
```

O código final deve ficar assim:

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

let minhaTabela = document.querySelector('#corpoDaTabela');

let quantidadeDeUsuarios = usuarios.reverse().length;

while(quantidadeDeUsuarios) {
    const indice = quantidadeDeUsuarios - 1;
    minhaTabela.insertAdjacentHTML('beforeend', `
    <tr>
        <td>${usuarios[indice].nome}</td>
        <td>${usuarios[indice].idade}</td>
    </tr>
    `);
    quantidadeDeUsuarios--;
}
```

Agora, ao executar nosso código final, devemos ter um resultado parecido com o da imagem abaixo, com uma tabela HTML preenchida via JavaScript utilizando um laço de repetição para isso.

![Imagem da tabela HTML gerada via JavaScript]({{site.postsImagesPath}}tabela-html-preenchida-via-javascript.png)

## <a name='Concluso'></a>Conclusão

Nos próximos artigos vamos aprender os outros laços de repetição e escopo, algo extremamente importante dentro do desenvolvimento de software.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/_uillaz).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/o-universo-da-programacao).

## <a name='Referncias'></a>Referências

- [MDN - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN - do... while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while)

Photo by Priscilla Du Preez on Unsplash