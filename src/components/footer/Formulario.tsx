'use client'

import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function Formulario() {
  const router = useRouter()

  async function enviarFormulario(formData: FormData) {
    try {
      const mensagem = formData.get("mensagem")

      const m = mensagem as String

      if(!m.trim()) {
        toast.error("Digite algo!")
        return
      }

      const tratamentoMensagem = m.trim().replace(/\s/g, "%20")

      router.push(`https://wa.me/5585986557364?text=${tratamentoMensagem}`)

      
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <form action={enviarFormulario}>
      <h3>Como podemos ajudar?</h3>
      <textarea 
        placeholder="Escreva uma mensagem personalizada."
        name="mensagem"
        required
      />
      <button>Enviar mensagem <i className="fa-regular fa-paper-plane"></i></button>
    </form>
  )
}