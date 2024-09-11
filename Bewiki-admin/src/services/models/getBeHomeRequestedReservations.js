import { Filters } from "../../lib";
export default function getBeHomeRequestedReservations(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }
  let data = response.data.content.map((item, i) => {
    return {
      id: item.id,
      name: item.name + " " + item.lastName,
      behomeStay: item.behomeStay.name,
      stayType: item.behomeStay.stayType,
      status: "Validar (PlaceHolder)",
      checkIn:
        Filters.fixDateToLabel(item.checkIn) +
        " " +
        "até" +
        " " +
        Filters.fixDateToLabel(item.checkOut),
      externalId: item.behomeStay.externalId,
    };
  });
  return {
    ...response,
    data: { content: data, totalPages: response.data.totalPages },
  };
}
