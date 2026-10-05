import "./footer.css"
import Formulario from "./Formulario"
import Nav from "./Nav"

export default function Footer() {
  return (
    <footer id="contatos">
      <div className="conteudo">

        <div className="main-footer">
          <div className="texto">
            <span className="claro chamada">Entre em contato</span>
            <h2>Vamos transformar sua ideia em solução!</h2>
            <p>Fale conosco, e nós te responderemos assim que possível.</p>
          </div>

          <div className="redes-sociais">
            <div className="rede-social">
              <i className="fa-brands fa-instagram fa-xl"></i>
              <label>@techfix.management</label>
            </div>

            <div className="rede-social">
              <i className="fa-solid fa-at fa-xl"></i>
              <label>techfix.management@gmail.com</label>
            </div>

            <div className="rede-social">
              <i className="fa-brands fa-whatsapp fa-xl"></i>
              <label>(85) 9 86557364</label>
            </div>
          </div>

          <Formulario />

        </div>

        <hr />

        <Nav />

      </div>

    </footer>
  )
}