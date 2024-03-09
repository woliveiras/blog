---
title: CSS Reset de várias maneiras
tags:
  - css
  - frontend
date: '2015-01-15'
description: Criando seu CSS Reset
---

<!-- vscode-markdown-toc -->
* [Reset Genérico](#ResetGenrico)
* [Erick Meyer CSS Reset](#ErickMeyerCSSReset)
* [CSS Reset do Yahoo](#CSSResetdoYahoo)
* [Normalize.css](#Normalize.css)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


Todo elemento HTML tem um estilo padrão que é injetado pelo Browser. O legal é que não existe um padrão entre eles. O Chrome tem seu estilo, o Firefox tem o dele, o Safari e Opera também... 

Isso pode gerar incompatibilidade com o CSS que você escreve. As vezes você coloca um espaço aqui, outro ali e quando abre no IE vê que está tudo bagunçado!

O CSS Reset é uma técnica que serve para evitar esse problema. Você remove ou seta valores para as propriedades dos elementos conforme necessário. Existem várias formas de se fazer um CSS Reset. Vou citar algumas que eu já utilizei.

## <a name='ResetGenrico'></a>Reset Genérico

Basta colocar esse código no início do arquivo:

```css
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box
}
```

Pronto, todos (*) os elementos ficarão sem borda, sem preenchimento e sem margem. Ai é só ir estilizando conforme for necessário.

## <a name='ErickMeyerCSSReset'></a>Erick Meyer CSS Reset

Esse é muito utilizado e divulgado pela Web. Utilizei por um bom tempo!

Da uma olhada nesse [link ](https://meyerweb.com/eric/tools/css/reset/index.html "Meyer | CSS Tools: Reset CSS")para conhecer melhor.



## <a name='CSSResetdoYahoo'></a>CSS Reset do Yahoo

É bem útil também! É o Reset do YUI.

Basta olhar esse outro [link](https://www.cssreset.com/scripts/yahoo-css-reset-yui-3/ "Yahoo! (YUI 3) Reset CSS"). ;)

## <a name='Normalize.css'></a>Normalize.css

E agora vem o que eu mais gosto e tenho utilizado no dia-a-dia. Gosto mais desse por que ele não somente tira os estilos, mas aplica estilos padrões que deixa tudo igual em todos os Browsers.

Clica nesse [link ](https://necolas.github.io/normalize.css/ "Normalize.css")e você vai conhecer o danado.

Lembre-se sempre que o Reset vem antes dos estilos que você vai aplicar na interface.
