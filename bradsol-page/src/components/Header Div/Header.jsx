import React from 'react'
import '../../styles/Header Div/Header.css';
function Header() {
  
    return (
    <div id='header'>
        <div id='topHead'>
            <div id='sMedia'>
                <div id='fb1'><i class="fa-brands fa-facebook"></i></div>
                <div id='tw1'><i class="fa-brands fa-twitter"></i></div>
                <div id='lkdn1'><i class="fa-brands fa-linkedin"></i></div>
                <div id='insta1'><i class="fa-brands fa-instagram"></i></div>
            </div>
            <div id='eMail'>
                <div id='mailBox'><i class="fa-regular fa-envelope"></i></div>
                <div id='mailUs'>Email Us</div>
            </div>
        </div>
        <div id='navbar'>
            <div id='logo'></div>
            <div id='menuBar'>
                <div id='homeBar'>Home</div>
                <div id='capabilitiesBar'><p>Capabilities <i class="fa-solid fa-sort-down fa-sm"></i></p></div>
                <div id='howWeEngageBar'>How we Engage</div>
                <div id='solutionsBar'>Solutions <i class="fa-solid fa-sort-down fa-sm"></i></div>
                <div id='partnersBar'>Partners <i class="fa-solid fa-sort-down fa-sm"></i></div>
                <div id='resourcesBar'>Resources</div>
                <div id='companyBar'>Company <i class="fa-solid fa-sort-down fa-sm"></i></div>
                <div id='contactUsBar'>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default Header