import Link from "next/link"

export default function Header() {
  return (
    <header>
      <nav>
        <h1>TechFix</h1>
        <ul>
          <li><Link href={`/`}>Inicio</Link></li>
          <li><Link href={`/`}>Serviços</Link></li>
          <li><Link href={`/`}>Sobre</Link></li>
          <li><Link href={`/`}>Contatos</Link></li>
        </ul>
        <button>Fale conosco</button>
      </nav>
    </header>
  )
}