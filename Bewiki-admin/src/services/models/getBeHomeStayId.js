export default function getBeHomeStayId(response) {
  const data = response.data.response.map((item) => {
    return {
      name: item.name,
      id: item.id,
      stayType: item.stayType,
    };
  });
  return data;
}
