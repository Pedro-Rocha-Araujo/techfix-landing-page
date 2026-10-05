import Link from "next/link"
import "./header.css"

export default function Header() {

  return (
    <header id="inicio">
      <nav>
        <h1>Tech<span className="claro">Fix</span></h1>
        <ul>
          <li><Link href="#inicio">Inicio</Link></li>
          <li><Link href="#servicos">Serviços</Link></li>
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#contatos">Contatos</Link></li>
        </ul>
        <Link className="cheio" target="_blank" href="https://wa.me/5585986557364?text=Olá!%20estou%20precisando%20de%20ajuda..."> <i className="fa-regular fa-paper-plane"></i> <p>Fale conosco</p></Link>
      </nav>

      <div className="main-header">

        <div className="texto-header">
          <span className="claro chamada">Tecnologia aplicada ao seu negócio</span>
          <h2>Soluções tecnológicas para o <span className="claro">seu dia a dia.</span></h2>
          <p>A TechFix é uma startup de tecnologia que oferece desenvolvimento de sistemas, suporte técnico,  design, UX/UI, testes de software e muito mais. Tudo para você e/ou sua empresa evoluam.</p>
     
          <div className="botoes">
            <Link className="cheio" target="_blank" href="https://wa.me/5585986557364?text=Oi!%20Quero%20fazer%20um%20or%C3%A7amento...">Faça um orçamento <i className="fa-solid fa-arrow-right"></i></Link>
            <Link href="#servicos" className="vazado">Conheça nossos serviços</Link>
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