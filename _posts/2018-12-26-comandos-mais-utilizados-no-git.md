---
layout: post
title: Comandos mais utilizados no Git
date: 2018-12-26 16:23 -0200
image: "/images/posts/sirma-krusteva-3172-unsplash.jpg"
categories:
    - git
    - dicas
    - ferramentas
    - produtividade
tags:
    - git
    - dicas
    - ferramentas
    - produtividade
description: "Comandos mais utilizados durante o Workflow com Git"
---

Assim como montei um post para eu relembrar os [comandos mais utilizados no Docker](/posts/comandos-mais-utilizados-no-docker/), montei esse texto com o intuito de termos um lugar para olhar quando esquecermos de algum comando que utilizamos diariamente no Git.

Então vamos aos comandos mais utilizados no Git!

## Sumário

Caso você queira pular para algum comando específico.

<!-- vscode-markdown-toc -->
* [Verificando as configurações locais](#Verificandoasconfiguraeslocais)
	* [Para encontrar o nome de usuário](#Paraencontraronomedeusurio)
	* [Para encontrar o email](#Paraencontraroemail)
* [Alterando as configurações locais](#Alterandoasconfiguraeslocais)
	* [Alterar o nome de usuário](#Alteraronomedeusurio)
	* [Alterar o email](#Alteraroemail)
	* [Alterando o editor de textos usados no commit e diffs](#Alterandooeditordetextosusadosnocommitediffs)
* [Iniciar um repositório](#Iniciarumrepositrio)
* [Ignorando arquivos](#Ignorandoarquivos)
* ["Baixar" um repositório](#Baixarumrepositrio)
* [Baixar as últimas alterações do servidor](#Baixarasltimasalteraesdoservidor)
* [Listando o caminho do servidor](#Listandoocaminhodoservidor)
* [Adicionando o caminho do servidor](#Adicionandoocaminhodoservidor)
* [Alterando o servidor](#Alterandooservidor)
* [Adicionando alterações](#Adicionandoalteraes)
	* [Adicionando um arquivo](#Adicionandoumarquivo)
	* [Adicionando tudo de uma vez](#Adicionandotudodeumavez)
* [Removendo arquivos do index](#Removendoarquivosdoindex)
* [Salvando as alterações](#Salvandoasalteraes)
* [Verificando o que foi alterado](#Verificandooquefoialterado)
* [Trabalhando com branches](#Trabalhandocombranches)
	* [Listando as branches existentes](#Listandoasbranchesexistentes)
	* [Criando uma nova branch](#Criandoumanovabranch)
	* [Criando uma nova branch e já trocando para ela](#Criandoumanovabranchejtrocandoparaela)
	* [Deletando uma branch](#Deletandoumabranch)
	* [Trocando de branch](#Trocandodebranch)
	* [Enviando uma branch para o servidor](#Enviandoumabranchparaoservidor)
	* [Deletando uma branch remota](#Deletandoumabranchremota)
	* [Juntando branches](#Juntandobranches)
* [Enviando as alterações para o servidor](#Enviandoasalteraesparaoservidor)
* [Apagando, movendo ou renomeando arquivos ou pastas sem estragar nosso histórico Git](#ApagandomovendoourenomeandoarquivosoupastassemestragarnossohistricoGit)
	* [Deletando arquivo ou pasta com Git](#DeletandoarquivooupastacomGit)
	* [Movendo ou renomeando arquivo ou pasta com Git](#MovendoourenomeandoarquivooupastacomGit)
* [Revertendo alterações](#Revertendoalteraes)
	* [Desfazendo do stage](#Desfazendodostage)
	* [Desfazendo alterações em um arquivo para o último commit](#Desfazendoalteraesemumarquivoparaoltimocommit)
	* [Desfazendo tudo para o último commit](#Desfazendotudoparaoltimocommit)
	* [Desfazendo uma alteração, mas colocando ela em stage](#Desfazendoumaalteraomascolocandoelaemstage)
	* [Desfazendo para o último commit sem colocar as alterações em stage](#Desfazendoparaoltimocommitsemcolocarasalteraesemstage)
	* [Desfazendo para um commit específico](#Desfazendoparaumcommitespecfico)
	* [Desfazendo o último push](#Desfazendooltimopush)
* [Analisando o histórico (log)](#Analisandoohistricolog)
	* [Observando o histórico com um número certo de alterações](#Observandoohistricocomumnmerocertodealteraes)
	* [Observando o log de maneira resumida](#Observandoologdemaneiraresumida)
	* [Deixando o log ainda mais bonito](#Deixandoologaindamaisbonito)
	* [Exibindo o histórico por pessoa](#Exibindoohistricoporpessoa)
* [Utilizando tags](#Utilizandotags)
	* [Criar uma tag Git](#CriarumatagGit)
	* [Listando as tags Git](#ListandoastagsGit)
	* [Criar uma tag com mensagem (anotada)](#Criarumatagcommensagemanotada)
	* [Criar uma tag a partir de um commit](#Criarumatagapartirdeumcommit)
	* [Criando a tag no servidor](#Criandoatagnoservidor)
* [Utilizando stash](#Utilizandostash)
	* [Salvar tudo no stash](#Salvartudonostash)
	* [Salvando no stash com descrição](#Salvandonostashcomdescrio)
	* [Listando o que existe em stash](#Listandooqueexisteemstash)
	* [Revertendo para o stash e removendo da lista](#Revertendoparaostasheremovendodalista)
	* [Revertendo para o stash](#Revertendoparaostash)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% include post_wallpaper.html %}

## <a name='Verificandoasconfiguraeslocais'></a>Verificando as configurações locais

Quando trocamos de máquina podemos fazer um commit com um usuário ou email diferente, e isso pode estragar nosso histórico no Git.

Para verificar as configurações locais podemos usar o comando:

```shell
git config --list
```

Mas os mais comuns são para verificarmos o nome de usuário, email, editor e merge tool

### <a name='Paraencontraronomedeusurio'></a>Para encontrar o nome de usuário

```shell
git config --global user.name
```

### <a name='Paraencontraroemail'></a>Para encontrar o email

```shell
git config --global user.email
```

## <a name='Alterandoasconfiguraeslocais'></a>Alterando as configurações locais

Para alterar as configurações de usuário e email locais, basta rodarmos os comandos acima com o novo valor passado como parâmetro entre aspas.

### <a name='Alteraronomedeusurio'></a>Alterar o nome de usuário

```shell
git config --global user.name "nome do usuário"
```

### <a name='Alteraroemail'></a>Alterar o email

```shell
git config --global user.email "email do usuário"
```

### <a name='Alterandooeditordetextosusadosnocommitediffs'></a>Alterando o editor de textos usados no commit e diffs

Quando fazemos um commit, devemos deixar uma mensagem, para isso podemos usar um editor de textos que facilite nossa vida.

Eu costumo utilizar o Vim, por isso rodaria:

```shell
git config --global core.editor vim
```

Também utilizo o Vim para diff/merges, então seria:

```shell
git config --global merge.tool vimdiff
```

## <a name='Iniciarumrepositrio'></a>Iniciar um repositório

Na pasta que será o novo repositório Git, execute o comando:

```shell
git init
```

## <a name='Ignorandoarquivos'></a>Ignorando arquivos

É extremamente normal ignorar arquivos no Git para não salvarmos arquivos de configuração dos nossos editores, arquivos temporários do nosso sistema operacional, dependências de repositório, etc.

Para isso criamos um arquivo chamado `.gitignore` e adicionamos os nomes dos arquivos nele.

Exemplo: [gitignore para Nodejs](https://www.gitignore.io/api/node).

## <a name='Baixarumrepositrio'></a>"Baixar" um repositório

Para baixar um repositório do GitHub, Bitbucket, GitLab ou qualquer que seja o servidor do nosso projeto, devemos rodar o comando `git clone` com o link do repositório.

```shell
git clone link
```

Exemplo:

Se eu quisesse baixar o repositório deste blog.

```shell
git clone git@github.com:woliveiras/woliveiras.github.io.git
```

## <a name='Baixarasltimasalteraesdoservidor'></a>Baixar as últimas alterações do servidor

Quando algo estiver diferente no nosso repositório remoto (no servidor), podemos baixar para a nossa máquina com o comando `pull`.

```shell
git pull
```

## <a name='Listandoocaminhodoservidor'></a>Listando o caminho do servidor

Para sabermos para onde estão sendo enviadas nossas alterações ou de onde estamos baixando as coisas, rodamos:

```shell
git remote -v
```

Exemplo de `git remote -v` no repositório deste blog:

```shell
origin git@github.com:woliveiras/woliveiras.github.io.git (fetch)
origin git@github.com:woliveiras/woliveiras.github.io.git (push)
```

## <a name='Adicionandoocaminhodoservidor'></a>Adicionando o caminho do servidor

Caso tenhamos criado o repositório localmente antes de criar no servidor, podemos adicionar o caminho com o comando `set-url`.

```shell
git remote set-url origin git://url
```

Exemplo:

```shell
git remote set-url origin git@github.com:woliveiras/woliveiras.github.io.git
```

## <a name='Alterandooservidor'></a>Alterando o servidor

Para alterar o servidor onde hospedamos nosso repositório, usamos o mesmo comando `set-url`.

Exemplo:

```shell
git remote set-url origin git@github.com:woliveiras/woliveiras.github.io.git
```

## <a name='Adicionandoalteraes'></a>Adicionando alterações

Quando alteramos algo, devemos rodar o comando `git add` para adicionar ao index e depois fechar um commit.

### <a name='Adicionandoumarquivo'></a>Adicionando um arquivo

```shell
git add nome_do_arquivo
```

### <a name='Adicionandotudodeumavez'></a>Adicionando tudo de uma vez

```shell
git add .
```

OBS: Cuidado com esse comando, pois você pode adicionar algo que não queria.

Também podemos rodar `git commit` com o parâmetro `-am`, onde adicionamos tudo de uma vez e já deixamos uma mensagem para o commit.

Exemplo:

```shell
git commit -am "add tudo"
```

## <a name='Removendoarquivosdoindex'></a>Removendo arquivos do index

Para remover um arquivo do stage rodamos o comando `reset`.

```shell
git reset nome_do_arquivo
```

Para remover tudo podemos fazer:

```shell
git reset HEAD .
```

## <a name='Salvandoasalteraes'></a>Salvando as alterações

Quando adicionamos com o `git add` ainda não estamos persistindo os dados no histórico do Git, mas adicionando a uma área temporária onde podemos ficar levando e trazendo alterações até garantirmos que algo realmente deve ser salvo, então rodamos o `git commit`.

Para fazer um commit, precisamos adicionar uma mensagem ao pacote, então rodamos com o parâmetro `-m "mensagem"`.

Depois de ter adicionado as alterações com `git add`, rodamos:

```shell
git commit -m "mensagem"
```

## <a name='Verificandooquefoialterado'></a>Verificando o que foi alterado

Para sabermos se tem algo que foi modificado em nossa branch, rodamos o comando `git status`.

```shell
git status
```

![Imagem do retorno do comando git status]({{site.post_images}}git-status.png)

Será retornado uma lista de itens que foram alterados. Para saber o que exatamente aconteceu rodamos o comando `git diff`.

```shell
git diff
```

Será retornada uma tela com o que foi adicionado escrito com um **+**.

![Imagem do retorno do comando git diff]({{site.post_images}}git-diff.png)

O que foi removido aparece com um **-**.

![Imagem do retorno do comando git diff no arquivo]({{site.post_images}}git-diff-no-arquivo.png)

Caso tenhamos mais de um arquivo alterados por vez, podemos analisar todo o histórico com `git diff` ou observar somente um arquivo com `git diff nome_do_arquivo`.

## <a name='Trabalhandocombranches'></a>Trabalhando com branches

### <a name='Listandoasbranchesexistentes'></a>Listando as branches existentes

```shell
git branch
```

### <a name='Criandoumanovabranch'></a>Criando uma nova branch

Podemos rodar o comando `git branch` ou `git checkout`, conforme os exemplos:

```shell
git branch nome
```

### <a name='Criandoumanovabranchejtrocandoparaela'></a>Criando uma nova branch e já trocando para ela

```shell
git checkout -b nome_da_nova_branch
```

### <a name='Deletandoumabranch'></a>Deletando uma branch

```shell
git branch -d nome
```

### <a name='Trocandodebranch'></a>Trocando de branch

```shell
git checkout nome_da_branch_existente
```

### <a name='Enviandoumabranchparaoservidor'></a>Enviando uma branch para o servidor

Caso tenhamos criado uma branch em nossa máquina, precisamos enviar ela para o servidor com o comando `push`, explicado mais abaixo neste texto, e passar alguns parâmetros que são o `origin` e nome da branch.

```shell
git push origin nome_da_branch
```

Podemos mandar todas as novas branches locais para o servidor rodando:

```shell
git push --all origin
```

### <a name='Deletandoumabranchremota'></a>Deletando uma branch remota

Para deletar uma branch do servidor, rodamos o comando:

```shell
git push origin :nome_da_branch
```

### <a name='Juntandobranches'></a>Juntando branches

Quando trabalhamos com branches, mais cedo ou mais tarde, vamos precisar juntar as nossas alterações com a branch master.

Para isso usamos o comando `merge`.

Exemplo:

Imagina que vamos fazer um merge da branch `nome_branch` na `master`.

```shell
git checkout master
git merge nome_branch
```

## <a name='Enviandoasalteraesparaoservidor'></a>Enviando as alterações para o servidor

Depois que finalizamos nossas alterações, fechamos nossos commits, então devemos enviar os commits para o servidor. Para isso rodamos o comando:

```shell
git push origin master
```

Caso estejamos em uma branch, devemos então rodar os comandos da sessão acima "Enviando uma branch para o servidor".

## <a name='ApagandomovendoourenomeandoarquivosoupastassemestragarnossohistricoGit'></a>Apagando, movendo ou renomeando arquivos ou pastas sem estragar nosso histórico Git

Quando deletamos algum arquivo, movemos de pastas, o Git fica com um histórico de deleção de arquivo e adição de outro.

Para que isso não aconteça, existem comandos do Git que salvam nossas vidas, o `git rm`, para deletar, e `git mv`, para movermos coisas.

### <a name='DeletandoarquivooupastacomGit'></a>Deletando arquivo ou pasta com Git

```shell
git rm nome_do_arquivo_ou_pasta
```

Lembrando que, para remover pastas, é sempre necessário que ela esteja vazia ou que executemos o comando `rm` com o parâmetro `-r` para que a deleção seja recursiva.

```shell
git rm -r pasta
```

### <a name='MovendoourenomeandoarquivooupastacomGit'></a>Movendo ou renomeando arquivo ou pasta com Git

```shell
git mv nome_do_arquivo_ou_pasta destino
```

## <a name='Revertendoalteraes'></a>Revertendo alterações

Existem diversas maneiras de desfazer coisas com o Git.

### <a name='Desfazendodostage'></a>Desfazendo do stage

```shell
git reset nome_do_arquivo
```

Para desfazer tudo podemos fazer:

```shell
git reset HEAD .
```

### <a name='Desfazendoalteraesemumarquivoparaoltimocommit'></a>Desfazendo alterações em um arquivo para o último commit

```shell
git checkout nome_do_arquivo
```

### <a name='Desfazendotudoparaoltimocommit'></a>Desfazendo tudo para o último commit

```shell
git checkout .
```

### <a name='Desfazendoumaalteraomascolocandoelaemstage'></a>Desfazendo uma alteração, mas colocando ela em stage

```shell
git reset --soft HEAD~1
```

Onde `HEAD~1` é relacionado ao último commit.

### <a name='Desfazendoparaoltimocommitsemcolocarasalteraesemstage'></a>Desfazendo para o último commit sem colocar as alterações em stage

```shell
git reset --hard HEAD~1
```

### <a name='Desfazendoparaumcommitespecfico'></a>Desfazendo para um commit específico

Devemos procurar o hash do commit no histórico do Git e então executar:

```shell
git revert hash
```

Exemplo:

```shell
git revert ecdd2
```

Onde `ecdd2` são os cinco primeiros caracteres de um hash no meu log (que seria algo como `ecdd2d09783b7d6fcd3b42dfdcf11cbd0644ac07`).

### <a name='Desfazendooltimopush'></a>Desfazendo o último push

```shell
git reset --hard HEAD~1 && git push -f origin master
```

OBS: Sempre tome cuidado ao usar o parâmetro **-f**.

## <a name='Analisandoohistricolog'></a>Analisando o histórico (log)

Para ver todo o histórico podemos rodar o comando `log`.

```shell
git log
```

### <a name='Observandoohistricocomumnmerocertodealteraes'></a>Observando o histórico com um número certo de alterações

Podemos passar uma quantidade de commits que queremos olhar com o parâmetro `-p`.

```shell
git log -p -2
```

### <a name='Observandoologdemaneiraresumida'></a>Observando o log de maneira resumida

Podemos ver tudo em uma linha só utilizando o `--pretty`:

```shell
git log --pretty=oneline
```

![Imagem do retorno do comando git log --pretty=oneline]({{site.post_images}}git-log-personalizado.png)

### <a name='Deixandoologaindamaisbonito'></a>Deixando o log ainda mais bonito

Podemos formatar o que queremos trazer no log utilizando `--pretty` com o parâmetro `format`.

```shell
git log --pretty=format:"%h = %an, %ar - %s"
```

Onde

- %h: abreviação do hash;
- %an: nome do autor;
- %ar: data;
- %s: comentário

Podemos deixar melhor ainda com os parâmetros que encontramos aqui: [git/pretty-formats](https://git-scm.com/docs/pretty-formats).

### <a name='Exibindoohistricoporpessoa'></a>Exibindo o histórico por pessoa

Podemos exibir o histórico de uma pessoa específica passando o parâmetro `--author`.

```shell
git log --author=nome_da_pessoa_ou_usuario
```

## <a name='Utilizandotags'></a>Utilizando tags

### <a name='CriarumatagGit'></a>Criar uma tag Git

Rodamos o comando `tag` com o parâmetro que seria o nome da tag que queremos colocar.

Exemplo:

```shell
git tag 0.0.1
```

### <a name='ListandoastagsGit'></a>Listando as tags Git

Para listar as tags existentes, rodamos o comando `tag` sem parâmetro.

```shell
git tag
```

### <a name='Criarumatagcommensagemanotada'></a>Criar uma tag com mensagem (anotada)

Utilizamos o parâmetro `-a` e `-m`:

```shell
git tag -a 0.0.1 -m "versão 0.0.1"
```

### <a name='Criarumatagapartirdeumcommit'></a>Criar uma tag a partir de um commit

Podemos criar a tag referenciando um commit utilizando o hash do commit (que encontramos no histórico) com o comando `-a`.

```shell
git tag -a 0.0.1 b6120
```

### <a name='Criandoatagnoservidor'></a>Criando a tag no servidor

Podemos criar somente uma tag específica:

```shell
git push origin 0.0.1
```

Ou mandar todas de uma só vez:

```shell
git push origin --tags
```

## <a name='Utilizandostash'></a>Utilizando stash

Para armazenar algo no stash (uma área **temporária** onde guardamos o histórico sem realmente adicionar na master) podemos utilizar os seguintes comandos.

### <a name='Salvartudonostash'></a>Salvar tudo no stash

```shell
git stash
```

### <a name='Salvandonostashcomdescrio'></a>Salvando no stash com descrição

[Dica do Sergio Soares](https://twitter.com/sergsoares/status/1078060945325346816).

Quando precisamos salvar algo no stash para trocarmos de estado várias vezes e verificar como fica nesses estados, como em um protótipo, podemos fazer:

```shell
git stash save -u "mensagem"
```

### <a name='Listandooqueexisteemstash'></a>Listando o que existe em stash

```shell
git stash list
```

### <a name='Revertendoparaostasheremovendodalista'></a>Revertendo para o stash e removendo da lista

Podemos reverter nossas alterações para o stash e ainda remover uma entrada do stash list fazendo o seguinte:

Removendo a última entrada na lista.

```shell
git stash pop
```

### <a name='Revertendoparaostash'></a>Revertendo para o stash

**A última entrada da lista**, mas sem remover do stash:

```shell
git stash apply
```

Para um item da lista.

Devemos olhar na lista do stash qual o item do histórico que queremos reverter e então rodar o comando `apply`.

```shell
git stash apply stash@{numero}
```

## <a name='Referncias'></a>Referências

- [Basic Git commands - Atlassian](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
- [leocomelli/git.md](https://gist.github.com/leocomelli/2545add34e4fec21ec16)
- [jedmao/gitcom.md](https://gist.github.com/jedmao/5053440)
