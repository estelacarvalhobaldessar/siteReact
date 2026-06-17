import CardFoto from "./CardFoto"

function Galeria (){
    // Cada objeto do array representa um card que aparecerá na tela.
    const fotos =[
        {
            imagem: '/imagens/foto1.jpg',
            titulo: 'Interface Moderna',
            descricao: 'Layout inicial com destaque visual e navegação clara.',
        },
        {
            imagem: '/imagens/foto2.jpg',
            titulo: 'Componentes reutilizáveis',
            descricao: 'Peças pequenas que podem ser combinadas em páginas.',
        },
        {
            imagem: '/imagens/foto3.jpg',
            titulo: 'Galeria responsiva',
            descricao: 'Cards organizados para apresentar imagens e informações.',
        },
    ]

    return(
        <section className="galeria">
            <div></div>
        </section>
    )
}