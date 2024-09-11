export default function getBeHomeGuestSheet(response) {
  const data = response.data.map((item) => ({
    name: `${item.firstName} ${item.lastName}`,
    birthDate: item.birthDate,
    nationality: item.nationality,
    job: item.job,
    cpf: item.cpf,
    email: item.email,
    phone: item.phone,
    lastDestination: item.lastDestination,
    nextDestination: item.nextDestination,
    idDocument: {
      number: item.idDocumentNumber,
      type: item.idDocumentType,
      issuingAgency: item.issuingAgency,
      issuingAgencyState: item.issuingAgencyState,
    },
    address: {
      number: item.address.number,
      street: item.address.street,
      complement: item.address.complement,
      district: item.address.district,
      city: item.address.city,
      state: item.address.state,
      country: item.address.country,
      cep: item.address.postal_code,
    },
    sex: item.sex,
    imageIds: item.imageIds,
  }));
  return {
    ...response,
    data,
  };
}
