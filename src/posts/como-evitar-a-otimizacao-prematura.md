---
title: Como evitar a otimização prematura
date: '2020-11-11'
tags:
    - projetos
    - programação
    - engenharia
description: Um dos maiores males do projeto de software é a otimização prematura. Nós queremos fazer algo bem feito e o mais perfeito possível, mas como e quando uma melhoria deve ser feita?
socialImage: '/images/posts/fabian-petersen-T9sR3Rws24E-unsplash.jpg'
---
Desenvolver software é um trabalho complexo e que muitas vezes tem um prazo determinado. Este prazo foi acordado com alguém, vamos chamar este alguém de cliente. Cliente pode ser qualquer pessoa, desde a pessoa de gerência de produtos, a nossa liderança técnica ou diretamente alguém de fora da empresa que está esperando pela nova funcionalidade. Quando começamos a escrever o nosso código, precisamos ter isso na nossa mente: alguém está esperando pela nossa entrega.

Com a realidade dos prazos clara em nossa rotina como pessoas desenvolvedoras de software, começa a ficar mais fácil entender o que é fazer uma tarefa prematuramente. Se nós temos um escopo definido e entregas planejadas, não deveríamos começar hoje a tarefa que deveria ser feita no final do desenvolvimento do produto. 

Imagina que estamos construindo um ecommerce com Next.js e parte da nossa preocupação é com a performance da aplicação.O próprio Next já nos entrega a garantia de uma atenção com a velocidade do nosso produto desde o momento em que começamos a estruturar o desenvolvimento. Pensando nisso, faria sentido começar a escrever a nossa tela, os componentes da aplicação, e gastar 10, 20 horas de programação otimizando uma pequena função, que faz uma micro atividade e pouca utilização agora? Onde agora seria o começo da criação do produto.

## O que é otimização prematura?

Em ciência da computação, otimizar algo implica em uma modificação no sistema (seja um software ou hardware ou até mesmo processos de desenvolvimento de software) que vai nos prover um **melhor consumo de recursos**. Pense em recursos como: carga de rede, memória, processamento, espaço em disco, etc.

Mas pense que, otimizar, nem sempre significa que vamos reduzir o consumo de memória, por exemplo, em prol da melhor entrega possível. Poderíamos cair em um caso de uso onde precisamos aumentar a quantidade de memória gasta pelo programa para aumentar a velocidade de renderização ou mesmo a interação com outros serviços que estão rodando ao mesmo tempo em uma arquitetura. Ou seja: otimizar nem sempre significa reduzir **todos** os recursos. Talvez com esse aumento de consumo de memória nós tenhamos diminuído o processamento e melhoramos a performance da nossa aplicação em dispositivos de capacidade reduzida (como alguns smartphones). 

Perceba que otimizar pode ser algo simples, como reduzir as chamadas de função em uma interface ou nem tanto. São as nossas micro decisões diárias que podem impactar todo o funcionamento de um programa ou mesmo o nosso relacionamento com o cliente.

Então, quando que uma otimização, que parece ser algo muito bom, é considerada **prematura**?

Não temos uma resposta fácil aqui, pois cada processo de desenvolvimento de software, cada aplicação e cada time de desenvolvimento pode influenciar o que é e quando otimizar.

Pense como otimização prematura quando nós tomamos a decisão de escrever uma parte do código de maneira menos legível em consideração a performance ou demorar mais para entregar uma tarefa ou produto considerando que no futuro **poderíamos** precisar dessa melhoria, por exemplo.

Uma otimização pode ser algo que não sacrifica nada em nosso código, mas também pode ser uma abordagem que fará com que a manutenção futura desse pequeno pedaço se transforme em uma dor para quem vai ler o que escrevemos.

Prematuro é algo que veio antes do tempo, então podemos resumir a discussão filosófica em uma pergunta: qual foi o problema que me desafiou ao ponto de precisarmos de uma otimização aqui?

Se já estamos escrevendo um software com qualidade (código legível, testes, bons algoritmos, preocupação com o usuário final), imaginar que eu terei um problema garante que teremos este problema?

Muitas vezes este é o grande problema da otimização: achamos que vamos ter um problema e este pode nunca acontecer, mesmo sem a nossa “melhoria”.

## Como saber a hora de otimizar

Nem sempre observarmos relatórios de performance da nossa aplicação, como um [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) ou o [Lighthouse](https://developers.google.com/web/tools/lighthouse) da vida vai garantir que saibamos o momento certo de otimizar. Essas ferramentas também podem indicar a necessidade de criar uma [**dívida técnica**](/posts/o-que-é-e-quando-pagar-uma-divida-tecnica/) em nosso planejamento ao invés de o melhor momento para melhorar o software.

A grande recomendação aqui é que você desenvolva o código pensando no projeto de software, pensando em dar o seu melhor para entregar o que o usuário ou o cliente precisa **hoje**. Em seguida você cria um benchmark com alguma ferramenta de análise de recursos e acompanha para validar se tem algum gargalo real que você deveria se preocupar. 

É sempre uma decisão que temamos e precisa ser algo bem pensado e planejado para que não afete nenhuma ponta do projeto de software (clientes, usuários, empresa e pessoas programadoras.

A maioria dos compiladores, transpiladores ou interpretadores das linguagens de programação já providenciam diversas otimizações que nem lembramos de fazer, como usar um tipo de dado melhor do que o outro, escolher a hora de criar um cache em memória, etc.

A chave está em acompanharmos o software em uso e não acreditar em todas as paranóias que temos no dia a dia. O mesmo serve para o design de software, quando queremos escrever o melhor código possível e não abrimos aquele pull request.

Parte do processo é receber feedbacks sobre o seu trabalho, então abra logo o pull request e aguarde o code review para então fazer as melhorias que você não enxergou antes. Na dúvida, levante a questão se é o melhor momento para esse trabalho com alguém do seu time/da empresa que tenha contexto sobre o produto no qual você trabalha.

Jamais otimize sem métricas.

## Como aprender mais sobre otimização

Se você quiser aprender tudo sobre otimização, talvez seja uma boa hora para ler a série de livros de Donald Knuth, o cara que, inclusive, cunhou uma frase que você já deve ter escutado em algum momento de sua carreira:

> Otimização prematura é a raiz de todos os males

Ele escreveu uma série chamada The Art of Computer Programming (infelizmente somente em inglês), onde encontramos várias e várias técnicas de melhorias que podemos fazer em nossos softwares em 4 volumes passando desde conceitos básicos até a construção de compiladores.

Veja: [The Art of Computer Programming, Volumes 1-4a](https://amzn.to/3lpsotW).

## Conclusão

Escolher o melhor momento de fazer algo é extremamente difícil quando temos muitas opções. Em programação é comum se deparar com esses momentos. Precisamos ter contexto sobre o que precisamos entregar com o nosso código e acompanhar o produto em produção para saber o que e quando precisamos otimizar.

Na dúvida, conversar com o time é uma excelente maneira de não cair na armadilha da otimização prematura.
