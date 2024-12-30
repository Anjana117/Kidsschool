import React from 'react'
import Homebanner from './Homebanner/Homebanner'
import './Home.css'
import Kidsacademy from './Kidsacademy/Kidsacademy'
import Teacher from './Teacher/Teacher'
import Partners from './Partners/Partners'
import Newsletter from './Newsletter/Newsletter'
import Schoolgallery from './Schoolgallery/Schoolgallery'
import Event from './Event/Event'
import Popularclasses from './Popularclasses/Popularclasses'
import Facility from './Facility/Facility'
import Parents from './Parents/Parents'


function Home() {
  return (
    <>
    <Homebanner />
    <Facility />
    <Kidsacademy />
    <Popularclasses />
    <Teacher />
    <Schoolgallery />
    <Parents />
    <Partners />
    <Event />
    <Newsletter />
    </>
   
  )
}

export default Home