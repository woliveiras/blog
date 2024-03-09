---
title: O que é e quando pagar uma dívida técnica
publishDate: '2020-11-11'
category: Engenharia de Software
tags:
  - projetos
  - programação
  - engenharia
excerpt: Não tem como escapar, alguma hora todo mundo cai em uma dívida e essa pode ser uma dívida técnica, mas o que realmente é isso e quando vamos pagar essa conta?
image: '~/assets/images/posts/micheile-henderson-ZVprbBmT8QA-unsplash.jpg'
---

Conforme estudamos sobre processos de software ou quando começamos a pensar em melhorias no nosso código, muitas vezes caímos no problema: velocidade de entrega das nossas tarefas/do produto versus a qualidade do código que escrevemos.

Ward Cunningham, programador que escreveu a primeira ferramenta de wiki, foi quem definiu o termo dívida técnica. Ele descreve isso como algo que decidimos seguir por uma abordagem de fácil implementação, mas que pode causar uma grande dor de manutenção no futuro.

Pensando em manutenção do software, alguma hora vamos precisar interagir com uma função escrita de um modo complexo, um módulo com a API de difícil uso, mas pensando no projeto de software sempre teremos prazos a cumprir.

Então, quando devemos aceitar uma dívida técnica? E quando pagar essa dívida?

## <a name='Sobreprazoseoutrosmalesqueenfrentamos'></a>Sobre prazos e outros males que enfrentamos

Eu detesto os prazos que vem top down. Aquelas decisões que foram tomadas por alguém totalmente fora do contexto da produção de código e que, muitas vezes, está com o foco no lucro a curto prazo para agradar alguém acima na hierarquia ao invés da visão de longo prazo, como, por exemplo, o custo de refazer um software inteiro.

Mas, infelizmente, isso é algo que precisamos conviver. Quando o prazo é alinhado entre engenharia e negócios, é muito mais fácil focarmos na criação de um bom software que vai dar menos dor de cabeça no futuro, mas é algo raro nas empresas em geral. E os prazos são o maior dos motivos pelos quais criamos as dívidas técnicas.

Podemos nos deparar com um código difícil de escrever, por conta das interações que ele vai fazer com outros módulos, sistemas, APIs. Pode ser um código difícil de testar ou qualquer outra dificuldade que aumente o tempo de produção. É principalmente neste momento em que o prazo bate em nossas costas e nos faz criar uma dívida técnica.

## <a name='Problemasdadvidatcnica'></a>Problemas da dívida técnica

Certo. Chegamos até o ponto de que o prazo apertou e agora precisamos tomar uma decisão:

- entregar o código feio, que será difícil de manter no futuro, mas cumprir o prazo
- estourar o prazo, mas fazer um código bonito

Tudo é custo. Pode ser que você esteja construindo algo pessoal, o custo é o seu tempo de vida. Se você está em uma equipe, escrever um código ruim pode significar a dificuldade de outra pessoa entender, mas estourar um prazo pode resultar em uma perda de fonte de renda expressiva para a empresa (o que pode até mesmo levar a demissões).

A dívida técnica também causa um custo, mas nós só vamos ver isso no futuro, quando ela atrapalhar o prazo de entrega ou quando ficar impossível escrever um bom código em torno da funcionalidade que gerou esta dívida.

Em grandes empresas das que já trabalhei, já vi várias vezes em que foram criadas war rooms, reuniões onde se unem diversas pessoas totalmente focadas em entregar a solução para um problema o mais rápido possível, por causa de código que foi escrito por alguém que já saiu da empresa ou que virou CTO e não mexe mais com código. Esse tipo de situação, além de acontecer em momentos onde a empresa já está perdendo dinheiro por causa da dívida, causam um estresse imenso, levando até mesmo a pedidos demissão ou ao burnout.

Perceba: em um pequeno raciocínio já percebemos que uma dívida técnica pode causar perda de dinheiro e/ou de pessoas do time. O maior custo aqui seria o estresse gerado para as pessoas.

## <a name='Quandoaceitarumadvidatcnica'></a>Quando aceitar uma dívida técnica

Como quase tudo em projetos de software, o momento de aceitar uma dívida técnica é sempre dependente do contexto. Porém, independente do momento, existem algumas premissas que precisamos responder antes de aceitar a criação de uma dívida.

Procure sempre responder essas perguntas:

- o prazo para a entrega dessa funcionalidade vai ser atrapalhado se não produzirmos uma dívida técnica?
- o custo para manter o código vai subir muito em relação ao custo de tempo para produzir o código bom neste momento?
- como vamos acompanhar os resultados dessa dívida?

Essas três questões podem facilitar a sua vida, mas uma das perguntas trás ainda outras questões: como vamos acompanhar essa dívida?

Se você não tem logs no seu software, não possui relatórios de benchmark ou não vai poder colocar essa dívida como uma tarefa que deve ser resolvida no seu projeto, então é extremamente necessário trazer isso agora, antes de aceitar a criação dela.

Métricas como a cobertura de testes, APM (Application Performance Monitoring) e os logs vão colocar aquele pedaço de código que vai subir com “defeito” seja acompanhado de perto. Só assim conseguimos garantir que, mesmo entregando um software com um pequeno pedaço amarrado com arame, teremos uma boa disponibilidade do produto final através da resolução ou previsibilidade de problemas.

## <a name='Quandopagaradvida'></a>Quando pagar a dívida

Eu não coloco nenhuma das minhas contas em pagamento automático no banco e vou te explicar o que isso tem há ver com o artigo.

O banco não precisa de verdade do meu dinheiro, ele tem um lucro absurdo e eu posso escolher não pagar uma conta em dia por conta de alguma prioridade maior como um problema de saúde.

Mas pagar a conta atrasada não vai causar um custo maior?

Vai. E é por isso que é uma decisão que eu preciso tomar baseado no contexto atual. Se eu estou precisando daquele dinheiro para viver ou conseguir a saúde para trabalhar, não adianta eu pagar a conta em dia.

Isso vai se encaixar para o projeto software pensando que uma dívida técnica pode não estar causando nenhum prejuízo e a construção de alguma feature seja decisiva para a continuidade da existência do produto, de um time ou até mesmo de uma empresa.

Não existe um momento certo para pagar a conta, vai depender desse contexto.

## <a name='Concluso'></a>Conclusão

Ainda bem que a construção de software é mais fácil de manipular do que a nossa vida pessoal, pois a fatura seria muito mais difícil de pagar.

Pense muito bem antes de criar a dívida técnica, mas não tenha tanto medo dela. Às vezes precisamos ativar esse recurso para conseguirmos garantir a existência do produto em que trabalhamos.

Uma dívida técnica bem monitorada causa menos dores de cabeça do que aquele código bonito que subimos para produção mas ninguém vai entender ele no futuro por causa da abstração excessiva ou aquela biblioteca que deixa o software mais pesado.
