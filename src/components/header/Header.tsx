import Link from "next/link"
import "./header.css"

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

      <div className="main-header">

        <div className="texto-header">
          <span></span>
          <h2></h2>
          <p></p>
        </div>

        <div className="imagem-header">
          <img 
          />
        </div>

      </div>
    </header>
  )
}