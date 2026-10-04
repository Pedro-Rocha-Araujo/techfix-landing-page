interface CardPorqueProps {
  icone: string,
  titulo: string,
  descricao: string
}

export default function CardPorque({icone, titulo, descricao}: CardPorqueProps) {
  return (
    <div className="card">
      <div className="card-icon">
        <i className={icone}></i>
      </div>
      <div className="card-texto">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  )
}