import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title:{
        width:'43%',
        marginLeft:'10%',
        marginTop:'-520px',
        position:'absolute',
    },
  titleHeading:{
      fontFamily: 'Libre Baskerville',
      color: '#ffffff',
      fontSize:'5rem',
  },
  titleSubHeading:{
      color: '#ffffff',
      fontSize:'1.50rem',
      fontFamily: 'Nunito Sans',
  }
}));

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
   <p className={classes.titleHeading}>Cari Cari</p>
   <p className={classes.titleSubHeading}>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
    </div>
  );
}