/*
 * Each form field Props for InputField Components
 */


/* Username Input Field Props */
const usernameProps = {
 'id'             : 'formUsername',
 'label'          : 'Username',
 'type'           : 'text',
 'placeholder'    : 'Type your username',
 'successMsg'     : 'Username is taken',
}


/* Email Input Field Props */
const emailProps = {
 'id'             : 'formEmail',
 'label'          : 'Email',
 'type'           : 'email',
 'placeholder'    : 'user@example.com',
 'successMsg'     : 'Email is taken',
 'helpText'       : 'Note : Email will be validated through OTP'   
}


/* Password Input Field Props */
const passwordProps = {
 'id'             : 'formPassword',
 'label'          : 'Password',
 'type'           : 'password',
 'placeholder'    : 'Password',
 'successMsg'     : 'Password is taken',
}


/* Confirm Password Input Field Props */
const confirmProps = {
 'id'             : 'formConfirm',
 'label'          : 'Confirm Password',
 'type'           : 'text',
 'placeholder'    : 'Retype password',
 'successMsg'     : 'Confirm password matched',
}


export {
  usernameProps,
  emailProps,
  passwordProps,
  confirmProps
};


