import { Container } from "react-bootstrap";
import Menu from "./Menu";
import Cabecalho from "./Cabecalho";

export default function Pagina(props) {
    return (
        <>
            <Menu />
            <Cabecalho texto="Sistema de Gerenciamento de Livros - BookWeb"/>
            <Container>
                {props.children}
            </Container>
        </>



    );
}