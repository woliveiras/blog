---
layout: post
title: Introdução ao terminal
date: 2019-03-26 06:19 -0300
categories:
    - linux
    - devops
    - ferramentas
    - infraestrutura
    - produtividade
    - série fullstack
image: "/images/posts/kevin-horvat-1354011-unsplash-min.jpg"
tags:
    - linux
    - devops
    - ferramentas
    - infraestrutura
    - produtividade
    - série fullstack
description: Uma introdução ao terminal. Sua história, a diferença entre utilizar interface gráfica e utilizar o terminal e comandos iniciais.
---
Este artigo é parte do material utilizado no curso de fullstack com Node.js, bancos de dados, Express e React do meu programa social do perifaCode, o [perifaCode.teach()](https://github.com/perifacode/teach). Estou disponibilizando ele para que qualquer outra pessoa também possa aprender gratuitamente pela internet e qualquer pessoa possa ensinar utilizando este conteúdo.

<!-- vscode-markdown-toc -->
* [Um pouco de história](#Umpoucodehistria)
* [Como o terminal funciona](#Comooterminalfunciona)
* [Para que utilizamos o terminal](#Paraqueutilizamosoterminal)
* [Antes de começar a praticar](#Antesdecomearapraticar)
* [Abrindo o terminal](#Abrindooterminal)
* [Sistema de diretórios](#Sistemadediretrios)
	* [Acabei de abrir o terminal, onde eu estou?](#Acabeideabriroterminalondeeuestou)
	* [Listando tudo o que tem dentro de um diretório](#Listandotudooquetemdentrodeumdiretrio)
		* [Acessando diretórios](#Acessandodiretrios)
	* [Criando diretórios](#Criandodiretrios)
	* [Excluindo diretórios](#Excluindodiretrios)
	* [Copiando diretórios](#Copiandodiretrios)
	* [Movendo diretórios](#Movendodiretrios)
	* [Procurando um diretório](#Procurandoumdiretrio)
* [Trabalhando com arquivos](#Trabalhandocomarquivos)
	* [Criando ou lendo um arquivo via terminal](#Criandooulendoumarquivoviaterminal)
	* [Excluíndo arquivos](#Exclundoarquivos)
	* [Copiando um arquivo para outro diretório com cp](#Copiandoumarquivoparaoutrodiretriocomcp)
	* [Movendo um arquivo para outro diretório](#Movendoumarquivoparaoutrodiretrio)
	* [Procurando arquivos com locate e find (pesquisar sobre o updatedb)](#Procurandoarquivoscomlocateefindpesquisarsobreoupdatedb)
* [Lendo arquivos via Terminal](#LendoarquivosviaTerminal)
	* [Lendo o começo do arquivo](#Lendoocomeodoarquivo)
	* [Lendo o final do arquivo](#Lendoofinaldoarquivo)
	* [Modo de leitura dinâmica](#Mododeleituradinmica)
	* [Filtrando valores](#Filtrandovalores)
* [Desafio](#Desafio)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Pessoa utilizando um computador, com uma blusa preta e a tela do notebook com vários terminais abertos" %}

## <a name='Umpoucodehistria'></a>Um pouco de história

Até certa época a única interface de interação entre sistema operacional e usuário era via linha de comando, nosso conhecido Terminal.

Abaixo temos uma imagem do MS-DOS, um dos primeiros sistemas operacionais utilizados em PCs do mundo.

![Imagem do MS-DOS]({{site.post_images}}MS-DOS.png)

Através dessa tela preta, nós, usuários, executamos comandos e recebemos um retorno.

Hoje em dia temos muitas interfaces visuais que facilitam nossa vida, porém o uso do Terminal pode nos agilizar o trabalho quando precisamos rodar rotinas repetitivas ou ao acessar algum servidor.

> Em servidores nós não instalamos uma interface gráfica para economizar recursos computacionais e o custo sair mais baixo. Para executar uma interface visual precisamos de mais memória e, às vezes, placas de vídeo.

## <a name='Comooterminalfunciona'></a>Como o terminal funciona

No terminal temos acesso a diversos comandos. Estes comandos nada mais são do que programas instalados no sistema operacional que são executados, processam entradas e nos retornam algo.

O exemplo mais clássico é o comando **ls**, pois nós o utilizamos muito em nosso dia-a-dia. Este comando serve para listar itens em um diretório (quando abrimos o terminal temos acesso aos diretórios do sistema, assim como ao abrir uma pasta na interface visual). O ls nada mais é que um programa que recebe parâmetros, processa estes parâmetros e nos retorna sua saída.

Por exemplo:

Se abrirmos o terminal agora e executar um ls, provavelmente receberemos uma saída parecida com esta:

```bash
➜  ~ ls
Desktop    Downloads  Music     Public  Templates  workspace
Documents  Pictures  snap    Videos
```

Isso é a minha pasta *home* que está na raiz da tabela de partições do meu HD. A pasta home é onde ficam os arquivos de usuário comum em sistemas operacionais Linux.

Como o ls é um programa que recebe parâmetros, se passarmos algo como “ls -la” no terminal, obtemos o seguinte resultado:

```sh
➜  ~ ls -la
total 800
drwx------ 44 william william  12288 Mar 21 21:29 .
drwxr-xr-x  4 root    root      4096 Nov  7 06:45 ..
drwxrwxr-x  4 william william   4096 Mar  3 07:23 .audacity-data
-rw-------  1 william william   2271 Nov  7 08:41 .bash_history
-rw-r--r--  1 william william    220 Nov  7 06:45 .bash_logout
-rw-r--r--  1 william william   4342 Nov  7 08:04 .bashrc
drwxrwxr-x  3 william william   4096 Nov  8 06:45 .bundle
drwxr-xr-x 24 william william   4096 Mar 20 21:21 .cache
drwxrwxr-x  5 william william   4096 Nov  7 08:24 .cinnamon
drwxr-xr-x 31 william william   4096 Mar 19 20:45 .config
drwx------  3 root    root      4096 Mar  3 07:34 .dbus
drwxr-xr-x  3 william william   4096 Mar 20 21:58 Desktop
drwxr-xr-x  3 william william   4096 Mar  3 07:40 Documents
drwxr-xr-x  5 william william  16384 Mar 21 20:43 Downloads
lrwxrwxrwx  1 william william     33 Nov  7 06:45 .ecryptfs -> /home/.ecryptfs/william/.ecryptfs
drwxr-xr-x  3 william william   4096 Mar  3 07:40 .fusion
drwx------  2 william william   4096 Mar 16 06:42 .gconf
drwxrwxr-x  3 william william   4096 Nov  8 06:42 .gem
drwxr-xr-x 24 william william   4096 Mar 21 20:44 .gimp-2.8
-rw-rw-r--  1 william william     78 Nov  7 08:04 .gitconfig
drwx------  3 william william   4096 Nov  7 07:05 .gnome
drwx------  3 william william   4096 Jan  4 14:27 .gnome2
drwx------  2 william william   4096 Jan  4 14:27 .gnome2_private
drwx------  4 william william   4096 Nov  8 06:17 .gnupg
drwx------  2 william william   4096 Mar  3 07:39 GPUCache
-rw-r--r--  1 william william     22 Nov  7 06:45 .gtkrc-2.0
-rw-r--r--  1 william william    516 Nov  7 06:45 .gtkrc-xfce
-rw-------  1 william william   7782 Mar 16 06:42 .ICEauthority
drwxrwxr-x  2 william william   4096 Nov  7 08:26 .icons
drwxrwxr-x  3 william william   4096 Nov  7 06:52 .linuxmint
drwx------  3 william william   4096 Nov  7 06:52 .local
drwx------  5 william william   4096 Nov  7 06:55 .mozilla
drwxr-xr-x  2 william william   4096 Nov  7 06:52 Music
drwxrwxr-x  6 william william   4096 Nov 27 07:04 .npm
drwx------  4 william william   4096 Mar  3 07:40 .nv
drwxrwxr-x  8 william william   4096 Nov  7 08:15 .nvm
drwxr-xr-x 11 william william   4096 Feb 27 21:24 .oh-my-zsh
drwxr-xr-x  3 william william   4096 Mar 20 23:06 Pictures
drwx------  3 william william   4096 Nov  7 07:05 .pki
lrwxrwxrwx  1 william william     32 Nov  7 06:45 .Private -> /home/.ecryptfs/william/.Private
-rw-r--r--  1 william william    807 Nov  7 06:45 .profile
drwxr-xr-x  2 william william   4096 Nov  7 06:52 Public
drwxrwxr-x  8 william william   4096 Nov  8 06:42 .rvm
-rw-rw-r--  1 william william    307 Feb 27 21:35 .rvmrc
drwxrwxr-x  3 william william   4096 Nov 15 22:52 .shutter
drwxr-xr-x  3 william william   4096 Nov 14 22:13 snap
drwx------  2 william william   4096 Nov  7 08:09 .ssh
drwxrwxr-x  5 william william   4096 Mar  9 07:48 .ssr
-rw-r--r--  1 william william      0 Nov  7 06:54 .sudo_as_admin_successful
drwxr-xr-x  2 william william   4096 Nov  7 06:52 Templates
drwxrwxr-x  2 william william   4096 Nov  7 08:26 .themes
drwx------  3 william william   4096 Nov 15 14:07 .thumbnails
drwxr-xr-x  3 william william   4096 Nov 14 20:42 Videos
drwxrwxr-x  3 william william   4096 Nov  7 08:04 .vim
-rw-------  1 william william   1411 Nov 16 09:44 .viminfo
-rw-rw-r--  1 william william    821 Nov  7 08:04 .vimrc
drwxrwxr-x  3 william william   4096 Nov  7 07:53 .vscode
-rw-rw-r--  1 william william     58 Nov 22 08:10 .wakatime.cfg
-rw-r--r--  1 william william  45056 Mar 21 20:45 .wakatime.db
-rw-rw-r--  1 william william      0 Nov 22 08:11 .wakatime.log
-rw-rw-r--  1 william william    296 Mar 20 22:18 .wget-hsts
drwxrwxr-x 11 william william   4096 Mar 21 21:13 workspace
-rw-------  1 william william     56 Mar 16 06:42 .Xauthority
-rw-------  1 william william 112548 Mar 21 21:26 .xsession-errors
-rw-------  1 william william  68146 Mar 16 05:37 .xsession-errors.old
-rw-rw-r--  1 william william  42693 Nov  8 07:24 .zcompdump
-rw-rw-r--  1 william william  42693 Nov  8 07:24 .zcompdump-war-machine-5.4.2
-rw-------  1 william william  19281 Mar 21 21:29 .zsh_history
-rw-r--r--  1 william william   3718 Nov  8 06:15 .zshrc
```

Onde temos todos os meus arquivos que estão na home, todos os arquivos de configuração e um pouco mais.

Então é assim que o terminal funciona: recebendo comandos e os executando como programas que são. O terminal nada mais é do que um programa que executa os outros programas instalados no nosso sistema operacional. 

## <a name='Paraqueutilizamosoterminal'></a>Para que utilizamos o terminal

No dia-a-dia utilizamos a linha de comando para rodar comandos que não valeriam a pena estarem em uma interface visual gráfica.

É muito mais rápido rodar algumas rotinas de código em um terminal e executar uma tarefa repetitiva de modo automatizado do que abrirmos uma interface gráfica, que estará consumindo os nossos recursos, a toa.

Normalmente passamos o tempo todo com o terminal aberto e vamos rodando comandos de acordo com a necessidade do momento.

## <a name='Antesdecomearapraticar'></a>Antes de começar a praticar

Existe diferença entre terminais Linux e Windows. Se você utiliza Windows, precisamos diminuir essa diferença. Para que você consiga seguir este tutorial até o fim será necessário instalar um programa chamado cmder.

No cmder temos acesso aos comandos Linux, dentro do Windows.

Acesse [cmder.net](https://cmder.net/), instale o programa e então pode continuar a leitura.

## <a name='Abrindooterminal'></a>Abrindo o terminal

Agora que já entendemos o que é um terminal, como um terminal funciona e para que utilizamos esses programas, vamos partir para a prática.

Abra o terminal do seu sistema operacional. Se você estiver em um Ubuntu ou Linux Mint, basta rodar CTRL+ALT+T, se tiver o cmder instalado, basta abrir ele via menu iniciar.

## <a name='Sistemadediretrios'></a>Sistema de diretórios

Vamos começar entendendo como navegar em diretórios, criar, copiar, mover e excluir pastas via linha de comando.

### <a name='Acabeideabriroterminalondeeuestou'></a>Acabei de abrir o terminal, onde eu estou?

Ao abrir o terminal, tudo o que temos é uma tela preta. Então, como sabemos “onde” o terminal está agora?

Este “saber onde o terminal está” significa em qual diretório ele se encontra.

Para isso utilizamos o comando **pwd**.

Execute este comando no seu terminal (escrever pwd e pressionar o enter) e verifique a saída deste programa.

### <a name='Listandotudooquetemdentrodeumdiretrio'></a>Listando tudo o que tem dentro de um diretório

Agora que sabemos onde estamos, que tal descobrir tudo o que temos nesta pasta?

Para isto vamos utilizar aquele comando já citado aqui, o **ls**.

Execute o comando ls em seu terminal e verifique a saída do programa.

#### <a name='Acessandodiretrios'></a>Acessando diretórios

E se quisermos entrar em algum desses diretórios que foi listado com o ls?

Então utilizamos o comando **cd**.

O comando cd precisa de um parâmetro que é o diretório ao qual será acessado.

Um exemplo:

Eu executei um pwd e descobri que estou na home do meu usuário:

```sh
➜  ~ pwd
/home/william
```

Depois eu listei tudo o que tem neste diretório com o ls.

```sh
➜  ~ ls
Desktop    Downloads  Music     Public  Templates  workspace
Documents  Pictures  snap    Videos
```

Agora eu quero acessar a pasta *Desktop*. Para isso eu posso digitar **cd Desktop** ou então digitar **cd Des** e pressionar o TAB que o terminal irá autocompletar o nome do diretório para mim. Caso eu esteja tentando entrar em um diretório que não existe, o TAB não vai funcionar.

```sh
➜  ~ cd Desktop 
➜  Desktop
```

Agora queremos voltar para a nossa home, para isso podemos utilizar o parâmetro **..** que diz para o utilitário cd que ele deve subir dois níveis na árvore de diretórios.

> **Árvore de diretórios:** no nosso sistema operacional temos diversos diretórios e podemos acessar cada um e navegar entre eles, essa estrutura de diretórios é chamada de árvore de diretórios.

Então, para voltar para a home bastou eu fazer:

```sh
➜  Desktop cd ..
➜  ~ 
```

Lembrando que isso acontece porque a home era o nível acima de Desktop.

Uma representação disso, para facilitar nosso entendimento deste assunto, seria:

```sh
/home
   |_Desktop
   	|_foto.jpg
|_Steam
   |_Documents
   	|_boletos
   |_Pictures
```

Caso nossa necessidade fosse acessar a pasta *boletos* e estivéssemos em */home*, precisaríamos rodar: `cd /home/Pictures/boletos`.

Também podemos fazer o caminho inverso, voltando os níveis com o `cd ../../`, onde subiremos doi níveis (../ um nível, ../ outro nível) até chegar em /home.

### <a name='Criandodiretrios'></a>Criando diretórios

Agora vamos criar um diretório para trabalharmos dentro dele. A partir de agora vamos utilizar este diretório sempre que precisarmos armazenar um novo projeto.

Vamos chamar este diretório de **workspace**.

Para criar pastas no terminal utilizamos o comando mkdir. Este comando recebe como parâmetro o nome da pasta que queremos criar.

```sh
mkdir workspace
```

Vamos entrar nesse diretório agora com o comando cd. 

```sh
cd workspace
```

Se rodarmos o pwd vamos entender o local onde estamos.

```sh
➜  ~ cd workspace 
➜  workspace pwd
/home/william/workspace
➜  workspace 
```

### <a name='Excluindodiretrios'></a>Excluindo diretórios

Para excluir algo via terminal podemos utilizar dois comandos, o **rm** e o **rmdir**.

O rm serve para excluir qualquer coisa em nosso sistema operacional, incluindo diretórios.

Vamos criar uma pasta chamada `serei_deletada` com o comando mkdir.

```sh
mkdir serei_deletada
```

Para deletar uma pasta com o comando rm, será necessário forçar essa deleção. Se somente rodarmos o `rm serei_deletada` vamos receber o erro:

```sh
➜  workspace rm serei_deletada 
rm: cannot remove 'serei_deletada': Is a directory
```

Então rodamos o comando com o parâmetro **-rf**, que é um argumento mandando o rm **forçar** a deleção e de modo recursivo. Isso porque um diretório pode ter outros diretórios dentro, então é necessário entrar em cada um e deletar tudo. O parâmetro **r** diz que o rm deve ser recursivo e o **f** serve para forçar a deleção.

OBS: sempre tome muito cuidado com o parâmetro **-f**.

```sh
➜  workspace rm -rf serei_deletada 
➜  workspace 
```

Mas, para deletar pastas inteiras, existe outro comando muito útil, que é o **rmdir**.

Vamos criar outra pasta que será deletada.

```sh
mkdir serei_deletada
```

E agora rodamos o rmdir.

```sh
rmdir serei_deletada
```

### <a name='Copiandodiretrios'></a>Copiando diretórios

Para copiar uma pasta para outro local utilizamos o comando **cp**. Como o que queremos copiar é um diretório, é necessário passar o parâmetro **-r**, de recursivo, informando que o programa deve copiar o diretório que passamos e todo o seu conteúdo.

A sintaxe para o comando é algo como: `cp diretorio_a_ser_copiado diretorio_destino`

Exemplo: em um diretório temos duas pastas, dir1 e dir2. Para copiar o dir2 para o dir1 devemos rodar o comando:

```sh
cp -r dir2 dir1
```

Para conferir o que houve, podemos rodar o comando ls.

```sh
➜ ls dir1
dir2
```

Podemos também passar mais parâmetros e copiar mais de um diretório por vez.

Por exemplo, se ao invés de termos somente dir1 e dir2, agora temos dir3 que também será copiado para o dir1. Então rodamos:

```sh
cp -r dir2 dir3 dir1
```

O último parâmetro é sempre o destino.

### <a name='Movendodiretrios'></a>Movendo diretórios

Podemos mover diretórios para outros lugares utilizando o comando **mv**.

A sintaxe para o comando é algo como: `mv diretorio_a_ser_movido diretorio_destino`

Exemplo: em um diretório temos duas pastas, dir1 e dir2. Para mover o dir2 para o dir1 devemos rodar o comando:

```sh
mv dir2 dir1
```

Podemos também passar mais parâmetros e mover mais de um diretório por vez.

Por exemplo, se ao invés de termos somente dir1 e dir2, agora temos dir3 que também será movido para o dir1. Então rodamos:

```sh
mv dir2 dir3 dir1
```

O último parâmetro é sempre o destino.

### <a name='Procurandoumdiretrio'></a>Procurando um diretório

Em determinados momentos temos diretórios "perdidos" em nosso sistema operacional e daria muito trabalho entrar em cada pasta, seja no modo gráfico quanto em modo texto (via terminal). Para isso utilizamos o comando **find**.

A sintaxe para utilização do find é: `find local_onde_procurar criterio_de_busca o_que_buscamos`.

Exemplo: imagine que esquecemos onde criamos o diretório dir1, mas ainda sabemos que ele se encontra em nossa /home/william (ou o seu usuário)/workspace. Para encontrarmos ele, podemos rodar o comando:

```sh
find ~/workspace -name "dir1"
```

Temos o retorno do local onde está o diretório nomeado (-name) dir1.

```sh
/home/william/workspace/dir1
```

OBS: o **~/** substitui o **/home** quando trabalhamos com diretórios.

Então poderíamos utilizar este comando para qualquer ação.

## <a name='Trabalhandocomarquivos'></a>Trabalhando com arquivos

Utilizar o terminal para manipular arquivos será mais raro em nosso dia-a-dia. Normalmente utilizamos nosso editor visual, como o Visual Studio Code, SublimeText ou mesmo um notepad. A não ser que desejamos trabalhar com o editor de textos Vim. Você pode conhecer o Vim neste artigo: [Começando com o Vim, o editor de textos - William Oliveira](https://woliveiras.com.br/posts/Comecando-com-o-editor-de-texto-VIM/)) e se quiser utilizar ele para trabalhar, pode utilizar este ebook: [Vim para Noobs](https://leanpub.com/vimparanoobs).

Para entendermos como manipular arquivos via terminal, vamos conhecer alguns comandos de criação, leitura e acompanhamento de arquivos.

### <a name='Criandooulendoumarquivoviaterminal'></a>Criando ou lendo um arquivo via terminal

Podemos criar arquivos usando o comando **cat**, **touch** ou o comando de redirecionamento de saída, o **>**.

Vamos entender as diferenças entre eles.

A sintaxe para criar um arquivo vazio com os comandos é a mesma: `comando nome_do_arquivo.extensão`.

Como, por exemplo: 

```sh
cat nome.tx
```

Ou:

```sh
touch nome.txt
```

Se rodarmos o comando ls dentro do diretório onde executamos os comandos para criar um arquivo, teríamos:

```sh
➜  workspace ls
nome.txt
```

Podemos criar um arquivo já com conteúdo utilizando o comando >. O mesmo não acontece com o cat ou com o touch, com eles só conseguimos criar o arquivo ou ler o que tem dentro dele.

Exemplo: escrever meu nome em um arquivo chamado meu_nome.txt.

Vamos usar a seguinte sintaxe para escrever algo em um arquivo utilizando o touch: `touch "conteúdo" > nome_do_arquivo`

```sh
echo "William Oliveira" > meu_nome.txt
```

O comando **echo** iria imprimir o texto "William Oliveira" no terminal, mas como utilizamos o comando de redirecionamento (o sinal de maior que), a saída é enviada para o arquivo.

E, para ler este arquivo, podemos utilizar o comando cat da seguinte maneira:

```sh
➜  workspace cat meu_nome.txt
William Oliveira
```

### <a name='Exclundoarquivos'></a>Excluíndo arquivos

Excluir arquivos no terminal é mais fácil do que diretórios. Utilizamos o comando **rm**, mas aqui não vamos precisar do comando -r ou -f, pois ele é um único candidato a deleção.

A sintaxe para utilizar o comando é: `rm nome_do_arquivo`.

Exemplo:

```sh
rm meu_nome.txt
```
O arquivo meu_nome.txt será deletado, caso ele exista no diretório em que estamos neste exato momento.

Caso o arquivo esteja em outro caminho, precisaremos estipular a localização exata, como `rm /diretorio/nome_do_arquivo`.

Podemos também deletar mais de um arquivo por vez utilizando o rm seguido de vários nomes de arquivos.

```sh
rm nome1.txt nome2.txt nome3.txt
```


### <a name='Copiandoumarquivoparaoutrodiretriocomcp'></a>Copiando um arquivo para outro diretório com cp

Para copiar um arquivo utilizamos o comando **cp**.

A sintaxe para cópia de arquivos é a mesma da cópia de diretórios: `cp nome_do_arquivo.txt destino`.

Exemplo:

Digamos que exista o arquivo meu_nome.txt no meu diretório workspace e também o diretório dir1 e eu quero copiar o meu_nome.txt para dentro de dir1. Seria necessário rodar o comando:

```sh
cp meu_nome.txt dir1
```

Caso fosse mais de um arquivo, também podemos fazer:

```sh
cp nome1.txt nome2.txt nome3.txt dir1
```

O último parâmetro é sempre o nome do diretório destino.

### <a name='Movendoumarquivoparaoutrodiretrio'></a>Movendo um arquivo para outro diretório

Para mover um arquivo para um diretório, vamos utilizar o comando **mv**.

A sintaxe para mover um arquivo é: `mv nome_do_arquivo destino`.

Exemplo:

Digamos que exista o arquivo meu_nome.txt no meu diretório workspace e também o diretório dir1 e eu quero mover o meu_nome.txt para dentro de dir1. Seria necessário rodar o comando:

```sh
mv meu_nome.txt dir1
```

Caso fosse mais de um arquivo, também podemos fazer:

```sh
mv nome1.txt nome2.txt nome3.txt dir1
```

O último parâmetro é sempre o nome do diretório destino.

### <a name='Procurandoarquivoscomlocateefindpesquisarsobreoupdatedb'></a>Procurando arquivos com locate e find (pesquisar sobre o updatedb)

Para localizar um arquivo em nosso sistema operacional, utilizamos o comando **find**.

A sintaxe para utilização do find é: `find local_onde_procurar criterio_de_busca o_que_buscamos`.

Exemplo: imagine que esquecemos onde criamos o arquivo meu_nome.txt, mas ainda sabemos que ele se encontra em nossa /home/william (ou o seu usuário)/workspace. Para encontrarmos ele, podemos rodar o comando:

```sh
find ~/workspace -name "meu_nome.txt"
```

Temos o retorno do local onde está o diretório nomeado (-name) dir1.

```sh
/home/william/workspace/dir1/meu_nome.txt
```

OBS: o **~/** substitui o **/home** quando trabalhamos com diretórios.

## <a name='LendoarquivosviaTerminal'></a>Lendo arquivos via Terminal

Muitas vezes precisamos ler um arquivo de textos de dentro de um servidor para conferir arquivos de configuração ou algo muito útil em nossas vidas que são os arquivos de logs de sistemas e aplicações. Estes arquivos carregam informações gerais sobre o funcionamento dos nossos sistemas e por isso é tão importante que saibamos como ler isso.

Vimos anteriormente como ler um arquivo utilizando o comando **cat**. Agora vamos conhecer mais alguns comandos úteis para isso.

Vamos revisar o comando cat. Sua sintaxe é: `cat nome_do_arquivo`.

### <a name='Lendoocomeodoarquivo'></a>Lendo o começo do arquivo

Em um arquivo muito grande podemos utilizar o comando **head** para ler somente o começo do arquivo. Se não passarmos nenhum parâmetro dizendo quantas linhas queremos ler, serão mostradas as 10 primeiras linhas do arquivo.

A sintaxe do comando head é: `head nome_do_arquivo`.

Se desejarmos especificar a quantidade de linhas, rodamos:

```sh
head -n 20 nome_do_arquivo
```

Onde o parâmetro -n recebe o valor 20. Então as 20 primeiras linhas do arquivo serão carregadas no terminal.

Para simplificar, também podemos passar `head -20 nome_do_arquivo` e temos o mesmo efeito.

### <a name='Lendoofinaldoarquivo'></a>Lendo o final do arquivo

Em um arquivo muito grande podemos utilizar o comando **tail** para ler somente o final do arquivo. Se não passarmos nenhum parâmetro dizendo quantas linhas queremos ler, serão mostradas as 10 últimas linhas do arquivo.

A sintaxe do comando tail é: `tail nome_do_arquivo`.

Se desejarmos especificar a quantidade de linhas, rodamos:

```sh
tail -n 5 nome_do_arquivo
```

Onde o parâmetro -n recebe o valor 5. Então as 5 últimas linhas do arquivo serão carregadas no terminal.

Para simplificar, também podemos passar `tail -5 nome_do_arquivo` e temos o mesmo efeito.

### <a name='Mododeleituradinmica'></a>Modo de leitura dinâmica

Podemos ler um arquivo enquanto ele é gerado utilizando o comando **tail** mais o parâmetro follow (**-f**).

Exemplo:

```sh
tail -f nome_do_arquivo.log
```

Tudo o que for adicionado ao final do arquivo, será listado novamente em nosso terminal lendo este arquivo.

### <a name='Filtrandovalores'></a>Filtrando valores 

Podemos utilizar o operador **pipe** ( `|` ) junto ao comando **grep** para filtrar valores quando lemos algo no terminal utilizando os comandos de leitura, como cat, head, tail, etc.

A sintaxe para utilizar o pipe e o comando grep juntos é: `tail -f nome_do_arquivo **| grep "busca"**`. Neste exemplo foi utilizado o tail, mas também poderia ser feito com cat ou head também.

Exemplo: em um arquivo chamado meu_arquivo.txt, temos uma lista de nomes e a palavra chave que se repete nas linhas é a palavra nome. Vamos utilizar o grep pesquisando por “nome” para trazer todas as linhas que possuem essa chave.

```sh
➜  workspace cat meu_arquivo.txt | grep "nome"
meu nome é William Oliveira
```

Agora imagina que queremos acompanhar as alterações dentro de um arquivo enquanto ele é dinamicamente atualizado.

Podemos rodar o comando `tail -f meu_arquivo.txt | grep "nome"` e quando algo novo for adicionado, vemos isso acontecendo na tela.

```sh
➜  workspace tail -f meu_arquivo.txt | grep "nome"
meu nome é William Oliveira
seu nome é Xossener
O nome da minha amiga é Juju
tem outro nome entrando dinamicamente agora, Jorel
```

## <a name='Desafio'></a>Desafio

Crie um diretório chamado "workspace". Vamos trabalhar dentro dele a partir de agora.

Dentro de workspace crie outro diretório chamado "terminal-introducao".

Agora, dentro de terminal-introducao, crie um arquivo chamado **meu_perfil.txt** e neste arquivo coloque seu nome, seu usuário do GitHub, um email para contato e suas novas habilidades (conhecimento em terminal).

A árvore de diretórios ficará assim:

```sh
workspace
	|_terminal-introducao
```

Exemplo de arquivo:

```
Nome: William Oliveira
Email: contato@woliveiras.dev
GitHub: woliveiras
Habilidades: Terminal Linux
```

## <a name='Concluso'></a>Conclusão

Esta é a primeira aula do perifaCode.teach(). Espero que tenha gostado e que sinta vontade de continuar estudando através deste material.

No próximo artigo veremos a introdução a versionamento de código e Git: [Introdução a versionamento de código e conhecendo o Git](/posts/introdução-a-versionamento-de-código-e-conhecendo-o-git/).

Foto de capa por [Kevin Horvat](https://unsplash.com/photos/Pyjp2zmxuLk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) via [Unsplash](https://unsplash.com/search/photos/linux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
