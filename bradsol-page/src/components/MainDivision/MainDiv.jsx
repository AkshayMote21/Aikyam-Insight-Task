import React from 'react'

import '../../styles/MainDivision/MainDiv.css';
import ImageSlider from '../MainDivision/ImageSlider';
import HyperAutomation from './HyperAutomation';
import CoreFocusAreas from './CoreFocusAreas';
function MainDiv() {
  return (
    <div style={{height:"3800px"}} id='mainDiv'>
    {/* <h1>hello</h1> */}
      <ImageSlider/>
      <HyperAutomation/>
      <CoreFocusAreas/>
    </div>
  )
}

export default MainDiv