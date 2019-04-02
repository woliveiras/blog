---
layout: post
title: 'Domínio personalizado com Google Domains e GitHub Pages'
date: 2019-03-05 18:11 -0300
categories:
    - jamstack
    - git
    - github
image: "/images/posts/github-pages.png"
tags:
    - jamstack
    - git
    - github
description: "JAMstack: Utilizando um domínio personalizado com Google Domains e GitHub Pages para o seu site/blog estático"
---
Nos últimos artigos aprendemos [o que é JAMstack](/posts/jamstack-introdução-o-que-é-jamstack/), como [criar e hospedar nosso site de graça no GitHub Pages](/posts/jamstack-criando-e-hospedando-seu-site-de-graça-no-github-pages/) e conhecemos algumas [ferramentas que podemos utilizar para criar sites com a JAMstack](/posts/ferramentas-para-construção-de-sites-com-jamstack/).

Seguindo os exemplos até aqui, já temos então o nosso site hospedado no GitHub Pages e acessível via URL nomedeusuario ou nomedaorganização.github.io, mas o que queremos mesmo é ter algo mais personalizado, como um domínio .dev, que o [Google liberou recentemente](https://canaltech.com.br/internet/google-libera-dominio-dev-para-todos-duas-semanas-apos-lancamento-134053/), certo?

Neste arigo vamos aprender a configurar o GitHub Pages com Google Domains (ou o Google Domains com GitHub Pages, você que manda na ordem).

{% capture page_image %}{{ page.image }}{% endcapture %}
{% include post_wallpaper.html image_url=page_image alt_text="Logo do GitHub Pages" %}

<!-- vscode-markdown-toc -->
* [Registrando um domínio no Google Domains](#RegistrandoumdomnionoGoogleDomains)
* [Adicionando o domínio customizado no GitHub Pages](#AdicionandoodomniocustomizadonoGitHubPages)
* [Alterando o DNS no Google Domains](#AlterandooDNSnoGoogleDomains)
* [Conclusão](#Concluso)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='RegistrandoumdomnionoGoogleDomains'></a>Registrando um domínio no Google Domains

Acesse a URL [https://domains.google](https://domains.google) e clique em procurar um domínio (ou find a domain.

![Tela do Google Domains]({{site.post_images}}domains-google.png)

Será necessário fazer login com o seu Gmail.

A vias de exemplo, eu procurei por **exemplo.dev** no campo de pesquisa e o Google me mostra que o domínio está disponível.

![Exemplo de pesquisa no Google Domains]({{site.post_images}}exemplo-dev-domains-google.png)

Caso eu quisesse registrar este domínio, bastaria clicar no carrinho e seguir com a compra.

## <a name='AdicionandoodomniocustomizadonoGitHubPages'></a>Adicionando o domínio customizado no GitHub Pages

Vá até a aba **settings** do repositório (que é o seu site .github.io) e desça a tela até a sessão *GitHub Pages*. Coloque o domínio no campo custom domain e clique em salvar.

No meu exemplo, eu tenho o domínio aprendiz.dev, então foi isso que eu coloquei neste campo.

![Adicionando um domínio personalizado no GitHub Pages]({{site.post_images}}add-custom-domain-github-pages.png)

Agora será necessário alterar o DNS no Google Domains. 

## <a name='AlterandooDNSnoGoogleDomains'></a>Alterando o DNS no Google Domains

Na interface administrativa do Google Domains (clique em gerenciar ou manage na tela de “meus domínios” no Google Domains) para o seu domínio recém comprado (ou não) clique na aba DNS.

![Interface administrativa de DNS do Google Domains]({{site.post_images}}nameservers-google-domains.png)

Desça até a sessão “Recursos personalizados" ou "Custom resource records” e adicione os hosts do GitHub com o tipo de entrada como **A**. O restante você pode deixar como está, basta alterar o tipo de entrada para **A** e adicionar os endereços de IP:

- **185.199.108.153**
- **185.199.109.153**
- **185.199.110.153**
- **185.199.111.153**

![Adicionando os endereços de IP em Custom Resource Records]({{site.post_images}}add-github-nameservers-google-domains.png)

Agora adicione o **CNAME** apontando para o link do .github.io. Será o mesmo processo de adicionar um registro do tipo **A**, porém você deve colocar como tipo **CNAME**, no primeiro input você adiciona um **www** e então coloca o endereço do GitHub Pages (no meu exemplo é o aprendizdev.github.io) para o seu repositório no último input.

![Adicionando o CNAME no Google Domains]({{site.post_images}}cname-google-domains.png)

Se tudo correu bem, agora você já pode acessar seu site no ar! - este passo pode demorar um pouco (minutos), pois o DNS pode demorar para propagar.

Agora, se você entrar em [aprendiz.dev](https://aprendiz.dev/) verá o conteúdo de [github.com/aprendizdev/aprendizdev.github.io](https://github.com/aprendizdev/aprendizdev.github.io/).

## <a name='Concluso'></a>Conclusão

Espero que tenha sido fácil para você configurar o seu domínio personalizado com o Google Domains e GitHub Pages. Caso não tenha sido ou se você tiver algum problema, comente aqui no artigo para que eu te ajude.
