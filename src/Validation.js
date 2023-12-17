/*
 * Form field validation criteria
 * VL - Validation Limit
 */


/*
 * Username Field
 */
const usernameVL = {
  'min_len'          : 6,
  'max_len'          : 12,
  'only_special_char': '!@#$%^',
  'success_msg'      : 'Username is taken',
  'total_validations': 5,
}

/*
 * Password Field
 */
const passwordVL = {
  'min_len'          : 8,
  'max_len'          : 15,
}

export {usernameVL, passwordVL} ;


