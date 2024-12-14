import React, { useState } from 'react';
import '../styles/ImageSlider.css'; 

function ImageSlider(){
  const slides = [
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-01.png',
      text: ['Embrace the Future of AI-Powered Automation','Gartner Predicts RPA to Revolutionize Industries by 2033.'],
      buttons: ['Schedule a Call', 'Know More'],
    },
    {
        image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-02.png',
        text: ['Unleash HyperAutomation','Transforming Work, Empowering Teams, Shaping Tomorrow'],
        buttons: ['Schedule a Call', 'Know More'],
    },
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-03.png',
      text: ['Empower business evolution and craft personalized solutions through the power of Gen AI','Transforming Industries and Creating New Opportunities!'],
      buttons: ['Schedule a Call', 'Know More'],
    },
    
    {
      image: 'https://bradsol.com/wp-content/uploads/2023/08/banner-04.png',
      text: ['Embrace the Future with Hyperautomation','Transforming Workforce, Amplifying Teams, and Unleashing Digital Twins for Success.'],
      buttons: ['Schedule a Call', 'Know More'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevImage}>
        &#8592; {/* Left Arrow */}
      </button>

      <div className="image-container">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} />
        <div className="text-container">
            <p style={{fontSize:"48px",fontWeight:"600"}}>{slides[currentIndex].text[0]}</p>
            <p style={{fontWeight:"500"}}>{slides[currentIndex].text[1]}</p>
          <div className="button-container">
            {slides[currentIndex].buttons.map((buttonText, index) => (
              <button key={index} className="slider-button">
                {buttonText}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="arrow right" onClick={nextImage}>
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default ImageSlider;
