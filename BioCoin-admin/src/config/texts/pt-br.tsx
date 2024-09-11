const baseRequiredMessage = "*Preenchimento obrigatório";
//const baseRequiredFieldsDescription = "*Preenchimento obrigatório";

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
  version: "v ",
  admin: "admin",
  modals: {
    success: {
      buttonLabel: "OK",
    },
    errors: {
      buttonLabel: "Ok",
    },
  },
  home: {},
  pagesConfig: {},

  login: {
    title: "LOGIN",
    remember: "Lembrar-me",
    forgotPass: "Esqueceu sua senha?",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",

    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,

    ModalLogout: {
      title: "Deseja Sair?",
      cancel: "Não",
      Confirm: "Sim",
    },
  },
  forgetPassword: {
    titleStepOne: "ESQUECEU SUA SENHA",
    titleStepTwo: "ESQUECEU SUA SENHA",
    titleStepTree: "ESQUECEU SUA SENHA",
    titleStepFour: "Senha redefinida com sucesso",
    subTitle: [
      "Para sua recuperação de senha, informe seu email cadastrado abaixo:",
      "Informe abaixo o código que enviamos para seu email cadastrado:",
      "Crie sua nova senha informando os dados abaixo:",
      "Sua senha foi redefinida com sucesso, vamos redirecionar você para a tela de login ou você pode clicar para voltar.",
      "Senha redefinida",
    ],
    continue: [
      "ENVIAR",
      "VALIDAR CÓDIGO",
      "CONFIRMAR NOVA SENHA",
      "Fazer login",
    ],
    resendCode: "Reenviar código de confirmação",
    forgotPassword: "Esqueci minha senha",
    enter: "Entrar",
    password: "NOVA SENHA",
    onBackMenu: "Voltar para o login",
    onBack: "VOLTAR",
    cancel: "CANCELAR",
    onNext: "Avançar",
    nwPassword: "Confirmar Senha",
    passwordMessage: baseRequiredMessage,
    user: "EMAIL",
    userMessage: baseRequiredMessage,
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
    },
    changePassword: {
      changePassword: "Alterar Senha",
      passwordChange: "Mudança de Senha",
      successResponse: "Senha alterada com sucesso.",
      actualPassword: "Senha Atual",
      newPassword: "Nova Senha",
      passwordConfirmation: "Confirmação de Nova Senha",
      passwordMessage: baseRequiredMessage,
      confirm: "Confirmar",
    },
    profile: {
      title: "Perfil",
      fullname: "Nome Completo",
      email: "E-Mail",
      password: "Senha",
      phone: "Telefone",
      cpf: "CPF",
      birthDate: "Data de Nascimento",
      logoutButton: "Sair",
      saveButton: "Salvar Alterações",
      required: baseRequiredMessage,
    },
  },

  Main: {
    Customers: {
      nameInput: "Nome Completo",
      emailInput: "E-mail",
      passwordInput: "Senha",
      phoneIput: "Telefone",
      cpfInput: "CPF",
      dateInput: "Data de nascimento",
      saveButton: "Salvar Alterações",
      cancelButton: "cancelar",

      headerTable: {
        table: [
          "ID",
          "Imagem",
          "Nome de usário",
          "E-mail",
          "Tipo de conta",
          "Ações",
        ],
        keys: [" "],
      },

      deleteModal: {
        title: "Deseja excluir esse Cliente?",
        confirmButton: "Excluir",
        cancelButton: "Não",
        ResponseTextSuccess: "cliente deletado com sucesso!",
      },
      infoModal: {
        ResponseTextSuccess: "Edição de cliente com sucesso!",
        titleAdd: "Não foi possível cadastrar o usuário!",
        titleEdit: "Não foi possível concluir a edição!",
        titleDelete: "Não foi possível concluir a edição!",
        cancelButton: "Fechar",
      },
    },

    Users: {
      requiredMessage: baseRequiredMessage,
      nameInput: "Nome Completo",
      emailInput: "E-mail",
      passwordInput: "Senha",
      phoneIput: "Telefone",
      cpfInput: "CPF",
      dateInput: "Data de nascimento",
      buttonClear: "Limpar",
      buttonSend: "Pesquisar",
      saveButton: "Adicionar Usuário",
      editButton: "Salvar Alterações",
      cancelButton: ["cancelar"],

      headerTable: {
        table: [
          "ID",
          "Imagem",
          "Nome de usário",
          "E-mail",
          "Tipo de conta",
          "Ações",
        ],
        keys: [" "],
      },

      deleteModal: {
        title: "Deseja excluir esse usuário?",
        confirmButton: "Excluir",
        cancelButton: "Não",
        ResponseTextSuccess: "Usuário deletado com sucesso!",
      },
      infoModal: {
        titleAdd: "Não foi possível cadastrar o usuário!",
        titleEdit: "Não foi possível concluir a edição!",
        titleDelete: "Não foi possível concluir a edição!",
        cancelButton: "Fechar",
      },
    },

    UsersStatement: {
      headerTable: {
        table: [
          "Emissão",
          "Cod.",
          "Cliente",
          "Valor",
          "Pagamento",
          "Cotação",
          "Status",
          "Ações",
        ],
        keys: [" "],
      },
      approvedButton: "Aprovados",
      pendingButton: "Pendentes",
      allButton: "Todos",
    },

    CheckDocuments: {
      headerTable: {
        table: [
          "ID",
          "Nome e Nome de usuário",
          "E-mail e CPF",
          "Celular e Data de Nascimento",
          "Documento com Foto",
          "Selfie com Doc.",
          // "Comp. de Residência",
        ],
        keys: [" "],
      },
      approvedButton: "Aprovados",
      pendingButton: "Pendentes",
      allButton: "Todos",

      DocumentPhotoModal: {
        title: "Documento com foto",
        confirmButton: ["Aprovar", "Negar"],
        cancelButton: "Cancelar",
        ResponseTextSuccess: "Documento com foto negado!",
        ResponseAproveSuccess: "Documento com foto aprovada!",
        closeButton: "Fechar",
      },
      SelfieDocumentModal: {
        title: "Selfie com Doc.",
        confirmButton: ["Aprovar", "Negar"],
        cancelButton: "Cancelar",
        ResponseTextSuccess: "Selfie com Documento negado!",
        ResponseAproveSuccess: "Selfie com Documento aprovada!",
        closeButton: "Fechar",
      },
      AddressDocumentModal: {
        title: "Comp. de Residência",
        confirmButton: ["Aprovar", "Negar"],
        cancelButton: "Cancelar",
      },
    },

    Blog: {
      headerTable: {
        table: ["ID", "Imagem", "Título", "Data", "Ações"],
        keys: [" "],
      },
      BlogAdd: {
        title: "Título",
        quillEditor: "Texto",
        confirmButton: "Adicionar Blog",
        ResponseTextSuccess: "Blog cadastrado com sucesso!",
        cancelButton: "cancelar",
        requiredMessage: [
          baseRequiredMessage,
          "Todos os campos são de preenchimentos obrigatórios",
        ],
      },
      BlogEdit: {
        title: "Título",
        quillEditor: "Texto",
        confirmButton: "Salvar Alterações",
        cancelButton: "cancelar",
        ResponseTextSuccess: "Edição de blog com sucesso!",
        requiredMessage: [
          baseRequiredMessage,
          "Todos os campos são de preenchimentos obrigatórios",
        ],
      },
      BlogModalDelete: {
        title: "Deseja excluir este Blog?",
        cancel: "Não",
        confirm: "Excluir",
        ResponseTextSuccess: "Blog excluído com sucesso!",
      },
      BlogModalInfo: {
        textInfo: "Não foi possível cadastrar este blog!",
        textInfoEdit: "Não foi possível editar este blog!",
        textDelete: "Não foi possível exluir este blog!",
        cancel: "Fechar",
      },
    },
    PreservedAreas: {
      requiredMessage: [
        baseRequiredMessage,
        "Todos os campos são de preenchimentos obrigatórios",
      ],
      addVideo: "Adicionar vídeo",
      addImage: "Adicionar Fotos",
      nameInput: "Nome da Floresta",
      location: "Localidade",
      latitude: "Latitude",
      longitude: "Longitude",
      country: "País",
      state: "Estado",
      city: "Cidade",
      totalArea: "Área total em M²",
      hectaresArea: "Área em hectáres",
      confirmButton: ["Adicionar Floresta", "Salvar Alterações"],
      cancelButton: "cancelar",
      coordinateInfo: [
        "Insira 8 dígitos em formato numérico e apenas o último dígito sendo a letra S(Sul) ou a letra N(Norte). Exemplo:X°XX′XX.XX″S",
        "Insira 8 dígitos em formato numérico e apenas o último dígito sendo a letra O(Oeste) ou a letra L(Leste). Exemplo:X°XX′XX.XX″S",
      ],

      headerTable: {
        table: ["ID", "Imagem", "Nome", "Localidade", "Ações"],
        keys: [" "],
      },

      deleteModal: {
        title: "Deseja excluir essa Área?",
        confirmButton: "Excluir",
        cancelButton: "Não",
        ResponseTextSuccess: "Área deletada com sucesso!",
      },
      infoModal: {
        ResponseTextSuccess: [
          "Floresta adicionada com sucesso!",
          "Alterações salvas com sucesso!",
        ],
        titleAdd: [
          "Não foi possível adicionar o floresta!",
          "Latitude ou longitude incorretos!",
        ],
        titleEdit: "Não foi possível concluir a edição!",
        titleDelete: "Não foi possível concluir a edição!",
        cancelButton: "Fechar",
      },
    },
    Nft: {
      requiredMessage: [
        baseRequiredMessage,
        "Todos os campos são de preenchimentos obrigatórios",
      ],
      addMedia: "Adicionar Mídia",
      media: "Foto da NFT",
      addQrCode: "Adicionar QR Code",
      nameColectionInput: "Nome da Coleção",
      nameNftInput: "Nome da NFT",
      nameNftNameInput: "Cliente",
      nftId: "NFT*",
      numberNftInput: "Número da NFT",
      numderEditionkInput: "Número da Edição",
      descriptionInput: "Descrição",
      saleLinkInput: "Link de venda",
      confirmButton: ["Adicionar NFT", "Salvar Alterações"],
      confirmButtonSoli: ["Atribuir NFT", "Editar atribuição"],
      cancelButton: "cancelar",

      titleRequestTable: "Solicitações de Resgate",
      approvedButton: "Aprovados",
      pendingButton: "Pendentes",
      allButton: "Todos",
      status: ["Pendente", "Aprovado", "Cancelado", "Inativo"],
      RequestNftHeaderTable: {
        table: ["Emissão", "Cliente", "Carteira Digital", "Status", "Ações"],
        keys: [" "],
      },

      requestNftModal: {
        title: "Resgate de NFT",

        name: "Nome",
        digitalWallet: "Carteira Digital",
        SelfieWithDoc: "Selfie com Documento",
        confirmButton: "Aprovar",
        cancelButton: "Negar",
        closeButton: "Fechar",
        ResponseTextSuccess: [
          "Nft aprovada com sucesso!",
          "Nft negada com sucesso!",
        ],
      },

      titleRegisteredTable: "NFTs Cadastradas",
      RegisteredNftHeaderTable: {
        table: ["ID", "Imagem", "Nome", "Coleção", "Ações"],
        keys: [" "],
      },

      deleteModal: {
        title: "Deseja excluir essa NFT?",
        confirmButton: "Excluir",
        cancelButton: "Não",
        ResponseTextSuccess: "Área deletada com sucesso!",
      },
      infoModal: {
        ResponseTextSuccess: [
          "Nft adicionada com sucesso!",
          "Alterações salvas com sucesso!",
        ],
        titleAdd: "Não foi possível adicoinar a nft!",
        titleEdit: "Não foi possível concluir a edição!",
        titleDelete: "Não foi possível deletar a nft!",
        cancelButton: "Fechar",
      },
    },
  },
};

export default ptBr;
