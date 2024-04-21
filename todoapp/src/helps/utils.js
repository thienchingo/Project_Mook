export default function compare(a, b) {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
}
export function compareDateExprided(currentDate, obj) {
  if (currentDate.getTime() > new Date(obj.endDate).getTime()) {
    return true;
  }
  return false;
}
