import { paths } from "../navigation/navigate";
import { Home, AccountBalanceWallet, Group } from "@material-ui/icons/";

import Logos from "../config/logos";
import Icons from "../config/icons";
import texts from "./texts";

const Texts = texts["pt-BR"].pagesConfig;
const pagesConfig = {
  notLogged: [
    {
      navigationId: 0,
      path: paths.login,
      name: "Login",
    },
    {
      navigationId: 1,
      path: paths.forgotPassword,
      name: "ForgotPassword",
    },
  ],
  logged: [
    {
      dontShow: true,
      pages: [
        {
          navigationId: 0,
          path: paths.home,
          name: "Home",
        },
        {
          navigationId: 1,
          path: paths.changePassword,
          name: "ChangePassword",
        },
        /*{
          navigationId: 2,
          path: paths.userRegister,
          name: "UserRegister",
        },*/
        {
          navigationId: 2,
          path: paths.cashBack,
          name: "CashBackPage",
        },
        {
          navigationId: 2,
          path: paths.users,
          name: "UsersPage",
        },
        {
          navigationId: 2,
          path: paths.beWorkHistoricRelease,
          name: "BeWorkHistoricRelease",
        },
        {
          navigationId: 3,
          path: paths.beHomeRequestedReservations,
          name: "BeHomeRequestedReservations",
        },
        {
          navigationId: 3,
          path: paths.behomeReservationImport,
          name: "BehomeReservationImport",
        },
        {
          navigationId: 3,
          path: paths.beHomeRegister,
          name: "BehomeRegister",
        },
        {
          navigationId: 3,
          path: paths.behomeStudiosEditing,
          name: "BehomeStudioEditing",
        },
        {
          navigationId: 3,
          path: paths.behomeHistoricList,
          name: "BehomeHistoric",
        },
        {
          navigationId: 3,
          path: paths.beHomePrevisionFlow,
          name: "BehomePrevisionFlow",
        },
        {
          navigationId: 3,
          path: paths.behomeStudiosList,
          name: "BehomeStudiosList",
        },
        {
          navigationId: 3,
          path: paths.behomePendingCheckIns,
          name: "BehomePendingCheckIns",
        },
        {
          navigationId: 3,
          path: paths.behomeSignatures,
          name: "BehomeSignatures",
        },
        {
          navigationId: 3,
          path: paths.behomeReservationImport,
          name: "BehomeReservationImport",
        },
        {
          navigationId: 3,
          path: paths.beMarketCouponList,
          name: "BeMarketCouponList",
        },
        {
          navigationId: 3,
          path: paths.beMarketRestaurantLists,
          name: "BeMarketRestaurantLists",
        },
      ],
    },
    {
      groupTitle: "PRINCIPAL",
      dontShow: false,
      pages: [
        {
          navigationId: 0,
          path: paths.home,
          icon: Home,
          title: "Home",
          working: false,
          dontShow: false,
        },
        {
          navigationId: 1,
          path: paths.cashBack,
          icon: AccountBalanceWallet,
          title: "Cashback",
          name: "Cashback",
          working: true,
          dontShow: false,
        },
        {
          navigationId: 2,
          path: paths.users,
          icon: Group,
          title: "Usuários",
          name: "UsersPage",
          working: true,
          dontShow: false,
        },
      ],
    },
    {
      groupTitle: "VERTICAIS",
      icon: undefined,
      dontShow: false,
      pages: [
        {
          navigationId: 0,
          path: undefined,
          icon: Icons.becareIcon,
          subicon: Logos.becareLogo,
          title: undefined,
          name: "Becare",
          working: false,
          dontShow: false,
        },
        {
          navigationId: 1,
          path: paths.beWorkHistoricRelease,
          icon: Icons.beworkIcon,
          subicon: Logos.beworkLogo,
          title: undefined,
          name: "BeWorkHistoricRelease",
          working: true,
          dontShow: false,
          subPage: [
            {
              navigationId: 1,
              path: paths.beWorkHistoricRelease,
              title: "Histórico de Lançamentos",
              name: "BeWorkHistoricRelease",
              working: true,
              showOnsubMenu: true,
            },
          ],
        },
        {
          navigationId: 2,
          path: undefined,
          icon: Icons.bemobiIcon,
          subicon: Logos.bemobiLogo,
          title: undefined,
          name: "Bemobi",
          working: false,
          dontShow: false,
        },
        {
          navigationId: 3,
          path: paths.beHomeRegister,
          icon: Icons.behomeIcon,
          subicon: Logos.behomeLogo,
          title: undefined,
          name: "BehomeRegister",
          working: true,
          dontShow: false,
          subPage: [
            {
              navigationId: 0,
              path: paths.beHomeRegister,
              title: Texts.beHome.RegisterApartment,
              name: "BehomeRegister",
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 1,
              path: paths.behomeStudiosEditing,
              title: Texts.beHome.BehomeStudiosEditing,
              name: "BehomeStudioEditing",
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 2,
              path: paths.behomeHistoricList,
              title: Texts.beHome.Historic,
              name: "BehomeHistoric",
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 3,
              path: paths.beHomeRequestedReservations,
              title: Texts.beHome.BeHomeHistoricReserve,
              name: "BeHomeHistoricReserve",
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 4,
              path: paths.behomePendingCheckIns,
              title: Texts.beHome.PendingCheckIns,
              name: "BehomePendingCheckIns",
              working: true,
              showOnsubMenu: true,
            },

            {
              navigationId: 5,
              path: paths.beHomePrevisionFlow,
              title: Texts.beHome.BehomePrevisonFlow,
              name: "BehomePrevisionFlow",
              working: true,
              showOnsubMenu: true,
              NewRequest: false,
            },

            {
              navigationId: 6,
              path: paths.behomeStudiosList,
              title: Texts.beHome.BehomeStudiosList,
              name: "BehomeStudiosList",
              working: true,
              showOnsubMenu: true,
              NewRequest: false,
            },
            {
              navigationId: 7,
              path: paths.behomeSignatures,
              title: Texts.beHome.BehomeSignatures,
              name: "BehomeSignatures",
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 8,
              path: paths.behomeReservationImport,
              title: Texts.beHome.ReservationImport,
              name: "BehomeReservationImport",
              working: true,
              showOnsubMenu: true,
            },
          ],
        },
        {
          navigationId: 4,
          path: paths.beMarketCouponList,
          icon: Icons.bemarketIcon,
          subicon: Logos.bemarketLogo,
          title: undefined,
          name: "Bemarket",
          working: true,
          dontShow: false,
          subPage: [
            {
              navigationId: 0,
              path: paths.beMarketRestaurantLists,
              title: Texts.beMarket.RestaurantLists,
              working: true,
              showOnsubMenu: true,
            },
            {
              navigationId: 1,
              path: paths.beMarketCouponList,
              title: Texts.beMarket.CouponList,
              working: true,
              showOnsubMenu: true,
            },
          ],
        },
        {
          navigationId: 5,
          path: undefined,
          icon: Icons.beIcon,
          subicon: Logos.beparkLogo,
          title: undefined,
          name: "Bepark",
          working: false,
          dontShow: false,
        },
      ],
    },
  ],
};
export default pagesConfig;
