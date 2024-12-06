import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function NotFound() {
    return (
        <Container className='notfound'>
            <Row>
                <Col>
                <h2>404 - Page Not Found</h2>
                <p className='notfound-p'>*Big Gasp!* Looks like this page does not exist. Here's your way back to the <NavLink to='/' className="hp">Home Page</NavLink>
                </p>
                <Image src="src/assets/404.jpeg" className='nt-image' fluid /> 
                </Col>
            </Row>
        </Container>
    )
};

export default NotFound;