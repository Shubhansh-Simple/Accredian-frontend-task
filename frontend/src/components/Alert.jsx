/*
 * For displaying recieved messages in application
 * return - JSX
 */

// React-icons
import { TiTick }   from 'react-icons/ti';
import { MdCancel } from "react-icons/md";

/*
 * Show success message with 
 * Tick icon and success colors
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
 * Show error message with 
 * Cancel icon and danger colors
 */
function ErrMessage( {msg='Fail'} ){
  return (
    <div className='text-danger'>
      <MdCancel />&nbsp;&nbsp;
      <b>{msg}</b>
    </div>
  );
}

/*
 * Show message with their respective 
 * colors and icons based on their visiblity
 */
function Message( {msg} ){
  if ( msg.visibility )
    return <ErrMessage msg={msg.msg} />
  else
    return <SuccessMessage msg={msg.msg} />
}


/*
 * Iterate through entire message list 
 * & pass them to Message component
 */
function MessageList( { msgList=[] }){
    return (
        msgList.map((msg, index) => {
          return <Message key={index} msg={msg} />
        })
    );
}


/*
 * Iterate through entire message list if it's exist
 */
function ErrMessageList( { msgList=[], showErrStatus=false } ){
  if ( msgList.length > 0 ){
    if ( showErrStatus )
      return <MessageList msgList={msgList} />
    else
      return (
          msgList
            .filter( msg => msg.visibility === true )
            .map( (msg,index) =>{
                return <ErrMessage key={index} msg={msg.msg} />
            })
      );
  }
}

export { MessageList, 
  SuccessMessage, 
  ErrMessageList 
};



