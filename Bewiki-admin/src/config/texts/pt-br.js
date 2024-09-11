const baseRequiredMessage = "Campo obrigatório.";
// const baseRequiredFieldsDescription = "* Preenchimento obrigatório";

const baseReload = {
  message: "Não foi possível carregar as informações.",
  buttonLabel: "Recarregar",
};

const ptBr = {
  notFound: {
    message: baseReload.message,
    buttonLabel: baseReload.buttonLabel,
  },
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
  nationalities: {
    br: "Brasileiro",
  },
  sexes: {
    man: "Masculino",
    woman: "Feminino",
  },
  version: "Bewiki Admin Web ",
  until: "até",
  modals: {
    success: {
      buttonLabel: "OK",
    },
    errors: {
      buttonLabel: "Ok",
    },
    information: {
      closeInfo: "Fechar Informações",
    },
  },
  login: {
    title: "LOGIN",
    subTitle: "Insira seus dados para continuar.",
    remember: "Lembrar-me",
    forgotPass: "Esqueceu sua senha?",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",
    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,
  },

  forgotPass: {
    firstStep: {
      title: "Recuperação de Senha",
      text: "Para continuar, insira seu e-mail. Você receberá um código de confirmação para definir sua nova senha.",
      emailField: "Email",
      continueButton: "Continuar",
    },

    secondStep: {
      title: "Recuperação de Senha",
      text: "Para redefinir sua senha, confirme o Token de 5 dígitos enviado para o seu e-mail.",
      tokenField: "Insira o Token",
      continueButton: "Continuar",
      resendTokenButton: "Reenviar Token",
      cancelButton: "Cancelar",
    },

    thirdStep: {
      title: "Recuperação de Senha",
      text: "Digite abaixo uma nova senha que gostaria de usar para sua conta.",
      newPasswordField: "Nova Senha",
      confirmNewPasswordField: "Confirmação de Nova Senha",
      continueButton: "Continuar",
      cancelButton: "Cancelar",
      successModal: {
        title: "Senha Redefinida",
        text: "A sua nova senha foi redefinida com sucesso!",
        goToLoginButton: "Ir para login",
      },
    },

    cancelModal: {
      title: "Cancelar Recuperação",
      text: "Ao cancelar o processo de recuperação de senha, a mesma não será redefinida e continuará como a antiga.",
      backButton: "Voltar",
      confirmButton: "Sim, cancelar",
    },

    userMessage: baseRequiredMessage,
  },

  error: {
    backHome: "VOLTAR PARA HOME",
    reload: "RECARREGAR",
    error404: "Erro 404.",
    message404: " Esta página apresenta estar fora do ar.",
  },
  header: {
    settings: "Configurações",
    system: "Sistema",
    settingsOptions: {
      integration: "Integrações",
      users: "Usuários",
      permissions: "Permissões",
      changePassword: "Alterar Senha",
    },
    exit: "Deseja encerra sua sessão?",
    exitConfirmationText:
      "Deseja realmente encerra sua sessão e sair do sistema?",
    exitConfirmation: "Sair",
    exitDeny: "Cancelar",
  },

  users: {
    usersFilters: {
      title: "Filtros de Usuários",
      applyFilters: "Aplicar Filtros",
      clearFilters: "Limpar",
      geralData: {
        title: "DADOS GERAIS",
        input: "Nome do Usuário",
      },

      registry: {
        title: "CADASTRO",
        dateStart: "DATA DE INÍCIO",
        dateEnd: "DATA DE FIM",
      },

      blackList: {
        title: "Blacklist de Email",
        subTitle: "Desabilitar email de se registrar no sistema Bewiki.",
        confirmButtom: "Confirmar",
        PopupText: "Email foi desabilitado com Sucesso!",
      },
    },

    enabledUsers: {
      title: "USUÁRIOS HABILITADOS",
      deleteModal: {
        title: "EXCLUIR USUÁRIO",
        text: "Deseja realmente efetuar a deleção deste usuário permanentemente?",
        cancel: "CANCELAR",
        confirm: "SIM, EXCLUIR",
        PopupText: "Usuário foi deletado com Sucesso!",
      },
      blockedModal: {
        title: "BLOQUEAR USUÁRIO",
        text: "Deseja realmente efetuar o bloqueio deste usuário do sistema?",
        cancel: "CANCELAR",
        confirm: "SIM, BLOQUEAR",
        PopupText: "Usuário foi bloqueado com Sucesso!",
      },
      InfoModalCancel: {
        titleButton: "Observações Cancelamento",
        title: "OBSERVAÇÕES DO USUÁRIO",
        userInput: "USUÁRIO",
        dateInput: "DATA",
        subTitle: "OBSERVAÇÃO",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus turpis justo, a hendrerit nisl molestie at. Cras sollicitudin, mi nec dapibus blandit, diam tortor lobortis magna, sit amet eleifend metus eros quis augue. Donec est metus, cursus sit amet magna eu, eleifend auctor erat.",
        back: "VOLTAR",
      },
      TransactionsCashbackModal: {
        titleButton: "Transações de Cashback",
        title: "HISTÓRICO DE CASHBACK DO USUÁRIO",
        userInput: "USUÁRIO",
        table: ["DATA", "VALOR DO CASHBACK", "VERTICAL"],
        back: "VOLTAR",
      },
    },

    blockedUsers: {
      title: "USUÁRIOS BLOQUEADOS",
      UndoModal: {
        title: "REVERTER AÇÕES DE BLOQUEIO",
        text: "Efetuar o desloqueio deste usuário do sistema Bewiki?",
        cancel: "CANCELAR",
        confirm: "SIM, DESBLOQUEAR",
        PopupText: "Usuário foi desbloquedo com Sucesso!",
      },
    },

    BlackList: {
      title: "BLACKLIST",
      UndoModal: {
        title: "REVERTER AÇÕES DE BLACKLIST",
        text: "Efetuar a remoção deste email da blacklist do sistema Bewiki?",
        cancel: "CANCELAR",
        confirm: "SIM, REMOVER",
      },
    },
  },
  cashBack: {
    title: "Cashback",
    verticalFilters: "VERTICAL:",
    clearFilters: "Limpar",
    table: [
      "USUÁRIO",
      "DATA",
      "VALOR DA COMPRA",
      "CASHBACK",
      "VERTICAL",
      {
        data: [<>&nbsp;</>],
      },
      "AÇÃO",
    ],

    EditbalanceCashbackModal: {
      buttonModalName: "EDITAR SALDO",
      Title: "EDITAR SALDO DE CASHBACK",
      subTitle1: "EDIÇÃO DE SALDO",
      subTitle2: "TOTAL APÓS EDIÇÃO",
      currentBalance: "SALDO ATUAL",
      valueToAdd: "VALOR A ADICIONAR",
      valueTotalBalanceCashback: "VALOR TOTAL DE SALDO DE CASHBACK",
      cancel: "CANCELAR",
      confirm: "CONFIRMAR EDIÇÃO DE SALDO",
    },
    DeletebalanceCashbackModal: {
      buttonModalName: "EXCLUIR SALDO",
      Title: "EXCLUIR SALDO DE CASHBACK",
      subTitleText:
        "Deseja realmente excluir o saldo de cashback atual desta conta Bewiki?",
      currentBalance: "SALDO ATUAL",
      back: "VOLTAR",
      confirm: "SIM, EXCLUIR SALDO",
    },
  },
  pagesConfig: {
    beHome: {
      BeHomeHistoricReserve: "RESERVAS SOLICITADAS",
      RegisterApartment: "Cadastro de Studios",
      BehomePrevisonFlow: "PREVISÃO DE FLUXO",
      BehomeStudiosList: "Listagem de Studios",
      PendingCheckIns: "Check-ins Pendentes",
      BehomeSignatures: "ASSINATURAS",
      BehomeStudiosEditing: "EDIÇÃO DE STUDIOS",
      Historic: "Histórico",
      ReservationImport: "Importação de Reservas",
    },
    beMarket: {
      CouponList: "Liberar Cupons",
      RestaurantLists: "Lista de Restaurantes",
    },
  },

  beWork: {
    HistoricRelease: {
      title: "Histórico de Lançamentos",
      cancelButton: "Cancelar",
      approveButton: "Aprovar",
      table: [
        "Usuario",
        "Check-in",
        "Check-out",
        "Modalidade",
        "Status do Pagamento",
        {
          data: [<>&nbsp;</>],
        },
      ],
    },
    CoworkRegister: {
      title: "Cadastro de Cowork",
    },
  },

  beHome: {
    DropdownActions: {
      transferReservation: "Transfirir",
      chargebackReservation: "Estornar Reserva",
      checkInHistory: "Histórico de Check-in",
      guestSheet: "Ficha de Hóspede",
    },

    notFound: {
      message: baseReload.message,
      buttonLabel: baseReload.buttonLabel,
    },

    StayTypes: {
      S: "Hospedagem",
      L: "Moradia",
    },

    RequestedReservations: {
      title: "Reservas Solicitadas",
      filterTitle: "MODALIDADE:",
      cancelButton: "Cancelar",
      TransferButton: "Transferir",
      ApproveButton: "Aprovar",
      table: [
        "USUÁRIO",
        "CHECK-IN / CHECK-OUT",
        "MODALIDADE",
        "QUARTO",
        "ID EXTERNO",

        "AÇÃO",
      ],

      modalInformation: {
        title: "RESERVAS SOLICITADAS",
        text1:
          "Efetuar o Cancelamento de novas requisições acarretarão no estorno automático para o cliente, liberando imediatamente o Studio em questão.",
        text2:
          "Ao aprovar uma nova requisição, você confirma como Admin a passagem daquele Studio para o status de Ocupado.",
        confirm: "OK, ENTENDI",
      },

      ModalApprove: {
        title: "APROVAR",
        text1: "Confira os dados do morador para a confirmação da reserva:",

        residentData: "DADOS DO MORADOR:",

        confirm: "SIM, APROVAR RESERVA",
        back: "VOLTAR",
        titlePopup: "SUCESSO!",
        PopupText: "Reserva Aprovada com Sucesso!",
        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        inputStay: "ESTADIA",
      },

      ModalcancelReserve: {
        titleCancel: "CANCELAR",
        text1:
          "Deseja realmente cancelar esta reserva? Este processo não efetua o estorno imediato para os usuários.",

        residentData: "DADOS DO MORADOR:",
        text2:
          "GARANTA QUE O USUÁRIO DO CANCELAMENTO ESTEJA CIENTE DO OCORRIDO",

        confirm: "SIM, CANCELAR RESERVA",
        back: "VOLTAR",
        titlePopup: "SUCESSO!",
        PopupText: "Reserva Cancelada com Sucesso!",
        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        observations: "OBSERVAÇÕES CANCELAMENTO",
        inputStay: "ESTADIA",
      },

      ModalTransferReserve: {
        titleTransfer: "TRANSFERIR",
        text1:
          "Ao transferir um cliente de quarto, você deve escolher o número de identificação do quarto de destino para o usuário:",

        currentData: "DADOS ATUAIS:",
        text2:
          "GARANTA QUE O USUÁRIO DA TRANSFERÊNCIA ESTEJA CIENTE DA MUDANÇA",

        transferData: "DADOS DA TRANSFERÊNCIA",
        titlePopup: "SUCESSO!",
        PopupText: "Cliente transferido com Sucesso!",
        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        inputStay: "ESTADIA",
        selectCategory: "CATEGORIA",
        idBedroom: "ID QUARTO",
        confirm: "SIM, TRANSFERIR RESERVA",
        back: "Cancelar",
      },
    },

    HistoricList: {
      title: "Histórico",
      filterTitle: "MODALIDADE:",
      cancelButton: "Cancelar",
      TransferButton: "Transferir",
      ApproveButton: "Aprovar",
      table: [
        "USUÁRIO",
        "CHECK-IN / CHECK-OUT",
        "MODALIDADE",
        "STATUS CHECK-IN",
        { data: [<>&nbsp;</>] },
        "AÇÃO",
      ],

      ModalTransfer: {
        titleTransfer: "TRANSFERIR",
        text1:
          "Ao transferir um cliente de quarto, você deve escolher o número de identificação do quarto de destino para o usuário:",

        currentData: "DADOS ATUAIS:",
        text2:
          "GARANTA QUE O USUÁRIO DA TRANSFERÊNCIA ESTEJA CIENTE DA MUDANÇA",

        transferData: "DADOS DA TRANSFERÊNCIA",
        titlePopup: "SUCESSO!",
        PopupText: "Cliente transferido com Sucesso!",
        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        inputStay: "ESTADIA",
        selectCategory: "CATEGORIA",
        idBedroom: "ID QUARTO",
        confirm: "SIM, TRANSFERIR RESERVA",
        back: "Cancelar",
      },

      Modalcancel: {
        titleCancel: "CANCELAR",
        text1:
          "Deseja realmente cancelar esta reserva? Este processo não efetua o estorno imediato para os usuários.",

        residentData: "DADOS DO MORADOR:",
        text2:
          "GARANTA QUE O USUÁRIO DO CANCELAMENTO ESTEJA CIENTE DO OCORRIDO",

        confirm: "SIM, CANCELAR RESERVA",
        back: "VOLTAR",
        titlePopup: "SUCESSO!",
        PopupText: "Reserva Cancelada com Sucesso!",
        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        observations: "OBSERVAÇÕES CANCELAMENTO",
        inputStay: "ESTADIA",
      },

      ReturnModal: {
        title: "Estornar Reserva",
        text1: "Deseja realmente confirmar o estorno dessa reserva?",

        reserveData: "DADOS DA RESERVA",
        StudioData: "DADOS DO STUDIO",

        confirm: "CONFIRMAR ESTORNO",
        cancel: "CANCELAR",
        titlePopup: "SUCESSO!",
        PopupText: "Reserva Cancelada com Sucesso!",
        inputUser: "USUÁRIO",
        inputValue: "VALOR",
        inputModality: "MODALIDADE",
        inputStudio: "STUDIO",
        inputDateCancel: "DATA DO CANCELAMENTO",
        inputStayDate: "ESTADIA",
      },

      HistoricCheckinModal: {
        title: "Histórico de Check-in",
        subTitle1: "SOLICITAÇÃO INICIAL DA RESERVA",
        text1: "DATA EM QUE O USUÁRIO REALIZOU O FLUXO PRÉ-RESERVA:",

        subTitle2: "SOLICITAÇÃO DO CHECK-IN",
        text2: "DATA DE SOLICITAÇÃO DO CHECK-IN E ENVIO DOS DOCUMENTOS",

        back: "VOLTAR",
        inputCheckInDate: "LIBERAÇÃO DO CHECK-IN",
        inputStudioDate: "ENTRADA NO STUDIO",
        inputHours: "HORÁRIO",
        inputDate: "DATA",
      },

      guestRecordModal: {
        title: "Dados do hóspede",
        buttomName: "Ficha de hóspede",
        back: "VOLTAR",
        selectGuest: "SELECIONAR HÓSPEDE",
      },

      CanceledModal: {
        title: "OBSERVAÇÕES DO USUÁRIO",
        back: "VOLTAR",
        inputUser: "USUÁRIO",
        observations: "OBSERVAÇÃO",
        inputDate: "DATA",
        buttonName: "CANCELADO",
      },
    },

    Signatures: {
      title: "Assinaturas",
      cancelButton: "Cancelar",
      historicButton: "Histórico",
      until: "até",
      table: ["STUDIO", "USUÁRIO", "ESTADIA", "Ação"],

      ModalHistoricSignatures: {
        titleButton: "Histórico",
        title1: "HISTÓRICO DE ASSINATURAS",
        text1: "Visualize o histórico de assinaturas deste studio",
        title2: "DADOS DOS PAGAMENTOS DOS MORADORES",
        back: "VOLTAR",
        table: ["DATA", "VALOR", "TIPO"],
      },

      ModalcancelSignatures: {
        titleButton: "CANCELAR",
        titleCancel: "CANCELAR ASSINATURA",
        text1:
          "Deseja realmente cancelar esta assinatura? Este processo não efetua o estorno imediato para os usuários.",

        residentData: "DADOS DO MORADOR:",
        text2:
          "GARANTA QUE O USUÁRIO DO CANCELAMENTO ESTEJA CIENTE DO OCORRIDO",

        confirm: "SIM, CANCELAR ASSINATURA",
        back: "VOLTAR",

        inputUser: "USUÁRIO",
        inputModality: "MODALIDADE",
        inputStay: "ESTADIA",
        cancelReason: "MOTIVO DE CANCELAMENTO",
        cancelSuccess: {
          title: "ASSINATURA CANCELADA",
          description: "Assinatura cancelada com sucesso!",
          continue: "CONTINUAR",
        },
      },
    },

    PrevisionFlow: {
      title: ["Previsão de Fluxo", "Listagem de Fluxo"],
      filters: {
        modality: "MODALIDADE:",
        typeStudio: "STUDIO:",
        status: "STATUS:",
        date: "DATA:",
      },
      table: ["TIPO DO STUDIO", "ID STUDIO", "ID EXTERNO", "STATUS"],
      cardText: {
        titles: [
          "OCUPAÇÃO ATUAL",
          "CHECK-INS PREVISTOS",
          "CHECK-OUTS PREVISTOS",
        ],
      },
    },

    StudioDetailsList: {
      title: ["Dados do espaço", "Reserva atual", "Reservas futuras"],
      form: {
        studioData: [
          "Nome do espaço",
          "ID studio",
          "ID externo",
          "Modalidade",
          "Valor da locação por diária",
          "Tagline",
          "Descrição",
        ],
        reservation: ["Usuário", "Check-in", "Check-out"],
      },
      table: [
        "USUÁRIO",
        "CHECK-IN",
        "CHECK-OUT",
        { data: [<>&nbsp;</>] },
        "AÇÃO",
      ],
    },

    StudioInfoList: {
      table: [
        "TIPO DO STUDIO",
        "ID STUDIO",
        "ID EXTERNO",
        { data: [<>&nbsp;</>] },
        "STATUS",
      ],
    },

    RegisterApartment: {
      Title: "Cadastro de Apartamentos",
      cancelButton: "CANCELAR CADASTRO DE STUDIO",
      confirmButton: "CONFIRMAR CADASTRO DE STUDIO",

      BasicDataStudio: {
        title: "DADOS BÁSICOS DO STÚDIO",
        textHelper: "CADASTRAR MÚLTIPLAS CÓPIAS DESTE MESMO",
        selectLabel: ["LOCALIDADE BEHOME", "MODALIDADE"],
        inputLabel: [
          "Nº MÍNIMO DE PESSOAS",
          "Nº MÁXIMO DE PESSOAS",
          "UNIDADES A CADASTRAR",
        ],
        addressInputs: {
          Title: "ENDEREÇO",
          postalCode: "CEP",
          state: "UF",
          city: "CIDADE",
          district: "BAIRRO",
          street: "RUA",
          number: "NÚMERO",
        },
        addModal: {
          addButton: "ADICIONAR",
          cancelButtom: "CANCELAR",
          deleteButtom: "REMOVER",
          confirmButtom: "CONFIRMAR STUDIOS MÚLTIPLOS",
          inputLabel: ["CÓDIGO DO STUDIO", "ID EXTERNO"],
          title: "UNIDADES A CADASTRAR",
          textTitle:
            "Adicione mais de uma dessa mesma unidade diferenciando pelos códigos de quarto:",
          SubTitle: "LISTAGENS DE STUDIOS POR CÓDIGO:",
        },
      },

      ApartmentDetails: {
        title: "DETALHES DO STÚDIO",
        slectLabel: "METRAGEM",
        inputLabel: [
          "NOME DO ESPAÇO",
          "VALOR DA LOCAÇÃO POR DIÁRIA",
          "TAGLINE",
        ],
      },

      ImageGallery: {
        title: "GALERIA DE IMAGENS",
        placeHolder: "Selecionar Imagem",
        inputLabel: ["IMAGEM DE CAPA", "CARROSSEL DE IMAGENS"],
        textHelper: [
          "01 ARQUIVO COM MÁXIMO DE 3MB",
          "ATÉ 03 ARQUIVOS, CONTENDO NO MÁXIMO 10MB",
        ],
      },

      AdditionalDetails: {
        title: "DETALHES ADICIONAIS",
        subTitle: "SEÇÃO 01",
        addButton: "NOVO ITEM",
        inputLabel: ["TÍTULO", "DESCRIÇÃO"],
      },

      Amenities: {
        title: "AMENIDADES",
        addButton: "NOVO ITEM",
        switchLabel: [
          "INTERNET RÁPIDA",
          "COZINHA COMPARTILHADA",
          "SAUNA",
          "SEGURANÇA",
          "SALA DE LEITURA",
          "ACADEMIA",
          "PISCINA",
        ],
        AmenitiesModal: {
          title: "NOVA AMENIDADE",
          textTitle:
            "Preencha os campos abaixo para cadastrar uma nova amenidade no Studio selecionado:",
          subTitle: "DADOS DA AMENIDADE:",
          inputLabel: ["ÍCONE", "TÍTULO"],
          cancelButtom: "CANCELAR",
          confirmButton: "CONFIRMAR AMENIDADE",
        },
      },

      OnDemand: {
        title: "SERVIÇOS ON DEMAND",
        addButton: "NOVO ITEM",

        subTitles: ["ITEM 01", "ITEM 02", "ITEM 03", "ITEM 04"], //groupTitle
        inputLabel: ["NOME DO ITEM", "VALOR DO ITEM", "TAGLINE", "DESCRIÇÃO"],
        placeHolder: "Selecionar Imagem",
        inputImage: "IMAGEM DE CAPA",
        textHelper: [
          "CASO O VALOR SEJA DEIXADO EM BRANCO, TORNA-SE A CONSULTAR",
          "01 ARQUIVO COM MÁXIMO DE 500KB",
        ],
        OnDemandModal: {
          title: "NOVA AMENIDADE",
          textTitle:
            "Preencha os campos abaixo para cadastrar uma nova amenidade no Studio selecionado:",
          subTitle: "DADOS DA AMENIDADE:",
          cancelButtom: "CANCELAR",
          confirmButton: "CONFIRMAR AMENIDADE",
        },
      },
    },

    StudiosList: {
      filters: {
        modality: "MODALIDADE:",
        studiosType: "TIPO DO STUDIO:",
        visualization: "VISUALIZAÇÃO:",
      },
      CardView: {
        currentOccupation: "OCUPAÇÃO ATUAL",
        checkIns: "CHECK-INS PREVISTOS",
        checkOuts: "CHECK-OUTS PREVISTOS",
      },
      dropdownActions: {
        checkOut: "Check-Out",
        transfer: "Transferir",
        setDirty: "Sujo",
        setClean: "Limpar",
        cancel: "Cancelar",
      },
      statusLabels: {
        vacantClean: "Disponível",
        vacantDirty: "Vago Sujo",
        unavailable: "Indisponível",
        occupied: "Ocupado",
        checkIn: "Check-in",
      },
    },

    PendingCheckIns: {
      title: "Check-ins Pendentes",
      cancelButton: "Cancelar",
      approveButton: "Aprovar",
      transferButton: "Transferir",
      unableToLoadTableInfo:
        "Não foi possível carregar as informações da tabela.",
      reloadTable: "Tentar novamente",
      empty: "Vazio",
      table: [
        "Usuario",
        "Check-in/Check-out",
        "Modalidade",
        "Quarto",
        "ID EXTERNO",
        { data: [<>&nbsp;</>] },
        "Ação",
      ],
      goToPage: "Ir à página",
      filters: {
        modality: "Modalidade:",
      },
      modalCustomerDetails: {
        title: "Dados do Hóspede",
        location: "UH Nº (Local)",
        numberOfExtras: "Nº Acompanhantes",
        checkInDate: "Data de Entrada",
        checkOutdate: "Data de Saída",
        time: "Hora",
        customerInformations: "Informações do Hóspede",
        fullName: "Nome Completo",
        birthDate: "Nascimento",
        age: "Idade",
        job: "Profissão",
        nationality: "Nacionalidade",
        sex: "Sexo",
        cpf: "CPF",
        email: "E-Mail",
        idDocument: "Documento de Identidade",
        idDocumentType: "Tipo",
        issuingAgency: "Órgão Expeditor",
        cep: "CEP",
        addressStreet: "Endereço",
        addressNumber: "Nº",
        addressNeighborhood: "Bairro",
        state: "UF",
        city: "Cidade",
        country: "País",
        phone: "Telefone",
        lastDestination: "Último Destino (Cidade, País)",
        nextDestination: "Próximo Destino (Cidade, País)",
        idFront: "Identidade - Frente",
        idBack: "Identidade - Verso",
        goBack: "Voltar",
      },
      modalTransferCheckIn: {
        title: "Transferir",
        buttonText: "Transferir",
        description:
          "Ao transferir um cliente de quarto, você deve escolher o número de identificação do quarto de destino para o usuário.",
        currentData: "Dados Atuais",
        userName: "Usuário",
        stay: "Estadia",
        stayType: "Modalidade",
        transferDataTitle: "Dados da Transferência",
        transferDataDescription:
          "Garanta que o usuário da transferência esteja ciente da mudança.",
        category: "Categoria",
        roomId: "Id Quarto",
        cancel: "Cancelar",
        confirm: "Confirmar Transferência",
      },
      modalCancelCheckIn: {
        title: "Cancelar",
        buttonText: "Reprovar",
        description:
          "Deseja realmente cancelar esta reserva? Este processo não efetua o estorno imediato para os usuários.",
        userDataTitle: "Dados do Morador",
        userDataDescription:
          "Garanta que o usuário do cancelamento esteja ciente do ocorrido.",
        userName: "Usuário",
        stay: "Estadia",
        stayType: "Modalidade",
        cancel: "Voltar",
        confirm: "Sim, cancelar reserva",
        modalCancelSuccess: {
          title: "Reserva Cancelada",
          description: "Reserva cancelada com sucesso.",
          continue: "Continuar",
        },
      },
      modalApproveCheckIn: {
        title: "Aprovar Reserva",
        buttonText: "Aprovar",
        description:
          "Confira os dados do morador para a confirmação da reserva.",
        userDataTitle: "Dados do Morador",
        userName: "Usuário",
        stay: "Estadia",
        stayType: "Modalidade",
        cancel: "Cancelar",
        confirm: "Sim, aprovar reserva",
        modalApprovalSuccess: {
          title: "Reserva Aprovada",
          description: "Reserva aprovada com sucesso!",
          continue: "Continuar",
        },
      },
    },
    ReservationHistory: {
      table: [
        "Usuario",
        "Check-in/Check-out",
        "Modalidade",
        "Status Check-in",
        "",
        "",
        "",
        "",
        "Ação",
      ],
    },

    ReservationImport: {
      Title: "Importação de Reservas",
      cancelButton: "CANCELAR",
      confirmButton: "CONFIRMAR RESERVA",

      BasicData: {
        title: "DADOS BÁSICOS DA IMPORTAÇÃO",

        inputModality: "MODALIDADE",
        inputStudioType: "TIPO DE STUDIO",
        inputChekInDate: "DATA DE CHECK-IN",
        inputChekOutDate: "DATA DE CHECK-OUT",
        inputNumberPeople: "NÚMERO DE PESSOAS",
        inputValue: "VALOR DA RESERVA",
      },

      ReservationData: {
        title: "DADOS DA RESERVA",
        contactDataTitle: "DADOS DE CONTATO",
        inputName: "NOME COMPLETO",
        inputCpf: "CPF",
        inputEmail: "EMAIL",
        inputsPhoneNumber: "TELEFONE",
        inputNumberPeople: "NÚMERO DE PESSOAS",
        inputValue: "VALOR DA RESERVA",

        addressTitle: "ENDEREÇO",
        inputPostalCode: "CEP",
        inputState: "UF",
        inputCity: "CIDADE",
        inputDistrict: "BAIRRO",
        inputStreet: "RUA",
        inputNumber: "NÚMERO",
      },

      Attachments: {
        title: "ANEXOS",
        contactDataTitle: "DADOS DE CONTATO",
        inputImage: "ASSINATURA DIGITAL",
        sendButtom: "ENVIAR",
      },
    },

    StudiosEditing: {
      title: "Edição de Studios",
      subTitle: "STUDIOS CADASTRADOS",
      studio: "STUDIO",
      studioName: "NOME DO STUDIO",
      editStudioButtom: "EDITAR STUDIO",
      cancelEditButtom: "CANCELAR EDIÇÃO",
      confirmButtom: "Confirmar Edição de Studio",
    },
  },

  beMarket: {
    notFound: {
      message: baseReload.message,
      buttonLabel: baseReload.buttonLabel,
    },
    couponList: {
      allCoupons: {
        title: "Liberar Cupons",
        couponCard: {
          redeemForCPF: "Liberar p/ CPF",
          coupon: "CUPOM",
          redeemCouponModal: {
            title: "LIBERAR CUPOM PARA CPF",
            cpf: "CPF",
            back: "Voltar",
            confirm: "Confirmar",
          },
          redeemCouponSuccess: {
            title: "CUPOM LIBERADO",
            text: "O cupom selecionado foi disponibilizado ao usuário com sucesso!",
            continue: "CONTINUAR",
          },
        },
      },
      redeemedUsers: {
        table: ["CPF", "DATA LIBERAÇÃO"],
      },
    },

    RestaurantLists: {
      title: "Lista de Restaurantes",
      cancelButton: "Cancelar",
      historicButton: "Histórico",
      until: "até",
      table: [
        "RESTAURANTE",
        "RAZÃO SOCIAL",
        "TELEFONE",
        "ENDEREÇO",
        "DATA ENTRADA",
        "N° VENDAS",
        "LOGO",
      ],

      ModalRestaurantLogo: {
        titleButton: "VISUALIZAR",
        title: "LOGO DO RESTAURANTE",
        nameTitle: "Pure Foods Natural",
        back: "VOLTAR",
      },
    },
  },
};

export default ptBr;
