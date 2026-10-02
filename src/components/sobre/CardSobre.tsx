interface CardSobreProps {
  icone: string,
  descricao: string,
}


export default function CardSobre({icone, descricao}: CardSobreProps) {
  return (
    <div className="card">
        <i className={icone}></i>
        <span>{descricao}</span>
    </div>
  )
}