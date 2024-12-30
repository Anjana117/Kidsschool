import React from 'react'
import Facility from '../Home/Facility/Facility'
import Kidsacademy from '../Home/Kidsacademy/Kidsacademy'
import Teacher from '../Home/Teacher/Teacher'
import Parents from '../Home/Parents/Parents'
import Newsletter from '../Home/Newsletter/Newsletter'
import AllBanner from '../AllBanner'
import Aboutkidsacademy from './Aboutkidsacademy/Aboutkidsacademy'
import './About.css'
function About() {
  return (
    <>
      <AllBanner  props={{title:"About Our KidsAcademy",subtitle:"Home - About us"}}/>
      <Facility />
      <Kidsacademy />
      <Teacher />
      <Parents />
      <Newsletter />
      <Aboutkidsacademy />
    </>
  )
}

export default About