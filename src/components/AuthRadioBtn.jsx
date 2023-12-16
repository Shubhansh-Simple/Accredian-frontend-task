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
      <span className={`${iconStyle}`}>
        <MdLockOutline/>
      </span>
      <br />
      <br />
      <h3><strong>{title}</strong></h3>
      <br />
      <ButtonGroup>

        {/* Navigate to Login Form */}
        <LinkContainer to='/login'>
          <ToggleButton className='px-5' 
                        type='radio' 
                        variant='outline-dark w-40' 
                        size='lg'>
            Login
          </ToggleButton>
        </LinkContainer>

        {/* Navigate to Signup Form */}
        <LinkContainer to='/signup'>
          <ToggleButton className='px-5'
                        type='radio' 
                        variant='outline-dark w-40' 
                        size='lg'>
            Sign Up
          </ToggleButton>
        </LinkContainer>

      </ButtonGroup>
      <br />
      <br />
    </>
  );
}

export default AuthRadioBtn;

