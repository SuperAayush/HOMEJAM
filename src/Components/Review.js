import React from 'react';
import '../styling/Review.css';


const Review = ({ img, name, city, comment}) => (
  <div className="review">
    <div className="details">
      <img className="user-img" src={img} alt={name} />
      <div className="details-nc">
        <p className="user-name">{name}</p>
        <p className="user-city">{city}</p>
      </div>
    </div>
      <div className="user-comment">
      <p className="user-comment">{comment}</p>
    </div>
  </div>
);

export default Review;