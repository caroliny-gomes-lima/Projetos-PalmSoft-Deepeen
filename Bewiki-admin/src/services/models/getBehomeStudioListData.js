export default function getBehomeStudioListData(response) {
  if (response.status === 204) {
    return { content: [], totalPages: 0 };
  }

  const data = response.data.content.map((item) => {
    return {
      id: item.id,
      studioName: item.name, //nameContent
      studioType: item.category.name,
      status: item.status,
      occupied: item.occupied,
      externalId: item.externalId,
    };
  });

  return {
    content: data,
    totalPages: response.data.totalPages,
  };
}
