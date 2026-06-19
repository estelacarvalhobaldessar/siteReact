import Container from "../components/Container";
import SecaoTexto from "../components/SecaoTexto";
import Botao from "../components/Botao";

function Produtos(){

    return (
        <Container>
            <SecaoTexto
            titulo="Produtos"
            texto="A página de produtos apresenta uma chamada simples e reaproveita o componente Botao 
para manter consistência visual."
            />
            <Botao texto="Ver detalhes"/>
        </Container>
    )
}

export default Produtos