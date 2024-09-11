export default function getBeHomeStayCategory(response) {
  return response.data.content.map((item) => ({
    name: item.name,
    id: item.id,
  }));
}
