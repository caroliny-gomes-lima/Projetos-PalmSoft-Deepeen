<div align="center">
<h1>Sistema administrativo de gerencimanto dos serviços Bewiki</h1>
</div>

<strong>Introdução</strong>

O Sistema Administrativo Bewiki é plataforma de gerenciamento para os serviços Bewiki Home, Bewiki Work,  e Bewiki Market. Nele, os usuários administradores podem realizar o cadastro, atualização e exclusão de reservas e serviços contratados por clientes.

- Bewiki Home: O usuário administrador pode gerenciar reservas de hospedagem ou moradia, incluindo a adição de serviços extras conforme o pacote contratado pelo cliente.
- Bewiki Work: O usuário administrador pode cadastrar, atualizar e excluir reservas de espaços de coworking e salas de reuniões para clientes, sejam eles trabalhadores individuais ou equipes. Também é possível incluir serviços adicionais conforme o tipo de plano (Básico ou Sem Limites) escolhido.
- Bewiki Market: O sistema permite o cadastro, atualização e exclusão de restaurantes, além de visualizar perfis e dados dos estabelecimentos.

## Funcionalidades Principais Disponíveis Do Sistema
<strong>CRUD</strong>

CASHBACK:
* Read (Ler): Usuários admin podem ver a lista de clientes com cashback.
* Update (Atualizar): Usuários admin podem atualizar saldos de cashback do cliente.
* Delete (Excluir):  Usuários admin podem excluir  cashback do cliente.

BEWIKI HOME:
* Create (Criar): Usuários admin podem cadastrar reservas. 
* Update (Atualizar): Usuários admin podem atualizar as informações da reserva do cliente.
* Delete (Excluir): Usuários admin podem cancelar reserva do cliente.
* Read (Ler): Usuários admin podem ver listas das reservas e dados do cliente que fez a reserva. 

BEWIKI WORK:
* Create (Criar): Usuários admin podem cadastrar reservas dos espaços de coworking e salas de reuniões para clientes. 
* Update (Atualizar): Usuários admin podem atualizar as informações da reservas dos espaços de coworking e salas de reuniões para clientes.
* Delete (Excluir): Usuários admin podem cancelar reservas dos espaços de coworking e salas de reuniões para clientes.
* Read (Ler): Usuários admin podem ver listas das reservas dos espaços de coworking e salas de reuniões. Além de dados do cliente que fez a reserva.

BEWIKI MARKET:
* Create (Criar): Usuários admin podem cadastrar restaurantes. 
* Update (Atualizar): Usuários admin podem atualizar as informações dos restaurantes.
* Delete (Excluir): Usuários admin podem exluir cadastro do restaurante.
* Read (Ler): Usuários admin podem visualizar uma listas restaurantes cadastrados. Além de visualizar perfis e dados dos estabelecimentos. 

## Interface
<strong>Observações:</strong>
O projeto foi reformulado do zero, e este repositório contém uma versão anterior. Ele inclui apenas o mockup que serve como referência visual da interface da versão antiga.
<br/>
  <div align="center">
<a href="https://xd.adobe.com/view/1b6b9981-f0f6-49a1-b19f-61bfad1df347-4e38/screen/d061efae-7ea6-4297-9517-a9f09fd6b0f4?fullscreen" target="_blank">
  <img src="https://img.shields.io/badge/-xd mockup Bewiki-%237d0041?style=for-the-badge&logo=xd&logoColor=white">
</a>
  </div>

  ## Arquitetura
O projeto segue a estrutura modular, onde cada módulo, como components, pages, services, lib e features, possui responsabilidades distintas. 

<strong>components:</strong>
- Este módulo contém todos os componentes globais e reutilizáveis da aplicação, que podem ser usados em diversas partes da interface do projeto

<strong>features:</strong>
- Este módulo agrupa as funcionalidades específicas do projeto, incluindo os serviços e a lógica de negócio. Além disso, contém componentes que são específicos de cada funcionalidade, responsáveis por exibir a interface (UI).

<strong>services:</strong>
- Este módulo é responsavel pela integração com a API(back-end).
- Serviços de Dados: Lógica para acessar e manipular dados, como buscar, criar, atualizar e excluir informações.
- Serviços de Autenticação: Gerenciamento de autenticação de usuários, como login, logout, registro e verificação de tokens.
- Serviços de Utilidades: Funções que podem ser usadas para diferentes partes da aplicação, como manipulação de data, formatação de dados, validações etc.

<strong>lib:</strong>

- Este módulo contém funções e utilitários que não ão conectados diretamente em componentes e páginas, mas que são úteis em toda a aplicação.
- Funções que realizam tarefas comuns e reutilizáveis, como formatação de strings, manipulação de arrays, cálculos matemáticos, entre outros.
- Funções que facilitam o acesso e a manipulação de dados, como funções para filtragem, ou transformação de dados.
- Funções como validações de dados e manipulação de formulários.

  ## Ferramentas
<div style="display: inline_block">
  <img align="center" alt="icon-javascript" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
   <img align="center" alt="icon-react" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 <img align="center" alt="icon-styled-components" height="50" width="50" src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/ec333/sc.png">
  <img align="center" alt="icon-materialui" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg">
</div><br/>
