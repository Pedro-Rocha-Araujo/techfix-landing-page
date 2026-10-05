import CardDepoimentos from "./CardDepoimentos"
import "./depoimentos.css"

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <div className="conteudo">

        <div className="texto">
          <span className="claro chamada">Depoimentos</span>
          <h2>O que nossos clientes dizem</h2>
        </div>

        <div className="cards">
          <CardDepoimentos
            imagem={`/foto-usuario.jpg`}
            titulo="Emily Rocha"
            descricao="“Gostei muito do serviço! A equipe é muito atensiosa e resolveram meu problema bem rápido.”" 
          />
          <CardDepoimentos
            imagem={`/foto-usuario.jpg`}
            titulo="Amanda Silva"
            descricao="“Atendimento nota 10! Gostei muito da velocidade e da qualidade da montagem.”" 
          />
          <CardDepoimentos
            imagem={`/foto-usuario.jpg`}
            titulo="André Matos"
            descricao="“Estrega muito além da minha expectativa. Recomendo muito!”" 
          />
        </div>

      </div>
    </section>
  )
}