export default function getBlackListUsers(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }
  let data = response.data.content.map((item, i) => {
    return {
      id: item.id,
      email: item.email,
      date: item.createdAt,
    };
  });

  return {
    ...response,
    data: { content: data, totalPages: response.data.totalPages },
  };
}
