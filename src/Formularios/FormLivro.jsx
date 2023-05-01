import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import '../Componentes/Style.css'

export default function FormLivro(props) {

  //useState guarda o estado de algum objeto/valor
  const [validado, setValidado] = useState(false);
  function Submissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      //dado validos --> procede cadastro
      setValidado(false);
    } else {
      setValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();

  }

  return (
    <>
      <Container className="text-center m-3">
        <h3>
          Cadastro de Livros
        </h3>
      </Container>
      <Form className="mt-3" noValidate validated={validado} onSubmit={Submissao}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formGridTitulo">
            <Form.Label>Título:</Form.Label>
            <Form.Control type="text" placeholder="Título" required/>
            <Form.Control.Feedback type="invalid">Por favor, informe o Título!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formGridAutor">
            <Form.Label>Autor:</Form.Label>
            <Form.Control type="text" placeholder="Autor" required />
            <Form.Control.Feedback type="invalid">Por favor, informe o Autor!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="formGridEditora">
            <Form.Label>Editora</Form.Label>
            <Form.Control placeholder="Editora" required />
            <Form.Control.Feedback type="invalid">Por favor, informe a Editora!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="formGridGenero">
            <Form.Label>Gênero:</Form.Label>
            <Form.Select defaultValue="Escolha o Gênero">
              <option value="ficcao">FICÇÃO CIENTÍFICA</option>
              <option value="romance">ROMANCE</option>
              <option value="suspense">SUSPENSE</option>
              <option value="thriler">THRILER PSICOLÓGICO</option>
              <option value="investigacao">INVESTIGAÇÃO E POLICIAL</option>
              <option value="fdistopia">DISTOPIA</option>
              <option value="fantasia" >FANTASIA</option>
              <option value="infantil">INFANTIL</option>
              <option value="romanceAdolescente" >ROMANCE ADOLESCENTE</option>
              <option value="mitologia">MITOLOGIA</option>
              <option value="desenvPessoal" >DESENVOLVIMENTO PESSOAL</option>
              <option value="financas">FINANÇAS</option>
              <option value="saude">SAUDE E BEM ESTAR</option>
              <option value="medicina">MEDICINA</option>
              <option value="espiritualidade">ESPIRITUALIDADE</option>
              <option value="LingProgramacao">LINGUAGEM DE PROGRAMAÇÃO</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="formDataPubl">
            <Form.Label>Data da Publicação:</Form.Label>
            <Form.Control type="date" required />
            <Form.Control.Feedback type="invalid">Por favor, informe a Editora!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="formNumPaginas">
            <Form.Label>Nº de Páginas:</Form.Label>
            <Form.Control type="number" required />
            <Form.Control.Feedback type="invalid">Por favor, informe a Editora!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <div className="d-flex justify-content-end">
            <Button className="buttonReset" type="reset">
              Limpar
            </Button>
            <Button className="buttonCad" type="submit">
              Cadastrar
            </Button>
          </div>
        </Row>
      </Form>
    </>
  );
}