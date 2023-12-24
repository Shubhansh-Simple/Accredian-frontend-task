/*
 * Confirm Password Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useEffect, useState } from 'react';

/* 
 * LOCAL-MODULES 
 */

// Components
import InputField          from '../InputField';
import { confirmProps }    from '../InputProps';
import { confirmAlertMsg } from '../../validation/AlertMessage';

console.log('Confirm field Executed!');

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

      /* CONFIRM PASSWORD FIELD (4/4) */
      <InputField 

          // Static Props
          id         = {confirmProps.id} 
          label      = {confirmProps.label}
          type       = {confirmProps.type}
          placeholder= {confirmProps.placeholder}
          successMsg = {confirmProps.successMsg} 

          // Dynamic Props
          value      = {confirm}
          onChange   = {onConfirmChange}
          isValid    = {confirmValid}
          isInvalid  = { confirmValid !== null 
                            && 
                         !confirmValid }
          disabled   = {!passwordValid}
          errMsgList = {confirmAlertMsg} />

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* ConfirmField FUNC. ENDS */

export {ConfirmField};

