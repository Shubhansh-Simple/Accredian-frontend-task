/*
 * Card Body of Signup/Login Screen
 */

// React
import { useState, useEffect } from 'react';

// React-bootstrap
import { Form,Button } from 'react-bootstrap'; 

// Components
import { ErrMessageList, SuccessMessage  } from './AlertMessage';
import users                               from '../sampleUsers';
import {usernameVL}                        from '../Validation';

/*
 * Signup Form
 * Form Fields - Username, Email, Password, Confirm Password
 */
const SignupForm = () =>{

  const [ username, setUsername ]               = useState('');
  const [ usernameErr, setUsernameErr ]         = useState('');
  const [usernameValid, setUsernameValid]       = useState(null);

  /* Rest of the form field */
  const [ email, setEmail ]                     = useState('');
  const [ password, setPassword ]               = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  /* To manage the state of submit buttion */
  const [submitBtnDisable, setSubmitBtnDisable] = useState(false);


  const messageList = [
      {
        'visibility' : false,
        'msg'        : 'Username must be atleast of 6 characters'
      },
      {
        'visibility' : false,
        'msg'        : 'Username must not be more than 12 characters' 
      },
      {
        'visibility' : false,
        'msg'        : 'No spaces allowed'                           
      },
      {
        'visibility' : false,
        'msg'        : 'Only these special characters allowed'        
      },
      {
        'visibility' : false,
        'msg'        : 'Username already exist'                       
      },
    ]

  /* First thing to execute on page loads */
  useEffect(() => {
    setUsernameErr(messageList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
   * Test input value against below criterias
   */
  const testingUsername = ( testCase, value, length ) => {

    let copyVal = [...usernameErr];

    switch( testCase ){

      /* TEST -  Mininum length */
      case 0:
        if ( length < usernameVL.min_len ){
          copyVal[testCase].visibility = true;
          setUsernameErr(copyVal);
          console.log('Case 0 - Min length error raised!');

          // ( usernameValid && setUsernameValid(false) );
          setUsernameValid(false);
        }
        else{
          console.log('Case 0 solved!')
          copyVal[testCase].visibility = false;
          setUsernameErr(copyVal);
        }
        break;

      /* TEST -  Maximum length */
      case 1:
        if ( length > usernameVL.max_len ){
          console.log('Case 1 - Max length error raised!');

          copyVal[testCase].visibility = true;
          setUsernameErr(copyVal);
          // ( usernameValid && setUsernameValid(false) );
          setUsernameValid(false);
        }
        else{
          console.log('Case 1 solved!')

          copyVal[testCase].visibility = false;
          setUsernameErr(copyVal);
        }
        break;

      /* TEST -  No spaces allowed */
      case 2:
        let isSpace = false;
        for ( let i=0; i < length; i++ ){
          if (value[i] === ' '){
            isSpace = true;
            break;
          }
        }
        if ( isSpace ){
          console.log('Case 2 - No space message error raised!');

          copyVal[testCase].visibility = true;
          // ( usernameValid && setUsernameValid(false) );
          setUsernameValid(false);
        }
        else{
          console.log('Case 2 solved!')

          copyVal[testCase].visibility = false;
        }
        setUsernameErr(copyVal);
        break;

      /* TEST -  Only specific special char allowed */
      case 3:
        // console.log('Case 3 - Only special char error raised!');
        // setIsUsernameInValid(true);
        break;

      /* TEST -  Username already exist */
      case 4:
        if ( users.find(user => user.username === value) ){
          console.log('Case 4 - Username already exist!');

          copyVal[testCase].visibility = true;
          setUsernameErr(copyVal);
          // ( usernameValid && setUsernameValid(false) );
          setUsernameValid(false);
        }
        else{
          console.log('Case 4 solved!')

          copyVal[testCase].visibility = false;
          setUsernameErr(copyVal);
        }
        break;

      /* No error raised */
      default: break;
    }
    // console.log('Outside of switch case statement ');
  }

  /* Detect changes in Username */
  const onUsernameChange = e => {

    // Current value of input field
    const usernameInput    = e.target.value;
    const usernameInputLen = usernameInput.length
    setUsername( usernameInput );

    /* TEST - Empty Input */
    if ( usernameInputLen === 0 ){
      console.log('Zero length error raised!');
      setUsernameValid(null);
      /* What about the message visibility in this state ? */
    }
    /* TEST - Non-Empty Input */
    else{
      for (let i=0; i < usernameVL.total_validations; i++ )
        testingUsername( i, usernameInput, usernameInputLen );

      console.log(`Value - ${usernameInputLen}---------------`);
    }
  }

  /* Detect changes in Email */
  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  /* Detect changes in Password */
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }

  /* Detect changes in Confirm Password */
  const onConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  }

  /* Submitting form data to backend */
  const onFormSubmit = e => {
    e.preventDefault();

    /* Prepare the data */
    const submittedData = {
      'username'        : username,
      'email'           : email,
      'password'        : password,
      'confirmPassword' : confirmPassword,
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
        <Form.Label><strong>Username</strong></Form.Label>

        {/* Field Input */}
        <Form.Control size='lg' 
                      type='text' 
                      isValid={usernameValid}
                      isInvalid={ usernameValid !== null 
                          && !usernameValid }
                      value={username}
                      onChange={onUsernameChange}
                      required 
                      placeholder='Type your username' />

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessageList msgList={usernameErr} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={usernameVL.success_msg} />
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
        <Form.Label>
          <strong>Confirm Password</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='password' 
                      value={confirmPassword}
                      onChange={onConfirmPasswordChange}
                      placeholder='Retype password' />
      </Form.Group>
      <br />

      {/* ------------------------------------------------------- */}

      {/* SUBMIT BUTTON  */}
      <div className='text-center'>
        <Button type='submit'
                variant='danger w-70' 
                size='lg' 
                disabled={submitBtnDisable}
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

