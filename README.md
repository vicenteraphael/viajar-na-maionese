# Bem vindo ao site, e venha Viajar na Maionese conosco!

#### Desenvolvedores
Raphael Vicente de Oliveira <br>
Valter de Sales santana Junior


#### Orientador

Prof. Ricardo Agostinho de Rezende Junior

#### Disciplina

Laboratório de Programação 1

#### Curso

Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio

### Intituição

Instituto Federal de Educação, Ciência, Técnologia de São Paulo - Campus São Paulo

<hr>

## Lógica MPA

- Cada relato reside em um arquivo .md
- O python converte o conteúdo para html e renderiza no template jinja
- Cada página é renderizada no servidor
- O site é reatualizado a cada interação

### Conclusão
O site é montado no servidor e enviado pronto, como um livro cheio de páginas

## Lógica SPA

### No servidor
- Cada relato reside também em um arquivo .md
- O Python cria uma rota para cada página usando o id
- Retorna dentro de um JSON

### No cliente
- Ao selecionar um relato, o JS busca o conteúdo JSON enviado para a respectiva rota e insere no DOM.
- O usuário sente que mudou de página, mas continua na mesma — só o conteúdo que foi alterado

### Conclusão
O site é enviado em várias peças. A cada interação, o conteúdo atual da página é removido e substituído por um novo