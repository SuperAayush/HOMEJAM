import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import Title from './Components/Title';
import Celebs from './Components/Celebs';
import Circle from './Components/Circle';
import backimg from './Images/backimg.png'


const useStyles = makeStyles((theme) => ({
  backimg : {
    width:'100%',
    height:'765px',  
  },
 gradient: {
   width:'100%',
   height:'1000px',  
   marginTop:'-900px',
   position:'absolute',
   background: 'linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%)',
 },
 stretch : {
   height :'2000px',
   background: 'rgba(10, 11, 26, 1)',
 }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
    <img className={classes.backimg} src={backimg} alt="" />
    <div className={classes.gradient} />
      <CssBaseline />
      <Header />
      <Title />
      <Circle />
      <Celebs/>
      <div className={classes.stretch} />
    </div>
  );
}
