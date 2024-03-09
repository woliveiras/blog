---
title: 'Interfaces like a boss!'
publishDate: '2014-09-13'
category: Frontend
tags:
  - frontend
  - html
  - css
excerpt: Como organizar e desenvolver uma interface
---

É amigo, teve um tempo em que modificar um registro no banco de dados era a coisa que eu achava mas incrível do mundo, gerar um relatório em PDF com PHP então... Nem se fale! Porém, hoje, o que eu curto mesmo é desenvolver interfaces e trabalhar no Browser com JavaScript. Só que criar interfaces não é só sair desenhando no Browser com HTML e CSS, depois colocar umas ações legais com o JS... Tem de planejar a interação, tem de pensar o que vai fazer, senão o que fizer agora, vai se tornar sua dor de cabeça mais pra frente! Pensando nisso segue umas dicas maneiras pra não se enrolar todo na hora de desenvolver uma interface.

## <a name='Comeando:Os3principaiselementosdaInterface'></a>Começando: Os 3 principais elementos da Interface

![Exemplo de estrutura da interface](~/assets/images/posts/estrutura.png)

Lembre-se de identificar os principais elementos da interface:

- **Topo**
- **Conteúdo**
- **Rodapé**

Você já deve ter reparado que, acho que todos, os sites na Web possuem um Topo, onde normalmente vai o Logo, os menus, depois vem o conteúdo com o conteúdo propriamente dito e por fim tem o rodapé, onde a galera coloca o Copyright, dados da empresa/site, contato, etc.
Identifique isso e separe. Vai ajudar muito.
Ex.:

```html
<header>Topo</header>
<div id="”content”">Conteúdo do Site</div>
<footer>
  Rodapé
  <footer></footer>
</footer>
```

## <a name='Separemarcaoestiloseaes'></a>Separe marcação, estilos e ações

Já deve ser uma boa prática sua separar o HTML em um arquivo, o CSS em outro e o JS em outro né?
Se a resposta foi não,é bom dar uma estudada nisso, pois são boas práticas de desenvolvimento e vão te ajudar muito.
As vezes acontece de uma página, ou mais, possuírem estilos próprios que só serão aplicados a elas. Para esses casos nós criamos um arquivo CSS que só será carregado nela. Ex.: contato.css, localizacao.css, por ai vai. Porém, tudo o que for repetido em todas as páginas deixe no arquivo principal.

## <a name='Organizaodocdigo'></a>**Organização do código**

Sempre comente seu código, isso faz bem pra saúde. Imagina depois de 1 ano você precisar refatorar uma interface! Você pode ficar louco tentando decifrar o que pensava antes... ;D - Quero ver lembrar o que você fez! Eu não lembro nem o que eu fiz ontem.

### <a name='CSS'></a>CSS

Usar um [Reset CSS](/posts/css-reset-de-varias-maneiras) vai ajudar muito a fazer com que sua interface seja igual em todos os navegadores (Talvez não no IE! Brincadeira).

### <a name='TenteabreviarsuasdeclaraesCSS.'></a>Tente abreviar suas declarações CSS.

Ao invés de:

```css
margin-top: 2px;
margin-right: 3px;
margin-bottom: 5px;
margin-left: 9px;
```

Faça:

```css
margin: 2px 3px 5px 9px;
```

### <a name='DividaseuCSSemsesses.'></a>Divida seu CSS em sessões.

```css
/*------------------------------
Reset, corpo da página, estilos padrões
para listas, parágrafos, etc.
------------------------------*/
/*------------------------------
Estilos de títulos
------------------------------*/
/*------------------------------
Estilos de texto
------------------------------*/
/*------------------------------
Navegação
------------------------------*/
/*------------------------------
Forms
------------------------------*/
/*------------------------------
Cabeçalho
------------------------------*/
/*------------------------------
Corpo
------------------------------*/
/*------------------------------
Rodapé
------------------------------*/
```

### <a name='Primeiroaquidepoisaliemseguidal...'></a>Primeiro aqui, depois ali, em seguida lá...

Durante o desenvolvimento vá codificando por partes. Faça todo o topo, depois faça o conteúdo, depois o rodapé. Durante o desenvolvimento do Topo, se tiver um menu, faça a estrutura do topo e depois o menu e posicione-o no lugar ceto, em seguida vá pro conteúdo e assim por diante.

### <a name='Testes'></a>Testes

Durante o desenvolvimento vá testando o que fizer em todos os navegadores, isso vai agilizar bastante. Imagine, depois de ter feito toda a interface e deixado ela perfeitinha você abre no IE e está tudo quebrado! Putz...
Ai você modifica só um pouquinho pra funcionar no IE e quando abre em outro navegador já não está mais do jeito que tinha deixado... Que maravilha né?

## <a name='Bnus'></a>Bônus

**Que tal testar a velocidade do seu site?**

Dá pra fazer isso[ aqui](https://www.webpagetest.org/ 'Web page test') ou [aqui](https://developers.google.com/speed/pagespeed/insights/ 'Page Speed Google').

**Quer testar o site na versão mobile?**

Fora as ferramentas dos Browsers, tem [esse site](https://quirktools.com/screenfly/ 'Screenfly'), que também é maneiro.

Tem um templatezinho maneiro em HTML5 que ajuda, também, na hora de criar a estrutura do site, é o [HTML5Boilerplate](https://html5boilerplate.com/ 'html5boilerplate').

Sempre pense em [performance](https://browserdiet.com/pt/ 'Browser Diet'), [SEO](https://moz.com/learn/seo/on-page-factors 'SEO'), [Cross Browser](https://pt.wikipedia.org/wiki/Cross-browser 'Cross-browser'), [Acessibilidade](https://tableless.com.br/como-tornar-seu-website-acessivel/ 'Acessibilidade'), [Usabilidade ](https://viverdeblog.com/18-problemas-usabilidade/ 'Usabilidade')e esses termos que você tem ouvido falar muito ultimamente - Eu sei que tem ouvido sim! - pois são itens extremamente necessários para uma boa interface funcionar legal.

Se você tem mais alguma outra dica comenta ae! ;D
