import "./sobre.css"
import CardSobre from "./CardSobre"

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">

      <div className="conteudo">

        <div className="imagem">
          <img 
            src={`./section-image.jpg`}
            alt="Imagem de um computador e um celular"
          />
        </div>

        <div className="infos">

          <div className="texto">
            <span className="claro chamada">Sobre nós</span>
            <h2>Tecnologia, criatividade e compromisso.</h2>
            <p>Somos uma startup apaixonada por resolver problemas através da tecnologia. Acreditamos no poder da inovação, e no desenvolvimento voltado ás necessidades de cada negócio.</p>
          </div>

          <div className="cards">

            <CardSobre 
              icone="fa-regular fa-clock fa-xl"
              descricao="Agilidade na entrega"
            />
            <hr />
            <CardSobre 
              icone="fa-solid fa-user-group fa-xl"
              descricao="Atendimento personalizado"
            />
            <hr />
            <CardSobre 
              icone="fa-solid fa-circle-check fa-xl"
              descricao="Qualidade e segurança"
            />

          </div>
        </div>

      </div>

    </section>
  )
}