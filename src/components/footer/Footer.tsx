'use client'

import Link from "next/link"
import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="conteudo">

        <div className="main-footer">
          <div className="texto">
            <span className="claro chamada">Entre em contato</span>
            <h2>Vamos transformar sua ideia em solução!</h2>
            <p>Fale conosco, e nós te responderemos assim que possível.</p>
          </div>

          <div className="redes-sociais">
            <div className="rede-social">
              <i className="fa-brands fa-instagram fa-2xl"></i>
              <label>@techfix.management</label>
            </div>

            <div className="rede-social">
              <i className="fa-solid fa-at fa-2xl"></i>
              <label>techfix.management@gmail.com</label>
            </div>

            <div className="rede-social">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
              <label>(85) 9 86557364</label>
            </div>
          </div>

          <form>
            <h3>Preencha suas informações</h3>
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
            <button>Enviar mensagem <i className="fa-regular fa-paper-plane"></i></button>
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

      </div>

    </footer>
  )
}