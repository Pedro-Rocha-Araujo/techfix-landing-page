'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="conteudo">

        <div className="texto">
          <span className="claro chamada">Entre em contato</span>
          <h2>Vamos transformar sua ideia em solução!</h2>
          <p>Fale conosco, e nós te responderemos assim que possível.</p>
        </div>

        <div className="redes-sociais">
          <div className="rede-social">
            <Link href="/"> <i className="fa-brands fa-instagram"></i> </Link>
            <label>@techfix.management</label>
          </div>
          <div className="rede-social">
            <Link href="/"> <i className="fa-solid fa-at"></i> </Link>
            <label>techfix.management@gmail.com</label>
          </div>
          <div className="rede-social">
            <Link href="/"> <i className="fa-brands fa-whatsapp"></i> </Link>
            <label>(85) 9 86557364</label>
          </div>
        </div>

        <form>
          <input 
            placeholder="Seu nome"
            type="text"
            required
          />
          <input 
            placeholder="Seu E-mail"
            type="email"
            required
          />
          <textarea 
            placeholder="Como podemos ajudar?"
            required
          />
          <button>Enviar mensagem</button>
        </form>
      </div>

      <hr />

      <nav>
        <ul>
          <ul>
            <li><Link href={`/`}>Inicio</Link></li>
            <li><Link href={`/`}>Serviços</Link></li>
            <li><Link href={`/`}>Sobre</Link></li>
            <li><Link href={`/`}>Contatos</Link></li>
          </ul>
        </ul>
      </nav>
    </footer>
  )
}