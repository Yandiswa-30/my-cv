import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello Sta!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
</Grid>
    </div>
       
  );
}
