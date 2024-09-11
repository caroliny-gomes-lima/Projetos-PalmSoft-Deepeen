import { create, RequestTransform } from "apisauce";
import caller from "./helpers/caller";
import buildQueryParamsUrl from "./helpers/buildQueryParamsURl";
import { models, SessionStorage } from "../utils";

const apiUrl = process.env.REACT_APP_API;

const api = create({
  baseURL: apiUrl,
  timeout: 500000,
});

// api.addRequestTransform((request: any) => {
//   const token = SessionStorage.getItem("token");

//   if (token) {
//     request.headers.authorization = token;
//   }
// });

// api.addMonitor((response: any) => {
//   const token = response.headers.authorization;

//   if (token) {
//     SessionStorage.setItem("token", token);
//   }
// });

async function Login(loginData) {
  return caller(api.post, "/login", null, loginData);
}

// async function sendRecoveryPasswordRequest(data) {
//   return caller(
//     api.post,
//     `/access/password_reset_request?email=${data.email}`,
//     null
//   );
// }

// async function recoveryPasswordValidate(data) {
//   return caller(api.post, "/access/password_reset_code", null, data);
// }

// async function sendRecoveryPasswordNewPassword(data) {
//   return caller(
//     api.post,
//     `/access/password_reset_confirmation`,
//     null,
//     data.body,
//     {
//       headers: { Authorization: "Bearer " + data?.token },
//     }
//   );
// }

// async function putChangePassword(data) {
//   return caller(api.post, "/access/redefinition", null, data);
// }

// {  headers: { "Access-Control-Allow-Origin": "*" }}

//------------------------------Usuários------------------------------
async function GetUser() {
  return caller(api.get, "/user", null);
}

// async function GetUserAll(data: Record<string, any>) {
//   return caller(api.get, buildQueryParamsUrl("/user/all", data), null);
// }

// async function RegisterUser(data) {
//   return caller(api.post, "/user/admin", null, data);
// }

// async function EditMyUser(data) {
//   return caller(api.put, "/user", null, data);
// }

// async function EditUser(id: any, data: any) {
//   return caller(api.put, `/user?userId=${id}`, null, data);
// }

// async function DeleteUser(id: any) {
//   return caller(api.delete, `/user?userId=${id}`, null);
// }
// //------------------------------------------------------------------------------

// //------------------------------Docs para Analisar------------------------------
// async function GetUserImage(UserId: string, ImageId: string) {
//   return caller(api.get, `/user/${UserId}/docs/${ImageId}`, null);
// }

// async function GetAllUserDataDocs(data) {
//   return caller(api.get, buildQueryParamsUrl("/user/docs/all", data), null);
// }

// async function AcceptOrDenyUserDocs(id: string, body: any) {
//   return caller(api.patch, `/user/${id}/docs/accept`, null, body);
// }
// //-----------------------------------------------------------------------------

// //------------------------------Blog------------------------------
// async function GetBlogList(data: Record<string, any>) {
//   return caller(api.get, buildQueryParamsUrl("/blog", data), null);
// }

// async function GetBlogImage(id: string, blogId: string) {
//   return caller(api.get, `/blog/${blogId}/image/${id}`, null);
// }

// async function AddBlog(data) {
//   return caller(api.post, "/blog", null, data);
// }

// async function EditBlog(data) {
//   return caller(api.put, "/blog", null, data);
// }

// async function DeleteBlog(id: any) {
//   return caller(api.delete, `/blog/${id}`, null);
// }
// //---------------------------------------------------------------------------

// //------------------------------Perfil------------------------------
// async function EditUserImage(data) {
//   return caller(api.patch, "/user/image", null, data);
// }

// async function GetUserProfileImage() {
//   return caller(api.get, "/user/image", null);
// }
// //---------------------------------------------------------------------------

// //------------------------------Home------------------------------
async function getDashHome() {
  return caller(api.get, `/metric/dashboard`, models.getDashboard, null);
}
async function getImage(id: string) {
  return caller(api.get, `/user/image?userId=${id}`, null);
}

async function GetPreservedAreasDashList() {
  return caller(api.get, `/preserved-area`, null, null);
}

async function GetPreservedAreaDashImage(preservedAreaId: any, imageId: any) {
  return caller(
    api.get,
    `/preserved-area/${preservedAreaId}/image/${imageId}`,
    null
  );
}
// //--------------------------------------------------------------------------

// //-----------------------------Depósito-----------------------
// async function getCurrency() {
//   return caller(api.get, `/currency`, null, null);
// }

// async function editCurrency(value: { value: number }) {
//   return caller(api.put, `/currency`, null, value);
// }

// async function getAllDeposits(data) {
//   return caller(api.get, buildQueryParamsUrl("/transaction/all", data), null);
// }

// async function getAllPendingDeposits(data) {
//   return caller(
//     api.get,
//     buildQueryParamsUrl("/transaction/all/pending", data),
//     null
//   );
// }

// async function getAllReceivedDeposits(data) {
//   return caller(
//     api.get,
//     buildQueryParamsUrl("/transaction/all/received", data),
//     null
//   );
// }

// async function acceptTransaction(id: string) {
//   return caller(api.post, `/transaction/${id}/accept`, null, null);
// }

// async function getPaymentLink(id: string) {
//   return caller(api.get, `/payment/${id}/link/details`, null, null);
// }
// //------------------------------------------------------------------------------

// //-----------------------------Áreas Reservadas-----------------------
// async function GetPreservedAreasList(data) {
//   return caller(api.get, buildQueryParamsUrl("/preserved-area", data), null);
// }

// async function GetPreservedAreaImage(preservedAreaId: any, imageId: any) {
//   return caller(
//     api.get,
//     `/preserved-area/${preservedAreaId}/image/${imageId}`,
//     null
//   );
// }

// async function GetPreservedAreaVideo(preservedAreaId: any, videoId: any) {
//   return caller(
//     api.get,
//     `/preserved-area/${preservedAreaId}/video/${videoId}/download`,
//     null,
//     null,
//     {
//       responseType: "blob",
//     }
//   );
// }

// async function RegisterPreservedArea(data) {
//   return caller(api.post, "/preserved-area", null, data);
// }

// async function EditPreservedArea(data) {
//   return caller(api.put, "/preserved-area", null, data);
// }

// async function DeletePreservedArea(id: any) {
//   return caller(api.delete, `/preserved-area/${id}`, null);
// }

// //-----------------------------Copiar Aqui Depois-----------------------
// //-----------------------------Nfts-----------------------
// async function Nfts(data) {
//   return caller(api.get, buildQueryParamsUrl("/nft", data), null);
// }

// async function NftsAvailable(data) {
//   return caller(api.get, buildQueryParamsUrl("/nft/available", data), null);
// }

// async function NftsImage(nftId: any, imageId: any) {
//   return caller(api.get, `/nft/${nftId}/image/${imageId}`, null);
// }

// async function NftsRequestImage(nftId: any, imageId: any) {
//   return caller(api.get, `/nft-redeem/${nftId}/image/${imageId}`, null);
// }

// async function addNft(data) {
//   return caller(api.post, "/nft", null, data);
// }

// async function EditNft(data) {
//   return caller(api.put, "/nft", null, data);
// }

// async function DeleteNft(id: any) {
//   return caller(api.delete, `/nft/${id}`, null);
// }

// async function RequestedNfts(data) {
//   return caller(api.get, buildQueryParamsUrl("/nft-redeem/all", data), null);
// }

// async function AcceptOrDenyNfts(id: any, accept: any) {
//   return caller(api.post, `/nft-redeem/${id}/analyse?accept=${accept}`, null);
// }

// async function postRedeemNft(data: any) {
//   return caller(api.post, `/nft-redeem`, null, data);
// }

// async function postSwapRedeemNft(data: any) {
//   return caller(api.post, `/nft-redeem/swap-nft`, null, data);
// }

const apiServices = {
  Login,
  // sendRecoveryPasswordRequest,
  // sendRecoveryPasswordNewPassword,
  // recoveryPasswordValidate,
  // putChangePassword,

  GetUser,
  // RegisterUser,
  // EditMyUser,
  // EditUser,
  // DeleteUser,
  // GetUserAll,
  // GetUserImage,
  // GetAllUserDataDocs,
  // AcceptOrDenyUserDocs,
  // GetBlogList,
  // GetBlogImage,
  // AddBlog,
  // EditBlog,
  // DeleteBlog,
  // getCurrency,
  // editCurrency,

  // EditUserImage,
  // GetUserProfileImage,
  getDashHome,
  getImage,
  GetPreservedAreasDashList,
  GetPreservedAreaDashImage,
  // getAllDeposits,
  // getAllPendingDeposits,
  // getAllReceivedDeposits,
  // acceptTransaction,
  // getPaymentLink,
  // GetPreservedAreasList,
  // GetPreservedAreaImage,
  // GetPreservedAreaVideo,
  // RegisterPreservedArea,
  // EditPreservedArea,
  // DeletePreservedArea,
  // Nfts,
  // RequestedNfts,
  // AcceptOrDenyNfts,
  // NftsImage,
  // NftsRequestImage,
  // addNft,
  // EditNft,
  // DeleteNft,
  // postRedeemNft,
  // NftsAvailable,
  // postSwapRedeemNft,
};

export default apiServices;
