import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedin from '../../assets/icons/li-logo.png';
import ghIcon from '../../assets/icons/github.png';
import amberImg from '../../assets/images/amber.jpeg';

function Footer() {
    return (
        <footer>
            <Container>
                <h1 className="footer-header">Contact Me</h1>
                <Row className="foot">
                    <Col>
                        <p className="contact-info">
                        Email: <a href="mailto:apratt7891@gmail.com">apratt7891@gmail.com</a><br />
                        </p>
                    </Col>
                    <Col>
                        <h2>Pages</h2>
                        <a href="https://github.com/apratt7891">
                            <img className="gh-icon" src={ghIcon} alt="GitHub Profile" />
                        </a> <br />
                        <a href="https://www.linkedin.com/in/amber-pratt-a57122205/">
                            <img className="li-icon" src={linkedin} alt="LinkedIn Profile" />
                        </a> <br />
                        <img src={ amberImg } className="amber" alt="amber"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;