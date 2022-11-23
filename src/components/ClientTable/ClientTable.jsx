import { useState } from "react";
import { Button, Container, Form, Modal, Col, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function ClientTable(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Container >
            <h1>Cliente</h1>
            <Button variant="primary"
            className="rounded-circle mr-4 font-weight-bold mb-3" onClick={handleShow}>
                +
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Preencher Formulário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu E-mail"
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                    >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        placeholder="Digite seu Nome"
                        className="mb-3"
                    />

                    <Form.Label>Telefone</Form.Label>
                    <Form.Control 
                        placeholder="Digite seu Telefone"
                    />
                    </Form.Group>
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Salvar
                </Button>
                </Modal.Footer>
            </Modal>

            <Form inline>
                <Form.Group >
                <Form.Label column sm="2">
                    <strong>Nome</strong>
                </Form.Label>
                <Col sm="5">
                    <Form.Control placeholder="Digite seu Nome" className="mb-3"/>
                </Col>
                <Button className="mb-3">Buscar</Button>
                </Form.Group>
            </Form>

            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </>
    );

}

export default ClientTable;