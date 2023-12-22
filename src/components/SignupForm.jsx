/*
 * Card Body of Signup Screen
 */

/* 
 * MODULES 
 */

// React
import { useState, useEffect } from 'react';

// React-bootstrap
import { Form,Button }     from 'react-bootstrap'; 

/* 
 * LOCAL-MODULES 
 */
import {UsernameField} from './SignupFields/UsernameField';
import {EmailField}    from './SignupFields/EmailField';
import {PasswordField} from './SignupFields/PasswordField';
import {ConfirmField}  from './SignupFields/ConfirmField';

/*
 * Signup Form
 * Form Fields - Username, Email, Password, Confirm Password
 */
const SignupForm = () =>{

  /* Getting data from other files */
  const {username, usernameValid, UsernameFieldJSX} = UsernameField();
  const {email, emailValid, EmailFieldJSX}          = EmailField();
  const {password, passwordValid, PasswordFieldJSX} = PasswordField();
  const {confirm, confirmValid, ConfirmFieldJSX}    = ConfirmField();

  /* SUBMIT BUTTON STATE */
  const [ submitDisable, setSubmitDisable ] = useState(true);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   /* Enable submit btn if form valid */
  const checkSubmitBtn = () => {
    let isFormValid = usernameValid && 
                      emailValid && 
                      passwordValid && 
                      confirmValid;
    console.log('Checking for submit button - ',isFormValid);

    setSubmitDisable(isFormValid);
  }

  /* Submitting form data to backend */
  const onFormSubmit = e => {
    e.preventDefault();

    /* Prepare the data */
    const submittedData = {
      'username'        : username,
      'email'           : email,
      'password'        : password,
      'confirmPassword' : confirm,
    }
    console.table('Submitted Data - ', submittedData );
  }

  /* ----------JSX CODE---------- */
  return (

    /* SIGNUP FORM */
    <Form onSubmit={onFormSubmit}>

      {/* USERNAME FIELD (1/4) */}
      {UsernameFieldJSX}

      {/* EMAIL FIELD (1/4) */}
      {EmailFieldJSX}

      {/* PASSWORD FIELD (1/4) */}
      {PasswordFieldJSX}

      {/* CONFIRM PASSWORD FIELD (1/4) */}
      {ConfirmFieldJSX}

      {/* SUBMIT BUTTON  */}
      <div className='text-center'>
        <Button type='submit'
                variant='danger w-70' 
                size='lg' 
                disabled={true}
                className='px-5'>
          Create Account
        </Button>
      </div>

    </Form>
      /* SIGNUP FORM ENDS */
  ); /* -------JSX CODE ENDS----- */
}   /* -------FUNC. ENDS------- */

export default SignupForm;

