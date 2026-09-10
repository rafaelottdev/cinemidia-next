import Link from "next/link"

function NotFound() {
  return (
    <section className="not_found_section">
      <p>pagina não encontrada</p>
      <Link href="/">Home</Link>
    </section>
  )
}

export default NotFound
