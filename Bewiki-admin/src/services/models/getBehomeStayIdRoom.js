export default function getBehomeStayIdRoom(response) {
  return response.data.content.map((item) => ({
    id: item.id,
    name: item.name,
  }));
}
