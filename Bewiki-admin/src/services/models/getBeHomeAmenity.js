export default function getBeHomeAmenity(response) {
  let data = response.data.content.map((item, i) => {
    return {
      id: item.id,
      name: item.name.toUpperCase(),
      imageId: item.imageId,
    };
  });
  return {
    ...response,
    data: { content: data },
  };
}
