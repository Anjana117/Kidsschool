import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
const details = [
    {
        borderColor: "b-yellow",
        imgIcon: "./image/testimonial_icon_01.jpg",
        img: "./image/testimonial_01.jpg "
    }, {
        borderColor: "b-red",
        imgIcon: "./image/testimonial_icon_02.jpg",
        img: "./image/testimonial_02.jpg "
    }, {
        borderColor: "b-orange",
        imgIcon: "./image/testimonial_icon_03.jpg",
        img: "./image/testimonial_03.jpg "
    }
]
function Homeparents() {
    return (
        <section className="Homeparents">
            <Container>
                <div className="section-header text-center">
                    <h3 className='fw-bold h1 text-purple mt-5'>What Parents Say </h3>
                    <p className='mb-5' >Rapidiously expedite granular
                        imperatives before economically sound web services.
                        Credibly actualize pandemic strategic themeplatform.</p>
                </div>
                <Row>
                    {
                        details.map((item, index) => {
                            return (
                                <Col lg={4} md={6}
                                    sm={12} class="mb-5" key={index}>
                                    <div
                                        className={`parents-item p-4 rounded-3
            ${item.borderColor}`}>
                                        <p>Professionally
                                            predominate that timely infrastriuctures tops line
                                            methodlogies
                                            Colaboratively seize scalable achannels before longterm
                                            high impact</p>
                                        <h4
                                            className='text-red fw-bold'>Joly Smith
                                            <span
                                                className='text-muted fs-6 fw-normal'><i
                                                    className='ff-bubblegum '> ui/ux Designer</i></span></h4>
                                        <img
                                            src={item.imgIcon} className='position-absolute top-100'
                                            alt="" />
                                    </div>
                                    <div className="img
            ms-3">
                                        <img src={
                                            item.img} className={`ms-5 position-relative
            rounded-circle b-yellow mt-3 ${item.borderColor}`} alt=""
                                        />
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Homeparents
