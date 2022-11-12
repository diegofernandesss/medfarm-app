import { Container, Row, Col } from 'react-bootstrap';
import imgFarm from '../imgs/imgFarm.png';

function Banner(){
    return(
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'MedFarm'}</h1>
                        <p>A vida é um desafio para supera-lá. Venha comprar seu remédio conosco.</p>
                        <button onClick={() => console.log('connect')}>Ofertas</button>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <img 
                            src={imgFarm}
                            alt="Imagem da Farmaceútica"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );     
}

export default Banner;