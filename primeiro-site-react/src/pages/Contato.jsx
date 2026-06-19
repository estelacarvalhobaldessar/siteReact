import Container from "../components/Container";
import SecaoTexto from "../components/SecaoTexto";
import Botao from "../components/Botao";

function Contato(){
    return(
        <Container>
            <SecaoTexto
            titulo="Contato"
            texto="Esta página simula uma área de contato. Em uma próxima evolução, ela poderá receber 
um formulário com campos e validação."
            />
            <Botao texto="Enviar Mensagem" />
        </Container>
    )
}

export default Contato