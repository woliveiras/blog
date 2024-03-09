---
title: O que é e para que serve throttle  em JavaScript
publishDate: '2022-02-17'
image: '~/assets/images/posts/lucas-ludwig-rgj95BaGcT4-unsplash.jpg'
category: JavaScript de Software
tags:
  - javascript
  - web
  - frontend
excerpt: Uma dica importante de performance em JavaScript quando estamos trabalhando em aplicações web ricas ou as famosas SPAs é o uso de throttle para evitar múltiplas chamadas de uma mesma função, o que pode acarretar em vários problemas.
---

Trabalhando com JavaScript para o desenvolvimento de interfaces web ricas, ou SPAs, sempre chegamos ao momento onde precisamos executar trechos de código em determinados eventos, como o evento de **resize** ou **scroll** de [[window]]. Isso pode ser fácil ou complicado, depende de como trabalharmos.

Algo comum de acontecer é a função que criamos para disparar uma única vez quando o evento acontecer ser chamada várias vezes em milissegundos. Este acontecimento é graças ao fato de que o resize ou o scroll acontecem várias vezes em pequenos espaços de tempo, pois o usuário está segurando o botão do mouse e movimentando pouco a pouco.

## <a name='Aproblemtica'></a>A problemática

Para exemplificar, montei uma janelinha fake que dispara uma função para incrementar o contador de acordo com o evento de **scroll**. Perceba a quantidade de alterações com um simples rolar para baixo e para cima.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWOavxG" data-user="uillaz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uillaz/pen/QWOavxG">
  Untitled</a> by William Oliveira (<a href="https://codepen.io/uillaz">@uillaz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Perceba, a quantidade de disparos é muito alta. Isso, pensando somente em requisições em rede, geraria diversos problemas, como:

- **sobrecarga da rede**: custos de rede em infraestrutura, lentidão de resposta do servidor devido ao alto processamento de dados e inserção no banco de dados
- **lentidão da interface**: devido a quantidade de requisições abertas, o navegador pode começar a funcionar de uma maneira mais lenta
- **erros de inserção dos dados**: por conta da quantidade de requisições, se o sistema backend não trabalhar bem, teremos o risco de sobrescrever os dados anteriores por algo incompleto

E isso só pensando bem por cima da quantidade de desafios que podemos enfrentar caso sigamos este fluxo. Para evitar a chamada infinita (ou quase infinita) de uma função, utilizamos a técnica do **throttle** em JavaScript.

## <a name='Entendendothrottle'></a>Entendendo throttle

O throttle vai nos ajudar a controlar a quantidade de vezes que a função será disparada em um determinado tempo. Bem parecido com o [debounce](/posts/o-que-e-para-que-serve-debounce/).

Podemos controlar que a nossa função de incremento do contador seja executada, por exemplo, somente uma vez em determinada quantidade de milissegundos. Assim evitamos essa quantidade de disparos devido ao alto número de vezes em que o scroll acontece quando o usuário rola a página.

## <a name='ImplementandoothrottleemJavaScriptpuro'></a>Implementando o throttle em JavaScript puro

Pensando que a nossa função de throttle precisa disparar um timer e depois executar uma função passada como parâmetro. Podemos implementar ela com o código abaixo:

```js
function throttle(fn, waitTime) {
  let timer = null;
  let lastExec = null;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastExec) {
      fn.apply(context, args);
      lastExec = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(
        function () {
          if (Date.now() - lastExec >= waitTime) {
            fn.apply(context, args);
            lastExec = Date.now();
          }
        },
        waitTime - (Date.now() - lastExec)
      );
    }
  };
}
```

O detalhe está no fato de que precisamos controlar o contexto e argumentos, pois precisamos utilizar o **apply** para executar a função com os parâmetros corretos dentro do nosso **setTimeOut**. Além de verificar se a função foi executada anteriormente e se, subtraindo o horário de agora do valor de última execução, o tempo desde a última execução é maior ou igual ao tempo que deve ser esperado. Então a nossa função só vai executar caso o nosso tempo de espera for respeitado.

Vamos ao exemplo do scroll na minha janela de mentirinha:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="WNXdOXd" data-user="uillaz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/uillaz/pen/WNXdOXd">
  Untitled</a> by William Oliveira (<a href="https://codepen.io/uillaz">@uillaz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

O uso do throttle está na linha:

```js
windowElm.addEventListener('scroll', throttle(increment, 1000));
```

## <a name='Concluso'></a>Conclusão

Utilizar throttle pode salvar o custo de infraestrutura, pois alto consumo de rede e ficar batendo no servidor o tempo todo não é algo muito legal, além do processamento e, claro, salvar a interface e experiência do usuário.

Trabalhando com web, precisamos tomar muito cuidado com performance no navegador, pois o frontend tem um peso muito grande na experiência do usuário e isso pode impactar tanto o seu produto, empresa, quanto a vida de uma pessoa que não consegue realizar uma ação importante no seu app.

Espero que tenha entendido e gostado do conteúdo. Se curtiu, compartilha nas redes sociais.
