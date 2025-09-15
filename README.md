# Bem vindo ao site, e venha Viajar na Maionese conosco!

<div align="center">
<b>
Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio <br>
Instituto Federal de Educação, Ciência, Tecnologia de São Paulo - Campus São Paulo <br><br>

Raphael Vicente de Oliveira<br>
Valter de Sales santana Junior <br><br>


Prof. Orientador: Ricardo Agostinho de Rezende Junior <br>
Disciplina: Laboratório de Programação 1<br><br>
</b>
</div>

<hr>

## Lógica MPA

- Cada página é renderizada no servidor
- Cada página possui seu próprio template HTML
- A cada interação, o site é reatualizado

### Conclusão
O site é montado no servidor e enviado pronto, como um livro.

## Lógica SSR

- Cada relato reside em um arquivo .md
- O python converte o conteúdo para html e renderiza no template jinja
- Existem dois templates: um que contém a lista de posts, outra para o qual<br>
o conteúdo do post escolhido é renderizado.

### Conclusão
O site é montado no servidor e envia alguns dados para serem renderizados no cliente

## Lógica SPA

### No servidor
- Cada relato reside também em um arquivo .md
- O Python cria uma rota para cada página usando IDs e
- Envia o conteúdo dentro de um arquivo JSON
- Existe apenas um template HTML para tudo

### No cliente
- Ao selecionar um relato, o JS busca o conteúdo JSON enviado para a respectiva rota e insere no DOM.
- O usuário sente que mudou de página, mas continua na mesma — só o conteúdo que foi alterado

### Conclusão
O site é enviado em várias peças e renderizado inteiramente no cliente. A cada interação, o conteúdo atual da página é removido e substituído por um novo

## Relatório da implementação


Levando em consideração o contexto de um blog, há uma tendência a optar por desenvolver em MPA, <br>
justamente por ser mais intuitivo e fácil de implementar. Mas lembre-se: cada página é uma página. <br>
À medida que o conteúdo do site vai crescendo, a performance diminui severamente. Cada <br>
botão clicado faz o sistema inteiro ser reatualizado, em sistemas mais robustos, isso pode <br>
ser crítico: informações importantes podem ser perdidas a cada momento.<br><br>

Uma solução mais sólida e robusta seria usar SSR. Só o fato da maioria das páginas serem <br>
renderizadas nos servidor já melhora significativamente a performance do site, juntamente <br>
com o 'sistema de redirecionamento' por id. O armazenamento em arquivos .md não é necessário, mas <br>
contribui bastante para uma solução mais escalável e profissional. Para alterar o conteúdo de um <br>
post, é só alterá-lo, ao invés de mexer na base HTML. Acredito que essa seja a melhor maneira de se <br>
implementar um site com tema blog. <br><br>

Agora chegamos à parte em que todo o conteúdo é renderizado na parte do cliente: CSR/SPA. A lógica <br>
é o total oposto das MPAs. O site inteiro é composto por uma página. Tudo o que existe são rotas, <br>
busca de conteúdo e uma simulação de mudança de página. Embora funcione muito bem para aplicações que <br>
requerem alta interação UX, como redes sociais; para um simples blog a implementação se torna um empecilho <br>
por conta da alta dificuldade e pelo fato da perfomance não superar a SSR. É preciso configurar rotas <br>
para cada 'página', implementar o sistema de busca por arquivos JSON com funções assíncronas e ainda <br>
um sistema que esconde os conteúdos anteriores a cada interação.<br>

### Conclusão

Usar SSR é a melhor alternativa