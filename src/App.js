import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import backimg from './Images/backimg.png'


const useStyles = makeStyles((theme) => ({
  backimg : {
    width:'100%',
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div>
    <img className={classes.backimg} src={backimg} alt="" />
      <CssBaseline />
      <Header />
    </div>
  );
}