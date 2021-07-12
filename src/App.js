import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid,Container} from "@material-ui/core";

//This is used for styling my work like css(imported as makeStyles)
const useStyles= makeStyles(theme=> ({
  
  grid:{
    width: '50%',
    margin: '0px',
    height: '100%'
  },
  Paper:{
    padding: theme.spacing(2),
     color: theme.palette.text.secondary,
     background: theme.palette.success.dark,
     textAlign:'center',
    // height:'600%'
  },
  p2:{
    height:'800%',
    color:"yellow"
    
  }
}));

export default function App() {
  //This classes is used as an object to access useStyles
  const classes=useStyles();
  return (
  //This is the grid used to display my content and grid item are grids inside the grid
<container>
<Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:'yellow'}}>
      My Profile   
   </Grid>
   <Grid item xs style={{backgroundColor:'blue'}}>
       My Information  
   </Grid>

  </Grid>
  </container>          
  );
}
