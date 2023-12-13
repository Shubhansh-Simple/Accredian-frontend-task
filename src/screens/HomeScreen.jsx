/*
 * HomeScreen of our application
 */

import { useEffect } from "react";
import { Grid, Avatar } from "@mui/material";

// Material-UI icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/*
 * Sending the get request
 * with the token
 * if authenticated then stay
 * otherwise redirect to the
 * Login page
 * useEffect()
 */

const HomeScreen = () => {
  /* Send get request to the server
   * which decides weather i stay
   * or redirected to login page
   */
  useEffect(() => {
    console.log("Use Effect is called.");
  }, []);

  const avatarStyle = { backgroundColor:'#5cb85c' }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "90vh" }}
    >
      <h2>Welcome To Home, Shubhansh</h2>

      <Avatar style={avatarStyle}>
        <CheckCircleIcon />
      </Avatar>
      <br />

      <b>
        <small style={{ color: "green" }}>
          ( Login Successfully )
        </small>
      </b>
    </Grid>
  );
};

export default HomeScreen;
