---
layout: post
title: Introdução ao Raciocínio Lógico
date: 2016-06-19 11:50:29
tags:
  - computação
  - teoria
  - programação
categories:
  - computação
  - teoria
  - programação
description: Nesse artigo você encontra uma introdução rápida ao Raciocínio Lógico e alguns termos importantes para o estudo do assunto.
---

Sempre que alguém pergunta o que precisa conhecer para aprender a programar é padrão que respondamos: Lógica de Programação e uma Linguagem de Programação. Sendo a Lógica de Programação o tema mais importante desses dois citados.

Em todo [guia para iniciantes](https://www.google.com/about/careers/students/guide-to-technical-development.html) ou [trilha de estudos](https://woliveiras.com.br/posts/guia-de-estudos-desenvolvedor-front-end-iniciante/) para novos desenvolvedores, sempre abordamos o assunto lógica como algo muito importante para o Desenvolvedor de Software.<!-- more -->

Porém, também existe algo muito importante, que vem até antes da lógica de programação, algo que, com ele, é mais fácil aprender a programar, criar algoritmos mais conscisos, é o Raciocínio Lógico.

Será mais fácil aprender a fazer os seus Algoritmos Computacionais se você já tiver o Raciocínio Lógico fixado em sua mente.

Encare o raciocínio lógico, aqui, como uma ferramenta que vai facilitar o entendimento da lógica de programação e seja feliz!

Tentarei, em outros posts, falar um pouco mais sobre Algoritmos, Fluxogramas, Teste de Mesa, etc. Coisas mais teóricas, mas muito importantes para sua vida como Desenvolvedor de Software.

Nesse artigo você encontra uma introdução rápida ao Raciocínio Lógico e alguns termos importantes para o estudo do assunto.

## O que é Lógica

Lógica é um assunto [bem mais antigo do que a Computação](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_da_l%C3%B3gica). Olha essa definição da Wikipédia:

> Lógica (do grego λογική logos ) tem dois significados principais: discute o uso de raciocínio em alguma atividade e é o estudo normativo, filosófico do raciocínio válido. No segundo sentido, a lógica é discutida principalmente nas disciplinas de filosofia, matemática e ciência da computação. Ambos os sentidos se baseando no foco comum referente a harmonia de raciocínio, a proporcionalidade formal entre argumentos, assim sendo, a correta e equilibrada relação entre todos os termos, a total concordância entre cada um deles dentro de um desenvolvimento.

Percebe-se, então, que lógica é tratar argumentos para concluir um raciocínio, verificar argumentos com finalidade de resultar em um raciocínio **válido**. Ou seja, a lógica é usada para distinguir o raciocínio correto do incorreto ou para fornecer argumentos válidos para tal.

> A lógica examina de forma genérica as formas que a argumentação pode tomar, quais dessas formas são válidas e quais são falaciosas.
[Wikipédia](https://pt.wikipedia.org/wiki/L%C3%B3gica).

Um pouco mais sobre a história da lógica e alguns pontos importantes sobre o assunto:

<iframe src="https://www.youtube.com/embed/ozMbmBp3onE" width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

## O que é Raciocínio Lógico

Antes de entender o que é Raciocínio Lógico, precisamos saber o que é o **Raciocínio**.

Raciocínio, resumidamente significa pensamento. Processar algo mentalmente.

> O Raciocínio (ou raciocinar) é uma operação lógica discursiva e **mental**.
[Wikipédia](https://pt.wikipedia.org/wiki/Racioc%C3%ADnio)

Então, o Raciocínio Lógico é o ato de utilizar a **lógica** para processar argumentos mentalmente.

O Raciocínio Lógico nos aproxima de [pensamento sistemico](https://pt.wikipedia.org/wiki/Pensamento_sist%C3%AAmico), pois:

- Raciocínio, sinonimo de pensamento - Processamento de dados
- Lógica, é o que utilizamos para tratar argumentos como verdadeiro ou falso para chegar a um resultado conclusivo

O [Computador trabalha com binários 0 e 1](http://www.ime.usp.br/~elo/IntroducaoComputacao/Como%20funciona%20um%20computador.htm) e usa isso para processar os dados. Comparando o computador com nosso processo de raciocínio, nós usamos o Raciocínio Lógico para chegar a uma verdade, processamos mentalmente os argumentos entre verdadeiros e falsos.

## E o que são esses tais argumentos?

Os argumentos são enunciados que se relacionam entre sí onde um [enunciado](http://www.dicio.com.br/enunciado/) é a **conclusão** e os demais são chamados **premissas**.

Onde as premissas são suposições de algo e a conclusão é o resultado do processamento dessas suposições.

Exemplo básico:

Premissa: Todo homem é mortal
Premissa: William é homem
Conclusão: William é mortal

Esse é um argumento formado por duas premissas e uma conclusão.

E os argumentos são tradicionalmente divididos em **dedutivos** e **indutivos**.

Onde:

Um **argumento dedutivo** é valido quando suas premissas são verdadeiras e a conclusão também é verdadeira.

Premissa: Só há movimento no carro se houver combustível.
Premissa: O carro está em movimento.
Conclusão: Há combustível no carro.

Já o **argumento indutivo** é aquele onde a verdade das premissas não basta para assegurar a verdade da conclusão.

Premissa: É comum após a chuva ficar nublado
Premissa: Está chovendo
Conclusão: Ficará nublado

Perceba que, no exemplo do argumento dedutivo, a primeira premissa diz que **Só há movimento… Se**. É um argumento claro que diz que *se não tiver combustível o carro não anda*. É um argumento que te leva a um resultado que pode ser facilmente provado como verdadeiro calculando suas premissas.

Já no exemplo do argumento indutivo, a primeira premissa diz **É comum que...**. “É comum” não diz que **sempre** acontecerá algo quando a primeira coisa acontecer. É um argumento tão **subjetivo** que não é possível provar que a premissa tem a conclusão valida.

Ou seja, os argumentos dedutivos são claros e objetivos, já os indutivos são subjetivos e por isso não determinam sua veracidade como um padrão.

As premissas e a conclusão são formuladas em uma **linguagem estruturada** para que o argumento possa ter uma analise lógica apropriada.

Linguagem estruturada, aqui, significa que as premissas precisam ser escritas de maneira que possam ser representadas por um dos simbolos reconhecidos por nosso Computador: verdadeiro e falso.

No exemplo do carro a premissa descarta a possibilidade de alguém empurrar esse carro sem combustível, por exemplo.

## Concluindo

Esse post foi uma introdução ao Raciocínio Lógico, mas ainda temos outros tópicos a abordar como Proposições, Conectívos, Operações Lógicas, Construção de Tabelas Verdade, dentre outros. Se eu falasse tudo aqui, iram ser umas 2 horinhas de leitura e sintese fácilmente, então preferi dividir o assunto.

Eu não abordei, nesse artigo, a classificação da lógica, pois implica em mais história da lógica, então de uma olhadinha nesses artigos para aprender um pouco mais sobre isso e se preparar para os próximos artigos:

- [Lógica de Aristóteles](http://brasilescola.uol.com.br/filosofia/logica-aristoteles.htm)
- [Uma classificação da lógica](http://www.eumed.net/libros-gratis/2009a/499/UMA%20CLASSIFICACAO%20DA%20LOGICA.htm)

## Referências

- http://www4.pucsp.br/~logica/
- http://educacao.globo.com/telecurso/noticia/2015/04/o-que-e-o-raciocinio-logico.html
- http://educacao.uol.com.br/disciplinas/filosofia/logica---argumento-um-conjunto-de-enunciados-articulados-entre-si.htm
- https://pt.wikipedia.org/wiki/Argumento
