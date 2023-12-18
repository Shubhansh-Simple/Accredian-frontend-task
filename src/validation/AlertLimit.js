/*
 * Form field validation criteria
 */


/*
 * Username Field
 */
const usernameLimit = {
  'min_len'            : 6,
  'max_len'            : 12,
  'not_allow_char'     : '@',
  'success_msg'        : 'Username is taken',
  'total_validations'  : 5,
}

/*
 * Email Field
 */
const emailLimit = {
  'success_msg'        : 'Email is taken',
}

/*
 * Password Field
 */
const passwordLimit = {
  'min_len'            : 8,
  'max_len'            : 15,
  'allow_special_char' : '~`!@#$%^&*()-_+=',
  'success_msg'        : 'Password is taken',
  'total_validations'  : 5,
}

/*
 * Confirm Password Field
 */
const confirmLimit = {
  'success_msg'        : 'Confirm password matched'
}


export {usernameLimit, 
  emailLimit,
  passwordLimit,
  confirmLimit
} ;


