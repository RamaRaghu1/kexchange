import React from 'react';
import img1 from "../assets/slideimages/img1.jpg";
import img2 from "../assets/slideimages/img2.jpg"
import img3 from "../assets/slideimages/img3.jpg"
import img4 from "../assets/slideimages/img4.jpg";
import Slider from "react-slick";


const Hero=()=>{

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };


  return (
<>
<div className='slider-container'>
    <Slider {...settings}>
    <div>
      <img src={img1}/>
    </div>
    <div>
    <img src={img2}/>
    </div>
   
    <div>
    <img src={img4}/>
    </div>
   
  </Slider>

  </div>
 
  </>
  )
}
export default Hero;
