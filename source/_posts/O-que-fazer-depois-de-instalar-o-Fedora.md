title: O que fazer depois de instalar o Fedora
date: 2017-02-09 23:28:05
tags:
	- linux
	- fedora
description: O que fazer depois de instalar o Fedora. Quais pacotes instalar. Como configurar o Fedora. Como instalaro Nodejs, Ruby, Docker e outros no Fedora.
---

Recentemente decidi migrar do Ubuntu, distro que usava a muito, muito tempo, por conta de alguns problemas com a minha máquina.

Eu utilizava [configurações para deixar ele mais rápido](/posts/como-deixar-o-ubuntu-mais-rapido/), porém nada mais ajudou depois da ultima atualização. Começaram a aparecer alguns bugs então decidi largar de vez e testar outra distro.

Depois de algumas horas instalando dependências no Arch Linux, decidi ir para o Fedora por ser mais prático já que não tenho uma conexão legal para uma distro como o Arch nesse momento.

O Arch é uma distro fantástica e se você tem tempo eu mais que o recomendo, apoio veemente sua adoção!

Nesse post vou compartilhar algumas dicas do que fazer depois de instalar o Fedora. <!-- more -->

Na primeira parte temos configurações simples para todos os tipos de usuários e na segunda parte uma configuração para desenvolvedores. Uma sessão não depende da outra, então fique a vontade para pular para a segunda parte ou ficar somente na primeira.

## Por que instalar o Fedora

Basicamente fui para o Fedora por ser uma distro muito recomendada por outros desenvolvedores.

A instalação é simples e muito rápida. Mais rápida do que a instalação do Ubuntu, por sinal.

Existem muitos pacotes disponíveis para o Fedora e a compatibilidade com drivers e dispositivos também atende muito bem. Então eu não teria problemas com HDMI, Placas Externas, etc.

Se você é usuário de [primeira viagem](/posts/meu-contato-com-o-linux-e-por-que-voce-deveria-testar/), vai se dar bem com o Fedora. Se é um usuário mais experiente, também vai gostar.

Não tem muita diferença entre Fedora e Ubuntu, portanto vai ser preciso uma pesquisa boa no Google sobre “Fedora vs Ubuntu” para que você decida se quer utilizar um ou o outro.

Eu estou fazendo um teste porque o Ubuntu estava me dando um pouco de dor de cabeça que eu já não gosto mais de ter como era quando eu comecei a usar Linux como meu Sistema Operacional padrão.

## O que fazer depois de instalar o Fedora

### Atualizar o sistema

É meio lógico, mas eu mesmo esqueci de fazer isso quando instalei o Fedora e logo tive problemas de falta de pacotes. Pacotes esses que não me atrapalharíam se eu tivesse atualizado ele logo de primeira. Portanto rode o comando:

```
dnf update
```

Para atualizar o Fedora.

### Instale as ferramentas de desenvolvedor

Mesmo você não sendo desenvolvedor, vai precisar dessas ferramentas instaladas no seu sistema para compilar certos pacotes.

Utilize o comando:

```
sudo dnf groupinstall 'Development Tools' && dnf groupinstall 'C Development Tools and Libraries'
```

Para instalar essas dependências.

### Configure o hostname

Se você não configurou isso durante a instalação do Fedora, configure o hostname com os seguintes comandos: 

```
hostnamectl
```

Esse comando verifica se o hostname já está configurado, se estiver nem precisa rodar o comando abaixo.

Caso não esteja configurado, rode o comando:

```
sudo hostnamectl set-hostname "nome-do-host"
```

Não se esqueça de trocar onde está `nome-do-host` pelo nome que você quer colocar na sua máquina.

Eu, por exemplo, coloco “war-machine”, porque meu PC já passou por muitas batalhas e viveu um tempo nas trincheiras. Então seria:


```
sudo hostnamectl set-hostname war-machine
```

### Ative o repositório do RPM Fusion

Os repositórios RPM Fusion podem ser úteis pois é através dessa lista que você vai conseguir instalar codecs **nonfree** no seu Fedora. Você também tem uma lista de pacotes **free** através do RPM Fusion.

Os repositórios padrão do Fedora já nos disponibilizam uma boa quantidade de pacotes, porém com RPM Fusion temos ainda mais pacotes a nossa disposição.

Saiba mais sobre o RPM Fusion [aqui](https://rpmfusion.org/).

Para ativar, basta rodar o comando:

```
rpm -ivh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-25.noarch.rpm
```

**Isso se você estiver utilizando a versão 25 do Fedora.**

### Instale o Gnome Tweak

Existem diversas configurações muito úteis para melhorar ainda mais sua experiência utilizando o Fedora e você pode conseguir isso de forma mais facilitada utilizando o Gnome Tweak.

Instale esse utilitário rodando o seguinte comando:

```
sudo dnf -y install gnome-tweak-tool dconf-editor
```

Para acessar o utilitário basta entrar no menu (pressionar a tecla com a bandeira do Windows em teclados comuns) e digitar **tweak**.

![Gnome Tweak](https://s27.postimg.org/d81l7fvxv/gnome_tweak.png)

Coisas que você pode ativar no Gnome Tweak para que o Fedora fique mais amigável, se você for um novo usuário:

- Icones na Área de Trabalho
- Configurar aplicações que iniciam junto com o sistema
- Configurar a barra superior
- Configurar como as janelas são mostradas no alt+tab
- Configurar o número de Áreas de Trabalho

Dentre outras.

### Instale o VLC

Se, assim como eu, você gosta de ver um filminho .mkv ou .avi, você vai precisar ter um reprodutor de qualidade.

Eu utilizo o VLC a anos e recomendo sempre, por sua praticidade. É só instalar e sair utilizando.

Basta rodar o comando:

```
sudo dnf -y install vlc
```

### Instale os plugins para Java

Alguns sites precisam do plugin do Java para funcionar. Utilize o comando:

```
sudo dnf -y install java-openjdk icedtea-web
```

Para instalar a versão Open Source e mais abaixo eu deixei explicado como instalar a versão da Oracle.

### Instale o Wine

Se você tentar utilizar programas do Windows em uma distro Linux, não vai conseguir. A maneira que temos para tentar rodar esses programas é utilizando o Wine.

Utilize o comando:

```
sudo dnf -y install wine
```

Para instalar o Wine.

### Instale o Gimp

Caso você goste de editar imagens, o Gimp pode te ajudar.

Instale rodando o comando:

```
sudo dnf -y install gimp
```

### Compatibilidade com .rar e .zip

Para conseguir descompactar arquivos .rar e .zip no seu Fedora será necessário instalar alguns pacotes.

Execute o comando:

```
sudo dnf -y install unzip p7zip p7zip-plugins unrar
```

Para instalar os utilitários.

## Configurando o Fedora para Desenvolvedores

Agora a parte de configuração do Fedora para Desenvolvedores de Softaware/Web.

### Instale o VIM

O VIM é um ótimo [editor de textos](/posts/Comecando-com-o-editor-de-texto-VIM/), instale-o utilizando o comando:

```
sudo dnf -y install vim
```

### Instalando e configurando um ambiente Ruby no Fedora

Eu gosto de utilizar o RVM para configurar o Ruby na minha máquina.

Como o processo de instalação pode mudar é melhor seguir [esse link](https://rvm.io/) para conferir como instalar.

São alguns comandos simples e pronto.

### Instalando e configurando um ambiente Nodejs no Fedora

Para a instalação do Nodejs eu também gosto de utilizar um gerenciador de versões chamado NVM.

Utilize [esse link](https://github.com/creationix/nvm) para instalar o NVM no Fedora.

Se quiser de uma olhada [nesse post](posts/utilizando-versoes-antigas-do-nodejs/) para saber mais.

### Instalando o Docker

Para instalar o Docker basta rodar o comando:

```
sudo dnf -y install docker docker-compose
```

### Instalando o Sulimetext, Android Studio, InteliJ IDEA, Java da Oracle e muito mais

O Fedora tem uma excelente ferramenta feita pela comunidade chamada Fedy.

Com ela você pode instalar desde o Google Chrome, até aquele Java da Oracle que sempre da trabalho no Linux.

Basta acessar [esse link](https://github.com/folkswithhats/fedy), instalar o Fedy e abrir o utilitário.

De uma pesquisada em tudo o que tem lá e vá instalando conforme sua necessidade.

![Fedy](https://s30.postimg.org/nlfodqoa9/fedy.png)


### Instalando o Terminator

Eu gosto de dividir a tela do Terminal para facilitar minha vida com Git e servidor NodeJS/Ruby/Jekyll rodando ao mesmo tempo. No Linux eu utilizo o Terminator.

Para instalar basta rodar o comando:

```
sudo dnf -y install terminator
```

![Terminator](https://s27.postimg.org/dn8ldw9ub/terminator.png)

### Instalando o Git Cola

Eu utilizo o Git Cola para acompanhar meus diffs e fazer os commits com Git.

É um utilitário simples e legal de se utilizar.

Para instalar basta rodar:

```
sudo dnf -y install git-cola
```

Para utilizar o Git Cola, basta entrar em um diretório que seja um repositório Git e rodar o comando `git cola`.

![Git cola](https://s23.postimg.org/x08s45g2j/Screenshot_from_2017_02_10_00_13_22.png)

## Conclusão

Estou gostando muito do Fedora. Até agora nenhum Bug, nem de interface, nem de outros pacotes ou crashes do sistema.

Tive um problema que acontece em toda distribuição que é minha placa de rede wireless, porém é facilmente resolvido com [esse pacote](https://github.com/FreedomBen/rtl8188ce-linux-driver).

Quando puder eu vou migrar para o Arch Linux, porém vou continuar no Fedora por um bom tempo ainda e não me arrependi de ter saído do Ubuntu.

Claro que ainda bate aquela saudade do Ubuntu por que foram anos utilizando essa distro e eu gostaria de ainda utilizá-la. Espero que o Fedora supra essa vontade. ;D

Algumas outras configurações legais para devs você encontra [nesse post](http://imasters.com.br/desenvolvimento/personalizando-o-fedora-25-para-desenvolvedores/).

Eai, curtiu esse post? Tem alguma dica sobre o Fedora para compartilhar? 

Comente aqui em baixo.

Não se esqueça de compartilhar esse post por aí. Mande para aquele seu amigo que está insatisfeito com o Ubuntu e não quer utilizar uma distro baseada nele, envia para sua calopsita por email para que ela configure o sistema mais facilmente.

Espalhe a palavra.