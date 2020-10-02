---
title: Introdução ao Cálculo Proposicional
date: '2016-07-15'
tags:
  - computação
  - teoria
  - programação
description: Nesse artigo você encontra uma introdução rápida ao Cálculo Proposicional e alguns termos importantes para o estudo do assunto.
---

Como introduzido no post anterior falando sobre [Raciocínio Lógico](/posts/Introducao-ao-Raciocinio-Logico/) vamos continuar com os estudos sobre Lógica.

Se você pesquisou sobre a Classificação Lógica ou leu os artigos que deixei no final do post, deve ter visto sobre a Lógica Matemática.

A Matemática falada aqui é voltada para o pensamento do calculo das proposições e não para o famoso 1+1, 1-1, 1*1, 1/1.

Na Lógica Matemática usamos formulas para validar as “premissas” e possuímos uma linguagem para efetuar os cálculos proposicionais.

Calculo Proposicional, Calculo Sentencial ou Calculo das Sentenças é uma das partes indispensáveis da Lógica Matemática.

Vamos conhecer um pouco mais sobre isso.

## Proposições

Antes de falar do cálculo propriamente dito, precisamos entender alguns conceitos básicos e conhecer alguns novos termos e um deles é a **proposição**.

Proposições são sentenças **declarativas**, **afirmativas** e que tenham sentido em afirmar que sejam **verdadeiras** ou **falsas**. A proposição também pode ser expressada por símbolos, que veremos mais pra frente nesse post.

Ex.:

- 10 é um número inteiro
- Mario é Desenvolvedor de Software

São frases afirmativas e podem ser classificadas por verdadeiro ou falso.

Imagine:

- 10 é um número inteiro? (V ou F)
- Mario é Desenvolvedor de Software? (V ou F)

Outro exemplo seria:

7 + 5 = 10

Isso é uma sentença declarativa e pode receber valor lógico de verdadeiro ou falso.

7 + 5 é igual a 10? (V ou F)

Isso por que não fazemos o calculo de números como na Matemática comum, mas buscamos resultado lógico para a sentença.

Porém:

x + 5 = 10

Não é uma proposição, pois não sabemos o valor de X, então não tem como descobrirmos se o valor lógico dessa sentença é verdadeiro ou falso.

## O que não são proposições

Se proposições são sempre sentenças afirmativas. Então, automaticamente eliminamos algumas sentenças dessa categoria, como:

- Interrogativas: Quem é você?
- Imperativas: Vai lavar a louça.
- Exclamativas: Putz!
- Poemas
- Abertas (como o x + 5 citado acima)



## Princípios sobre as proposições

Alguns princípios básicos que regem as proposições, são:

**Princípio da Identidade:** Uma proposição Verdadeira é Verdadeira, e uma proposição Falsa é Falsa
**Princípio do Terceiro Excluído:** Uma proposição ou é verdadeira ou falsa não existindo uma terceira possibilidade
**Princípio da Não-Contradição:** Uma proposição não pode ser verdadeira e falsa simultaneamente

## Proposição simples e compostas

As proposições ainda podem ser classificadas em:

**Proposição simples:** que são representadas de forma única.

Ex: O cachorro é um mamífero

**Proposição composta:** que são formadas por um `conjunto` de proposições simples, ( duas ou mais proposições simples ligadas por “conectivos lógicos”).

Ex.: Brasília  é a capital do Brasil  ou  Lima é a capital do Peru

Com essa pequena introdução do que são proposições simples e compostas começamos a esbarrar em uma coisa chamada conectivos lógicos.

## Símbolos da linguagem do Cálculo Proposicional e Conectivos Lógicos

Antes de falar dos Conectivos Lógicos, vamos falar dos Símbolos do Cálculo Proposicional para facilitar a escrita dos exemplos. ;)

Dentro da Lógica Proposicional, cada sentença (proposição) pode ser representada por um símbolo chamado `variável proposicional`. Esses simbolos são letras minúsculas a partir da letra **p**.

Ex.: 

- A Lua é quadrada: **p**
- O cachorro é bonito: **q**
- Python é legal: **r**

Isso seria para nossas proposições simples. Para proposições compostas, entram nossos simbolos para os conectivos lógicos.

**O que são os conectivos lógicos?**

São as ligações entre uma proposição simples e outra, assim como aquele **ou** no exemplo `Brasília  é a capital do Brasil  OU  Lima é a capital do Peru`.

Os conectivos são: E, OU, SE… ENTÃO, SE E SOMENTE SE e NÃO e são representados pelos símbolos:

`^` :  **E** (conjunctos)
`v` : OU (disjunctos)
`->` : SE… ENTÃO (implicação)
`<->` : SE E SOMENTE SE (Bi-implicação)
`~` : NÃO (negação)

Então conseguimos expressar o exemplo `Brasília  é a capital do Brasil  OU  Lima é a capital do Peru` da seguinte maneira: **p v q**

Onde **p** equivale a "Brasília  é a capital do Brasil", **v** OU e **q** é "Lima é a capital do Peru".

## Os simbolos auxiliáres

Assim como na matemática, os cálculos podem começar a ficar mais profundos e chega uma hora que precisamos de simbolos auxiliáres para facilitar um pouco nossa vida.

( ) , parênteses que servem para denotar o "alcance" dos conectivos.

Exemplo:

A lua **não** é quadrada **se e somente se** a neve é branca: ((~p) <-> q)

E os parênteses são usados seguindo a ordem: ~, v, ^, -> e <->

Ou seja, primeiro colocamos parênteses onde tivermos **não**, depois onde tiver **ou** e assim por diante.

A lua **não**¹ é quadrada **se e somente se**² a neve é branca: ((~p)¹ <-> q)²

E se existirem repetição dos mesmos operadores, adota-se a convenção de começar o cálculo pela **direita**.

## Precedencia dos operadores

Assim como na matemática, no calculo proposicional temos a precedência dos operadores, ou seja, quem resolver primeiro.

Essa ordem da precedência de operadores é:

1. `~`
2. `^`
3. `v`
4. `->`
5. `<->`

Exemplo: p v q ^ ~ r -> p -> ~ q

Imagine que esse monte de variáveis são várias proposições que podem ser verdadeiras ou falsas.

Como resolver isso?

Com os parênteses: (((p v q) ^ (~r) -> (p -> (~q)))

Primeiro resolvemos (~q) mais a direita, pois, como existem duas negações, adotamos a convenção. 

(((p v q) ^ (~r) -> (p -> `(~q)`))

Em seguida o (~r)

(((p v q) ^ `(~r)` -> (p -> (~q)))

Depois fazemos (p v q), pois o (~r) isolou o (p v q). 

(((`(p v q)` ^ (~r) -> (p -> (~q)))

Em seguida pegamos o resultado de (p v q) e fazemos o ^ com resultado do (~r) 

(((`(p v q) ^ (~r)` -> (p -> (~q)))

Agora podemos fazer o -> do resultado de (p v q) ^ (~r) com o resultado de (p -> (~q))

Basicamente vimos várias regras para auxiliar a calcular as proposições e chegar a um resultado de verdadeiro ou falso.

Agora que conhecemos esses símbolos e regras, podemos ver como confirmar o que calculamos com as **Tabelas Verdade**.

Para isso podemos ver os vídeos a seguir que confirma o que aprendemos e apresenta algumas coisas a mais e as tabelas verdade:

<iframe src="https://www.youtube.com/embed/GlVa3RA9tKI"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/DwfCk1lguTQ"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/rjr-RqFM3uc"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/6E9P-eVOVFA"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/DmE9OLOZzwE"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/LoJCfDWziX4"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/oVOdh0-JSYs"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

<iframe src="https://www.youtube.com/embed/B0NVw76v31U"  width="100%" height="473px" frameborder="0" scrolling="no" allowfullscreen></iframe>

## Referências

* <https://pt.wikiversity.org/wiki/L%C3%B3gica_Matem%C3%A1tica/C%C3%A1lculo_Proposicional>
* <https://pt.wikipedia.org/wiki/L%C3%B3gica_proposicional>
* <https://pt.wikipedia.org/wiki/L%C3%B3gica_matem%C3%A1tica>
* <https://www4.pucsp.br/~logica/>
* <https://pt.wikipedia.org/wiki/Tabela_verdade>
* <https://www.infoescola.com/matematica/classificacao-de-proposicoes-logicas/>
* <https://www.infoescola.com/matematica/conectivos-logicos/>
* <https://www.infoescola.com/matematica/logica-proposicional/>
