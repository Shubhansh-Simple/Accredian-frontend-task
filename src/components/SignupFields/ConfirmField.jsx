/*
 * Confirm Password Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useEffect, useState } from 'react';

// React-bootstrap
import { Form }     from 'react-bootstrap'; 

/* 
 * LOCAL-MODULES 
 */

// Components
import { SuccessMessage, ErrMessage } from '../Alert';

// Alert Components
import { confirmAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { confirmLimit }    from '../../validation/AlertLimit';

/*
 * Return Confirm Password Form Field OBJECT
 * with confirm, confirmValid, state value
 */
function ConfirmField( password,passwordValid ) {

  /* CONFIRM PASSWORD STATE */
  const [confirm, setConfirm]           = useState('');
  const [confirmValid, setConfirmValid] = useState(null);

  /* 
   * On updating your password, 
   * re-enter confirm password for confirmation
   */
  useEffect(()=>{

    setConfirm('');
    setConfirmValid(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[passwordValid]);

  /* Detect changes in CONFIRM PASSWORD */
  const onConfirmChange = e => {

    // Current value of input field
    const confirmInput    = e.target.value;
    const confirmInputLen = confirmInput.length;

    setConfirm(confirmInput);

    /* Are both password matches */
    let isEqual = (confirmInput === password);

    /* TEST - Non-Empty Input */
    if ( confirmInputLen > 0 )
      setConfirmValid( isEqual );

    /* TEST - Empty Input */
    else
      setConfirmValid( null );
  }

  /* ------OBJECT WITH JSX CODE---------- */
  return {
    confirm,
    confirmValid,
    ConfirmFieldJSX: (

      /* CONFIRM-PASSWORD FIELD (4/4) */
      <Form.Group className='mb-2 px-2 py-3' controlId='formConfirm'>

        {/* Field Label */}
        <Form.Label>
          <strong>Confirm Password</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required
          size='lg'
          type='password'
          value={confirm}
          onChange={onConfirmChange}
          isValid={confirmValid}
          isInvalid={ confirmValid !== null
                          &&
                      !confirmValid }
          disabled={!passwordValid}
          placeholder='Retype password' />

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessage msg={confirmAlertMsg.msg} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={confirmLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* ConfirmField FUNC. ENDS */

export {ConfirmField};

