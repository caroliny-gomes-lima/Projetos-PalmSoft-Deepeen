export default function getBeMarketMerchants(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }
  let data = response.data.content.map((item, i) => {
    return {
      id: item.id,
      name: item.name,
      corporateName: item.corporateName,
      contactPhones: item.contactPhones[0],
      address: item.address.street + "," + item.address.number,
      createdAt: item.createdAt,
      imageId: item.imageId,
    };
  });

  return {
    ...response,
    data: { content: data, totalPages: response.data.totalPages },
  };
}
