/*
 * Card Body of Signup/Login Screen
 */

// React
import { useState, useEffect } from 'react';

// React-bootstrap
import { Form,Button }     from 'react-bootstrap'; 

// Components
import { ErrMessage,
         SuccessMessage,
         ErrMessageList  } from './Alert';

// Field Validation
import { usernameLimit, 
         confirmLimit }    from '../validation/AlertLimit';

import { usernameAlertMsg,
         confirmAlertMsg } from '../validation/AlertMessage';

import { usernameTesting } from '../validation/Testing';

/*
 * Signup Form
 * Form Fields - Username, Email, Password, Confirm Password
 */
const SignupForm = () =>{

  /* USERNAME STATE */
  const [ username, setUsername ]         = useState('');
  const [ usernameErr, setUsernameErr ]   = useState('');
  const [usernameValid, setUsernameValid] = useState(null);

  /* Rest of the form field */
  const [ email, setEmail ]               = useState('');
  const [ password, setPassword ]         = useState('');

  /* CONFIRM PASSWORD STATE */
  const [ confirm, setConfirm ]           = useState('');
  const [ confirmValid, setConfirmValid ] = useState(null);

  /* To manage the state of submit buttion */
  // const [submitBtnDisable, setSubmitBtnDisable] = useState(false);

  /* First thing to execute on page loads */
  useEffect(() => {
    setUsernameErr(usernameAlertMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Detect changes in USERNAME */
  const onUsernameChange = e => {

    // Current value of input field
    const usernameInput    = e.target.value;
    const usernameInputLen = usernameInput.length

    // Set state as current value
    setUsername( usernameInput );

    /* TEST - Empty Input */
    if ( usernameInputLen === 0 )
      setUsernameValid(null);

    /* TEST - Non-Empty Input */
    else{
      let testPass = 0;

      /* 
       * Testing username input against 
       * given criteria on each key stroke 
       */
      for (let i=0; i < usernameLimit.total_validations; i++ ){
        let copyErrState  = [...usernameErr];
        /* 
         * Verify current value against test cases and 
         * adjust error message visibility accordingly
         */
        copyErrState      = usernameTesting( i,copyErrState,
                                               usernameInput,
                                               usernameInputLen )
        setUsernameErr(copyErrState);

        /* 
         * If visibility of any err message is true  
         * means error is raised & 
         * field is invalid otherwise
         * that testcase pass and counted
         */
        (
          copyErrState[i].visibility
                ?
          setUsernameValid(false)
                :
          testPass += 1
        )
      }

      /* Username field passes all test cases*/
      if (testPass === usernameLimit.total_validations)
        setUsernameValid(true);
    }
  }

  /* Detect changes in EMAIL */
  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  /* Detect changes in PASSWORD */
  const onPasswordChange = e => {

    // Current value of input field
    const passwordInput = e.target.value;
    setPassword( passwordInput );
  }

  /* Detect changes in CONFIRM PASSWORD */
  const onConfirmChange = e => {

    // Current value of input field
    const confirmInput = e.target.value;
    setConfirm( confirmInput );

    /* TEST - Empty Input */
    if ( confirmInput.length === 0 )
      setConfirmValid(null);

    /* TEST - Non-Empty Input */
    else{
        /* Pass,if both passwords matches */
        confirmInput ===  password 
                ?
        setConfirmValid(true)
                :
        setConfirmValid(false)
    }
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
      <Form.Group className='mb-2 px-2 py-3' controlId='formUsername'>

        {/* Field Label */}
        <Form.Label>
          <strong>Username</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required 
                      size='lg' 
                      type='text' 
                      value={username}
                      onChange={onUsernameChange}
                      isValid={usernameValid}
                      isInvalid={ usernameValid !== null 
                                    && 
                                !usernameValid }
                      placeholder='Type your username' />

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessageList msgList={usernameErr} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={usernameLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* EMAIL FIELD (2/4) */}
      <Form.Group className='mb-2 px-2 py-3' controlId='formEmail'>
        <Form.Label>
          <strong>Email</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='email' 
                      value={email}
                      onChange={onEmailChange}
                      placeholder='Type your email' />
      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* PASSWORD FIELD (3/4) */}
      <Form.Group className='mb-2 px-2 py-3' controlId='formPassword'>
        <Form.Label>
          <strong>Password</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='password' 
                      value={password}
                      onChange={onPasswordChange}
                      placeholder='Password' />
      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* CONFIRM-PASSWORD FIELD (4/4) */}
      <Form.Group className='mb-2 px-2 py-3' controlId='formConfirmPassword'>

        {/* Field Label */}
        <Form.Label>
          <strong>Confirm Password</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required
                      size='lg' 
                      type='password' 
                      isValid={confirmValid}
                      isInvalid={ confirmValid !== null 
                                      &&
                                  !confirmValid }
                      value={confirm}
                      onChange={onConfirmChange}
                      disabled={!password.length>0}
                      placeholder='Retype password' />

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessage msg={confirmAlertMsg.msg}/>
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={confirmLimit.success_msg} />
        </Form.Control.Feedback>
      </Form.Group>
      <br />

      {/* ------------------------------------------------------- */}

      {/* SUBMIT BUTTON  */}
      <div className='text-center'>
        <Button type='submit'
                variant='danger w-70' 
                size='lg' 
                //disabled={submitBtnDisable}
                className='px-5'>
          Create Account
        </Button>
      </div>

    </Form>
    /* SIGNUP FORM ENDS */
  );
  /* -------JSX CODE ENDS----- */
}
/* -------FUNC. ENDS------- */

export default SignupForm;

