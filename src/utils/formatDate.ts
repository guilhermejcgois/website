export default function formatDate(
  date: Date,
  locales: string | string[] = "en-GB"
) {
  return new Intl.DateTimeFormat(locales).format(date);
}
