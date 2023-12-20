/*
 * Card Body of Login Screen
 */

/* 
 * MODULES 
 */
// React-bootstrap
import {useState} from 'react';
import { Form,Button }     from 'react-bootstrap'; 

/*
 * Login Form
 * Form Fields - Username/Email, Password
 */
const LoginForm = () =>{

  /* USERNAME STATES */
  const [ username, setUsername ] = useState('');

  /* PASSWORD STATES */
  const [password, setPassword]   = useState('');

  /* To manage the state of submit buttion */
  // const [submitBtnDisable, setSubmitBtnDisable] = useState(false);

  /* Detect changes in USERNAME */
  const onUsernameChange = e =>{

    // Current value of input field
    const usernameInput = e.target.value;
    setUsername( usernameInput );
  }


  /* Detect changes in PASSWORD */
  const onPasswordChange = e => {

    // Current value of input field
    const passwordInput = e.target.value;
    setPassword( passwordInput );
  }


  /* Submitting form data to backend */
  const onFormSubmit = e => {
    e.preventDefault();

    /* Prepare the data */
    const submittedData = {
      'username'        : username,
      'password'        : password,
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
                      placeholder='Username or Email' />
      </Form.Group>

      {/* ------------------------------------------------------- */}


      {/* PASSWORD FIELD (2/4) */}
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
                      placeholder='Password' />
      </Form.Group>

      {/* ------------------------------------------------------- */}

      {/* SUBMIT BUTTON  */}
      <div className='text-center'>
        <Button type='submit'
                variant='primary w-60'
                size='lg' 
                //disabled={submitBtnDisable}
                className='px-5'>
          Sign In
        </Button>
      </div>
    </Form>
    /* LOGIN FORM ENDS */
  );
  /* -------JSX CODE ENDS----- */
}
/* -------FUNC. ENDS------- */

export default LoginForm;
