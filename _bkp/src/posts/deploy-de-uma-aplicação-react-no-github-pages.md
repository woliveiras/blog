---
title: Deploy de uma aplicação React no GitHub Pages
date: '2018-05-03'
tags:
    - javascript
    - github
    - git
description: Utilizando o GitHub Pages, uma hospedagem gratuita, para hospedar nossos projetos escritos em React
---

<!-- vscode-markdown-toc -->
* [Utilizando o gh-pages para subir a aplicação React em produção](#Utilizandoogh-pagesparasubiraaplicaoReactemproduo)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Quando precisamos de uma hospedagem para nossos sites ou aplicações web corremos logo para os serviços de Cloud, como AWS, Google Cloud, Heroku, Digital Ocean, Umbler ou para os serviços de hospedagem como HostGator da vida. Mas e quando é uma aplicação React, que não precisa de uma infraestrutura desse tipo?

Podemos utilizar o GitHub Pages, uma alternativa gratuita e de fácil utilização para hospedar nosso app.

Se você não conhece o GitHub Pages, confere essa apresentação rápida sobre o assunto:

<iframe src="https://www.youtube.com/embed/x7wRdbjCNVk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Pra utilizar o React com o GitHub Pages só é necessário ter um repositório, com o nome do nosso projeto, no GitHub e instalar um utilitário de linha de comando chamado **gh-pages**.



## <a name='Utilizandoogh-pagesparasubiraaplicaoReactemproduo'></a>Utilizando o gh-pages para subir a aplicação React em produção

Levando em consideração que já tenhamos um projeto React com o package.json e webpack configurado, bastaria somente instalar o gh-pages e configurar nosso build.

Para instalar o gh-pages, devemos executar:

```bash
npm install --save-dev gh-pages
```

No nosso package.json precisaremos de duas novas entradas na chave de scripts do NPM:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

O **predeploy** vai ser rodado automaticamente antes do **deploy** pelo utilitário gh-pages. Porém, para que isso funcione, é necessário que exista uma task chamada build, que compila o nosso projeto React. Pode ser outro nome, como você já deve ter definido no seu projeto, então seria só mudar o npm run para o nome que você colocou. O **dist**, na tarefa de deploy, deve ser o nome do diretório que você configurou como destino do build no webpack.

Não é necessário criar a branch gh-pages no GitHub, pois o utilitário fará isso por nós.

Como exemplo, criei um projeto simples para que o código possa ser analisado aqui: [React GH-Pages](https://github.com/woliveiras/react-gh-pages).

E podemos ver o React em produção, no GitHub Pages, aqui: [woliveiras/react-gh-pages](https://woliveiras.com.br/react-gh-pages/).

## <a name='Referncias'></a>Referências

- [NPM/gh-pages](https://www.npmjs.com/package/gh-pages)
- [Deploy create-react-app project to Github Pages](https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89)
