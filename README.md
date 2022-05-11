Este projeto contém os requisitos realizados por _[Anna Beatriz Garcia Trajano de Sá](www.linkedin.com/in/anna-beatriz-trajano-de-sá)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Starwars Planets Search

Neste projeto desenvolvi uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais. Ao empregar 
Context API e Hooks ao meu projeto, pude perceber que:

 - A Context API é uma funcionalidade avançada do React que permite o compartilhamento de estado entre vários componentes, 
   sem que seja necessário passá-lo manualmente através de props. É, muitas vezes, usada como alternativa ao Redux.
  
 - Com React Hooks é possível controlar componentes complexos de forma mais simples e rápida, facilitando o compartilhamento 
   e agrupamento da lógica de cada um;


Veja o exemplo a seguir da demo e do layout do projeto!

## Demo e Layout

![Demo](img/video.gif)


Search Page             |         
:-------------------------:|
![Screeshot](img/screen_1.png)  |


 ## Link para o deploy:
 
 [Starwars Planets Search](https://project-starwars-planets-search-green.vercel.app/)<br>
 
 
## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Utilizar a Context API do React para gerenciar estado;
 - Utilizar o React Hook useState;
 - Utilizar o React Hook useContext;
 - Utilizar o React Hook useEffect;
 - Criar React Hooks customizados.
 
 ## Referências
 [Documentação oficial do React sobre Context API](https://reactjs.org/docs/context.html)<br>
 [API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html)<br>
 [React Icons](https://react-icons.github.io/react-icons/)<br>
 [Color.review](https://color.review/)<br>
 [VisBug extension](https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc)<br>
 
 
 ## Escopo do Projeto

 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents;
 - Filtre a tabela através de um texto, inserido num campo de texto, exibindo somente os planetas cujos nomes incluam o texto digitado;
 - Crie um filtro para valores numéricos;
 - Implemente múltiplos filtros numéricos;
 - Não utilize filtros repetidos;
 - Apague o filtro de valores numéricos e desfaça as filtragens dos dados da tabela ao clicar no ícone de X de um dos filtros.

 

