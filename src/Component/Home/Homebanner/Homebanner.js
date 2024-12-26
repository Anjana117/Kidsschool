import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Homebanner() {
    return (
        <section className='Homebanner section-start '>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img src={'./image/banner_01.jpg'} width="100%" className='img-fluid'></img>
                    <Carousel.Caption>
                        <h3 className='f-36' animate__animated animate__slideInUp> Welcome to KidsAcademy</h3>
                        <h2 className='fw-bold f-60'>Best For Education</h2>
                        <p className='text-white'> Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                            <div>
                                <Link to="/" className="bg-purple"><i>Read More</i></Link>
                                <Link to="/" className="bg-yellow"><i>Buy Now</i></Link>
                            </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src={'./image/banner_02.jpg'} width="100%" className='img-fluid'></img>
                    <Carousel.Caption>
                    <h3 className='f-36' animate__animated animate__slideInUp> Welcome to KidsAcademy</h3>
                        <h2 className='fw-bold f-60'>Best For Education</h2>
                        <p className='text-white'> Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                            <div>
                                <Link to="/" className="bg-purple"><i>Read More</i></Link>
                                <Link to="/" className="bg-yellow"><i>Buy Now</i></Link>
                            </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src={'./image/banner_03.jpg'} width="100%" className='img-fluid'></img>
                    <Carousel.Caption>
                    <h3 className='f-36' animate__animated animate__slideInUp> Welcome to KidsAcademy</h3>
                        <h2 className='fw-bold f-60'>Best For Education</h2>
                        <p className='text-white'> Monotonely principle centered ahitectures through and standards magnetic metrics whereas
                            cross functional products.</p>
                            <div>
                                <Link to="/" className="bg-purple"><i>Read More</i></Link>
                                <Link to="/" className="bg-yellow"><i>Buy Now</i></Link>
                            </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Homebanner