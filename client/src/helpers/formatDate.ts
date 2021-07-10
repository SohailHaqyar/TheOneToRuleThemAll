export function formatDate(date: number): Date {
  let d = new Date(date);
  d.setTime(d.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
  return d;
}
