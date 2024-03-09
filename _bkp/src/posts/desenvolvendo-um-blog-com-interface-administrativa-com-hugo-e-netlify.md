---
title: Desenvolvendo um blog com interface administrativa com Hugo e Netlify
date: '2019-07-09'
socialImage: "/images/posts/andrew-seaman--m88z7ily-w-unsplash.jpg"
tags:
    - golang
    - jamstack
    - hugo
description: Vamos desenvolver um blog em JAMStack com interface administrativa e login via OAuth com Hugo (golang) e Netlify
---
O Hugo é um gerador de sites estáticos, como o [Hexo](/posts/Migrando-de-Wordpress-para-Hexo/) ou [Jekyll](/posts/migrando-de-hexo-para-jekyll-facilmente-com-dunders/). Ele é desenvolvido em Golang, tem um tempo de build muito baixo e uma excelente experiência de desenvolvimento.

Fiz um teste gerando um build dos meus artigos (143 arquivos markdown + 266 imagens e várias linhas de Sass) e o processo demorou somente 465 **ms**! Esta realmente é uma ferramenta muito rápida.

```bash
➜  sitezaum git:(master) ✗ hugo

                   | EN   
+------------------+-----+
  Pages            | 349  
  Paginator pages  |  72  
  Non-page files   |   0  
  Static files     | 272  
  Processed images |   0  
  Aliases          | 103  
  Sitemaps         |   1  
  Cleaned          |   0  

Total in 465 ms
```

Neste artigo vamos aprender a utilizar o Hugo com GitHub, configurar o Netlify como CDN e Netlify-CMS para termos uma interface administrativa para postagens e edições dos textos publicados no nosso blog.

<!-- vscode-markdown-toc -->
* [Instalando o Hugo](#InstalandooHugo)
* [Criando nosso blog](#Criandonossoblog)
* [Instalando um tema](#Instalandoumtema)
* [Preparando o repositório no GitHub](#PreparandoorepositrionoGitHub)
* [Criando nosso primeiro artigo](#Criandonossoprimeiroartigo)
* [Configurando o Netlify](#ConfigurandooNetlify)
* [Configurando a interface administrativa](#Configurandoainterfaceadministrativa)
* [Configurando a autenticação via Netlify](#ConfigurandoaautenticaoviaNetlify)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='InstalandooHugo'></a>Instalando o Hugo

A instalação do Hugo varia por sistema operacional, o ideal é que você faça a instalação seguindo a documentação oficial da ferramenta neste link: 

- [Hugo - Installing](https://gohugo.io/getting-started/installing/)

Com o Hugo instalado, rode o comando **hugo version** para confirmar se deu tudo certo. A versão instalada deverá ser listada no seu terminal.

```bash
➜  sitezaum git:(master) ✗ hugo version
Hugo Static Site Generator v0.55.6/extended linux/amd64 BuildDate: 2019-05-18T11:36:21Z
```

## <a name='Criandonossoblog'></a>Criando nosso blog

Agora vamos a criação da estrutura do nosso blog.

Execute o comando:

```bash
hugo new site nome_do_blog
cd nome_do_blog
```

Será necessário possuir um repositório Git para instalarmos temas em nosso blog, então execute o **git init**.

## <a name='Instalandoumtema'></a>Instalando um tema

Inicialmente não vamos criar um tema do zero. Vamos procurar um tema maneiro no site [themes.gohugo.io](https://themes.gohugo.io/) e procurar algum tema bem bonito.

A instalação de um tema acontece via submodules do Git.

O comando para instalação é o seguinte:

```bash
git submodule add tema.git themes/tema
```

Troque **tema.git** e **/tema** para o nome do tema que você gostou.

Eu gostei desse aqui [tale-hugo](https://themes.gohugo.io/tale-hugo/) e por isso a minha instalação acontece com este comando:

```bash
git submodule add https://github.com/EmielH/tale-hugo.git themes/tale-hugo
```

Agora temos que editar o arquivo **config.toml** adicionando o nome do nosso tema. Execute o comando abaixo, trocando o nome do tema para o que você baixou.

```bash
echo 'theme = "nome_do_tema"' >> config.toml
```

Execute o comando **hugo server -D** e veja a magia acontecer. 

## <a name='PreparandoorepositrionoGitHub'></a>Preparando o repositório no GitHub

Vamos criar um repositório no GitHub, mas crie em branco, sem README.md, .gitignore ou arquivo de licença.

![Criação do repositório](/images/posts/criacao-de-repo.png)

Crie um arquivo .gitignore com o conteúdo:

```
resources
public
```

Faça o seu primeiro commit no repositório:

```bash
git add .
git commit -m "Start site"
```

Agora configure o repositório local apontando para este novo repositório remoto com os comandos informados na sessão “…or push an existing repository from the command line” na página do seu repositório no GitHub.

## <a name='Criandonossoprimeiroartigo'></a>Criando nosso primeiro artigo

Assim como nos outros geradores de sites estáticos, o Hugo possui um comando para a criação de posts. 

A sintaxe do comando é:

```bash
hugo new pasta/nome_do_artigo.md
```

Precisamos sempre especificar o diretório, nome do arquivo e extensão.

Execute o comando:

```bash
hugo new posts/meu-primeiro-post.md
```

Será criado um arquivo com o conteúdo:

```
---
title: "Meu Primeiro Post"
date: data de criação
draft: true
---
```

Execute o comando para subir o servidor local **hugo server -D** e acesse o endereço para visualização do conteúdo.

Faça um commit e envie para o GitHub.

```bash
➜  sitezaum git:(master) ✗ git add .
➜  sitezaum git:(master) ✗ git commit -m "Add post"
➜  sitezaum git:(master) ✗ git push
```

Com isso já podemos fazer nosso primeiro deploy no Netlify.

## <a name='ConfigurandooNetlify'></a>Configurando o Netlify

Acesse [netlify.com](https://netlify.com) e crie sua conta.

Clique em “New site from Git”.

![Botão de criação de site usando o GitHub](/images/posts/netlify-new-site-from-git.png)

Na interface de criação do site, clique no GitHub e vamos a listagem de repositórios.

![Criação do novo site usando o GitHub](/images/posts/netlify-create-new-site.png)

Caso o repositório não esteja aparecendo na listagem, clique em “Configure the Netlify app on GitHub”.

![Listagem de repositórios](/images/posts/netlify-create-new-site-list-repos.png)

Na próxima tela, o Netlify já reconhece qual o gerador de site estático e adiciona as configurações automaticamente para nós. Deixe como está e clique em “Deploy site”.

![Botão de deploy](/images/posts/netlify-deploy-site-button.png)

Aguarde o deploy.

![Aguardando o deploy](/images/posts/netlify-awaiting-deploy.png)

Ao finalizar o deploy, podemos clicar no botão “Preview deploy” dentro da interface de detalhes do último build.

![Deploy finalizado](/images/posts/netlify-finished-deploy.png)

O Netlify nos envia para o endereço do nosso site que ele mesmo criou. Podemos adicionar um domínio pessoal depois.

Inicialmente temos tudo pronto!

![Site em produção](/images/posts/netlify-site-in-production.png)

O nosso artigo não está em produção. Isso porque nós não configuramos para que fosse publicado. Podemos fazer isso diretamente no arquivo do post ou na interface administrativa que vamos adicionar agora.

## <a name='Configurandoainterfaceadministrativa'></a>Configurando a interface administrativa

Precisamos criar os arquivos para a interface administrativa no diretório **static** no nosso projeto.

Ao invés de criar cada um, você pode executar o comando para adicionar a interface que eu estou utilizando:

```bash
git submodule add https://github.com/woliveiras/netlify-cms-base.git static/admin
```

Suba o conteúdo para o seu repositório no GitHub e vamos ao Netlify configurar o login.

## <a name='ConfigurandoaautenticaoviaNetlify'></a>Configurando a autenticação via Netlify

Acesse a o Netlify e clique em **Identity**.

Clique em **Enable identity** para ativar o serviço de autenticação.

![Ativando a autenticação via Netlify](/images/posts/netlify-enable-identity.png)

Acesse a aba de configurações (settings and usage) de Identity.

![Botão de configurações do Netlify Identity](/images/posts/netlify-enable-identity-settings.png)

Vá até **External providers** e selecione os serviços de autenticação que você deseja ativar para a interface administrativa.

![External providers](/images/posts/netlify-external-providers.png)

Você pode utilizar configurações avançadas ou a padrão. Deixe como está e clique em Enable.

No exemplo abaixo estamos ativando o GitHub como método de autenticação.

![Ativando o GitHub como método de autenticação](/images/posts/netlify-external-providers-enable-github.png)

Se for utilizar o GitHub, desça até a sessão **Services** e clique em **Enable Git gateway**.

![Git gateway](/images/posts/netlify-services-git-gateway.png)

Agora você pode acessar o link do seu site, provido pelo Netlify e adicionar um **/admin** no final.

![Tela de login](/images/posts/netlify-login-interface.png)

Clique em **Login with Netlify Identity** e pronto! Temos uma interface administrativa e podemos utilizar para escrever, editar e/ou publicar nossos artigos.

![Tela administrativa](/images/posts/netlify-cms-interface.png)

## <a name='Concluso'></a>Conclusão

Com esse tutorial, temos tudo o que precisamos para colocar um blog com Hugo, Netlify e Netlify-CMS em produção, agora você deve explorar a interface de gerenciamento dos artigos e o Netlify, pois temos coisas legais para aprender a utilizar por ali.

Neste endereço temos o blog que eu coloquei no ar durante a escrita deste tutorial: [blissful-johnson-25c49f.netlify.com](https://blissful-johnson-25c49f.netlify.com/).

E aqui temos a interface administrativa do site: [blissful-johnson-25c49f.netlify.com/admin](https://blissful-johnson-25c49f.netlify.com/admin).

Se quiser analisar o repositório do tutorial, se encontra aqui: [woliveiras/sitezinmonstro](https://github.com/woliveiras/sitezinmonstro).

**Referências**

- [woliveiras/netlify-cms-base](https://github.com/woliveiras/netlify-cms-base)
- [ragasirtahk.tk/Setting up Netlify CMS on Hugo](https://www.ragasirtahk.tk/2018/01/setting-up-netlify-cms-on-hugo/)
- [Netlify/docs](https://www.netlify.com/docs/)

[Photo by Andrew Seaman on Unsplash](https://unsplash.com/photos/-m88z7ily-w)