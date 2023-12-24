/*
 * Form field validation criteria
 */

/*
 * Ascii ranges of lowercase, uppercase, 
 * digits and special character
 */
const ascii_range = {
  'lower': {
    'start': 97,
    'end': 122,
  },
  'upper': {
    'start': 65,
    'end': 90,
  },
  'digit': {
    'start': 48,
    'end': 57,
  }
}
/*
 * For checking atleast one/none 
 * special character required
 */
const  specialCharacter = {
  "'" : true, "!" : true, "@" : true,
  "#" : true, "$" : true, "%" : true,
  "^" : true, "&" : true, "*" : true,
  "(" : true, ")" : true, "_" : true,
  "+" : true, "-" : true, "=" : true,
  "{" : true, "}" : true, "[" : true,
  "]" : true, "|" : true, ";" : true,
  ":" : true, "," : true, "." : true,
  "/" : true, "?" : true, "<" : true,
  ">" : true, "~" : true, "`" : true,
}

/*
 * Username Field
 */
const usernameLimit = {
  'min_len'            : 6,
  'max_len'            : 12,
  'not_allow_char'     : '@', // need to improve
  'total_validations'  : 5,
}

/*
 * Email Field
 */
const emailLimit = {
  'max_len'            : 254,
  'total_validations'  : 5,
}

/*
 * Password Field
 */
const passwordLimit = {
  'min_len'            : 8,
  'max_len'            : 15,
  'allow_special_char' : '~`!@#$%^&*()-_+=', // unused
  'total_validations'  : 6,
}

export {  usernameLimit, 
          emailLimit,
          passwordLimit,
          ascii_range,
          specialCharacter
       };


