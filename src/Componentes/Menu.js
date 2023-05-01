import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css'
export default function Menu(props) {
    return (
        <div>
            <Navbar className="fundoNav shadow">
                <Container>
                    <Navbar.Brand className="brand" href="#home">
                        <img
                            src="/logoBook1.png"
                            width="60"
                            height="60"
                            className=""
                            alt="React Bootstrap logo"
                        />
                        BookWeb</Navbar.Brand>
                    <Nav className='me-auto navitems'>
                        <Nav.Link href="#home">Livros</Nav.Link>
                        <Nav.Link href="#features">Fornecedores</Nav.Link>
                        <Nav.Link href="#pricing">Usuários</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}
