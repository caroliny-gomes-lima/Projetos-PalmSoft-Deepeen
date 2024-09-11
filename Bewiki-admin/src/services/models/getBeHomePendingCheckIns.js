export default function getBehomePendingCheckIns(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }

  let data = response.data.content.map((item, i) => {
    return {
      guest: {
        firstName: item.name,
        lastName: item.lastName,
      },
      stay: {
        name: item.behomeStay.name,
        dateCheckIn: item.checkIn,
        dateCheckOut: item.checkOut,
        type: item.behomeStay.stayType,
        externalId: item.behomeStay.externalId,
      },
      checkIn: item.checks.find((item) => item.checkType === "I"),
      subscription: {
        id: item.id,
      },
    };
  });
  return {
    data: { content: data, totalPages: response.data.totalPages },
  };
}
