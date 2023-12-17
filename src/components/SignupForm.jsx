/*
 * Sign Up Form
 * Put the re-render part into separate file
 * to increase speed
 */

// React
import { useState } from 'react';

// React-bootstrap
import { Form,Button } from 'react-bootstrap'; 

// Local
import { ErrMessageList } from './AlertMessage';
import users              from '../sampleUsers';

const SignupForm = () =>{
  /*
   * Fields Required for signup are
   * [ Username , Email , Password , confirmPassword ]
   */
  const [ username, setUsername ]                   = useState('');
  const [ email, setEmail ]                     = useState('');
  const [ password, setPassword ]               = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(false);



  const messageList = [
   'Username must be atleast of 6 characters',
   'Username must not be more than 12 characters',
   'No spaces allowed',
   'Only these special characters allowed',
   'Username already exist',
  ]


  /* Detect changes in Username */
  const onUsernameChange = e => {

    const usernameVal = e.target.value;
    setUsername( usernameVal );

    /* Cannot be empty */
    if ( !usernameVal ){
      console.log('Username is empty');
      setIsUsernameValid(false);
    }
    /* No spaces allowed */
    else if ( usernameVal.slice(-1) === ' ' ){
      console.log('No spaces allowed');
      setIsUsernameValid(false);
    }
    /* No spaces allowed */
    else if ( usernameVal.length < 6 ){
      console.log('Username is min length should be 6');
      setIsUsernameValid(false);
    }
    /* No spaces allowed */
    else if ( usernameVal.length > 12 ){
      console.log('Username is max length should be 12');
      setIsUsernameValid(false);
    }

    /* Username already exist */
    else if ( users.find(user => user.username === usernameVal) ){
      console.log('Username already exist');
      setIsUsernameValid(false);
    }
    else{
      console.log('Username, All test passed');
      setIsUsernameValid(true);
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
                      value={username}
                      onChange={onUsernameChange}
                      placeholder='Type your username' />

        <ErrMessageList msgList={messageList} />
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
        <Form.Text>Make sure the both password matches</Form.Text>
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

