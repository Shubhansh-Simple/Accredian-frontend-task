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
 * Show error message with Cancel icon and colors
 */
function ErrMessage( {msg='Fail'} ){
  return (
    <div>
      <MdCancel />&nbsp;&nbsp;
      <b>{msg}</b>
    </div>
  );
}

/*
 * Iterate through entire message list if it's exist
 * also showing message based on it's visiblity 
 */
function ErrMessageList( {msgList=[]} ){
  return (
    <>
      {
        msgList 
          &&
        <div>
          {
            msgList
              .filter( msg => msg.visibility === true )
              .map( (msg,index) =>{
                  return <ErrMessage key={index} msg={msg.msg} />
              })
          }
        </div>
      }
    </>
  );
}

export { SuccessMessage, ErrMessage, ErrMessageList };



