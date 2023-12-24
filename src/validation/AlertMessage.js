/*
 * Message shown on VALIDATON FAILURE
 *
 * Alert messages of each form field
 * on their validation FAILURE 
 */

import {usernameLimit, passwordLimit, emailLimit} from "./AlertLimit";

/*
 * Note : SUCCESS message will be shown only 
 *        after the form field is set to valid
 *        <FORM.FEEDBACK> will handle rest 
 */

/* 
 * USERNAME ALERT MESSAGE LIST
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const usernameAlertMsg = [
  {
    /* ERR- MIN LEN,INDEX-0 */
    'visibility' : false,
    'msg'        : `Username must be atleast of ${usernameLimit.min_len} characters`
  },
  {
    /* ERR- MAX LEN,INDEX-1 */
    'visibility' : false,
    'msg'        : `Username must not be more than ${usernameLimit.max_len} characters`
  },
  {
    /* ERR- NO SPACE,INDEX-2 */
    'visibility' : false,
    'msg'        : 'No spaces allowed'                           
  },
  {
    /* ERR-@ NOT ALLOW,INDEX-3 */
    'visibility' : false,
    'msg'        : 'Special character "@" not allowed in username'
  },
  {
    /* ERR- ALREADY EXIST,INDEX-4 */
    'visibility' : false,
    'msg'        : 'Username already exist'                       
  },
]

/* 
 * EMAIL ALERT MESSAGE LIST
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const emailAlertMsg = [
  {
    /* ERR- MIN LEN,INDEX-0 */
    'visibility' : false,
    'msg'        : 'Enter a valid email'
  },
  {
    /* ERR- MAX LEN,INDEX-1 */
    'visibility' : false,
    'msg'        : `Email is too long (Max length is ${emailLimit.max_len})` 
  },
  {
    /* ERR- NO SPACE,INDEX-2 */
    'visibility' : false,
    'msg'        : 'No spaces allowed'
  },
  {
    /* ERR-'.' Must not starts or ends with this, INDEX-3 */
    'visibility' : false,
    'msg'        : 'Must not starts or ends with period character'
  },
  {
    /* ERR- ALREADY EXIST,INDEX-4 */
    'visibility' : false,
    'msg'        : 'Email already exist'
  }
]

/* 
 * PASSWORD ALERT MESSAGE LIST
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const passwordAlertMsg = [
  {
    /* ERR- MIN LEN,INDEX-0 */
    'visibility' : false,
    'msg'        : `Password must be atleast of ${passwordLimit.min_len} characters`
  },
  {
    /* ERR- MAX LEN,INDEX-1 */
    'visibility' : false,
    'msg'        : `Password must not be more than ${passwordLimit.max_len} characters ` 
  },
  {
    /* ERR- MUST HAS LOWER,INDEX-2 */
    'visibility' : false,
    'msg'        : 'Password must contain atleast one lowercase character'
  },
  {
    /* ERR- MUST HAS UPPER,INDEX-3 */
    'visibility' : false,
    'msg'        : 'Password must contain atleast one uppercase character'
  },
  {
    /* ERR- MUST HAS DIGIT,INDEX-4 */
    'visibility' : false,
    'msg'        : 'Password must contain atleast one digit' 
  },
  {
    /* ERR- MUST HAS SPECIAL,INDEX-5 */
    'visibility' : false,
    'msg'        : 'Password must contain atleast one special character'
  },
]

/* 
 * CONFIRM PASSWORD ALERT MESSAGE 
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const confirmAlertMsg = [
  {
    'visibility' : true,
    'msg'        : 'Password does not match'
  }
]

export {
  usernameAlertMsg, 
  emailAlertMsg,
  passwordAlertMsg, 
  confirmAlertMsg
};



