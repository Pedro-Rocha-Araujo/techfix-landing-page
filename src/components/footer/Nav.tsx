'use client'

import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <ul>
        <ul>
          <li><Link href={`/`}>Inicio</Link></li>
          <li><Link href={`/`}>Serviços</Link></li>
          <li><Link href={`/`}>Sobre</Link></li>
          <li><Link href={`/`}>Contatos</Link></li>
        </ul>
      </ul>
    </nav>
  )
}