export default function getBehomeStudio(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }

  let data = response.data.content.map((item) => {
    return {
      name: item.name,
      id: item.id,
    };
  });

  return {
    data: { content: data, totalPages: response.data.totalPages },
  };
}
