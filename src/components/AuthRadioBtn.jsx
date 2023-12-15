/*
 * Radio button to switch b/w login and signup page
 */

// React-router
import {LinkContainer} from 'react-router-bootstrap';

// React-icons
import { MdLockOutline } from "react-icons/md";

// React-bootstrap
import ToggleButton    from 'react-bootstrap/ToggleButton';
import ButtonGroup     from 'react-bootstrap/ButtonGroup';

const AuthRadioBtn = ( {title, iconStyle} ) =>{
  return (
    <>
      <ButtonGroup>

        {/* Navigate to Login Form */}
        <LinkContainer to='/login'>
          <ToggleButton className='px-5' 
                        type='radio' 
                        variant='outline-dark' 
                        size='lg'>
            Login
          </ToggleButton>
        </LinkContainer>

        {/* Navigate to Signup Form */}
        <LinkContainer to='/signup'>
          <ToggleButton className='px-5'
                        type='radio' 
                        variant='outline-dark' 
                        size='lg'>
            Sign Up
          </ToggleButton>
        </LinkContainer>

      </ButtonGroup>
      <br />
      <br />
      <span class={`${iconStyle}`}>
        <MdLockOutline/>
      </span>
      <br />
      <br />
      <h3><strong>{title}</strong></h3>
    </>
  );
}

export default AuthRadioBtn;

