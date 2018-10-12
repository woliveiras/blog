---
layout: winners
title: "Ganhadores e ganhadoras dos sorteios mensais"
description: "Página de ganhadores e ganhadoras dos sorteios mensais de cursos, livros e ingressos para eventos"
---

{% assign total = 0 %}

{% for people in site.data.supported.people %}
    {% assign total = total | plus: people.value %}
{% endfor %}

Esta é a lista dos ganhadores e ganhadoras que foram apoiadas por mim junto com a comunidade em forma de doação de cursos, livros e ingressos para eventos no sorteio que faço mensalmente ou outro tipo de doação direta para pessoas de baixa renda que autorizaram a exposição dos seus nomes.

Ao todo, já doamos: **{{ total }} reais**.

Para participar do sorteio, basta se inscrever no formulário nesta página: [ajuda financeira para investimento em educação](/devolvendo-para-a-comunidade/).

> Lembrando que isso é uma oportunidade para **pessoas de baixa renda**. Se você possui condições financeiras de investir em sua educação, por favor, não se inscreva.

Se você deseja contribuir com essa iniciativa, entre em contato comigo via Telegram ([@woliveiras](http://telegram.me/woliveiras)) ou email ([williamozouza@gmail.com](mailto:williamozouza@gmail.com)).

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
