import { title } from "process";

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
  version: "v ",
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
    subTitle: "Acesse o sistema utilizando seus dados:",
    textRequired: "O (*) indica campo obrigatório.",
    remember: "Lembrar-me",
    forgotPass: "Recuperação de Senha",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",

    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,
  },
  forgetPassword: {
    titleStepOne: "Recuperação de Senha",
    titleStepTwo: "ESQUECEU SUA SENHA",
    titleStepTree: "ESQUECEU SUA SENHA",
    titleStepFour: "Senha redefinida com sucesso",
    subTitle: [
      "Para continuar com a recuperação de senha, por favor confirme seu e-mail:",
      "Por favor, insira o token de 5 dígitos encaminhado para o e-mail informado:",
      "Insira sua nova senha para vincular a sua conta:",
      "Sua senha foi redefinida com sucesso, vamos redirecionar você para a tela de login ou você pode clicar para voltar.",
      "Senha redefinida",
    ],
    continue: [
      "ENVIAR",
      "Confirmar Token",
      "Confirmar Nova Senha",
      "Fazer login",
    ],
    resendCode: "Reenviar código de confirmação",
    forgotPassword: "Esqueci minha senha",
    emailConfirm: "Confirmar E-mail",
    enter: "Entrar",
    password: "Nova Senha",
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
  },


  dashboard: {
    filters: {
      title: "Filtros do Dashboard",
      partner: "Parceiro",
      token: "Token",
      status: "Status",
      Period: "Período",
    },
    totalSubscriptions: "Total Subscriptions",
    completed: "CONCLUÍDAS",
    waiting: "AGUARDANDO",
    totalEnvelopes: "Total de Envelopes",
    numberEnvelopeData: "Nº ENVELOPES",
    pendants: "PENDENTES",
    mediumDocksByEnvelope: "MÉDIA DOCS. POR ENVELOPE",
    totalEnvelopeDay: "Total de Envelopes (Dia)",
    totalEnvelopeMonth: "Total de Envelopes (Mês)",
    shotMessagesMonth: "Mensagens Disparadas (Mês)",
  },

  users: {
    title: "Cadastrar Usuário",
    subTitle: "Cadastre um novo usuário no sistema a partir de seus dados básicos.",
    filters: {
      title: "Buscar Usuário",
      name: "Nome",
      email: "E-mail",
    },
    tableTitle: "Lista de Usuários Cadastrados",
  },

  registerSMTP: {
    title: "Cadastrar SMTP",
    subTitle: "Cadastre uma nova configuração de SMTP.",
    filters: {
      title: "Buscar SMTP",
      idContainer: "ID Container",
      timeStamp: "Timestamp",
      status: "Status",
      success: "Sucesso",
      error: "Erro",
      date: "Data",
      time: "Horário",
    },
    tableTitle: "Lista de SMTPs Cadastrados",
  },

  envelope: {
    filters: {
      title: "Buscar Envelope",
      name: "Nome Responsável",
      documentNumber: "Nº Documentos",
      subscribersNumber: "Nº Assinantes",
      signatureNumber: "Nº Assinaturas",
      status: "Status",
      creationDate: "Data Criação",
      closingDate: "Data Fechamento"
    },
    tableTitle: "Lista de Envelopes do Sistema",
  },

  myProfile: {
    basicDataTitle: "Dados Básicos",
    themeEditProfileTitle: "Editar Tema de Perfil",
    confirmButton: "Confirmar Edições",
    clearButton: "Limpar",
    nameLabel: "None",
    surNameLabel: "Apelido",
    emailabel: "E-mail",
    primaryColorLabel: "Cor Primária",
    secundaryColorLabel: "Cor Secundária",
    imageLabel: "Logomarca ('.png', '.jpg', '.svg')"

  }
};

export default ptBr;
