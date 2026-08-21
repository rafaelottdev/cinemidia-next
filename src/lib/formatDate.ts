export default function formatDate(
  dateString: string,
  withYear: boolean = false,
) {
  if (!dateString) return "Sem Data"

  const date = new Date(dateString)

  if (withYear) {
    return date
      .toLocaleDateString("pt-br", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(/ de /g, " ")
  } else {
    return date.toLocaleDateString("pt-br", {
      day: "numeric",
      month: "long",
    })
  }
}
