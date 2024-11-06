import { paths } from "../navigation/navigate";
import SVG from "./svg";
const pagesConfig = {
  notLogged: [
    {
      navigationId: 0,
      path: paths.login,
      name: "Login",
    },
    {
      navigationId: 1,
      path: paths.forgetPassword,
      name: "EsqueceuSenha",
    },
  ],
  logged: [
    {
      dontShow: true,
      groupTitle: "Principal",
      pages: [
        {
          navigationId: 0,
          path: paths.dashboard,
          name: "DashboardPage",
          title: "Dashboard",
          icon: SVG.chartIcon,
          working: true,
        },
        {
          navigationId: 0,
          path: paths.users,
          name: "UsersPage",
          title: "Usuários",
          icon: SVG.usersIcon,
          working: true,
        },
        {
          navigationId: 0,
          path: paths.envelope,
          name: "EnvelopePage",
          title: "Envelopes",
          icon: SVG.envelopesIcon,
          working: true,
        },
        {
          navigationId: 0,
          path: paths.registerSMTPpage,
          name: "RegisterSMTPpage",
          title: "Configuração SMTP",
          icon: SVG.smtpIcon,
          working: true,
        },
      ],
    },
    {
      dontShow: true,
      groupTitle: "Sistema",
      pages: [
        {
          navigationId: 0,
          path: paths.myProfile,
          name: "myProfilePage",
          title: "Meu Perfil",
          icon: SVG.profileIcon,
          working: true,
        },
        {
          navigationId: 0,
          path: paths.dashboard,
          name: "DashboardPage",
          title: "Sair",
          icon: SVG.exitIcon,
          working: true,
        },
      ],
    },
  ],
};
export default pagesConfig;
