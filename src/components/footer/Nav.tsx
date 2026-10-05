'use client'

import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <ul>
        <ul>
          <li><Link href="#inicio">Inicio</Link></li>
          <li><Link href="#servicos">Serviços</Link></li>
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#contatos">Contatos</Link></li>
        </ul>
      </ul>
    </nav>
  )
}