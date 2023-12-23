/*
 * Username Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useState, useEffect } from 'react';

// React-bootstrap
import { Form }     from 'react-bootstrap'; 

/* 
 * LOCAL-MODULES 
 */

// Components
import { SuccessMessage, ErrMessageList  } from '../Alert';

// Alert Text Messages
import { usernameAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { usernameLimit }    from '../../validation/AlertLimit';

// Testing 
import { usernameTesting }  from '../../validation/test/usernameTesting';


/*
 * Return Username Form Field OBJECT
 * with username, usernameValid, state value
 */
function UsernameField(){

  /* USERNAME STATES */
  const [ username, setUsername ]               = useState('');
  const [ usernameErrList, setUsernameErrList ] = useState([]);
  const [usernameValid, setUsernameValid]       = useState(null);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setUsernameErrList(usernameAlertMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Detect changes in USERNAME */
  const onUsernameChange = e => {

    // Current value of input field
    const usernameInput    = e.target.value;
    const usernameInputLen = usernameInput.length

    // Set state as current value
    setUsername( usernameInput );

    /* TEST - Non-Empty Input */
    if ( usernameInputLen > 0 ){

      let testPass = 0;

      /*
       * Testing user inputs on each key stroke 
       */
      for (let i=0; i < usernameLimit.total_validations; i++ ){

        // Copy of current err msg state
        let copyErrState  = [...usernameErrList];

        /* 
         * Testing input value against test cases and 
         * update error message visibility accordingly
         */
        copyErrState = usernameTesting(i, copyErrState,
                                          usernameInput,
                                          usernameInputLen);
        setUsernameErrList(copyErrState);

        (
          copyErrState[i].visibility
                ?
          /* If err visibility is true then field become invalid */
          setUsernameValid(false)
                :
          /* Otherwise, test pass and counted */
          testPass += 1
        )
      } // LOOPS ENDS

      /* USERNAME - ALL TEST CASES PASS */
      if (testPass === usernameLimit.total_validations)
       setUsernameValid(true);
    }

    /* TEST - Empty Input */
    else
      setUsernameValid(null);
  }

  /* ------OBJECT WITH JSX CODE---------- */
  return {
    username,
    usernameValid,
    UsernameFieldJSX : (

      /* USERNAME FIELD (1/4) */
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
          <ErrMessageList msgList={usernameErrList} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={usernameLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* UsernameField FUNC. ENDS */

export {UsernameField};

