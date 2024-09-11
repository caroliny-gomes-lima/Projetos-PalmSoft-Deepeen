export default function getBeHomeTransaction(response) {
  const data = response.data.map((item) => ({
    value: item.value,
    date: item.createdAt,
    type: item.type,
  }));
  return {
    ...response,
    data,
  };
}
