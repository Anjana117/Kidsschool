import React from 'react'
import AllBanner from '../AllBanner'
import Popularclass from './Pupularclass/Popularclass'
import Newsletter from '../Home/Newsletter/Newsletter'


function Class() {
  return (
    <>
      <AllBanner props={{ title: "Our Popular Classes", subtitle: "Home - Classes" }} />
      <Popularclass />
      <Newsletter />
   
    </>
  )
}

export default Class