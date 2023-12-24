/*
 * Form Input Field Component
 */

// React-bootstrap
import { Form }     from 'react-bootstrap'; 

// Components
import { SuccessMessage, ErrMessageList  } from './Alert';

/*
 * Input field component for 
 * UsernameField, EmailField, 
 * PasswordField, ConfirmPasswordField
 */
const InputField = ({
  /* Non-Default Value Props */
  id,
  label,
  type,
  value,
  onChange,
  isValid,
  isInvalid,
  placeholder,
  errMsgList,
  successMsg,
  /* Default Value Props */
  helpText='',
  disabled=false,
  showErrStatus=false
}) => {

  /* ------JSX CODE----- */
  return (

      /* INPUT FIELD (1/4) */
      <Form.Group className='mb-2 px-2 py-3' controlId={id}>

        {/* Field Label */}
        <Form.Label>
          <strong>{label}</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required 
                      size        = 'lg' 
                      type        = {type}
                      value       = {value}
                      onChange    = {onChange}
                      isValid     = {isValid}
                      isInvalid   = {isInvalid}
                      disabled    = {disabled}
                      placeholder = {placeholder} />

        {/* Field Help Text */}
        <Form.Text>{helpText}</Form.Text>

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessageList msgList={errMsgList} showErrStatus={showErrStatus} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={successMsg} />
        </Form.Control.Feedback>

      </Form.Group>

    ) /* JSX ENDS */
  }   /* InputField FUNC. ENDS */

export default InputField; 

