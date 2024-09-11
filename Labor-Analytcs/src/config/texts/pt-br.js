import { SessionStorage } from "../../lib";

const baseRequiredMessage = "Campo obrigatório.";
// const baseRequiredFieldsDescription = "* Preenchimento obrigatório";

const baseReload = {
  message: "Não há dados para exibição.",
  buttonLabel: "Recarregar",
};

const ptBr = {
  months: [
    { initials: "Jan", fullName: "Janeiro" },
    { initials: "Fev", fullName: "Fevereiro" },
    { initials: "Mar", fullName: "Março" },
    { initials: "Abr", fullName: "Abril" },
    { initials: "Mai", fullName: "Maio" },
    { initials: "Jun", fullName: "Junho" },
    { initials: "Jul", fullName: "Julho" },
    { initials: "Ago", fullName: "Agosto" },
    { initials: "Set", fullName: "Setembro" },
    { initials: "Out", fullName: "Outubro" },
    { initials: "Nov", fullName: "Novembro" },
    { initials: "Dez", fullName: "Dezembro" },
  ],
  version: "ProLOG ",
  modals: {
    success: {
      buttonLabel: "OK",
    },
    errors: {
      buttonLabel: "Ok",
    },
  },
  //------------------------AQUI-------------------------------
  pagesConfig: {
    teamMaintenance: {
      title: "MANUTENÇÃO DE EQUIPE",
      pages: {
        operators: "Operadores",
        operatorsButton: "Operadores", //AQUI

        extraHours: "Horas Extras",
        extraHoursButton: "Horas Extras", //AQUI

        turns: "Turnos",
        turnsButton: "Turnos", //AQUI
      },
    },
    setup: {
      title: "SETUP",
      textTitles: "Equação planejada e realizada",
      PlannedEquationsButton: "Equação Planejada",
      PerformedEquationsButton: "Equação Realizada",
      pages: {
        upload: "Upload",
        dimensions: "Dimensões",
        process: "Processos",
        drivers: "Drivers",
        segment: "Segmentos",
        skus: "SKUs",
        schedules: "Horários",
        layout: "Layout",
        alocations: "Alocações",
        scenario: "Cenários",
        costs: "Custos",
        integration: "Integrações",

        equations: "Equação Planejada",
        equationsButton: "Equação Planejada", //AQUI

        performedEquation: "Equação Realizada",
        performedEquationButton: "Equação Realizada", //AQUI
      },
    },
    model: {
      title: "MODELO",
      pages: {
        upload: "Upload",
        builder: "Builder",
        process: "Processos",
        subProcess: "Subprocessos",
        actives: "Atividades",
        standardTimes: "Tempos padrões",
        processBlock: "Blocos de processo",
        conditional: "Condicionais",
        allocations: "Alocações",
      },
    },
    data: {
      title: "DADOS",
      pages: {
        upload: "Upload",
        extract: "Extract",
        transform: "Transform",
        load: "Load",
        allocations: "Alocações",
        functions: "Funções",
        conditional: "Condicionais",
        links: "Vínculos",
      },
    },
    process: { title: "PROCESSAR" },

    dashboard: {
      title: "DASHBOARD",
      textTitles: "Produtividade",
      pages: {
        productivity: "Produtividade",
        productivityButton: "Produtividade", //AQUI
        capacity: "Capacidade",
        capacityButton: "Capacidade", //AQUI
        cost: "Custo",
        costButton: "Custo", //AQUI
        opportunity: "Oportunidade",
        opportunityButton: "Oportunidade", //AQUI
      },
    },

    Users: {
      title: "LIBERAÇÃO DE ACESSOS",
      pages: {
        UserList: "Relação de Usuários",
        UserListButton: "Relação de Usuários", //AQUI

        userRegister: "Cadastrar Usuários",
        UserListButton: "Cadastrar Usuários", //AQUI
      },
    },
    ChangePassword: {
      title: "ALTERAR SENHA",
      ChangePasswordButton: "Alterar Senha", //AQUI
      pages: "Alterar Senha",
    },

    reports: {
      title: "RELATÓRIOS",
      ReportsButton: "Relatório", //AQUI
    },

    coaching: { title: "COACHING" },

    cdMap: {
      title: "Mapa da Unidade",
      textTitles: "Visualizar mapa",
      mapViewButton: "Visualizar Mapa",
    },

    home: { title: "Home" },
  },
  //--------------------------------------ATÉ AQUI----------------------------------
  cdMap: {
    title: "Mapa da Unidade",
    road: "Rua",
    initial: "Ponto Inicial",
    nodes: "Nodos",
  },
  login: {
    cdTitle: "SELECIONE A UNIDADE",
    title: "LOGIN",
    remember: "Lembrar-me",
    forgotPass: "Esqueceu sua senha?",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",
    selectCD: "Selecionar outra unidade",
    enterIn: (cd) => {
      return `Entrando na unidade: ${cd}`;
    },
    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,
  },
  forgotPass: {
    title: "ESQUECEU SUA SENHA?",
    subTitle:
      "Efetue o processo de recuperação de sua senha informando seu email",
    successResponse: "Senha alterada com sucesso.",
    resendCode: "Reenviar código",
    inputEmailLabel: "E-mail",
    inputEmailRequiredMessage: baseRequiredMessage,
    inputCodeLabel: "Código",
    inputCodeRequiredMessage: baseRequiredMessage,
    inputPasswordLabel: "Nova senha",
    inputPasswordRequiredMessage: baseRequiredMessage,
    inputConfirmPasswordLabel: "Confirme sua senha",
    inputConfirmPasswordRequiredMessage: baseRequiredMessage,
    submitEmailButton: "ENVIAR SOLICITAÇÃO",
    submitCodeButton: "ENVIAR CÓDIGO",
    submitPassButon: "ALTERAR SENHA",
    goBack: "VOLTAR",
  },
  settings: {
    userSettings: {
      users: "Usuários",
      userRegister: {
        userRegister: "Cadastro de Usuário",
        fullName: "Nome Completo",
        fullNameMessage: baseRequiredMessage,
        email: "E-mail",
        emailMessage: baseRequiredMessage,
        password: "Senha",
        passwordMessage: baseRequiredMessage,
        passwordConfirm: "Confirmar Senha",
        passwordConfirmMessage: baseRequiredMessage,
        userAdmin: "Usuário Administrador?",
        register: "Cadastrar",
        successResponse: "Usuário cadastrado com sucesso.",
      },
      UserList: {
        UserList: "Relação de Usuário",
        name: "Nome",
        email: "Email",
        type: "Tipo",
        blockUnblock: "Bloquear/Desbloquear Acesso",
        user: "Usuário",
        admin: "Admin",
        table: ["Nome", "Email", "Tipo", "Bloquear/Desbloquear Acesso"],
        changeAccessTextBlock: "Você deseja bloquear o usuário ",
        changeAccessBlockConfirm: "Bloquear",
        changeAccessTitleFree: "Liberar Acesso",
        changeAccessTextFree: "Você deseja liberar o usuário ",
        changeAccessFreeConfirm: "Liberar",
        changeAccessCancel: "Cancelar",
        successResponse: (name, enabled) =>
          `O acesso do usuário ${name == null ? "" : name} foi ${
            enabled ? "liberado" : "bloqueado"
          }.`,
      },
    },
    changePassword: {
      changePassword: "Alterar Senha",
      passwordChange: "Mudança de Senha",
      successResponse: "Senha alterada com sucesso.",
      actualPassword: "Senha Atual",
      newPassword: "Nova Senha",
      passwordConfirmation: "Confirmação de Nova Senha",
      passwordMessage: baseRequiredMessage,
      confirm: "confirmar",
    },
  },

  Home: {
    title: "Home",
    dashboard: {
      title: "Dashboard",
      textTitles: "Produtividade",
      productivityButton: "Produtividade",
    },

    reports: {
      title: "Relatórios",
      textTitles: "Relatório",
      reportsButton: "Relatório",
    },

    mapView: {
      title: "Visualizar Mapa da Unidade",
      textTitles: "Visualizar mapa",
      mapViewButton: "Visualizar Mapa",
    },

    teamMaintenance: {
      title: "Manutenção de Equipe",
      textTitles: "Horas Extras, Operadores, Turnos",
      extraHoursButton: "Horas Extras",
      operatorsButton: "Operadores",
      turnsButton: "Turnos",
    },

    setUp: {
      title: "Setup",
      textTitles: "Equação planejada e realizada",
      PlannedEquationsButton: "Equação Planejada",
      PerformedEquationsButton: "Equação Realizada",
    },

    accessRelease: {
      title: "Liberação de Acessos",
      textTitles: "Cadastrar Usuários, Relação de Usuários",
      registerButton: "Cadastrar Usuários",
      userListButton: "Relação de Usuários",
    },

    changePassword: {
      title: "Alterar Senha",
      textTitles: "Alterar Senha",
      changePasswordButton: "Alterar Senha",
    },
  },

  header: {
    settings: "Configurações",
    settingsOptions: {
      integration: "Integrações",
      users: "Usuários",
      permissions: "Permissões",
      changePassword: "Alterar Senha",
    },
    exit: "Sair",
    exitConfirmationText:
      "Ao sair do sistema sua sessão será encerrada e dados salvos poderão ser perdidos.",
    exitConfirmation: "SAIR",
    exitDeny: "CANCELAR",
    filterButton: "Filtros",
    filterTitle: "Escolha os filtros que deseja aplicar:",

    StatusFilters: {
      Title: "Notificações",

      StatusTitleTable: [
        "PRODUTIVIDADE",
        "VISÃO",
        "DATA INICIAL",
        "DATA FINAL",
        "PROCESSO",
        "EQUIPE DEDICADA",
        "OPERADOR",
        "STATUS",
      ],
    },

    productivityFilters: {
      dedicatedTeam: {
        title: "EQUIPE DEDICADA",
        yes: "Sim",
        no: "Não",
      },
      vision: {
        title: "VISÃO",
        annualLabel: "Anual",
        monthlyLabel: "Mensal",
        biannualLabel: "Semestral",
        quarterlyLabel: "Trimestral",
      },
      prodType: {
        title: "PRODUTIVIDADE",
        media: "Média",
        effective: "Efetiva",
      },
      period: {
        title: "PERÍODO",
        fromLabel: "De",
        toLabel: "Até",
      },
      process: {
        title: "Atividade",
        allLabel: "Todos",
        processLabel: "Atividade",
        separationLabel: "Separação",
        checkoutLabel: "Checkout",
        loadLabel: "Carregamento",
      },
      operator: { title: "OPERADOR", placeholder: "Nome ou Matrícula" },
      dimensions: {
        title: "DIMENSÕES",
        centerLabel: "Centro",
        teamLabel: "Equipes",
        clientsLabel: "Clientes",
      },
      cancelButton: "Cancelar",
      applyButton: "Aplicar Filtros",
    },
    costsFilters: {
      vision: {
        title: "VISÃO",
        annualLabel: "Anual",
        monthlyLabel: "Mensal",
        quarterlyLabel: "Trimestral",
      },
      period: {
        title: "PERÍODO",
        fromLabel: "De",
        toLabel: "Até",
      },
      process: {
        title: "Atividade",
        allLabel: "Todos",
        processLabel: "Atividade",
        separationLabel: "Separação",
        checkoutLabel: "Checkout",
        loadLabel: "Carregamento",
      },
      operator: { title: "OPERADOR", placeholder: "Nome ou Matrícula" },
      dimensions: {
        title: "DIMENSÕES",
        centerLabel: "Centro",
        teamLabel: "Equipes",
        clientsLabel: "Clientes",
      },

      cancelButton: "Cancelar",
      applyButton: "Aplicar Filtros",
    },

    setupFilters: {
      period: {
        title: "PERÍODO",
        fromLabel: "De",
        toLabel: "Até",
      },

      standardRule: {
        title: "ESPECIFICAR PERÍODO",
        yes: "Sim",
        no: "Não",
      },

      defaultTime: {
        title: "Tempo Default",
        yes: "Sim",
        no: "Não",
      },
    },

    usabilityInfoSetup: {
      checkoutTitle: "CHECKOUT",
      textCheckout: "Equação do Processo",
      equationText:
        "a + (b* x1) + (c* x2) + (d* x3) + (e* x4) + (f* x5) + (g* x6) + (h* x8)",
      buttonLabel: "OK",
      equationTable: [
        "x1 = Unitizador fechado",
        "x2 = Volumes máster formados a partir de unidades RS",
        "x3 = Unidades RS",
        "x4 = Volumes RN",
        "x5 = Gaiolas de expedição",
        "x6 = Linhas - Casa da Conexão",
        "x8 = Pallets exportação / clientes especiais",
      ],
    },
  },

  charts: {
    globalProductivity: {
      name: () => {
        return `Produtividade Global - ${
          SessionStorage.getItem("prodType") || "Média"
        }`;
      },
      spentHours: "Horas utilizadas",
      hoursLeft: "Horas Restantes",
      chartDescription: "Total de horas planejadas versus horas realizadas.",
      inProcess: "Período em processamento, tente novamente em 3 minutos.",
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    geralDataProductivity: {
      period: "Período",
      name: "Dados Gerais",
      totalOts: "Total de OTs",
      weight: "Peso KG/OT",
      lines: "Linhas /OT",
    },
    historicProductivity: {
      name: "Produtividade Histórica",
      title: "Carga de Trabalho",
      productivityVariation: "Produtividade Realizada",
      productivityBenchmark: "Pico de produtividade",
      averageProductivity: "Produtividade Média",
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    productivityProcess: {
      name: "Atividades",
      checkout: {
        name: "Checkout",
        planned: "Horas planejadas",
        current: "Horas realizadas",
      },
      separation: {
        name: "Separação",
        planned: "Horas planejadas",
        current: "Horas realizadas",
      },
      load: {
        planned: "Horas planejadas",
        current: "Horas realizadas",
      },
      movement: {
        planned: "Horas planejadas",
        current: "Horas realizadas",
      },
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    productivityOrdering: {
      name: "Ranking de Produtividade",
      exportButton: "Exportar",
      orderingButtonUp: "Mais produtivos",
      orderingButtonDown: "Menos produtivos",
      csvName: "ranking_produtividade",
      FirstRow: "Produtividade",
      table: [
        "Nome",
        "Matrícula",
        "Atividade",
        "PRODUTIVIDADE MÉDIA",
        "Ranking",
        "Processos Elegíveis",
        {
          name: "Separação",
          data: [<>&nbsp;</>, "Deslocamento KM", "Linhas / OT", "Peso KG / OT"],
        },
        {
          name: "Checkout",
          data: [<>&nbsp;</>, "Equipamentos", "Linhas / OT", "Peso KG / OT"],
        },
      ],
      tableCSV: [
        "Nome",
        "Matrícula",
        "Atividade",
        "Produtividade",
        "Ranking",
        "Processos Elegíveis",
        "Separação Deslocamento (KM)",
        "Separação Linhas / OT",
        "Separação Peso KG / OT",
        "Checkout Equipamentos",
        "Checkout Linhas / OT",
        "Checkout Peso KG / OT",
      ],

      emptyList: "Sem dados a serem exibidos, filtro não aplicado",
      process: {
        all: "Todos",
        checkout: "Checkout",
        separation: "Separação",
        shipper: "Carregamento",
      },
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    idleOrdering: {
      name: "Ordenação de Ociosidade",
      table: ["Nome", "Matrícula", "processo", "utilização"],
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    capacityGlobal: {
      name: "Capacidade Global",
      fte: "FTEs",
      occupation: "Ocupação",
      peak: "Pico",
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    historicCapacity: {
      name: "Utilização de Capacidade Histórica",
      load: "Carregamento",
      separation: "Separação",
      checkout: "Checkout",
      peak: "Pico",
      average: "Média",
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    capacityProcess: {
      name: "Detalhamento de Processos",
      separation: {
        title: "SEPARAÇÃO",
        subtitle: "Processo 1",
        firstChart: "Turno 1",
        secondChart: "Turno 2",
        thirdChart: "Turno 3",
        ideal: "Ideal",
        actual: "Real",
      },
      checkout: {
        title: "CHECKOUT",
        subtitle: "Processo 2",
        firstChart: "Turno 1",
        secondChart: "Turno 2",
        thirdChart: "Turno 3",
        ideal: "Ideal",
        actual: "Real",
      },

      load: {
        title: "CARREGAMENTO",
        subtitle: "Processo 3",
        firstChart: "Turno 1",
        secondChart: "Turno 2",
        thirdChart: "Turno 3",
        ideal: "Ideal",
        actual: "Real",
      },

      movement: {
        title: "MOVIMENTAÇÃO",
        subtitle: "Processo 4",
        firstChart: "Turno 1",
        secondChart: "Turno 2",
        thirdChart: "Turno 3",
        ideal: "Ideal",
        actual: "Real",
      },
      notFound: {
        message: baseReload.message,
        buttonLabel: baseReload.buttonLabel,
      },
    },
    costsPeriodResult: {
      topValueLabels: "Valor Roxo",
      bottomValuesLabels: "Valor Azul",
    },
    costsServing: {
      name: "Custo de Servir",
      table: {
        name: "Nome",
        code: "Código",
        hour: "Horas",
        utilization: "% de utilização",
        armCost: "Custo ARM",
        freight: "Frete",
        total: "Total",
        foreseen: "Previsto",
        result: "Resultado",
      },
    },
    idleProcessCost: {
      name: "Ociosidade por Processo",
      idleTime: "Horas ociosas: ",
      processLabel: "Processo",
      separationLabel: "Separação",
      checkoutLabel: "Checkout",
      loadLabel: "Carregamento",
    },
    periodResult: {
      name: "Resultado do Período",
      workLoad: "Carga de Trabalho",
      numbers: {
        envisaged: "Previsto",
        valueByWeight: "R$/KGs",
        weightByFteByDay: "KG/FTE/DIA",
      },
    },
    costsByDriversAndProcess: {
      name: "Custo por Dimensão e Processo",
      process: "PROCESSOS",
      dimensions: "DIMENSÕES",
      table: {
        cost: "Custo",
        dimension: "Dimensão",
        process: "Processo",
      },
    },
  },

  setup: {
    PlannedEquations: {
      equationParameters: {
        title: "Alteração dos Parâmetros da Equação Planejada",
        process: "Processo",
        equationViewer: "Exibição da Equação",
        clear: "Limpar",
        apply: "Aplicar",
        valueOf: "Valor",
        titleModal: "Descrição das equações",
        textModal: [
          "SEPARAÇÃO",
          "a + (b*x1) + (c*x2) + (d*x3) + (e*x4) + (f*x5) + (g*x6)",
          "x1 = deslocamento em metros calculado pelo grafo para a OT",
          "x2 = Linhas área granel",
          "x3 = Unidades apanhadas (bips)",
          "x4 = Carro de separação adicional (N-1)",
          "x5 = separação com auxilio de escada",
          "x6 = separação com auxilio de empilhadeira",
          <br />,
          "CHECKOUT",
          "a + (b*x1) + (c*x2) + (d*x3) + (e*x4) + (f*x5) + (g*x6) + (h*x8)",
          "x1 = Unitizador fechado",
          "x2 =  Volumes máster formados a partir de unidades RS",
          "x3 =  Unidades RS",
          "x4 =  Volumes RN",
          "x5 =  Gaiolas de expedição",
          "x6 = Linhas - Casa da Conexão",
          "x8 = Pallets exportação / clientes especiais",
        ],
      },
      equationTable: {
        title: "Regra Customizada (Aplicada em período específico)",
        checkout: "Checkout",
        separation: "Separação",
        separationEquation: "a + (b*x1) + (c*x2) + (d*x3) + (e*x4)",
        checkoutEquation:
          "a + (b*x1) + (c*x2) + (d*x3) + (e*x4) + (f*x5) + (g*x6) + (h*x8)",
        tableHeadersCustom: [
          "Data/Hora da Alteração",
          "processo",
          "Período",
          "valor  a",
          "valor  b",
          "valor  c",
          "valor  d",
          "valor  e",
          "valor  f",
          "valor  g",
          "valor  h",
          "Excluir",
        ],
      },
      standardRuleTable: {
        title: "Regra Padrão (Aplicada em toda base)",
        checkout: "Checkout",
        separation: "Separação",
        separationEquation: "a + (b*x1) + (c*x2) + (d*x3) + (e*x4)",
        checkoutEquation:
          "a + (b*x1) + (c*x2) + (d*x3) + (e*x4) + (f*x5) + (g*x6) + (h*x8)",
        tableHeaders: [
          "Data/Hora da Alteração",
          "processo",
          "valor  a",
          "valor  b",
          "valor  c",
          "valor  d",
          "valor  e",
          "valor  f",
          "valor  g",
          "valor  h",
        ],
      },
    },

    ModalDefault: {
      title: "Aplicar Período?",
      textNo:
        "Sua alteração será aplicada em toda a base de dados do sistema e as visualizações de filtro dos dashboards serão removidas. Confirma a alteração?",
      textYes1: "Sua alteração será aplicada no período: ",
      textYes2:
        "As visualizações de filtro dos dashboards serão removidas. Confirma a alteração?",
      cancel: "Não",
      apply: "Sim",
    },
    DeleteModalPeriod: {
      deleteTitleModal: "EXCLUIR",
      deleteModalConfirn: "Sim",
      deleteModalCancel: "Não",
      DeleteModalMessage: "Excluir a regra específica do período?",
    },

    performedEquations: {
      performedEquationParameters: {
        title: "Alteração dos Parâmetros da Equação Realizada",
        process: "Processo",
        clear: "Limpar",
        apply: "OK",
        checkoutTime: "Tempo Checkout",
        separationTime: "Tempo Separação",
      },
      standardRuleTable: {
        title: "Regra Padrão (Aplicada em toda base)",
        checkout: "Checkout",
        separation: "Separação",
        tableHeaders: ["Data/Hora da Alteração", "processo", "Tempo (s)"],
      },
      PerformedStandardRuleTable: {
        title: "Regra Customizada (Aplicada em período específico)",
        checkout: "Checkout",
        separation: "Separação",
        tableHeaders: [
          "Data/Hora da Alteração",
          "processo",
          "Período",
          "Tempo (s)",
          "EXCLUIR",
        ],
      },
    },

    Operators: {
      filters: "Filtros",
      OperatorsList: "Lista de Operadores",

      OperatorRegisterFilters: {
        registerModalTitle: "Cadastro de Operadores",
        fullName: "Nome Completo*",
        idOperator: "Nº da Matricula*",
        dateStart: "Data de Admissão*",
        fromLabel: "De",
        toLabel: "Até",
        Shift: "Turno*",
        typeCollaborator: "Tipo do Colaborador*",
        Sector: "Setor*",
        statusDate: "Período da situação",
        firedDate: "Data do desligamento",
        OperatorOff: "Afastado",
        Status: "Situação*",
        register: "Cadastrar",
        update: "Atualizar",
        delete: "Deletar",
        registerOperator: "Cadastrar Operador",
        modalRegister: {
          title: "Cadastrar operador",
          text: "Deseja cadastrar um novo operador?",
        },
        modalDelete: {
          title: "Deletar operador",
          text: [
            "Essa ação é irreversível!!",
            " Deletar um operador pode afetar os cálculos.",
            " ",
            " Confirma deletar esse operador?",
          ],
        },
        modalUpdate: {
          title: "Atualizar operador",
          text: "Deseja atualizar esse operador?",
        },
      },

      filtersInput: {
        name: "Operador",
        sector: "Setor",
        shift: "Turno",
        status: "Situação",
        period: "Período",
      },

      listOperators: [
        "MATRÍCULA",
        "NOME",
        "SETOR",
        "TURNO",
        "SITUAÇÃO",
        "EDITAR",
      ],
    },

    ExtraHours: {
      Title: "Horas Extras",
      registerHours: "Adicionar Hora Extra",

      inputs: {
        name: "Nome",
        idOperator: "Nº da Matricula",
        sector: "Setor",
        shift: "Turno",
        status: "Situação",
        period: "Data*",
        hours: "Qnt Horas*",
        register: "Registrar Horas",
      },

      typeSector: {
        separation: "Separação",
        checkout: "checkout",
      },

      typeShift: {
        firstTurn: "Turno 1",
        secondTurn: "Turno 2",
        thirdTurn: "Turno 3",
        commercialTurn: "Turno comercial",
      },

      listExtraHours: ["DATA", "HORAS EXTRAS REALIZADAS", "EXCLUIR"],

      modalRegisterConfirm: {
        Title: "Cadastrar hora extra",
        RegisterAlert: "Deseja cadastrar horas extras?",
      },

      deleteModal: {
        title: "Excluir hora extra",
        deleteAlert: "Deseja excluir essa hora extra?",
      },
    },

    Turns: {
      title: "Lista de Turnos",
      turnRegister: "Cadastrar Turno",
      modalRegisterConfirm: {
        Title: "Cadastrar Turno",
        RegisterAlert: "Deseja cadastrar um turno novo?",
      },
      modalUpdateConfirm: {
        Title: "Atualizar",
        RegisterAlert: "Deseja atualizar esse turno?",
      },
      modalDeleteConfirm: {
        Title: "Deletar Turno",
        RegisterAlert: "Deseja deletar esse turno? Essa ação é irreversível!",
      },
      modalRegister: {
        title: "Cadastro de Turno",
        titleUpdate: "Atualizar Turno",
        name: "Nome do Turno *",
        workTime: "Horários de trabalho",
        invalidWorkTime: "Horas improdutivas",
        initialDate: "Validade",
        startEnd: "Inicio - Final",
        week: "SEG. A SEX. *",
        Saturday: "SÁBADO",
        Sunday: "DOMINGO",
        status: "Status",
        register: "Cadastrar",
        update: "Atualizar",
        delete: "Deletar",
        statusValue: [
          { value: 1, label: "Ativado" },
          { value: 0, label: "Dasativado" },
        ],
      },
      turnsInputs: {
        week: "SEG. A SEX.",
        Saturday: "SÁBADO",
        Sunday: "DOMINGO",
      },

      turnList: ["NOME DO TURNO", "HORÁRIOS DE TRABALHO", "Status", "EDITAR"],
    },
  },
  report: {
    reportFilter: {
      title: "Filtros de Relatório",
      period: "Período",
      clear: "Limpar",
      apply: "Aplicar",
      from: "De",
      to: "Até",
    },
    reportTable: {
      title: "Modelo de Relatório",
      exportButton: "Exportar",
      noData: "Sem dados para o período",
      csvName: "Relatorio",
      FirstRow: "Data",
      table: [
        "data ot",
        "nº ot",
        {
          name: "Separação",
          data: [
            <>&nbsp;</>,
            "matrícula",
            "Operador",
            "Op. Dedicado?",
            "Score de produtividade (%)",
            "Planejado (Min)",
            "Realizado (Min)",
            "OT Válida",
          ],
        },
        {
          name: "Checkout",
          data: [
            <>&nbsp;</>,
            "matrícula",
            "Operador",
            "Op. Dedicado?",
            "Score de produtividade (%)",
            "Planejado (Min)",
            "Realizado (Min)",
            "OT Válida",
          ],
        },
      ],
      exportHeaders: [
        "Data ot",
        "Nº ot",
        "Matrícula op separação",
        "Op. separação",
        "Op. separação?",
        "Separação- Score de produtividade (%)",
        "Separação planejado(s)",
        "Separação realizado(s)",
        "OT Valida Separação",
        "Matrícula op checkout",
        "op. checkout",
        "Op. checkout?",
        "Checkout - Score de produtividade (%)",
        "Checkout planejado(s)",
        "Checkout realizado(s)",
        "OT Valida Checkout",
      ],
    },
  },

  error: {
    backHome: "VOLTAR PARA HOME",
    reload: "RECARREGAR",
    error404: "Erro 404.",
    message404: " Esta página apresenta estar fora do ar.",
  },
};

export default ptBr;
