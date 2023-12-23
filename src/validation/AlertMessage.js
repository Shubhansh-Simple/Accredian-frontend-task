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
  /* * MSG -  MIN LEN * INDEX - 0 */
  {
    'visibility' : false,
    'msg'        : `Username must be atleast of ${usernameLimit.min_len} characters`
  },
  /* * MSG -  MAX LEN * INDEX - 1 */
  {
    'visibility' : false,
    'msg'        : `Username must not be more than ${usernameLimit.max_len} characters`
  },
  /* * MSG -  NO SPACE * INDEX - 2 */
  {
    'visibility' : false,
    'msg'        : 'No spaces allowed'                           
  },
  /* * MSG - @ NOT ALLOW * INDEX - 3 */
  {
    'visibility' : false,
    'msg'        : 'Special character "@" not allowed in username'
  },
  /* * MSG -  ALREADY EXIST * INDEX - 4 */
  {
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
    'visibility'      : false,
    'no_space_err'    : 'No spaces allowed'
  },
  {
    'visibility'        : false,
    'already_exist_err' : 'Email already exist'
  }
]

/* 
 * PASSWORD ALERT MESSAGE LIST
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const passwordAlertMsg = [
  /* * MSG -  MIN LEN * INDEX - 0 */
  {
    'visibility' : false,
    'msg'        : `Password must be atleast of ${passwordLimit.min_len} characters`
  },
  /* * MSG -  MAX LEN * INDEX - 1 */
  {
    'visibility' : false,
    'msg'        : `Password must not be more than ${passwordLimit.max_len} characters ` 
  },
  /* * MSG -  MUST HAS LOWER * INDEX - 2 */
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one lowercase character'
  },
  /* * MSG -  MUST HAS UPPER * INDEX - 3 */
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one uppercase character'
  },
  /* * MSG -  MUST HAS DIGIT * INDEX - 4 */
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one digit' 
  },
  /* * MSG -  MUST HAS SPECIAL * INDEX - 5 */
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one special character'
  },
]

/* 
 * CONFIRM PASSWORD ALERT MESSAGE 
 * NOTE - ORDER OF MESSAGE MATTERS!
 */
const confirmAlertMsg = {
    'msg'        : 'Password does not match'
  }


export {
  usernameAlertMsg, 
  emailAlertMsg,
  passwordAlertMsg, 
  confirmAlertMsg
};



