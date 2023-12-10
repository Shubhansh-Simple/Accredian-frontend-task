/*
 * Login Page of our application
 */

// React-router
import { Link } from 'react-router-dom';

// React-Material-UI
import { 
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@mui/material'

// Material-ui-icons
import LockIcon from '@mui/icons-material/Lock';


const LoginScreen = () => {
    const paperStyle = { padding :20,
                         height:'70vh',
                         width:280, 
                         margin:'20px auto'
    }
    const avatarStyle = { backgroundColor:'#14A44D' }

    return(
      <Grid>
        <Paper elevation={10} style={paperStyle}>

          {/* Heading Section */}
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>

          {/* Username Field */}
          <TextField label='Username' 
                     placeholder='Enter username' 
                     variant='outlined' fullWidth required />

          {/* Password Field */}
          <br />
          <br />
          <TextField label='Password' 
                     placeholder='Enter password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          {/* Submit Button */}
          <br />
          <br />
          <br />
          <Button type='submit' 
                  component={Link}
                  to='/'
                  variant='contained' 
                  style={{ backgroundColor:'#14A44D', color:'#FBFBFB' }} 
                  fullWidth>
            <strong>
              Sign in
            </strong>
          </Button>

          {/* Account doesn't exist, Signup Link */}
          <br />
          <br />
          <Typography >
            New User ?<span> </span>  
            <Link to='/signup' style={{ color:'#3B71CA' }} >
              Register
            </Link>
          </Typography>

        </Paper>
      </Grid>
    );
}

export default LoginScreen;
