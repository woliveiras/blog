---
layout: winners
title: "Ganhadores e ganhadoras dos sorteios mensais"
description: "Página de ganhadores e ganhadoras dos sorteios mensais de cursos, livros e ingressos para eventos"
---

{% assign total = 0 %}

{% for people in site.data.supported.people %}
    {% assign total = total | plus: people.value %}
{% endfor %}

Esta é a lista das pessoas que foram apoiadas através do meu sorteio mensal em conjunto com a comunidade de pessoas desenvolvedoras de software e empresas que buscam diversidade e inclusão social através da doação de cursos, livros e ingressos para eventos ou outro tipo de doação direta para pessoas de baixa renda (**que autorizaram a listagem de seus nomes**).

Ao todo, já doamos: **{{ total }} reais**.

Para participar do sorteio, basta se inscrever no formulário nesta página: [ajuda financeira para investimento em educação](/devolvendo-para-a-comunidade/).

> Lembrando que isso é uma oportunidade para **pessoas de baixa renda**. Se você possui condições financeiras de investir em sua educação, por favor, não se inscreva.

**Como me ajudar nessa missão**

Como esse custo sai do meu orçamento, só consigo ajudar com 60 reais por mês (um curso ou livro) e ingressos de eventos que me doam.

Se você deseja contribuir com essa iniciativa você pode:

Fazer uma doação através do [PicPay](https://www.picpay.com/), uma ferramenta de recebimento de pagamentos através de aplicativo.

Compartilhar esta iniciativa com pessoas que você sabe que realmente precisam, para que elas se cadastrem no sorteio.

Compartilhar este post em redes sociais e grupos/comunidades nessas redes.

Se tiver alguma dúvida, entre em contato comigo via Telegram (<a href="http://telegram.me/woliveiras" title="Meu usuário do Telegram">@woliveiras</a>).

<table>
    <thead>
    <tr>
        <th>Pessoa</th>
        <th>Doação</th>
        <th>Valor</th>
    </tr>
    </thead>
    <tbody>
    {% for people in site.data.supported.people %}
        <tr>
            <td>{{ people.name }}</td>
            <td>{{ people.help }}</td>
            <td>{{ people.value }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>
