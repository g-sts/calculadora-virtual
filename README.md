# Calculadora Virtual

Aplicação front-end desenvolvida com HTML, CSS e JavaScript puro. Este projeto simula uma calculadora funcional, permitindo operações básicas como adição, subtração, multiplicação e divisão, com interface moderna e responsiva.

## Funcionalidades
- Operações matemáticas básicas: `+`, `-`, `*`, `/`
- Botão “AC” para limpar a tela
- Botão de ponto decimal `.`
- Exibição dinâmica do resultado

## Tecnologias Utilizadas
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) — estrutura semântica da aplicação  
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) — layout responsivo utilizando Grid e estilização moderna  
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — manipulação do DOM, controle dos botões e execução dos cálculos via `eval()`  

## Como Funciona
1. O usuário clica nos botões numéricos e operadores para montar a expressão no display.
2. O JavaScript atualiza o valor do input com base nos cliques.
3. Ao clicar no botão `=`, a função `eval()` realiza o cálculo da expressão montada.
4. O resultado da expressão é exibido no display.
