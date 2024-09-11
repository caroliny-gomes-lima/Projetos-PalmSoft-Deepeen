export default function getTimeFromDateTimeString(dateTimeString) {
  const date = new Date(dateTimeString);

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
