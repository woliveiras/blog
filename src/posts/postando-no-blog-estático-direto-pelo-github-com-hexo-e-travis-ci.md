---
title: Postando no blog estático direto pelo GitHub com Hexo e Travis CI
tags:
  - hexo
  - github
  - jamstack
date: '2016-02-06'
description: Utilizando o Travis CI para fazer deploy de blogs com Hexo. Como fazer Deploy com Travis CI e GitHub Pages.
---
Confesso que fiquei tentado a migrar para o [Jekyll (Ruby)](https://jekyllrb.com/) depois que um [amigo](https://jotateles.com.br/) me mostrou que da para postar no blog direto do GitHub sem ter o Jekyll instalado na máquina. Porém eu não desisti do meu queridinho, o [Hexo (feito com Node <3)](https://hexo.io/).

*Se você não conhece o Hexo, da uma olhada nesse artigo: [Migrando de WordPress para Hexo](/posts/Migrando-de-Wordpress-para-Hexo/).*

Andei pesquisando sobre como postar no Blog direto pelo GitHub Pages através de outras plataformas e cheguei até [esse artigo](https://df.python.org.br/blog/github-pages-com-pelican-e-travis-ci/) do [Humberto Rocha](https://df.python.org.br/blog/autores/humberto-rocha/) ensinando a usar o Travis CI para rodar o Build do projeto com o **Pelican**. Quando vi isso logo imaginei que dava para fazer o mesmo com Hexo e poder escrever/revisar direto pelo GitHub. - E dá!

## Configurando o Travis CI repositório do seu Blog

Acesse o site do [Travis CI](https://travis-ci.org/) e habilite para o repositório do seu Blog clicando em **Add new repository**. - Aquele **+** do lado de **My repositories**

![Add new repository](https://s13.postimg.org/nbewg0mon/Add_new_repository.png)

Localize o repositório e ative o Travis CI.

![Ativando o Travis no GitHub Pages](https://s14.postimg.org/rkepps2ch/Ativando_o_Travis_CI_no_Git_Hub_Pages.png)

Agora acesse as configurações desse repositório clicando na **engrenagem ao lado do nome** e desabilite a opção de **Build pull requests** para que o seu Blog não seja atualizado se alguém abrir um *Pull Request* e habilite o **Build only if .travis.yml is present** para que a branch com o travis.yml seja a única a gerar atualizações.

![Configurações de Build](https://s29.postimg.org/osd8wkcdz/configuracoes_de_build.png)

## Criando um token para autorizar o Travis CI a publicar no GitHub

Não utilizaremos a chave SSH para o Travis poder acessar o repositório, mas um Token gerado via GitHub mesmo. Para isso acesse [esse link](https://github.com/settings/tokens) e crie um token. No ultimo passo da criação irá aparecer o número que você deve salvar. Anote esse número. 

Agora volte a tela de configuração do repositório no Travis (aquela engrenagem do lado do nome do repositório) e configure a opção **Environment Variables** com o seguinte:

Em *name* deixe: **DEPLOY_REPO**.

E em *value* coloque: https://**O TOKEN DO GITHUB**@github.com/**USUÁRIO NO GITHUB**/**REPOSITORIO DO BLOG**.git

Isso fará com que exista uma variável de ambiente no sistema operacional chamada DEPLOY_REPO que utilizaremos para o Build com o token do GitHub. Isso vai garantir a segurança do repositório para que outras pessoas não possam gerar o build.

O nome dessa variável pode ser diferente, de acordo com o que achar mais semantico ou melhor, basta alterar as próximas confiurações para o nome que você colocou.



## Configuração do .travis.yml para o Blog

No seu projeto, adicione o arquivo **.travis.yml** com as seguintes configurações, substituindo onde é necessário:

```ruby
language: node_js

# Adicione a branch onde está a instalação do Hexo
branches:
  only:
  - BRANCH

before_install:
- npm install -g hexo

install:
- npm install

# Configure seu nome de usuário e e-mail
before_script:
- git config --global user.name 'SEU NOME DE USUARIO'
- git config --global user.email 'SEU EMAIL'


script:
- hexo generate

# Configure a Branch a ser feito o deploy
after_success:
- mkdir .deploy
- cd .deploy
- git clone --depth 1 --branch BRANCH --single-branch $DEPLOY_REPO . || (git init && git remote add -t BRANCH origin $DEPLOY_REPO)
- rm -rf ./*
- cp -r ../public/* .
- git add -A .
- git commit -m 'Site updated'
- git branch -m BRANCH
- git push -q -u origin BRANCH
```

Recomendo que você use um arquivo [.nvmrc](https://woliveiras.com.br/posts/utilizando-versoes-antigas-do-nodejs/) com a versão do Node em que está rodando o Hexo. O Travis irá reconhecer isso automaticamente e vai setar a versão escolhida na hora do build. Isso vai previnir alguma atualização do Node no servidor do Travis que quebre o build.

Agora configure o Hexo para fazer o deploy com seu usuário via Token com a seguinte linha no arquivo **_config.yml** do seu Blog, substituindo onde for necessário:

```ruby
deploy:
  type: git
  repo: git@github.com:USUARIO/REPOSITORIO.git
  branch: BRANCH
```

Para que o deploy para o GitHub aconteça, será necessário instalar, caso ainda não tenha feito, o plugin que faz o deploy com o seguinte comando:

```bash
npm install hexo-deployer-git --save-dev
```

Isso vai atualizar seu **package.json** com a dependência que será instalada no servidor de integração do Travis durante a execução do build.

## Salvando tudo e subindo para o GitHub

Você vai salvar os arquivos:

* .travis.yml
* _config.yml
* packages.json

Portanto execute:

```bash
git add .travis.yml _config.yml packages.json
git commit -m “Add travis integration”
git push
```

Agora observe no site do Travis que ele ficará configurado para fazer o build do projeto.

![Travis configurado](https://s7.postimg.org/exqnlxcgr/travis_configurado.png)

Esse post foi para produção via deploy com o Travis! ;D

Caso ainda fique dúvidas, de uma olhada no [meu repositório](https://github.com/woliveiras/woliveiras.github.io/tree/development) ou deixe um comentário. 

Compartilhe a palavra.

## Referência

* https://github.com/jkeylu/deploy-hexo-site-by-travis-ci/blob/master/_travis.yml
* https://df.python.org.br/blog/github-pages-com-pelican-e-travis-ci/
