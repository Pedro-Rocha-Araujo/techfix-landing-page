interface CardServicoProps {
  icone: string,
  titulo: string,
  paragrafo: string
}


export default function CardServico({icone, titulo, paragrafo}: CardServicoProps) {
  return (
    <div className="card">
      <i className={icone}></i>
      <h3>{titulo}</h3>
      <p>{paragrafo}</p>
    </div>
  )
}