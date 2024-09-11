export default function getBeHomeLocation(response) {
  let data = response.data.content.map((item) => {
    return {
      id: item.id,
      name: item.name,
      available: item.available,
    };
  });
  return {
    ...response,
    data: { content: data },
  };
}
