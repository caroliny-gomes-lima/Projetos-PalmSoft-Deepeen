import getToken from "./getToken";
import getUserInfos from "./getUserInfos";
import sendPasswordCode from "./sendRecoveryPasswordCode";
import sendNewPassword from "./sendRecoveryPasswordNewPassword";
import sendPasswordRequest from "./sendRecoveryPasswordRequest";
import sendCreateAccessModel from "./sendCreateAccess";
import getEnabledUsers from "./getEnabledUsers";
import getInfoCancellation from "./getInfoCancellation";
import getBlackListUsers from "./getBlackListUsers";
import getCashBackList from "./getCashBackList";
import getCashbackTransaction from "./getCashbackTransaction";

import sendUpdateUserAccessModel from "./sendUpdateUserAccess";
import getBeHomeRequestedReservations from "./getBeHomeRequestedReservations";
import getBehomeSubscriptions from "./getBehomeSubscriptions";
import getBeHomeTransaction from "./getBeHomeTransaction";

import getBehomePendingCheckIns from "./getBeHomePendingCheckIns";
import getBeHomeGuestSheet from "./getBeHomeGuestSheet";
import getBehomeCheckInTransferCategoriesInfo from "./getBehomeCheckInTransferCategoriesInfo";
import getBehomeCheckInTransferAvailableRooms from "./getBehomeCheckInTransferAvailableRooms";
import getBeHomeLocation from "./getBeHomeLocation";
import getBeHomeAmenity from "./getBeHomeAmenity";
import getBeHomeStayCategory from "./getBeHomeStayCategory";
import getBeHomeStayId from "./getBeHomeStayId";
import getBehomeStayIdRoom from "./getBehomeStayIdRoom";
import getBeHomeOnDemand from "./getOnDemand";
import getBehomeStayPrevisionFlow from "./getBehomeStayPrevisionFlow";
import getBehomeStayCheckInfoFlow from "./getBehomeStayCheckInfoFlow";
import getBehomeStudioListData from "./getBehomeStudioListData";
import getBehomeStudio from "./getBehomeStudio";
import getState from "./getState";

import getBeMarketMerchants from "./getBeMarketMerchants";

const models = {
  getToken,
  getUserInfos,
  sendPasswordCode,
  sendNewPassword,
  sendPasswordRequest,
  sendCreateAccessModel,
  sendUpdateUserAccessModel,
  getEnabledUsers,
  getBlackListUsers,
  getCashBackList,
  getCashbackTransaction,
  getBeHomeRequestedReservations,
  getBeHomeLocation,
  getBeHomeAmenity,
  getBeHomeStayCategory,
  getBeHomeStayId,
  getBehomeStayIdRoom,
  getBeHomeOnDemand,
  getBehomePendingCheckIns,
  getBeHomeGuestSheet,
  getBehomeCheckInTransferCategoriesInfo,
  getBehomeCheckInTransferAvailableRooms,
  getBehomeSubscriptions,
  getBeHomeTransaction,
  getBehomeStayPrevisionFlow,
  getBehomeStayCheckInfoFlow,
  getBehomeStudioListData,
  getInfoCancellation,
  getBehomeStudio,
  getState,
  getBeMarketMerchants,
};
export default models;
