import React from 'react';
import Review from '../Components/Review'
import { makeStyles } from '@material-ui/core/styles';
import r1 from '../Images/r3.png'

const useStyles = makeStyles((theme) => ({
//     title:{
//         width:'43%',
//         marginLeft:'10%',
//         marginTop:'-520px',
//         position:'absolute',
//     },
//   titleHeading:{
//       fontFamily: 'Libre Baskerville',
//       color: '#ffffff',
//       fontSize:'5rem',🇺🇸
//   },
//   titleSubHeading:{
//       color: '#ffffff',
//       fontSize:'1.50rem',
//       fontFamily: 'Nunito Sans',
//   }
}));

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.response}>
        <Review img={r1} name="Hellen Jummy" city="🇺🇸 Palo Alto, CA" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
laoreet adipiscing. " />
    </div>
  );
}