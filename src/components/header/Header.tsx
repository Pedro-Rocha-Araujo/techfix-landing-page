import Link from "next/link"
import "./header.css"

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Tech<span className="claro">Fix</span></h1>
        <ul>
          <li><Link href={`/`}>Inicio</Link></li>
          <li><Link href={`/`}>Serviços</Link></li>
          <li><Link href={`/`}>Sobre</Link></li>
          <li><Link href={`/`}>Contatos</Link></li>
        </ul>
        <button> <i className="fa-regular fa-paper-plane"></i> <p>Fale conosco</p></button>
      </nav>

      <div className="main-header">

        <div className="texto-header">
          <span className="claro chamada">Tecnologia aplicada ao seu negócio</span>
          <h2>Soluções tecnológicas para o <span className="claro">seu dia a dia.</span></h2>
          <p>A TechFix é uma startup de tecnologia que oferece desenvolvimento de sistemas, suporte técnico,  design, UX/UI, testes de software e muito mais. Tudo para você e/ou sua empresa evoluam.</p>
     
          <div className="botoes">
            <button className="cheio">Faça um orçamento <i className="fa-solid fa-arrow-right"></i></button>
            <button className="vazado">Conheça nossos serviços</button>
          </div>
        </div>

        <div className="imagem-header">
          <img 
            src={`./header-image.png`}
            alt="Imagem de um computador e um celular que representam as principais ferramentas da empresa."
          />
        </div>

      </div>
    </header>
  )
}