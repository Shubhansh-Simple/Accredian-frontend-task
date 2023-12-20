/*
 * Form field validation criteria
 */

/*
 * Ascii ranges of lowercase, uppercase, 
 * digits and special character
 */
const ascii_range = {
  'lower' : {
    'start' : 97,
    'end'   : 122,
  },
  'upper' : {
    'start' : 65,
    'end'   : 90,
  },
  'digit' : {
    'start' : 48,
    'end'   : 57,
  },

  'specialCharacter' : {
    "'" : true,
    "!" : true,
    "@" : true,
    "#" : true,
    "$" : true,
    "%" : true,
    "^" : true,
    "&" : true,
    "*" : true,
    "(" : true,
    ")" : true,
    "_" : true,
    "+" : true,
    "-" : true,
    "=" : true,
    "{" : true,
    "}" : true,
    "[" : true,
    "]" : true,
    "|" : true,
    ";" : true,
    ":" : true,
    "," : true,
    "." : true,
    "/" : true,
    "?" : true,
    "<" : true,
    ">" : true,
    "~" : true,
    "`" : true,
    "'" : true,
  }
}

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
  'total_validations'  : 6,
}

/*
 * Confirm Password Field
 */
const confirmLimit = {
  'success_msg'        : 'Confirm password matched'
}


export {  usernameLimit, 
          emailLimit,
          passwordLimit,
          confirmLimit,
          ascii_range
       };


