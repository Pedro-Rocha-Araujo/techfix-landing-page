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
            titulo=""
            descricao="" 
          />
        </div>
      </div>
    </section>
  )
}