import React from 'react';
import '../styling/Circle.css';


const Review = ({ imgCard, num, label}) => (
   <div className="card">
    <div className="content">
    <img className="card-img" src={imgCard} alt="" />
    <p className="card-number">{num}</p>
    <p className="card-label">{label}</p>
  </div>
  </div>
);

export default Review;