export default function getBehomeStayPrevisionFlow(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }

  let data = response.data.content.map((item) => {
    return {
      id: item.id,
      nameStudio: item.name, //nameContent
      typeStudio: item.category.name,
      status: item.status,
      occupied: item.occupied,
      externalId: item.externalId,
    };
  });

  return {
    data: { content: data, totalPages: response.data.totalPages },
  };
}
