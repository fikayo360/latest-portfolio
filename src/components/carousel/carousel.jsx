import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState,useEffect } from 'react';

function Carousel({images}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    const settings = {
      dots: true,
      infinite: images.length > 1,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: isMobile?true:false,
      arrows:isMobile?false:true
    };


    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  
    return (
      <div style={{ width: isMobile ? '95%' : '40%', margin: '0 auto' }}>
        <Slider {...settings}>
        {images.length > 1 
          ? images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
              </div>
            ))
          : (
              <div>
                <img src={images[0].src} alt={images[0].alt} style={{ width: '100%' }} />
              </div>
            )
        }
        </Slider>
      </div>
    );
  }
  
  export default Carousel;