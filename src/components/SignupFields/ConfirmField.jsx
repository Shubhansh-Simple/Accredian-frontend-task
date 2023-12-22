/*
 * Confirm Password Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useState } from 'react';

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
 * Return Password Form Field OBJECT
 * with password, passwordValid, state value
 */
function ConfirmField() {

  /* CONFIRM PASSWORD STATE */
  const [confirm, setConfirm] = useState('');
  const [confirmValid, setConfirmValid] = useState(null);

  // for now
  let password = '';
  let passwordValid = false;

  /* Detect changes in CONFIRM PASSWORD */
  const onConfirmChange = e => {

    // Current value of input field
    const confirmInput = e.target.value;
    setConfirm(confirmInput);

    /* TEST - Empty Input */
    if (confirmInput.length === 0)
      setConfirmValid(null);

    /* TEST - Non-Empty Input */
    else if (confirmInput === password) {
      /* CONFIRM - ALL TEST CASES PASS */
      setConfirmValid(true);
      // checkSubmitBtn()
    }
    else
      setConfirmValid(false);
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
          isValid={confirmValid}
          isInvalid={confirmValid !== null
            &&
            !confirmValid}
          value={confirm}
          onChange={onConfirmChange}
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

