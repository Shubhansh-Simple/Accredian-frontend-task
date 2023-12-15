/*
 * Sign Up Form
 * Put the re-render part into separate file
 * to increase speed
 */

// React
import { useState } from 'react';

// React-bootstrap
import { Form,Button } from 'react-bootstrap'; 

const SignupForm = () =>{
  /*
   * Fields Required for signup are
   * Username and Email and Password and confirmPassword
   */
  const [ username, setUsername ]               = useState('');
  const [ email, setEmail ]                     = useState('');
  const [ password, setPassword ]               = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  /* Detect changes in Username */
  const onUsernameChange = e => {
    setUsername(e.target.value);
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
  const handleSubmit = e => {
    e.preventDefault();
    const submittedData = {
      'username' : username,
      'email' : email,
      'password' : password,
      'confirmPassword' : confirmPassword,
    }
    console.table('Submitted Data - ', submittedData );
  }

  return (
    /* Signup Form */
    <Form onSubmit={handleSubmit}>
      {/* Username */}
      <Form.Group controlId='formUsername' className='mb-2 px-2 py-3'>
        <Form.Label>
          <strong>Username</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='text' 
                      value={username}
                      onChange={onUsernameChange}
                      placeholder='Type your username' />
      </Form.Group>

      {/* Email */}
      <Form.Group controlId='formEmail' className='mb-2 px-2 py-3'>
        <Form.Label>
          <strong>Email address</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='email' 
                      value={email}
                      onChange={onEmailChange}
                      placeholder='Type your email' />
      </Form.Group>

      {/* Password */}
      <Form.Group controlId='formPassword' className='mb-3 px-2 py-3'>
        <Form.Label>
          <strong>Password</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='password' 
                      value={password}
                      onChange={onPasswordChange}
                      placeholder='Password' />
      </Form.Group>

      {/* Confirm Password */}
      <Form.Group controlId='formConfirmPassword' className='mb-3 px-2 py-3'>
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

      {/* Submit Button  */}
      <div className='text-center'>
        <Button type='submit'
                variant='danger w-70' 
                size='lg' 
                className='px-5'>
          Create Account
        </Button>
      </div>

    </Form>
  );
}

export default SignupForm;

