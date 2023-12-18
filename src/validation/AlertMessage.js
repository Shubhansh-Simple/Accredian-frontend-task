/*
 * Message shown on VALIDATON FAILURE
 *
 * Alert messages of each form field
 * on their FAILURE of validation test
 */

/*
 * Note : SUCCESS message will be shown only 
 *        after the form field is set to valid
 *        <FORM.FEEDBACK> will handle rest 
 */

/* 
 * USERNAME ALERT MESSAGE 
 */
const usernameAlertMsg = [
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

/* 
 * EMAIL ALERT MESSAGE 
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
 * PASSWORD ALERT MESSAGE 
 */
const passwordAlertMsg = [
  {
    'visibility' : false,
    'msg'        : 'Password must be atleast of 8 characters'
  },
  {
    'visibility' : false,
    'msg'        : 'Password must not be more than 15 characters' 
  },
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one special character'
  },
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one digit' 
  },
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one lowercase character'
  },
  {
    'visibility' : false,
    'msg'        : 'Password must contain atleast one uppercase character'
  }
]

/* 
 * CONFIRM PASSWORD ALERT MESSAGE 
 */
const confirmAlertMsg = {
    'visibility' : false,
    'msg'        : 'Password does not match'
  }


export {
  usernameAlertMsg, 
  emailAlertMsg,
  passwordAlertMsg, 
  confirmAlertMsg
};



