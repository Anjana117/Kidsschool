import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Kidsacademy() {
    return (
        <div className="Kids-academy section-start">
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <img src={'./image/about.png'} width="100%" />
                    </Col>
                    <Col lg={6} md={12} >
                        <h2 className="f-45 text-white">About Our KidsAcademy</h2>
                        <p className="text-white py-3">Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                        <div>
                                <Link to="/" className="bg-purple"><i>Read More</i></Link>
                                <Link to="/" className="bg-yellow"><i>Buy Now</i></Link>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Kidsacademy