import "./servicos.css"
import CardServico from "./CardServico"

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">

      <div className="conteudo">

        <div className="texto">
          <span className="claro chamada">Nossos serviços</span>
          <h2>O que a TechFix faz?</h2>
          <p>Nós oferecemos soluções completas relacionadas a tecnologia, deste o desenvolvimento até o suporte, sempre priorizando a qualidade e a agilidade na entrega para atender melhor aos seus requisitos.</p>
        </div>

        <div className="cards">
          <CardServico 
            icone="fa-solid fa-code fa-lg"
            titulo="Desenvolvimento de Sistemas"
            paragrafo="Sistema que atende os requisitos do seu negócio."
          />
          <CardServico 
            icone="fa-solid fa-display fa-lg"
            titulo="Manutenção de computadores"
            paragrafo="Mantemos o bem-estar dos seus aparelhos eletrônicos. "
          />
          <CardServico 
            icone="fa-solid fa-image fa-lg"
            titulo="Design Gráfico"
            paragrafo="Criação de artes que comunicam o propósito da sua empresa."
          />
          <CardServico 
            icone="fa-solid fa-paintbrush fa-lg"
            titulo="UX/UI"
            paragrafo="Para deixar a experiência do usuário mais intuitiva."
          />
          <CardServico 
            icone="fa-solid fa-shield fa-lg"
            titulo="Testes de Software"
            paragrafo="Para maior qualidade, segurança e confiabilidade."
          />
          <CardServico 
            icone="fa-solid fa-circle-plus fa-lg"
            titulo="Mais soluções"
            paragrafo="Conte sobre suas necessidades para nós."
          />
        </div>

      </div>

    </section>
  )
}