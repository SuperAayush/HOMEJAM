import React from 'react';
import '../styling/Celeb.css';
import arrow from '../Images/Arrow.png'

const Test = ({ imgCeleb, type, name, ticket}) => (
  <div className="celeb">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="cont">
              <img src={imgCeleb} alt="" />
              <a href=" ">{type}</a>
              <p className="names">{name}</p>
              <div className="bottom-info">
              <p className="info">More Info </p>
              <img className="arrow" src={arrow} alt="" />
              <img className="ticket" src={ticket} alt="" />
              </div>
        </div>
        </div>
);

export default Test;