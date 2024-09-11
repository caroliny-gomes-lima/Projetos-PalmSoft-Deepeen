export default function getCashBackList(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }
  let data = response.data.content.map((item, i) => {
    return {
      id: item.user.id,
      name: item.user.name + " " + item.user.lastName,
      lastName: item.user.lastName,
      purchaseValue: item.transaction.value,
      cashbackValue: item.value,
      sector: {
        //id: item.sector.id ? item.sector.id : " ",
        verticalName: item?.sector?.name,
      },
      infoDate: item.createdAt,
      wallet: {
        balance: item.user.wallet.balance,
        cashbackBalance: item.user.wallet.cashbackBalance,
      },
    };
  });
  return {
    data: { content: data, totalPages: response.data.totalPages },
  };
}
