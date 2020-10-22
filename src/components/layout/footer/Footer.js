import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './footer.css'

export const Footer = () => {
    return (
        <>
        <footer>
            <Container>
                <Row>
                    <Col id='andre'>
                        <h5>Andre Breda</h5>
                        <h6>Back-End</h6>
                    </Col>
                    <Col id='teles'>
                        <h5>Thyago Teles</h5>
                        <h6>Front-End</h6>
                    </Col>
                </Row>
                <hr />
                <p id="copyright">Copyright© 2020 por Teles e Breda. Todos os direitos reservados.</p>
            </Container>
        </footer>
        </>
    )
}