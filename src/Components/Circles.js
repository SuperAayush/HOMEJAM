import React, {useState} from 'react'
import Slider from 'react-slick'
import Circle from './Circle'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import heart from '../Images/Vector.png'
import cart from '../Images/cart.png'
import arrow from '../Images/Arrow.png'
import arrow1 from '../Images/Arrow1.png'
import '../styling/Circles.css'

export default function Circles() {
  // eslint-disable-next-line no-unused-vars
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='circle'>
      <div className='circle-controls'>
        <button className="circle-left" onClick={sliderRef?.slickPrev}>
          <img src={arrow1} alt="left" />
        </button>
        <button className="circle-right" onClick={sliderRef?.slickNext}>
          <img src={arrow} alt="right" />
        </button>
      </div>
      <Slider className="circle-slider" ref={setSliderRef} {...sliderSettings}>
        <Circle imgCard={heart} num="0" label="Label" />
        <Circle imgCard={cart} num="0" label="Label" />
        <Circle imgCard={cart} num="0" label="Label" />
        <Circle imgCard={cart} num="0" label="Label" />
      </Slider>
    </div>
  )
}