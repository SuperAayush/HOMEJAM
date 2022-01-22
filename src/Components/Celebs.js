import React, {useState} from 'react'
import Slider from 'react-slick'
import Celeb from './Celeb'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic1 from '../Images/Pic1.png'
import pic2 from '../Images/Pic2.png'
import pic3 from '../Images/Pic3.png'
import pic4 from '../Images/Pic4.png'
import arrow from '../Images/Arrow.png'
import arrow1 from '../Images/Arrow1.png'
import ticket from '../Images/ticket.png'
import '../styling/Celebs.css'

export default function Celebs() {
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
    <div className='celebs'>
    <div className="celebs-head">
      <div className="celebs-underline" />
      <p>
            Upcoming Shows
      </p> 
      </div>
      <div className='celebs-controls'>
        <button className="celebs-left" onClick={sliderRef?.slickPrev}>
          <img src={arrow1} alt="left" />
        </button>
        <button className="celebs-right" onClick={sliderRef?.slickNext}>
          <img src={arrow} alt="right" />
        </button>
      </div>
      <Slider className="celeb-slider" ref={setSliderRef} {...sliderSettings}>
        <Celeb imgCeleb={pic1} type="Folk" name="Benny Dayal" ticket={ticket}  />
        <Celeb imgCeleb={pic2} type="Bollywood" name="Benny Dayal" ticket={ticket}  />
        <Celeb imgCeleb={pic3} type="Folk" name="Benny Dayal" ticket={ticket}  />
        <Celeb imgCeleb={pic4} type="Folk" name="Benny Dayal" ticket={ticket}  />
      </Slider>
    </div>
  )
}