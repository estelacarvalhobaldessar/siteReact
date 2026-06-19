function CardFoto({imagem,titulo, descricao}) {
    // O card recebe os dados por props e monta uma unidade da galeria.
    return(
        <article className="card-foto">
            <div className=""></div>
            <div className="card-conteudo">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </article>
    )
}

export default CardFoto