import React from 'react';
import '../styling/Celebs.css'
import pic1 from '../Images/Pic1.png'
import pic2 from '../Images/Pic2.png'
import pic3 from '../Images/Pic3.png'
import pic4 from '../Images/Pic4.png'
import arrow from '../Images/Arrow.png'
import ticket from '../Images/ticket.png'

const Celebs = () => {
  return (
  <div className="celebs">
      <div className="celebs-heading">
      <div className="underline" />
      <p>
            Upcoming Shows
      </p> 
      <div className="view">
           <p> View All </p>
      </div>
      </div>
        <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img src={pic1} alt="" />
              <a href=" ">Folk</a>
              <p className="names">Benny Dayal</p>
              <div className="bottom-info">
              <p className="info">More Info <img className="arrow" src={arrow} alt="" /></p>
              <img className="ticket" src={ticket} alt="" />
              </div>
        </div>
        </div>
        
        <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img src={pic2} alt="" />
              <a href=" ">Bollywood</a>
              <p className="names">Vijay Yesudas</p>
              <div className="bottom-info">
              <p className="info">More Info <img className="arrow" src={arrow} alt="" /></p>
              <img className="ticket" src={ticket} alt="" />
              </div>
        </div>
        </div>

        <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img src={pic3} alt="" />
              <a href=" ">Folk</a>
              <p className="names">Andrea Jeremiah</p>
              <div className="bottom-info">
              <p className="info">More Info <img className="arrow" src={arrow} alt="" /></p>
              <img className="ticket" src={ticket} alt="" />
              </div>
        </div>
        </div>

        <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img src={pic4} alt="" />
              <a href=" ">Folk</a>
              <p className="names">Shilpa Rao</p>
              <div className="bottom-info">
              <p className="info">More Info <img className="arrow" src={arrow} alt="" /></p>
              <img className="ticket" src={ticket} alt="" />
              </div>
        </div>
        </div>

  </div>
  );
};

export default Celebs;
