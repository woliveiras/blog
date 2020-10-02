---
title: Trabalhando com repositórios remotos - Git e GitHub
date: '2019-03-28'
image: "/images/posts/connected-world.jpg"
tags:
    - linux
    - devops
    - ferramentas
    - infraestrutura
    - produtividade
    - git
    - github
    - curso-fullstack
description: No dia a dia utilizamos servidores para armazenar nosso repositório Git. Neste artigo vamos aprender a criar repositórios remotos no GitHub e também criar repositórios locais e depois subir par ao servidor.
---
Nos artigos anteriores aprendemos a usar o [terminal](/posts/introdução-ao-terminal/) e [versionamento de código com Git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/), agora precisamos entender como funcionam e como utilizar repositórios remotos.

Este artigo é parte do material utilizado no [curso de fullstack com Node.js, bancos de dados, Express e React](/curso/do-zero-ao-fullstack-com-nodejs-bancos-de-dados-express-e-react/) do meu programa social do perifaCode, o [perifaCode.teach()](https://github.com/perifacode/teach). Estou disponibilizando ele para que qualquer outra pessoa também possa aprender gratuitamente pela internet e qualquer pessoa possa ensinar utilizando este conteúdo.

## O que são repositórios remotos

Como vimos anteriormente, criar um repositório localmente não torna possível que outras pessoas contribuam em nosso projeto. Para que seja possível que outras pessoas trabalhem no mesmo projeto, precisamos hospedar nosso repositório em uma hospedagem de repositórios Git.

Existem diversas plataformas de hospedagem de repositórios, como o Bitbucket e GitLab e a mais famosa é o [GitHub](http://github.com), que inclusive vamos aprender a utilizar agora.

O fluxo de trabalho é: nós criamos o repositório em nossa máquina e enviamos para a hospedagem ou criamos o repositório na hospedagem e baixamos em nossa máquina. 

Quando enviamos ou baixamos utilizando o Git, estamos na realidade enviando o histórico de alterações dos arquivos. Ao utilizar os comandos de enviar e receber, vamos perceber que o que está sendo baixado são os commits armazenados pelo Git.

## Criando um repositório remoto e baixando ele

Para acompanhar este conteúdo será necessário criar sua conta no GitHub, faça isso e depois venha continuar o tutorial.

Depois da conta criada e acessar a plataforma, podemos clicar no símbolo de mais (+) e clicar em novo repositório.

![Criando um novo repositório no GitHub]({{site.postsImagesPath}}new-repository.github.png)

Vamos chamar este repositório de **curriculo**, pois vamos criar um documento de texto que vai carregar nossas informações profissionais. Adicione também uma descrição ao repositório. Existem alguns campos que precisamos entender: o GitHub armazena repositórios **públicos** ou **privados**, nos públicos tudo o que fazemos é aberto e qualquer pessoa pode baixar ou contribuir com nosso repositório (com nossa autorização, claro). Também temos um checkbox que podemos marcar se quisermos inicializar o repositório com um arquivo README, este arquivo é o primeiro que devemos ler quando entramos em um repositório, nele temos todas as informações sobre o projeto e como rodar o mesmo. Temos a opção se queremos adicionar uma licença e um arquivo .gitignore, a licença é o que libera ou não o uso do nosso projeto e o .gitignore lista os arquivos que o Git não deve adicionar nunca em nossos commits.

![Tela de informações do nosso repositório]({{site.postsImagesPath}}create-new-repository-data.png)

Vamos inicializar este projeto com um README clicando na opção de inicialização com este documento.

![Opção de README escolhida]({{site.postsImagesPath}}inicializar-com-readme.png)

Agora podemos clicar no botão **Create repository** e o nosso novo projeto irá aparecer na tela.

Agora vem a parte legal que é baixar o nosso repositório remoto em nossa máquina. Para isso vamos clicar no botão **Clone or download**, que vai abrir uma caixa de informação informando se desejamos baixar o repositório via SSH ou via HTTPS.

![Caixa de informação de tipo de download]({{site.postsImagesPath}}clone-via-ssh-ou-https.png)

**Se estivermos em uma máquina de outro lugar que não seja a nossa, devemos utilizar a opção HTTPS**. Se estivermos em nossa máquina podemos seguir o tutorial do GitHub para criarmos nossa chave SSH, um código que deve ficar guardado em nosso computador (e não deve ser compartilhado com ninguém) e nos garante acesso ao repositório.

A grande diferença é que: via HTTPS, vamos precisar fazer o login toda vez que formos executar alguma ação de enviar ou receber do nosso repositório e via SSH não precisamos fazer isso, basta enviar ou baixar a vontade.

Para baixar um repositório remoto utilizamos o comando **git clone**.

A sintaxe para utilizar o git clone é: `git clone url_do_repositorio`.

A URL do repositório é encontrada naquela caixa de informação que aparece quando clicamos no clone or download. A diferença entre clonar e baixar é que quando clicamos em baixar, o GitHub envia um arquivo compactado com o nosso repositório e se clicarmos em clonar, baixamos também o **.git** e daí podemos trabalhar o histórico. Se você só baixar o repositório via download, não irá conseguir enviar novamente as alterações que você fizer.

Seguindo nosso exemplo, baixar o repositório curriculo, no meu caso, seria com o comando:

```bash
git clone https://github.com/woliveiras/curriculo.git
```

Se entrarmos no repositório agora, podemos ver o histórico do Git com o comando git log.

```bash
➜  workspace cd curriculo
➜  curriculo git:(master) git log
```

```bash
commit 7f9c042901d10be99b4538aa7c2b9773075141bb (HEAD -> master, origin/master, origin/HEAD)
Author: William Oliveira <w.oliveira542@gmail.com>
Date:   Wed Mar 27 18:28:48 2019 -0300

    Initial commit
(END)
```

## Enviando e recebendo alterações

Vamos imaginar que estamos trabalhando em equipe e alguém acabou de alterar algo no repositório e precisamos baixar essas alterações.

Fazemos isso com o comando **git pull**.

Entre no repositório curriculo no seu GitHub e clique no ícone de lápis, que é um botão de alteração, no arquivo README.md.

![Botão de alteração]({{site.postsImagesPath}}botao-de-alterar.png)

Adicione qualquer texto neste arquivo e depois clique em **Commit changes** logo abaixo da tela.

![Fechando um commit]({{site.postsImagesPath}}commit-changes.png)

Vamos agora baixar as alterações que estão somente no servidor.

```bash
➜  curriculo git:(master) git pull

remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/woliveiras/curriculo
   7f9c042..a503e13  master     -> origin/master
Updating 7f9c042..a503e13
Fast-forward
 README.md | 3 +++
 1 file changed, 3 insertions(+)
```

Se executarmos um git log, vemos o novo commit no nosso histórico.

```bash
git log
```

```bash
commit a503e13153eca22c7dd6b7519c8d117a0c78614e (HEAD -> master, origin/master, origin/HEAD)
Author: William Oliveira <w.oliveira542@gmail.com>
Date:   Wed Mar 27 18:59:23 2019 -0300

    Update README.md

commit 7f9c042901d10be99b4538aa7c2b9773075141bb
Author: William Oliveira <w.oliveira542@gmail.com>
Date:   Wed Mar 27 18:28:48 2019 -0300

    Initial commit
(END)
```

Isso se repete durante todo o nosso fluxo de trabalho. As pessoas irão enviar alterações e nós baixamos em seguida. Nós enviamos alterações e as pessoas baixam em seguida.

Vamos agora fazer uma alteração local e enviar para o nosso repositório remoto.

Execute o comando echo para adicionar uma nova linha no arquivo README.md.

```bash
➜  curriculo git:(master) echo "nova linha" >> README.md
```

Vamos agora fechar um commit e enviar para o servidor.

```bash
➜  curriculo git:(master) ✗ git add README.md
➜  curriculo git:(master) ✗ git commit -m "Add nova linha"
[master 063739d] Add nova linha
 1 file changed, 1 insertion(+)
```

Como o novo commit criado, podemos rodar um git log para conferir como estão as coisas.

```bash
git log
```

```bash
commit 063739d035859c24d32899ae2e175a779efc199e (HEAD -> master)
Author: William Oliveira <william.oliveira@loggi.com>
Date:   Wed Mar 27 19:04:21 2019 -0300

    Add nova linha

commit a503e13153eca22c7dd6b7519c8d117a0c78614e (origin/master, origin/HEAD)
Author: William Oliveira <w.oliveira542@gmail.com>
Date:   Wed Mar 27 18:59:23 2019 -0300

    Update README.md

commit 7f9c042901d10be99b4538aa7c2b9773075141bb
Author: William Oliveira <w.oliveira542@gmail.com>
Date:   Wed Mar 27 18:28:48 2019 -0300

    Initial commit
(END)
```

Agora sim! Vamos enviar nossas alterações. Para enviar nossas alterações locais para o nosso repositório remoto, utilizamos o comando **git push**.

Execute então:

```bash
git push
```

Será necessário adicionar nosso usuário e senha, afinal baixamos utilizando o HTTPS. Faça isso e o retorno do Git será algo como:

```bash
➜  curriculo git:(master) git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 287 bytes | 287.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:woliveiras/curriculo.git
   a503e13..063739d  master -> master
```

Ele informa que nosso commit foi enviado para a branch master. Vamos conferir isso na tela do GitHub. Basta atualizar a página do GitHub e verificar se aparece lá o texto "nova linha".

![Nova linha aparecendo no GitHub]({{site.postsImagesPath}}nova-linha-readme.png)

## Adicionando um servidor a um repositório local

Aprendemos baixar um repositório que criamos diretamente em um servidor, porém, no artigo de [introdução ao git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/) aprendemos a criar o repositório localmente e não enviamos para nenhum lugar. Podemos agora criar um repositório no GitHub e enviar nosso histórico para lá.

Primeiro vamos acessar o repositório **workspace**, procure onde criou o repositório com o comando find, como aprendemos no artigo de [introdução ao terminal](/posts/introdução-ao-terminal/).

No meu caso aparece assim:

```bash
➜  workspace git:(master) find ~/ -name "workspace"
/home/william/workspace/
```

Sabendo disso, podemos ir para a pasta com o comando cd:

```bash
cd /home/william/workspace/
```

Podemos verificar o repositório remoto do Git com o comando **git remote -v**. No nosso caso não teremos nenhum retorno, pois nosso repositório workspace ainda não possui um servidor remoto.

```bash
➜  workspace git:(master) git remote -v
➜  workspace git:(master)
```

Vamos criar o repositório no GitHub, como aprendido anteriormente, porém sem inicializar com um README.md, pois vamos criar este artigo depois. Só queremos um local para enviar nosso histórico.

![Criando o repositório workspace vazio]({{site.postsImagesPath}}criando-repositorio-vazio.png)

Repare que, quando criamos um repositório vazio, o GitHub já nos mostra as opções disponíveis, como começar criando um README ou configurar um repositório existente.

![Opções do GitHub]({{site.postsImagesPath}}opcoes-github.png)

Vamos rodar os comandos que ele nos apresenta na segunda opção "…or push an existing repository from the command line", pois o comando para adicionar um link remoto é o **git remote add origin link**.

```bash
➜  workspace git:(master) git remote add origin git@github.com:woliveiras/workspace.git
```

Se rodarmos o comando git remote -v, novamente, vemos o link do repositório remoto.

```bash
➜  workspace git:(master) git remote -v
origin	git@github.com:woliveiras/workspace.git (fetch)
origin	git@github.com:woliveiras/workspace.git (push)
```

Podemos então enviar nossas alterações com o comando git push. Mas, se você somente rodar o git push, neste primeiro momento, receberá uma mensagem como essa:

```bash
➜  workspace git:(master) git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
```

Ele diz que nossa branch não possui um candidato remoto para receber as alterações. Isso quer dizer que, no servidor, não temos uma branch esperando nossas alterações — lembra que criamos ele vazio?

Para configurar isso, vamos precisar rodar o comando **git push --set-upstream origin master**, como o próprio Git nos ensina em seu retorno.

```bash
➜  workspace git:(master) git push --set-upstream origin master

Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 268 bytes | 268.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:woliveiras/workspace.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

E pronto! Agora temos o nosso repositório configurado, nossa branch existe local e remotamente e se atualizarmos a tela do GitHub neste momento, veremos nossos arquivos lá.

![Novo repositório configurado e com os arquivos]({{site.postsImagesPath}}novo-repo-configurado.png)

Agora, toda vez que precisarmos enviar nossas alterações para o servidor remoto, basta rodar um git push.

## Conclusão

Aprendemos a criar repositórios remotos e baixar eles, criar repositórios locais e enviar para o GitHub e mais alguns comandos do Git, como git remote, git pull e push. Com o conteúdo até aqui temos tudo o que precisamos saber para trabalhar via terminal e com o Git + GitHub em nosso dia a dia e na continuação da nossa série de fullstack do zero.

Continue acompanhando e se quiser receber os artigos na semana em que eles saírem, inscreva-se na [newsletter](http://bit.ly/cartinha-do-will) ou me siga no [Twitter](https://twitter.com/_uillaz).

Se você gosta do meu conteúdo, não esqueça de contribuir via Catarse: [Catarse: William Oliveira](https://catarse.me/o-universo-da-programacao).
