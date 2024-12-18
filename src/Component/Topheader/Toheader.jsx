import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone,faRss } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF,faBehance,faDribbble,faSkype,faVimeoV,faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Toheader() {
  return (
    <div className='bg-purple text-white' id='Topheader'>
      <Container>
        <Row>
          <Col className='col-auto'>
            <span><FontAwesomeIcon icon={faPhone} />
              <i className='ps-1'> Phone : 8801 234 567 890</i> </span>
          </Col>
          <Col className='col-auto'>
            <span><FontAwesomeIcon icon={faClock} />
              <i className='ps-1'> Opening Time : 9:30am-5:30pm</i> </span>
          </Col>
          <Col className='col-auto'>
            <span><FontAwesomeIcon icon={faHome} />
              <i className='ps-1'> Address : Labartisan 1205 Newyork</i> </span>
          </Col>
          <Col className='col-auto ms-auto'>
          <Link to="#">
          <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="#">
          <FontAwesomeIcon icon={faBehance} />
          </Link>
          <Link to="#">
          <FontAwesomeIcon icon={faDribbble} />
          </Link>
          <Link to="#">
          <FontAwesomeIcon icon={faSkype} />
          </Link>
          <Link to="#">
          <FontAwesomeIcon icon={faPinterest} />
          </Link>
          <Link to="#">
          <FontAwesomeIcon icon={faRss} />
          </Link>
          
          
          
          
          
          
          
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Toheader