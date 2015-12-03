title: 'Vagrant - Introdução e Instalação'
id: 23
categories:
  - Ambiente
  - Dicas
  - Vagrant
  - Virtualização
date: 2014-08-17 15:45:05
tags:
  - Ambiente
  - Dicas
  - Vagrant
  - Virtualização
description: Como instalar o Vagrant e uma pequena introdução
---

O Vagrant é uma ferramenta que permite a criação de máquinas virtuais(VM's) rapidamente para o ambiente de desenvolvimento, testes ou ambientes virtuais como AWS ou Digital Ocean.”<!--more-->
Executamos o Vagrant em conjunto com o Virtualbox ou VMWare. Você consegue usar o Vagrant para provisionamento do servidor. Você define tudo o que o servidor precisa(Programas, Banco de Dados, Libs, Configurações, etc) e pode até disponibilizar essa configuração junto ao seu projeto. Assim, qualquer pessoa que clonar seu projeto, consegue levantar um servidor com as mesmas configurações, sem erro.
É muito mais rápido possuir uma *Box* com tudo pronto e só subir com um comando.
Usar o Vagrant pode mudar um pouco o seu fluxo de trabalho, mas acho que a principal diferença é o fato de subirmos a máquina virtual pelo terminal/cmd e, depois, conectarmos na mesma por ssh e, a partir de então, usar o terminal da VM, porém nada que assuste.

**Algumas terminologias importantes **

**Box **- É um pacote que contém a base da sua VM. Basicamente é uma imagem do S.O. Se você não sabe o que é uma imagem é como se fosse um clone do seu Sistema Operacional que pode ser executado pra subir exatamente a mesma configuração em outro computador. :)

**Vagrantfile** - arquivo que contém as definições para executar a Box. Como serviços que serão executados, arquivos compartilhados, programas que serão instalados, etc.

**Guest** - É a máquina que foi levantada. Em meios menos técnicos é sua VM.

**Provider** - O Software de virtualização([Virtualbox](https://www.virtualbox.org) ou [VMWare](https://my.vmware.com/web/vmware/free)).

**Provisioner** - É o software que vai configurar a máquina na hora em que você ligar ela pela primeira vez e ele também vai verificar se está tudo OK quando iniciar ela de novo. As opções mais comuns são: [Shell Script](https://pt.wikipedia.org/wiki/Shell_script), [Puppet](https://puppetlabs.com/) e [Chef](https://www.chef.io/chef/).

**Instalação**

Para esse tutorial vamos usar o Virtualbox.

1. Baixe o [Virtualbox](https://www.virtualbox.org/wiki/Downloads "Download do Virtualbox").

2. Com o VBox instalado, acesse o [site do Vagrant](http://www.vagrantup.com/downloads.html "Vagrant") e instale.
OBS: Se você usa Windows vai precisar seguir [esse tutorial](/posts/vagrant-no-windows/) para importar a chave SSH.

3. Tudo instalado, mãos a obra. Agora é só ler a [segunda parte desse tutorial](/posts/configurar-vagrant/ "Como configurar e utilizar o Vagrant")

Referências:

[http://simplesideias.com.br/usando-o-vagrant-como-ambiente-de-desenvolvimento-no-windows](http://simplesideias.com.br/usando-o-vagrant-como-ambiente-de-desenvolvimento-no-windows)

[http://www.erikaheidi.com/blog/vagrant-101-montando-seu-ambiente-de-desenvolvimento-portatil](http://www.erikaheidi.com/blog/vagrant-101-montando-seu-ambiente-de-desenvolvimento-portatil)

[http://www.akitaonrails.com/2013/10/25/iniciante-criando-um-ambiente-de-desenvolvimento-com-vagrant-e-chef-solo#.U-_1H_ldX2M](http://www.akitaonrails.com/2013/10/25/iniciante-criando-um-ambiente-de-desenvolvimento-com-vagrant-e-chef-solo#.U-_1H_ldX2M)

&nbsp;
