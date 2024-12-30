import React from 'react'
import AllBanner from '../AllBanner'
import Teacher from '../Home/Teacher/Teacher'
import Newsletter from '../Home/Newsletter/Newsletter'



function Teachers() {
  return (
    <>
   <AllBanner  props={{title:"Meet Our Teachers",subtitle:"Home - Teachers"}}/>
   <Teacher />
   <Newsletter />
    </>
    
  )
}

export default Teachers