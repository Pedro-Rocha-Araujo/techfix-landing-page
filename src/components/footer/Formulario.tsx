

export default function Formulario() {
  return (
    <form>
      <h3>Preencha suas informações</h3>
      <input 
        placeholder="Seu nome"
        type="text"
        required
      />
      <input 
        placeholder="Seu E-mail"
        type="email"
        required
      />
      <textarea 
        placeholder="Como podemos ajudar?"
        required
      />
      <button>Enviar mensagem <i className="fa-regular fa-paper-plane"></i></button>
    </form>
  )
}