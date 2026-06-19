import CardFoto from "./CardFoto.jsx"

function Galeria (){
    // Cada objeto do array representa um card que aparecerá na tela.
    const fotos =[
        {
            imagem: './src/imagens/comoeueraReact.jpg',
            titulo: 'Interface Moderna',
            descricao: 'Layout inicial com destaque visual e navegação clara.',
        },
        {
            imagem: '/src/imagens/moanaReact.webp',
            titulo: 'Componentes reutilizáveis',
            descricao: 'Peças pequenas que podem ser combinadas em páginas.',
        },
        {
            imagem: '/src/imagens/oscroods2React.jpg',
            titulo: 'Galeria responsiva',
            descricao: 'Cards organizados para apresentar imagens e informações.',
        },
    ]

    return(
        <section className="galeria">
            <div className="titulo-secao">
                <span>Galeria</span>
                <h2>Resultado visual da Home</h2>
            </div>
            <div className="grade-fotos">
                { fotos.map((foto) => (
                    <CardFoto
                    imagem={foto.imagem}
                    titulo={foto.titulo}
                    descricao={foto.descricao}
                    />
                ))}
                </div>
            </section>
            )
        }

export default Galeria