import { faDribbble, faFacebookF, faGooglePlus, faGooglePlusG, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {faGlobeAsia, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const img_footer =
    [
        {
            img: "./image/footer_post_01.jpg",
            text: "Corem psum dolor the amectetuer adipiscing...",
            date: "04 February 2021",


        },
        {
            img: "./image/footer_post_02.jpg",
            text: "Corem psum dolor the amectetuer adipiscing...",
            date: "28 January 2021",
            color: "text-yellow"
        },
        {
            img: "./image/footer_post_03.jpg",
            text: "Duis autem iriure dolor in hendrerit esse...",
            date: "03 January 2021"

        }
    ]

const icon_footer =
    [
        {
            color: "bg-yellow",
            text: "Raritas etiam processus them dynamicus sequitur mutatem education theme",
            time: "23 seconds ago"

        },
        {
            color: "bg-red",
            text: "Duis autem veleum iriu dolor hendrerit in vulputate velit",
            time: "8 seconds ago"
        },
        {
            color: "bg-orange",
            text: "@frankdoe amber tempor cum soluta nobis eleifend.",
            time: "2 years ago"
        }
    ]

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className='footer-title'>
                                <img src={'./image/logo.png'} alt='' className='img-fluid'></img>
                            </div>
                            <p>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>
                            <ul className='list-unstyled social-icon'>
                                <li  >
                                    <span className='text-yellow'>
                                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                                    </span>
                                    New Chokoya Road, USA.
                                </li>
                                <li>
                                    <span className='text-red'>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    </span>
                                    +8801 923 970 212, 0125897.
                                </li>
                                <li >
                                    <span className='text-orange'>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </span>
                                    Contact@admin LabArtisan
                                </li>
                                <li >
                                    <span className='text-purple'>
                                        <FontAwesomeIcon icon={faGlobeAsia}></FontAwesomeIcon>
                                    </span>
                                    Email@admin LabArtisan
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='footer-title'>
                                <h2 className='text-yellow fw-bold'>Latest News</h2>
                                <ul className='list-unstyled footer-img'>


                                    {
                                        img_footer.map((item, index) => {
                                            return (
                                                <li >
                                                    <Link to="/">
                                                        <img src={item.img} alt="" className="img-fluid" />
                                                    </Link>
                                                    <div>
                                                        <p >
                                                            <Link to="/" className='text-muted'>
                                                                {item.text}
                                                            </Link>
                                                        </p>
                                                        <i className='text-yellow'> {item.date}</i>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )
                                    }

                                </ul>
                            </div></Col>

                        <Col lg={3} md={6}>
                            <div className='footer-title'>
                                <h2 className='text-red fw-bold'>Twitter Widget</h2>
                                <ul className='list-unstyled footer-icon'>


                                    {
                                        icon_footer.map((item, index) => {
                                            return (
                                                <li >
                                                    <span className={`p-1 text-white rounded-circle ${item.color}`}>
                                                        <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                                                    </span>
                                                    <div>
                                                        <p className='text-muted'> {item.text}</p>
                                                        <i className='text-red'> {item.time}</i>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )
                                    }

                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className="footer-title">
                                <h2 className='text-orange'>Recent Photos</h2>

                                <ul className="list-unstyled photos">
                                    <li>
                                        <img src={'./image/footer_gallery_01.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_02.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_03.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_04.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_05.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_06.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_07.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_08.jpg'} alt="" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src={'./image/footer_gallery_09.jpg'} alt="" className="img-fluid" />
                                    </li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className='footer-bottom'>
<Container>
    <Row>

        <Col md={6} sm={12}>
        <p className='fw-bold'>© 2021. Designed By<span className='text-pink'>  LabArtisan</span></p>
        
        </Col>
        <Col md={6} sm={12}>
        <ul className="social-bottom-icon">
            <li><Link to="/" className='bg-blue'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Link></li>
            <li><Link to="/" className='bg-pink'><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></Link></li>
            <li><Link to="/" className='bg-orange'><FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon></Link></li>
            <li><Link to="/" className='bg-lightblue'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link></li>
            <li><Link to="/" className='bg-red'><FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon></Link></li>
       </ul>
       </Col>
       </Row>
</Container>
            </div>
        </>



    )
}

export default Footer