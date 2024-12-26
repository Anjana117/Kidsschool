import { faFacebookF, faPinterest, faPinterestP, faTwitter, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const teacher = [
  {
    image: "./image/teacher_01.jpg",
    title: "Broklyn Doel ",
    subtitle: "Sains Teacher",
    bgcolor: "bg-purple"
  },
  {
    image: "./image/teacher_02.jpg",
    title: "Alex Jhonson  ",
    subtitle: "Art Teacher",
    bgcolor: "bg-red"
  },
  {
    image: "./image/teacher_03.jpg",
    title: "Robot Jhonson  ",
    subtitle: "Math Teacher",
    bgcolor: "bg-orange"
  },
  {
    image: "./image/teacher_04.jpg",
    title: "Janaton Doe  ",
    subtitle: "English Teacher",
    bgcolor: "bg-lightblue"
  }
]


function Teacher() {
  return (
    <div className="Teachers-meet section-start">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-centre">Meet Our Teachers</h2>
            <p className="text-white ">Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
          </Col>
        </Row>

        <Row className='py-5'>
           {
            teacher.map((item, index) => {
              return (
                <Col lg={6} md={12} className="text-white py-2">
                  <div className={`Teacher-item d-flex ${item.bgcolor} `}>
                   <div className="Teacher-image">
                      <img src={item.image}  width="100%" height="100%" />
                    </div>
                    <div className="Teacher-content px-3 py-3 ">
                      
                      <h3>{item.title} <span className="f-13 fw-bold">{item.subtitle}</span></h3>
                      <FontAwesomeIcon icon={faFacebookF} className='pe-3' />
                      <FontAwesomeIcon icon={faVimeoV} className='pe-3 ' />
                      <FontAwesomeIcon icon={faTwitter} className='pe-3 ' />
                      <FontAwesomeIcon icon={faPinterest} className='pe-3 ' />
                      <FontAwesomeIcon icon={faRss} className='pe-3 ' />
                      <p className="text-white pt-3 ">Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                      <div> <Link to="/" className="text-white text-decoration-none fw-bold " >View Portfolio</Link></div>
                    </div>
                    </div>
                 
                </Col>
              )
            })
          }



        </Row>
      </Container>
    </div>
  )
}


export default Teacher