title: Protocolo HTTP
tags:
  - Dicas
  - HTTP
id: 429
categories:
  - Dicas
date: 2015-01-21 11:00:57
---

No post [anterior](http://woliveiras.com.br/url-uri-qual-diferenca/ "URL ou URI, qual a diferença?") eu expliquei a diferença entre URL, URI e URN e fiz uma pequena introdução sobre o Protocolo HTTP. Da uma lidinha na introdução lá e volte aqui para continuar estudando sobre esse interessante protocolo de comunicação das Internetsss! :D<!--more-->

Como eu disse, toda a especificação está [aqui](http://tools.ietf.org/html/rfc2616 "RFC2616") e eu só estou dando uma pequena pincelada sobre o assunto.

##### Métodos HTTP

Durante a requisição é utilizado um Método de requisição (Ou Verbo), como você viu no exemplo que foi o GET. Existem 8 métodos: GET, POST, DELETE, HEAD, PUT, OPTIONS, TRACE e CONNECT. Você já deve ter utilizado POST e GET em algum formulário. ;)
Os mais utilizados são:

**GET** - Utilizado para solicitar um recurso. Não utilize para executar uma ação, somente para recuperar informações.

**POST** - Esse é o que deve ser utilizado para executar uma ação ou criar um novo recurso.

**PUT** - Atualiza um recurso na URI. A diferença entre POST e PUT é que POST pode processar informações também.

**DELETE** - Remove um recurso.

**HEAD** - Recupera as informações sobre um recurso.

##### Status Code

É o código de status da resposta. Sabe quando você entra em um site e cai na página 404? O que aconteceu foi que o servidor recebeu uma requisição, processou e gerou o status code 404, então a aplicação (Que já está previamente configurada para isso) devolve a página de erro 404\. E o mesmo acontece para tudo. Existem muitos status e vou citar só alguns que você já deve ter ouvido falar:

**200** - A requisição foi bem sucedida.

**301** - O recurso foi movido para outro URI.

**403** - O servidor se recusa a atender sua requisição (Tá brabo) e o client não deve tentar de novo.

**404** - Não foi localizado no servidor.

**500** - Deu algum erro inesperado no servidor. (Normalmente quando fazemos alguma cagada e é mais fácil botar a culpa no estagiário. #ficaadica)

**503** - O servidor está temporariamente indisponível.

E tem muito mais a se estudar. Porém com esse conteúdo você não fica mais boiando quando ver determinadas chamadas nas aplicações. ;)

&nbsp;

&nbsp;