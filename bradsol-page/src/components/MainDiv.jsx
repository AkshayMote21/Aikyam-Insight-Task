import React from 'react'
import '../styles/MainDiv.css'
import ImageSlider from './ImageSlider'
function MainDiv() {
  return (
    <div style={{height:"1000px"}} id='mainDiv'>
    {/* <h1>hello</h1> */}
      <ImageSlider/>
    </div>
  )
}

export default MainDiv