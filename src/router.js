import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App'

export const routes: Route[] = [
  {
    path:'/',
    element:<App />,
  },
];
export const location = new ReactLocation();