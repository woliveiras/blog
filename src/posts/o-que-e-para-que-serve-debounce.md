---
title: O que é e para que serve debounce em JavaScript
date: '2022-02-16'
socialImage: "/images/posts/alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
tags:
    - JavaScript
    - Web
    - Frontend
description: Uma dica importante de performance em JavaScript quando estamos trabalhando em aplicações web ricas ou as famosas SPAs. O debounce é muito útil e importante no universo JavaScript, por isso confira este texto e os exemplos até o final.
---

Quando trabalhamos com o desenvolvimento de aplicações web ricas, aquelas cheias de eventos e trabalhando com requisições HTTP, muitas vezes corremos o risco de disparar diversos eventos de salvamento, atualização de estados e outras funções sem querer que isso aconteça.

Imagine uma função de salvamento automático, onde o usuário digita em um campo de __input__ ou __textarea__ e devemos salvar a palavra ou texto digitados enviando para um servidor. Agora, vamos pensar que este usuário pode digitar uma letra por segundo ou mesmo diversas palavras. Em qual momento a função de salvar deve ser executada?
A problemática

Vamos seguir com o exemplo do __textarea__ que envia o texto para um backend. Vamos utilizar o evento de __input__ para disparar uma função que vai salvar o texto.

No exemplo abaixo temos um textarea com a função de salvamento somente te mostrando a quantidade de vezes em que ela seria executada caso disparemos a requisição HTTP para cada input do usuário.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="YzEEadZ" data-user="uillaz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uillaz/pen/YzEEadZ">
  textarea-save</a> by William Oliveira (<a href="https://codepen.io/uillaz">@uillaz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script> 

Perceba, a quantidade de disparos é muito alta. Isso, pensando em requisições em rede, gera diversos problemas, como:

- __sobrecarga da rede__: custos de rede em infraestrutura, lentidão de resposta do servidor devido ao alto processamento de dados e inserção no banco de dados
- __lentidão da interface__: devido a quantidade de requisições abertas, o navegador pode começar a funcionar de uma maneira mais lenta
- __erros de inserção dos dados__: por conta da quantidade de requisições, se o sistema backend não trabalhar bem, teremos o risco de sobrescrever os dados anteriores por algo incompleto

E isso só pensando bem por cima da quantidade de desafios que podemos enfrentar caso sigamos este fluxo. Para evitar isso, utilizamos uma técnica chamada debounce.


<!-- vscode-markdown-toc -->
* [Entendendo debounce](#Entendendodebounce)
* [Implementando o debounce em JavaScript puro](#ImplementandoodebounceemJavaScriptpuro)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Entendendodebounce'></a>Entendendo debounce

Debounce não é algo novo, utilizamos esta técnica desde a época do nosso querido jQuery (e antes). O processo consiste em evitar que uma função seja chamada muitas vezes seguidas.

Um exemplo de caso onde o debounce seria muito útil e é algo extremamente simples é quando clicamos em um botão enviar (já voltamos para o nosso autosave no textarea).

Se temos um botão que executa uma requisição para alterar um status de registro de verdadeiro para falso, por exemplo, e nosso usuário é uma pessoa ansiosa, não tem muito conhecimento em informática ou mesmo possui alguma deficiência motora, esta pessoa pode clicar várias vezes neste botão, o que chamamos de __double-click__, executando assim mais que uma chamada para o servidor alterando o registro diversas vezes. Isso gera inconsistência de dados, assim como falta de confiança do usuário em nosso sistema.

Também poderia ser o caso de um infinite-scroll, onde uma requisição acontece quando o usuário rola a página. Caso não controlemos este evento, a requisição vai disparar várias vezes, travando a tela com o processamento para inserção dos dados abaixo dos últimos elementos ou mesmo por problemas de rede.

Utilizando debounce, podemos colocar um timer que será chamado quando o usuário parar de executar o evento e volta a contar caso o usuário não pare.

Pensando em nosso autosave, quando o usuário está digitando, não vamos executar a função. Só vamos chamá-la quando o usuário parar de digitar por 500ms. Isso garante que não vamos executar várias e várias vezes o autosave, assim como não vamos perder o valor digitado corretamente.

Vamos a implementação.

## <a name='ImplementandoodebounceemJavaScriptpuro'></a>Implementando o debounce em JavaScript puro

Pensando que a nossa função de debounce precisa disparar um timer e depois executar uma função, como no caso do nosso autosave, podemos implementar ela com o simples código abaixo:

```javascript
function debounce(fn, waitTime) {
	let timer = null
  
	return function() {
		clearTimeout(timer)
		timer = setTimeout(fn, waitTime)
	}
}
```

Agora vamos implementar no nosso textarea com autosave:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="MWOOGQK" data-user="uillaz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uillaz/pen/MWOOGQK">
  textarea-autosave-debounce</a> by William Oliveira (<a href="https://codepen.io/uillaz">@uillaz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

A nossa atenção fica voltada para  alinha: 

contentElm.addEventListener("input", debounce(autoSave, 500))

Onde estamos colocando um timeout de 500ms quando o usuário digitar no textarea.

## <a name='Concluso'></a>Conclusão

Utilizar debounce pode salvar o custo de infraestrutura, pois alto consumo de rede e ficar batendo no servidor o tempo todo não é algo muito legal, além do processamento e, claro, a interface do usuário. 

Trabalhando com web, precisamos tomar muito cuidado com performance no navegador, pois o frontend tem um peso muito grande na experiência do usuário e isso pode impactar tanto o seu produto, empresa, quanto a vida de uma pessoa que não consegue realizar uma ação importante no seu app.

Espero que tenha entendido e gostado do conteúdo. Se curtiu, compartilha nas redes sociais. 

Photo by <a href="https://unsplash.com/@alinnnaaaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alina Grubnyak</a> on <a href="https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
