import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App'
import Celebs from './Components/Celebs'

export const routes: Route[] = [
  {
    path:'/',
    element:<App />,
  },
  {
   path:'cards',
    element:<Celebs />,   
  }
];
export const location = new ReactLocation();