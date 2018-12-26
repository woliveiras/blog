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

![Branches por Sirma Krusteva no Unsplash]({{site.post_images}}sirma-krusteva-3172-unsplash.jpg)
{:.post__wallpaper}

## Verificando as configurações locais

Quando trocamos de máquina podemos fazer um commit com um usuário ou email diferente, e isso pode estragar nosso histórico no Git.

Para verificar as configurações locais podemos usar o comando:

```shell
git config --list
```

Mas os mais comuns são para verificarmos o nome de usuário, email, editor e merge tool

### Para encontrar o nome de usuário

```shell
git config --global user.name
```

### Para encontrar o email

```shell
git config --global user.email
```

## Alterando as configurações locais

Para alterar as configurações de usuário e email locais, basta rodarmos os comandos acima com o novo valor passado como parâmetro entre aspas.

### Alterar o nome de usuário

```shell
git config --global user.name "nome do usuário"
```

### Alterar o email

```shell
git config --global user.email "email do usuário"
```

### Alterando o editor de textos usados no commit e diffs

Quando fazemos um commit, devemos deixar uma mensagem, para isso podemos usar um editor de textos que facilite nossa vida.

Eu costumo utilizar o Vim, por isso rodaria:

```shell
git config --global core.editor vim
```

Também utilizo o Vim para diff/merges, então seria:

```shell
git config --global merge.tool vimdiff
```

## Iniciar um repositório

Na pasta que será o novo repositório Git, execute o comando:

```shell
git init
```

## Ignorando arquivos

É extremamente normal ignorar arquivos no Git para não salvarmos arquivos de configuração dos nossos editores, arquivos temporários do nosso sistema operacional, dependências de repositório, etc.

Para isso criamos um arquivo chamado `.gitignore` e adicionamos os nomes dos arquivos nele.

Exemplo: [gitignore para Nodejs](https://www.gitignore.io/api/node).

## "Baixar" um repositório

Para baixar um repositório do GitHub, Bitbucket, GitLab ou qualquer que seja o servidor do nosso projeto, devemos rodar o comando `git clone` com o link do repositório.

```shell
git clone link
```

Exemplo:

Se eu quisesse baixar o repositório deste blog.

```shell
git clone git@github.com:woliveiras/woliveiras.github.io.git
```

## Baixar as últimas alterações do servidor

Quando algo estiver diferente no nosso repositório remoto (no servidor), podemos baixar para a nossa máquina com o comando `pull`.

```shell
git pull
```

## Listando o caminho do servidor

Para sabermos para onde estão sendo enviadas nossas alterações ou de onde estamos baixando as coisas, rodamos:

```shell
git remote -v
```

Exemplo de `git remote -v` no repositório deste blog:

```shell
origin git@github.com:woliveiras/woliveiras.github.io.git (fetch)
origin git@github.com:woliveiras/woliveiras.github.io.git (push)
```

## Adicionando o caminho do servidor

Caso tenhamos criado o repositório localmente antes de criar no servidor, podemos adicionar o caminho com o comando `set-url`.

```shell
git remote set-url origin git://url
```

Exemplo:

```shell
git remote set-url origin git@github.com:woliveiras/woliveiras.github.io.git
```

## Alterando o servidor

Para alterar o servidor onde hospedamos nosso repositório, usamos o mesmo comando `set-url`.

Exemplo:

```shell
git remote set-url origin git@github.com:woliveiras/woliveiras.github.io.git
```

## Adicionando alterações

Quando alteramos algo, devemos rodar o comando `git add` para adicionar ao index e depois fechar um commit.

### Adicionando um arquivo

```shell
git add nome_do_arquivo
```

### Adicionando tudo de uma vez

```shell
git add .
```

OBS: Cuidado com esse comando, pois você pode adicionar algo que não queria.

Também podemos rodar `git commit` com o parâmetro `-am`, onde adicionamos tudo de uma vez e já deixamos uma mensagem para o commit.

Exemplo:

```shell
git commit -am "add tudo"
```

## Removendo arquivos do index

Para remover um arquivo do stage rodamos o comando `reset`.

```shell
git reset nome_do_arquivo
```

Para remover tudo podemos fazer:

```shell
git reset HEAD .
```

## Salvando as alterações

Quando adicionamos com o `git add` ainda não estamos persistindo os dados no histórico do Git, mas adicionando a uma área temporária onde podemos ficar levando e trazendo alterações até garantirmos que algo realmente deve ser salvo, então rodamos o `git commit`.

Para fazer um commit, precisamos adicionar uma mensagem ao pacote, então rodamos com o parâmetro `-m "mensagem"`.

Depois de ter adicionado as alterações com `git add`, rodamos:

```shell
git commit -m "mensagem"
```

## Verificando o que foi alterado

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

## Trabalhando com branches

### Listando as branches existentes

```shell
git branch
```

### Criando uma nova branch

Podemos rodar o comando `git branch` ou `git checkout`, conforme os exemplos:

```shell
git branch nome
```

### Criando uma nova branch e já trocando para ela

```shell
git checkout -b nome_da_nova_branch
```

### Deletando uma branch

```shell
git branch -d nome
```

### Trocando de branch

```shell
git checkout nome_da_branch_existente
```

### Enviando uma branch para o servidor

Caso tenhamos criado uma branch em nossa máquina, precisamos enviar ela para o servidor com o comando `push`, explicado mais abaixo neste texto, e passar alguns parâmetros que são o `origin` e nome da branch.

```shell
git push origin nome_da_branch
```

Podemos mandar todas as novas branches locais para o servidor rodando:

```shell
git push --all origin
```

### Deletando uma branch remota

Para deletar uma branch do servidor, rodamos o comando:

```shell
git push origin :nome_da_branch
```

### Juntando branches

Quando trabalhamos com branches, mais cedo ou mais tarde, vamos precisar juntar as nossas alterações com a branch master.

Para isso usamos o comando `merge`.

Exemplo:

Imagina que vamos fazer um merge da branch `nome_branch` na `master`.

```shell
git checkout master
git merge nome_branch
```

## Enviando as alterações para o servidor

Depois que finalizamos nossas alterações, fechamos nossos commits, então devemos enviar os commits para o servidor. Para isso rodamos o comando:

```shell
git push origin master
```

Caso estejamos em uma branch, devemos então rodar os comandos da sessão acima "Enviando uma branch para o servidor".

## Apagando, movendo ou renomeando arquivos ou pastas sem estragar nosso histórico Git

Quando deletamos algum arquivo, movemos de pastas, o Git fica com um histórico de deleção de arquivo e adição de outro.

Para que isso não aconteça, existem comandos do Git que salvam nossas vidas, o `git rm`, para deletar, e `git mv`, para movermos coisas.

### Deletando arquivo ou pasta com Git

```shell
git rm nome_do_arquivo_ou_pasta
```

Lembrando que, para remover pastas, é sempre necessário que ela esteja vazia ou que executemos o comando `rm` com o parâmetro `-r` para que a deleção seja recursiva.

```shell
git rm -r pasta
```

### Movendo ou renomeando arquivo ou pasta com Git

```shell
git mv nome_do_arquivo_ou_pasta destino
```

## Revertendo alterações

Existem diversas maneiras de desfazer coisas com o Git.

### Desfazendo do stage

```shell
git reset nome_do_arquivo
```

Para desfazer tudo podemos fazer:

```shell
git reset HEAD .
```

### Desfazendo alterações em um arquivo para o último commit

```shell
git checkout nome_do_arquivo
```

### Desfazendo tudo para o último commit

```shell
git checkout .
```

### Desfazendo uma alteração, mas colocando ela em stage

```shell
git reset --soft HEAD~1
```

Onde `HEAD~1` é relacionado ao último commit.

### Desfazendo para o último commit sem colocar as alterações em stage

```shell
git reset --hard HEAD~1
```

### Desfazendo para um commit específico

Devemos procurar o hash do commit no histórico do Git e então executar:

```shell
git revert hash
```

Exemplo:

```shell
git revert ecdd2
```

Onde `ecdd2` são os cinco primeiros caracteres de um hash no meu log (que seria algo como `ecdd2d09783b7d6fcd3b42dfdcf11cbd0644ac07`).

### Desfazendo o último push

```shell
git reset --hard HEAD~1 && git push -f origin master
```

OBS: Sempre tome cuidado ao usar o parâmetro **-f**.

## Analisando o histórico (log)

Para ver todo o histórico podemos rodar o comando `log`.

```shell
git log
```

### Observando o histórico com um número certo de alterações

Podemos passar uma quantidade de commits que queremos olhar com o parâmetro `-p`.

```shell
git log -p -2
```

### Observando o log de maneira resumida

Podemos ver tudo em uma linha só utilizando o `--pretty`:

```shell
git log --pretty=oneline
```

![Imagem do retorno do comando git log --pretty=oneline]({{site.post_images}}git-log-personalizado.png)

### Deixando o log ainda mais bonito

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

### Exibindo o histórico por pessoa

Podemos exibir o histórico de uma pessoa específica passando o parâmetro `--author`.

```shell
git log --author=nome_da_pessoa_ou_usuario
```

## Utilizando tags

### Criar uma tag Git

Rodamos o comando `tag` com o parâmetro que seria o nome da tag que queremos colocar.

Exemplo:

```shell
git tag 0.0.1
```

### Listando as tags Git

Para listar as tags existentes, rodamos o comando `tag` sem parâmetro.

```shell
git tag
```

### Criar uma tag com mensagem (anotada)

Utilizamos o parâmetro `-a` e `-m`:

```shell
git tag -a 0.0.1 -m "versão 0.0.1"
```

### Criar uma tag a partir de um commit

Podemos criar a tag referenciando um commit utilizando o hash do commit (que encontramos no histórico) com o comando `-a`.

```shell
git tag -a 0.0.1 b6120
```

### Criando a tag no servidor

Podemos criar somente uma tag específica:

```shell
git push origin 0.0.1
```

Ou mandar todas de uma só vez:

```shell
git push origin --tags
```

## Utilizando stash

Para armazenar algo no stash (uma área **temporária** onde guardamos o histórico sem realmente adicionar na master) podemos utilizar os seguintes comandos.

### Salvar tudo no stash

```shell
git stash
```

### Salvando no stash com descrição

[Dica do Sergio Soares](https://twitter.com/sergsoares/status/1078060945325346816).

Quando precisamos salvar algo no stash para trocarmos de estado várias vezes e verificar como fica nesses estados, como em um protótipo, podemos fazer:

```shell
git stash save -u "mensagem"
```

### Listando o que existe em stash

```shell
git stash list
```

### Revertendo para o stash e removendo da lista

Podemos reverter nossas alterações para o stash e ainda remover uma entrada do stash list fazendo o seguinte:

Removendo a última entrada na lista.

```shell
git stash pop
```

### Revertendo para o stash

**A última entrada da lista**, mas sem remover do stash:

```shell
git stash apply
```

Para um item da lista.

Devemos olhar na lista do stash qual o item do histórico que queremos reverter e então rodar o comando `apply`.

```shell
git stash apply stash@{numero}
```

## Referências

- [Basic Git commands - Atlassian](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
- [leocomelli/git.md](https://gist.github.com/leocomelli/2545add34e4fec21ec16)
- [jedmao/gitcom.md](https://gist.github.com/jedmao/5053440)
