import React from 'react'
import AllBanner from '../AllBanner'
import Schoolgallery from '../Home/Schoolgallery/Schoolgallery'
import Newsletter from '../Home/Newsletter/Newsletter'
function Pages() {
  return (
    <>
    <AllBanner  props={{title:"Our School Gallery",subtitle:"Home - Gallery"}}/>
    <Schoolgallery />
    <Newsletter />
    </>
  )
}

export default Pages