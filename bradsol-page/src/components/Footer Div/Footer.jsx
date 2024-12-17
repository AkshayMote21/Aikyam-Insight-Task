import React from 'react'

import '../../styles/Footer Div/Footer.css';
function Footer() {
  return (
    <div id='footerDiv'>
      <div id='moreAboutHyper'>
        <h1 id='text17'>Want to learn more about Hyperautomation?</h1>
        <p  id='text18'>Check out our blogs where we talk about the latest in the Hyperautomation Industry!</p>
        <div id='cardMoreAboutHyper'>
          <div className='cardBox'>
            <div id='financialOperations'></div>
            <p id='dateDiv1'>28 Jun 2024</p>
            <div id='textDiv1'>Transform Financial Operations with Bradsol and Automation Anywhere</div>
          </div>
          <div className='cardBox'>
            <div id='ragStack'></div>
            <p id='dateDiv2'>27 Jun 2024</p>
            <div id='textDiv2'>The RAG Stack: Unlocking the Power of Knowledge Graphs</div>
          </div>
          <div className='cardBox'>
            <div id='automationForAll'></div>
            <p id='dateDiv3'>14 Jun 2024</p>
            <div id='textDiv3'>Intelligent Automation For All</div>
          </div>
        </div>
      </div>
      <div id='contactUs'></div>
      <div id='theFooter'></div>
    </div>
  )
}

export default Footer