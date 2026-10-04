import "./porque.css"
import CardPorque from "./CardPorque"

export default function Porque() {
  return (
    <section className="porque">
      <div className="conteudo">

        <div className="texto">
          <span className="claro chamada">Por que escolher a TechFix?</span>
          <h2><span className="claro">+</span> Que serviços, <br /> parcerias de longo prazo</h2>
          <p>Aqui, você encontra uma equipe dedicada com suporte especializado e soluções que realmente fazer a diferença.</p>
          <button>Fale com a gente <i className="fa-regular fa-comment"></i></button>
        </div>

        <div className="cards">
          <CardPorque 
            icone="fa-solid fa-lightbulb fa-2xl"
            titulo="Soluções personalizadas"
            descricao="Para nós, seu projeto precisa de um tratamento único"
          />
          <CardPorque 
            icone="fa-solid fa-clock fa-2xl"
            titulo="Entrega no prazo"
            descricao="O tempo é um ativo valioso, e nós respeitamos isso."
          />
          <CardPorque 
            icone="fa-solid fa-user-tie fa-2xl"
            titulo="Equipe qualificada"
            descricao="Profissionais qualificados, atualizados e comprometidos."
          />
          <CardPorque 
            icone="fa-solid fa-headset fa-2xl"
            titulo="Suporte de perto"
            descricao="Acompanhamento profissional de perto e personalizado."
          />
        </div>

      </div>
    </section>
  )
}