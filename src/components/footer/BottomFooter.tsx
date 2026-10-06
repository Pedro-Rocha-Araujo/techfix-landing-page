import Nav from "./Nav"
import Link from "next/link"

export default function BottomFooter() {
  return (
    <div className="bottom-footer">
      <h2>Tech<span className="claro">Fix</span></h2>
      <Nav />
      <div className="redes-sociais">
        <Link target="_blank" href="https://wa.me/5585986557364?text=Oi! ...">
          <i className="fa-brands fa-whatsapp fa-xl"></i>
        </Link>

        <Link target="_blank" href="https://www.instagram.com/techfix.management?stkn=Z2dlZHV6Ym51ZXd6">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </Link>

        <Link target="_blank" href="https://mail.google.com/mail/?view=cm&to=management@gmail.com">
          <i className="fa-regular fa-envelope fa-xl"></i>
        </Link>
      </div>
    </div>
  )
}