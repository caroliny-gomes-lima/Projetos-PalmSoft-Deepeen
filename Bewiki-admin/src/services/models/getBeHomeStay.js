export default function getBeHomeStay(response) {
  let data = response.data.content.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return {
    ...response,
    data: { content: data },
  };
}
