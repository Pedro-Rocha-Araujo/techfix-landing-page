interface CardSobreProps {
  icone: string,
  descricao: string,
}


export default function CardSobre({icone, descricao}: CardSobreProps) {
  return (
    <div className="card">
      <div>
        <i className={icone}></i>
      </div>
      <div>
        <span>{descricao}</span>
      </div>
    </div>
  )
}