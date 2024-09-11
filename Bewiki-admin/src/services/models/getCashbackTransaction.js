export default function getCashbackTransaction(response) {
  if (response.status === 204) {
    return { data: "" };
  }
  const data = response.data.content.map((item) => ({
    value: item.transaction.value,
    date: item.transaction.createdAt,
    type: item.sector.name,
  }));
  return {
    ...response,
    data,
  };
}
