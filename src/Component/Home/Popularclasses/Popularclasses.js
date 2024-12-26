import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const classItem = [
    {
        img: "./image/class_01.jpg",
        title: "Imagination Classes",
        textColor: "text-yellow",
        bgColor: "bg-yellow"
    }, {
        img: "./image/class_02.jpg",
        title: "Drawing Classes",
        textColor: "text-red",
        bgColor: "bg-red"
    }, {
        img: "./image/class_03.jpg",
        title: "Learning Classes",
        textColor: "text-orange",
        bgColor: "bg-orange"
    }
]
function Homeclass() {
    return (
        <section className="Homeclass p-100">
            <div className="section-header ">
                <h2 className='fw-bold text-purple text-center  h1 mt-5 '>Our Popular Classes</h2>
                <p className='mx-auto text-center w-50'>Rapidiously expedite granular
                    imperatives before economically sound web services.
                    Credibly actualize pandemic strategic themeplatform.</p>
            </div>
            <Container>
                <Row>
                    {
                        classItem.map((item, index) => {
                            return (
                                <Col lg={4} md={6} sm={6}
                                    xs={12} key={index}>
                                    <div
                                        className="class-item mb-4 mb-lg-0">
                                        <div
                                            className="class-img">
                                            <img
                                                src={item.img} alt="" className="img-fluid w-100" />
                                        </div>
                                        <ul>
                                            <li
                                                className='bg-purple'>
                                                <span>Class Size </span>
                                                <span>30
                                                    - 40 </span>
                                            </li>
                                            <li
                                                className='bg-red'>
                                                <span>Years Old </span>
                                                <span>5 -
                                                    6 </span>
                                            </li>
                                            <li
                                                className='bg-orange'>
                                                <span>Tution Fee </span>
                                                <span>$1500</span>
                                            </li>
                                        </ul>
                                        <div
                                            className="class-content text-center text-md-start">
                                            <Link to="/"
                                                className='text-decoration-none'>
                                                <h3
                                                    className={`fw-bold ${item.textColor}`}>{item.title}</h3>
                                            </Link>
                                            <p><span
                                                className='text-red'>Class Time</span> : 08:00 am - 10:00
                                                am</p>
                                            <p>Draticaly
                                                novate fuly rarched an plications awesome theme
                                                education</p>
                                        </div>
                                        <div
                                            className={`class-address text-center ${item.bgColor}`}>
                                            <p
                                                className='text-white text-md-start m-0'><span
                                                    className='f-14'> <FontAwesomeIcon icon={faHome}
                                                    /></span> 218 New Newyork Road, USA- 1205</p>
                                        </div>
                                    </div>
                                </Col>

                            )
                        })
                    }

                </Row>
                <Row className='my-5'>
                    <Col className='text-center'>
                        <div >
                            <Link to="/">
                                <input className="button " type='button' value="See More Classes"></input>
                            </Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Homeclass
