import React from 'react';
import '../styling/Circle.css'
import heart from '../Images/Vector.png'
import cart from '../Images/cart.png'

const Circle = () => {
  return (
  <div className="circle">
  <div className="card">
    <div className="content">
    <img className="card-img" src={heart} alt="" />
    <p className="card-number">0</p>
    <p className="card-label">Label</p>
  </div>
  </div>
  <div className="card">
    <div className="content">
    <img className="card-img" src={cart} alt="" />
    <p className="card-number">0</p>
    <p className="card-label">Label</p>
  </div>
  </div>
  <div className="card">
    <div className="content">
    <img className="card-img" src={cart} alt="" />
    <p className="card-number">0</p>
    <p className="card-label">Label</p>
  </div>
  </div>
  <div className="card">
    <div className="content">
    <img className="card-img" src={cart} alt="" />
    <p className="card-number">0</p>
    <p className="card-label">Label</p>
  </div>
  </div>
  </div>
  );
};

export default Circle;