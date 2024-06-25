export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZeros(date.getHours());
  const minutes = padZeros(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZeros(number) {
  return number.toString().padStart(2, "0");
}
