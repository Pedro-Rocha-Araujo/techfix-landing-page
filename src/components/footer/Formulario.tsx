'use client'

import { toast } from "react-toastify"

export default function Formulario() {

  async function enviarFormulario(formData: FormData) {
    try {
      const nome = formData.get("nome")
      const email = formData.get("email")
      const mensagem = formData.get("mensagem")
      if(!nome || !email || !mensagem) {
        toast.error("Erro!")
      }
      toast.success("OK")
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  return (
    <form action={enviarFormulario}>
      <h3>Preencha suas informações</h3>
      <input 
        placeholder="Seu nome"
        type="text"
        name="nome"
        required
      />
      <input 
        placeholder="Seu E-mail"
        type="email"
        name="email"
        required
      />
      <textarea 
        placeholder="Como podemos ajudar?"
        name="mensagem"
        required
      />
      <button>Enviar mensagem <i className="fa-regular fa-paper-plane"></i></button>
    </form>
  )
}