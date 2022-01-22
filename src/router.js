import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App'
import Celebs from './Components/Celebs'
import Response from './Components/Response'
import Test from './Components/Carousel'

export const routes: Route[] = [
  {
    path:'/',
    element:<App />,
  },
  {
   path:'cards',
    element:<Celebs />,   
  },
  {
    path:'c',
    element:<Test/>, 
  },
  {
    path:'r',
    element:<Response />, 
  },
];
export const location = new ReactLocation();