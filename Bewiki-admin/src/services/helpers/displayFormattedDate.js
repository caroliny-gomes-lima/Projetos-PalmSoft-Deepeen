export default function displayFormattedDate(dateString) {
  const formatter = Intl.DateTimeFormat("pt-br");
  const date = new Date(...dateString.split("-"));

  return formatter.format(date);
}
