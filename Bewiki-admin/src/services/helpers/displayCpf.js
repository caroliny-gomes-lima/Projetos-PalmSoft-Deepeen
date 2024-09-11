export default function displayCpf(cpfString) {
  const firstGroup = cpfString.substring(0, 3);
  const secondGroup = cpfString.substring(3, 6);
  const thirdGroup = cpfString.substring(6, 9);
  const fourthGroup = cpfString.substring(9, 11);

  return `${firstGroup}.${secondGroup}.${thirdGroup}-${fourthGroup}`;
}
