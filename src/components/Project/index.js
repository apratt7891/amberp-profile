import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dinnerPartyImg from '../../assets/images/dinnerparty.png';
import marsImg from '../../assets/images/mars.png';
import techImg from '../../assets/images/tech.png';
import noteTakerImg from '../../assets/images/note.png';
import weatherImg from '../../assets/images/weather.png';
import horiseonImg from '../../assets/images/Horiseon.png';

function Project() {
    return (
        <section className="project">
            <h1>Projects</h1>
            <p className="project-header-text">Below are some of the projects I have made. Checkout my GitHub page for more of my work!  (link in "Contact Me" section)</p>
            <Container>
                <Row>
                    <Col sm={3} className="project-header">
                        <h2 className="project-title">Dinner Party</h2>
                        <img src={dinnerPartyImg} className="project-img" alt="dinner party"></img>
                        <a href="https://dinner-parties.herokuapp.com/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/dinner-party"><h4>GitHub Repository</h4></a>

                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Mars</h2>
                        <img src={marsImg} className="project-img" alt="the best sellers"></img>
                        <a href="https://sandju.github.io/NASA-Gang/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/NASA-Gang"><h4>GitHub Repository</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Tech Blog</h2>
                        <img src={techImg} className="project-img" alt="tech blog"></img>
                        <a href="https://morning-wildwood-52241.herokuapp.com/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/tech-blog"><h4>GitHub Repository</h4></a>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <h2 className="project-title">Note Taker</h2>
                        <img src={noteTakerImg} className="project-img" alt="portfolio-phot"></img>
                        <a href="https://infinite-sands-67643.herokuapp.com/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/note-taker"><h4>GitHub Repository</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Weather Dashboard</h2>
                        <img src={weatherImg} className="project-img" alt="pizza hunt"></img>
                        <a href="https://apratt7891.github.io/weather-dashboard/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/weather-dashboard"><h4>GitHub Repository</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">Horiseon</h2>
                        <img src={horiseonImg} className="project-img" alt="note taker"></img>
                        <a href="https://apratt7891.github.io/Horiseon-Code-Refactor/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/apratt7891/Horiseon-Code-Refactor"><h4>GitHub Repository</h4></a>
                    </Col>
                    <Col sm={{ span: 3, offset: 1}}>
                        <h2 className="project-title">E.V.E.N.T.S</h2>
                        <img src={horiseonImg} className="project-img" alt="events"></img>
                        <a href="https://e-v-e-n-t-s.herokuapp.com/"><h4>Link to Application</h4></a>
                        <a href="https://github.com/Teller35/project-events"><h4>GitHub Repository</h4></a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Project;