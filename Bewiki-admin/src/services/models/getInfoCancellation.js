export default function getInfoCancellation(response) {
  if (response.status === 204) {
    return { data: { content: [], totalPages: 0 } };
  }
  let data = response.data.content.map((item, i) => {
    return {
      id: item.id,
      email: item.email,
      cancelReason: item.cancelReason,
    };
  });

  return {
    ...response,
    data: { content: data },
  };
}
