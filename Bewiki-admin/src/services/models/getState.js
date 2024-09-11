export default function getState(response) {
  //console.log(response);
  let data = response.data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      initials: item.initials,
    };
  });
  return { ...response, data };
}
