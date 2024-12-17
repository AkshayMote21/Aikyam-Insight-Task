import React from 'react'
import '../../styles/MainDivision/CoreFocusAreas.css'
function CoreFocusAreas() {
  return (
    <div id='coreFocusAreas'>
        <div id='coreFocus'>
            <p id='headCoreFocus'>Core Focus Areas</p>
            <div id='card6CoreFocus'>
                <div className='content2'>
                    <div id='designIMG'></div>
                    <p className='text11'>Process Design & Re-engineering</p>
                    <p className='text12'>Unlock the Power of Data for Informed Decision-Making and Business Optimization.
                    </p>
                </div>
                <div className='content2'>
                    <div id='inovationIMG'></div>
                    <p className='text11'>Rapid Innovation & Technology Adoption</p>
                    <p className='text12'>Powering Smart Decisions for Business Success.</p>
                </div>
                <div className='content2'>
                    <div id='automationIMG'></div>
                    <p className='text11'>Process Automation</p>
                    <p className='text12'>Streamline Your Business with Intelligent Automation Solutions.</p>
                </div>
                <div className='content2'>
                    <div id='dataIMG'></div>
                    <p className='text11'>Data & Analytics</p>
                    <p className='text12'>Transform Your Business Processes for Operational Excellence.</p>
                </div>
                <div className='content2'>
                    <div id='cognitiveIMG'></div>
                    <p className='text11'>Cognitive Intelligence</p>
                    <p className='text12'>Fuel Your Business with Cutting-Edge Technologies and Accelerate Growth</p>
                </div>
                <div className='content2'>
                    <div id='aiIMG'></div>
                    <p className='text11'>Generative AI</p>
                    <p className='text12'>Enhance your Customer Experience by Co-pilots that Augment Human Capabilities</p>
                </div>
            </div>
        </div>


        <div id='ourCustomers'>
            <p id='text13'>Our Customers</p>
            <p id='text14'>Meet the innovation-friendly workplaces we have helped build!</p>
        </div>
        <div id='sub'>
            <div id='subDiv'>
                <div id='subToNews'>Subscribe to our newsletter</div>
                <form id='subToNewsButton'>
                    <input id='inputSub' required placeholder='Your email address'/>
                    <button id='buttonSub'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div id='ourPartners'>
            <p id='text15'>Our Partners</p>
            <p id='text16'>We are backed by the most innovative organisations, who are Industry-leaders in Intelligent Automation.</p>
            <div id='partners' >
                <div className='contentPart'>
                    <div id='autoAnyIMG'></div>
                </div>
                <div className='contentPart'>
                    <div id='microsoftIMG'></div>
                </div>
                <div className='contentPart'>
                    <div id='koreIMG'></div>
                </div>
                <div className='contentPart'>
                    <div id='uiPathIMG'></div>
                </div>
                <div className='contentPart'>
                    <div id='quickbaseIMG'></div>
                </div>
                <div className='contentPart'>
                    <div id='salesforceIMG'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoreFocusAreas;