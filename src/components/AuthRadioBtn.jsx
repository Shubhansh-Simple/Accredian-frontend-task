/*
 * Radio button to switch b/w login and signup page
 */

// React-router
import {LinkContainer} from 'react-router-bootstrap';

import ToggleButton    from 'react-bootstrap/ToggleButton';
import ButtonGroup     from 'react-bootstrap/ButtonGroup';

const AuthRadioBtn = () =>{
  return (
    <>
    <br />
    <ButtonGroup className='my-5'>

      {/* Navigate to Login Form */}
      <LinkContainer to='/login'>
        <ToggleButton className='px-5' 
                      type='radio' 
                      variant='outline-primary' 
                      size='lg'>
          Login
        </ToggleButton>
      </LinkContainer>

      {/* Navigate to Signup Form */}
      <LinkContainer to='/signup'>
        <ToggleButton className='px-5'
                      type='radio' 
                      variant='outline-primary' 
                      size='lg'>
          Sign Up
        </ToggleButton>
      </LinkContainer>

    </ButtonGroup>
    </>
  );
}

export default AuthRadioBtn;

