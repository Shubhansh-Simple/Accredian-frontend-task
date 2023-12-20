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
// Components
import { ErrMessage,
         SuccessMessage,
         MessageIterate  } from './Alert';

// Alert Components
import { usernameAlertMsg,
         passwordAlertMsg,
         emailAlertMsg,
         confirmAlertMsg } from '../validation/AlertMessage';

// Validation Limits
import { usernameLimit, 
         passwordLimit,
         emailLimit,
         confirmLimit }    from '../validation/AlertLimit';

// Testing 
import { usernameTesting } from '../validation/test/usernameTesting';
import { passwordTesting } from '../validation/test/passwordTesting';

/*
 * Signup Form
 * Form Fields - Username, Email, Password, Confirm Password
 */
const SignupForm = () =>{

  /* USERNAME STATES */
  const [ username, setUsername ]         = useState('');
  const [ usernameErr, setUsernameErr ]   = useState([]);
  const [usernameValid, setUsernameValid] = useState(null);

  /* EMAIL STATES */
  const [ email, setEmail ]               = useState('');
  const [emailValid, setEmailValid] = useState(null);

  /* PASSWORD STATES */
  const [ password,    setPassword ]      = useState('');
  const [ passwordErr, setPasswordErr ]   = useState([]);
  const [passwordValid, setPasswordValid] = useState(null);

  /* CONFIRM PASSWORD STATE */
  const [ confirm, setConfirm ]           = useState('');
  const [ confirmValid, setConfirmValid ] = useState(null);

  /* SUBMIT BUTTON STATE */
  const [ submitDisable, setSubmitDisable ] = useState(true);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setUsernameErr(usernameAlertMsg);
    setPasswordErr(passwordAlertMsg);
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
       * Testing user inputs on each key stroke 
       * for username
       */
      for (let i=0; i < usernameLimit.total_validations; i++ ){
        let copyErrState  = [...usernameErr];
        /* 
         * Verify current value against test cases and 
         * adjust error message visibility accordingly
         */
        copyErrState = usernameTesting(i, copyErrState,
                                          usernameInput,
                                          usernameInputLen);
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
      } // LOOPS ENDS

      /* USERNAME - ALL TEST CASES PASS */
      if (testPass === usernameLimit.total_validations){
        setUsernameValid(true);
        checkSubmitBtn();
      }
    }
  }

  /* Detect changes in EMAIL */
  const onEmailChange = e => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    setEmailValid(true);

    /* Demo testing */
    if ( emailInput.length > 5 )
      checkSubmitBtn();
  }

  /* Detect changes in PASSWORD */
  const onPasswordChange = e => {

    // Current value of input field
    const passwordInput    = e.target.value;
    const passwordInputLen = passwordInput.length

    // Set state as current value
    setPassword( passwordInput );

    /* TEST - Empty Input */
    if ( passwordInputLen === 0 )
      setPasswordValid(null);

    /* TEST - Non-Empty Input */
    else{
      let testPass = 0;
      /* 
       * Testing user inputs on each key stroke 
       * for password 
       */
      for (let i = 0; i < passwordLimit.total_validations; i++) {
        let copyErrState  = [...passwordErr];
        /* 
         * Verify current value against test cases and 
         * adjust error message visibility accordingly
         */
        copyErrState = passwordTesting( i, copyErrState, 
                                           passwordInput,
                                           passwordInputLen );
        setPasswordErr(copyErrState);

        /* 
         * If visibility of any err message is true  
         * means error is raised & 
         * field is invalid otherwise
         * that testcase pass and counted
         */
        (
          copyErrState[i].visibility
                ?
          setPasswordValid(false)
                :
          testPass += 1
        )
      } // LOOPS ENDS

      /* PASSWORD - ALL TEST CASES PASS */
      if (testPass === passwordLimit.total_validations){
        setPasswordValid(true);
        checkSubmitBtn();
      }

      /* 
       * When updating your password, 
       * please re-enter it for confirmation.
       */
      if ( confirm.length > 0 ){
        setConfirm('')
        setConfirmValid(null);
      }
    }
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
    else if (  confirmInput === password  ){
      /* CONFIRM - ALL TEST CASES PASS */
      setConfirmValid(true);
      checkSubmitBtn()
    }
    else
      setConfirmValid(false);
  }

  /* Enable submit btn if form valid */
  const checkSubmitBtn = () => {
    console.log('Checking for submit button');
    let isFormValid = usernameValid && 
                      emailValid && 
                      passwordValid && 
                      confirmValid;

    setSubmitDisable(!isFormValid);
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
          <MessageIterate msgList={usernameErr} greenTick={false} />
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
                      placeholder='example@email.com' />
      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* PASSWORD FIELD (3/4) */}
      <Form.Group className='mb-2 px-2 py-3' controlId='formPassword'>

        {/* Field Label */}
        <Form.Label>
          <strong>Password</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required 
                      size='lg' 
                      type='text' 
                      value={password}
                      onChange={onPasswordChange}
                      isValid={passwordValid}
                      isInvalid={ passwordValid !== null 
                                    && 
                                 !passwordValid }
                      placeholder='Password' />
         
        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <MessageIterate msgList={passwordErr} greenTick={true} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={passwordLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* CONFIRM-PASSWORD FIELD (4/4) */}
      <Form.Group className='mb-2 px-2 py-3' controlId='formConfirm'>

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
                      disabled={!passwordValid}
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
                disabled={submitDisable}
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

