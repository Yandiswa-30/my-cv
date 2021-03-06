import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Profile from './components/Profile/Profile';



export default function App() {
 
  return (
    //This is the grid used to display my content and grid item are grids inside the grid
    <container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
        >
          <Profile/>
        </Grid>
        <Grid item xs style={{ backgroundColor: '' }}>
          My Information
        </Grid>
      </Grid>
    </container>
  );
}
