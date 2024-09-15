<div align="center">
<h1>Sistema Administrativo De Gerencimanto De Vendas BioCoin</h1>
</div>

<strong>Introdução</strong>

Este projeto consiste em um sistema administrativo para o gerenciamento de vendas de moedas digitais e NFTs da Biocoin, um marketplace voltado para o financiamento da preservação e restauração dos biomas brasileiros. Cada Biocoin representa um investimento direto em áreas florestais. Através do sistema, o administrador pode controlar o acesso e as vendas realizadas no site da Biocoin, utilizando um dashboard na página inicial do sistema. O sistema oferece funcionalidades como a atualização e exclusão de contas de usuários clientes, além de permitir que o usuário administrador cadastre NFTs para venda e áreas com opção de compra. Há também uma seção de blogs, onde o administrador pode registrar postagens sobre o universo das criptomoedas. O sistema tmbém inclui uma funcionalidade de estorno, permitindo que o administrador aprove ou cancele pedidos de reembolso feitos por clientes. Também existe uma área de documentação, onde os administradores podem acessar e analisar documentos enviados pelos clientes para verificação, como arquivos de imagem submetidos por meio do site.

## Funcionalidades Principais Disponíveis Do Sistema
<strong>CRUD</strong>

- Read: Visualização dos dados dos usuários clientes (perfil, vendas, documentos).
- Update: Atualização de dados dos usuários clientes, como dados da conta.
- Delete: Exclusão de contas de usuários clientes.

- Create: Usuários administradores podem cadastrar NFTs para venda e áreas com opção de compra.
- Read: administradores podem visualizar de NFTs cadastrados para venda e áreas com opção de compra.
- Update: administradores podem atualizar informações das NFTs cadastrados e áreas com opção de compra.
- Delete: administradores podem excluir NFTs cadastrados para venda e áreas com opção de compra.

- Read: Administradores podem visualizar os pedidos de estorno dos clientes.
- Update: Administradores podem aprovar ou rejeitar pedidos de estorno dos clientes.

- Read: Administradores podem visualizar e analisar os documentos envidos pelos clientes através do site de vendas.
- Update: Atualização de status dos documentos analisados (aprovado, pendente, rejeitado).

## Interface

<div align="center">
<a href="https://qa.biocoin.labsc.dev.br/admin" target="_blank">
  <img src="https://img.shields.io/badge/-BioCoin admin QA-%23e7ff00?style=for-the-badge&logo=xd&logoColor=white">
</a>
  </div>

## Arquitetura

O projeto segue a estrutura modular, onde cada módulo, como components, pages, services e features, possui responsabilidades distintas. 

<strong>components:</strong>
- Este módulo contém todos os componentes globais e reutilizáveis da aplicação, que podem ser usados em diversas partes da interface do projeto

<strong>features:</strong>
- Este módulo agrupa as funcionalidades específicas do projeto, incluindo os serviços e a lógica de negócio. Além disso, contém componentes que são específicos de cada funcionalidade, responsáveis por exibir a interface (UI).

<strong>services:</strong>
- Este módulo é responsavel pela integração com a API(back-end).
- Serviços de Dados: Lógica para acessar e manipular dados, como buscar, criar, atualizar e excluir informações.
- Serviços de Autenticação: Gerenciamento de autenticação de usuários, como login, logout, registro e verificação de tokens.
- Serviços de Utilidades: Funções que podem ser usadas para diferentes partes da aplicação, como manipulação de data, formatação de dados, validações etc.

<strong>pages:</strong>
- As páginas de cada funcionalidade da aplicação, onde são definidas as telas correspondentes a cada função oferecida pela aplicação.

  ## Ferramentas
<div style="display: inline_block">
  <div align="center">
  <img align="center" alt="icon-typescript" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="icon-react" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 <img align="center" alt="icon-styled-components" height="50" width="50" src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/ec333/sc.png">
  <img align="center" alt="icon-materialui" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg">
  <img align="center" alt="icon-chartjs" height="60" width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chart.js_logo.svg/1024px-Chart.js_logo.svg.png">
 <img align="center" alt="icon-node" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="icon-yarn" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg" >
  <img align="center" alt="icon-vscode" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" >
   <img align="center" alt="icon-swagger" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg">
   <img align="center" alt="icon-xd" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg">
  </div>
</div><br/>

<div align="center">
<h1>Cliente</h1>
</div>
  <div align="center">
<a href="https://biocoin.labsc.dev.br/" target="_blank">
   <img align="center" alt="icon-biocoin" height="50" width="250" src="src/assets/svg/WhiteBioLogo.svg">
</a>
  </div>
