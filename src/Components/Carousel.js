import React, {useState} from 'react'
import Slider from 'react-slick'
import Review from '../Components/Review'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import r1 from '../Images/r3.png'
import r2 from '../Images/r1.png'
import r3 from '../Images/r2.png'
import arrow from '../Images/Arrow.png'
import arrow1 from '../Images/Arrow1.png'
import '../styling/Carousel.css'

export default function Carousel() {
  // eslint-disable-next-line no-unused-vars
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='carousel'>
    <div className="carausel-heading">
      <div className="underling" />
      <p>
            Reviews
      </p> 
      </div>
      <div className='controls'>
        <button className="left" onClick={sliderRef?.slickPrev}>
          <img src={arrow1} alt="left" />
        </button>
        <button className="right" onClick={sliderRef?.slickNext}>
          <img src={arrow} alt="right" />
        </button>
      </div>
      <Slider className="slider" ref={setSliderRef} {...sliderSettings}>
        <Review img={r1} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r2} name="Isaac Oluwatemilorun" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r3} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r1} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r2} name="Isaac Oluwatemilorun" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r3} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r1} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r2} name="Isaac Oluwatemilorun" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r1} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r3} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r1} name="Isaac Oluwatemilorun" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r2} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
        <Review img={r3} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. " />
      </Slider>
    </div>
  )
}