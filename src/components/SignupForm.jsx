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
        'msg'        : 'Special character "@" not allowed in username'
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
  const testingUsername = ( id, value, length ) => {

    let copyVal = [...usernameErr];

    switch (id) {

      /* TEST -  Mininum length */
      case 0:
        copyVal[id].visibility = length < usernameVL.min_len;
        break;

      /* TEST -  Maximum length */
      case 1:
        copyVal[id].visibility = length > usernameVL.max_len;
        break;

      /* TEST -  No spaces allowed */
      case 2:
        let isSpace = false;
        for (let i = 0; i < length; i++) {
          if (value[i] === ' ') {
            isSpace = true;
            break;
          }
        }
        copyVal[id].visibility = isSpace;
        break;

      /* TEST -  @ special char not allowed */
      case 3:
        let isSpecialChar = false;
        for (let i = 0; i < length; i++) {
          if (value[i] === '@') {
            isSpecialChar = true;
            break;
          }
        }
        copyVal[id].visibility = isSpecialChar;
        break;

      /* TEST -  Username already exist */
      case 4:
        let isExist = users.some(user=>user.username===value);
        copyVal[id].visibility = isExist;
        break;

      /* No error raised */
      default: break;
    }

    /* 
     * SETING THE FOLLOWING STATE
     *  Username-err-msg-visibility
     *  Username-valid-invalid
     */
    // console.log(copyVal);
    setUsernameErr(copyVal);

    if ( copyVal[id].visibility ){
      console.log('Err Raised  - ', id);
      setUsernameValid(false);
      return 0;
    }
    else{
      console.log('Case Solved - ',id);
      return 1;
    }
    
  } /* TestingUSERNAME FUNC. ENDS */


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
    }

    /* TEST - Non-Empty Input */
    else{
      let casePass = 0;

      for (let i=0; i < usernameVL.total_validations; i++ )
        casePass += testingUsername(i,usernameInput,usernameInputLen);
      
      if (casePass === usernameVL.total_validations)
        setUsernameValid(true);

      console.log(`Value - ${usernameInput}---------------`);
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

