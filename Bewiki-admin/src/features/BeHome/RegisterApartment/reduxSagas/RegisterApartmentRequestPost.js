import { call, put } from "redux-saga/effects";
import { Alerts } from "../../../../lib";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* RegisterApartmentRequestPost({
  data,
  listOnDemand,
  listAmenities,
}) {
  try {
    const GetAmenities = () => {
      let amenitiesData = [];
      listAmenities.map((item) => {
        Object.keys(data).find((key) => {
          if (
            key === `idAmenities_${item.id}` &&
            data[`idAmenities_${item.id}`] === "true"
          ) {
            amenitiesData.push({ id: item.id });
          }
          return false;
        });

        return item;
      });
      return amenitiesData;
    };

    const GetOnDemand = () => {
      let onDemandsData = [];

      listOnDemand.map((item) => {
        Object.keys(data).find((key) => {
          if (
            key === `idOnDemand_${item.id}` &&
            data[`idOnDemand_${item.id}`] === "true"
          ) {
            onDemandsData.push({ id: item.id });
          }
          return false;
        });
        return item;
      });
      return onDemandsData;
    };

    /*const newOnDemandArray = [
      {
        name: toString(data.newOnDemandData.newOnDemandName)
          ? toString(data.newOnDemandData.newOnDemandName)
          : null,
        price: Number(data.newOnDemandData.newOnDemandPrice)
          ? Number(data.newOnDemandData.newOnDemandPrice)
          : null,
        description: toString(data.newOnDemandData.newOnDemandDescription)
          ? toString(data.newOnDemandData.newOnDemandDescription)
          : null,
        details: toString(data.newOnDemandData.newOnDemandDetails)
          ? toString(data.newOnDemandData.newOnDemandDetails)
          : null,
        image: toString(data?.newOnDemandData?.newOnDemandImage)
          ? toString(
              data?.newOnDemandData?.newOnDemandImage?.replace(
                "data:image/png;base64,",
                ""
              )
            )
          : null,
      },
    ];

    const GetNewOnDemand = () => {
      let onDemandsData = [];
      newOnDemandArray.map((item) => {
        onDemandsData.push({
          name: item.name,
          price: item.price,
          description: item.description,
          details: item.details,
          image: item.image,
        });
      });
      return onDemandsData;
    };

    const GetNewOnDemand = () => {
      let arrayData = [];
      Object.keys(arrayTeste).map((key) => {
        arrayData.push({
          name: arrayTeste[key].name,
          price: arrayTeste[key].price,
          description: arrayTeste[key].description,
          details: arrayTeste[key].details,
          image: arrayTeste[key].image,
        });
      });
      console.log(arrayData);
      return arrayData;
    };

    /*const chooseOnDemand = (chosenOnDemand) => {
      if (chosenOnDemand == listOnDemand) {
        return GetOnDemand();
      }
      if (chosenOnDemand == data.newOnDemandData) {
        return GetNewOnDemand();
      }
      console.log(chosenOnDemand);
      return chosenOnDemand;
    };*/

    const GetStaysList = data.stays.map((item) => {
      return { name: item.codeStudio, externalId: item.externalId };
    });

    const dataRequest = {
      behomeStayLocalizationId: data.behomeStayLocalizationId
        ? data.behomeStayLocalizationId
        : null,
      minPeople: data.minPeople ? Number(data.minPeople) : null,
      maxPeople: data.maxPeople ? Number(data.maxPeople) : null,
      stayType: data.stayType ? data.stayType : null,
      size: data.StudioDetailsSize ? Number(data.StudioDetailsSize) : null,
      name: data.StudioDetailsName ? data.StudioDetailsName : null,
      price: Number(data.StudioDetailsPrice)
        ? Number(data.StudioDetailsPrice)
        : null,
      description: data.StudioDetailsDescription
        ? data.StudioDetailsDescription
        : null,
      icon: data?.ImageGallery0
        ? data?.ImageGallery0?.replace("data:image/png;base64,", "")
        : "null",
      images: [
        data?.ImageGallery1
          ? data?.ImageGallery1?.replace("data:image/png;base64,", "")
          : "null",
        data?.ImageGallery2
          ? data?.ImageGallery2?.replace("data:image/png;base64,", "")
          : "null",
        data?.ImageGallery3
          ? data?.ImageGallery3?.replace("data:image/png;base64,", "")
          : "null",
      ],
      address: {
        number: data.number,
        street: data.street,
        district: data.district,
        city: data.city,
        state: data.state,
        postal_code: data.postal_code,
      },
      stays: data.stays ? GetStaysList : null,
      amenities: GetAmenities(),
      extraFeatures: GetOnDemand(),
    };

    yield call(api.sendBeHomeRegisterApartment, dataRequest);

    yield put(Creators.BeHomeLocationRequest(data.behomeStayLocalizationId));
    yield put(Creators.BeHomeAmenityRequest(data.behomeStayLocalizationId));
    yield put(Creators.BeHomeOnDemandRequest(data.behomeStayLocalizationId));
    yield put(Creators.RegisterApartmentRequestFinish());

    Alerts.alertSuccess(["Apartamento cadastrado com sucesso"]);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage(errorResponse.message);
    yield put(Creators.RegisterApartmentRequestFailure());
  }
}
