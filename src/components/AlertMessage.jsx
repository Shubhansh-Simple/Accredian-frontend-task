/*
 * For displaying recieved messages in application
 * return - JSX
 */

// React-icons
import { TiTick }   from 'react-icons/ti';
import { MdCancel } from "react-icons/md";

/*
 * Show success message with Tick icon
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
 * List <li> the error messages with icons and colors
 */
function ErrMessageItem( {msg='Successfully Accepted'} ){
  return (
    <li>
      <MdCancel />&nbsp;&nbsp;
      <b>{msg}</b>
    </li>
  );
}

/*
 * Iterate through entire message list
 * but showing message based on message's visiblity 
 */
function ErrMessageList( {msgList=[]} ){
  console.log('MsgList recieved - ', msgList, msgList.length );
  return (
    <ul className='text-danger'>
      {
        msgList 
          &&
        msgList.map( (msg,index) => {
          /*
           * Show err message, only if message visibility is true 
           */
          if ( msg.visibility )
            return <ErrMessageItem key={index} msg={msg.msg} />
        })
      }
    </ul>
  );
}

export { SuccessMessage, ErrMessageItem , ErrMessageList };


