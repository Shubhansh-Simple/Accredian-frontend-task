/*
 * For displaying recieved messages in application
 * return - JSX
 */

// React-icons
import { TiTick }   from 'react-icons/ti';
import { MdCancel } from "react-icons/md";

/*
 * Show success message with Tick icon and colors
 */
function SuccessMessage( {msg='Success'} ){
  return (
    <div className='text-success'>
      <TiTick />&nbsp;&nbsp;
      <b>{msg}</b>
    </div>
  );
}

/*
 * List the error messages with icons
 */
function ErrMessageItem( {msg='Fail'} ){
  return (
    <li>
      <MdCancel />&nbsp;&nbsp;
      <b>{msg}</b>
    </li>
  );
}

/*
 * Iterate through entire message list if it's exist
 * also showing message based on each message's visiblity 
 */
function ErrMessageList( {msgList=[]} ){
  return (
    <>
      {
        msgList 
          &&
        <ul className='text-danger'>
          {
            msgList
              .filter( msg => msg.visibility === true )
              .map( (msg,index) =>{
                  return <ErrMessageItem key={index} msg={msg.msg} />
              })
          }
        </ul>
      }
    </>
  );
}

export { SuccessMessage, ErrMessageItem , ErrMessageList };



