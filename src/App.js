import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid,Paper} from "@material-ui/core";

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
     height:'500%'
  }
}));

export default function App() {
  //This classes is used as an object to access useStyles
  const classes=useStyles();
  return (
  //This is the grid used to display my content and grid item are grids inside the grid
<Grid container spacing={2} className={classes.Grid}>
  <Grid item xs='6'>
     <Paper className={classes.Paper}>
       my name:
       </Paper>     
   </Grid>
   <Grid item xs='6'>
     <Paper className={classes.Paper}>
       my name:
       </Paper>     
   </Grid>

  </Grid>
           
  );
}
