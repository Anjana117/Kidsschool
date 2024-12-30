import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Aboutkidsacademy() {
  return (
    <div className='Aboutkidsacademy'>
        <Container>
            <Row>
                <Col lg={6} className='mx-auto'>
               
                <h1 className='text-purple text-center'>Why Choose KidsAcademy</h1>
                <p className='text-center pb-5 '>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform</p>
                
                
                
                </Col>
            </Row>
            <Row>
                <Col lg={4} >
                <div className='content  text-lg-end text-yellow'>
                <h3>Expert Teachers</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
               </div>
                <div className='content text-lg-end text-orange'>
                <h3>Multimedia Class</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                </div>
                <div className='content text-lg-end text-lightblue'>
                <h3>Music And Art Class</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                </div>
                </Col>
                <Col lg={4}>
                <img src={'./image/feature.jpg'} width="100%" alt="" srcset="" />
                
                </Col>
                <Col lg={4}>
                <div className='content  text-red'>
                <h3>Expert Teachers</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                </div>
                <div className='content  text-purple'>
                <h3>Multimedia Class</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                </div>
                <div className='content text-pink'>
                <h3>Music And Art Class</h3>
                <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                </div>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Aboutkidsacademy