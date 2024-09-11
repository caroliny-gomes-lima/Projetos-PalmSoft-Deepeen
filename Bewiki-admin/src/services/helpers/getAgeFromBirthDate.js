export default function getAgeFromBirthDate(birthDateString) {
  const birthDate = new Date(...birthDateString.split("-"));
  const now = new Date();

  return milissecondsToYears(now - birthDate);
}

function milissecondsToYears(milisseconds) {
  return Math.trunc(milisseconds / 31536000000);
}
