interface CardDepoimentosProps {
  imagem: string,
  titulo: string,
  descricao: string,
}

export default function CardDepoimentos({imagem, titulo, descricao}: CardDepoimentosProps) {
  return (
    <div className="card">
        <img 
          src={imagem} 
          alt={titulo}
        />
        <div>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
    </div>
  )
}