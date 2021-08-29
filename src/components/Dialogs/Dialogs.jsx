import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key = {dialog.id} id={dialog.id} />);

   let messagesElements = state.messages.map(message => <Message message={message.message} key = {message.id} />);

   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (e) => {
         let body = e.target.value;
         props.updateNewMessageBody(body);
   }
 
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
           <div> {messagesElements} </div>
           <div>
              <div> <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>   </div>
              <div> <button onClick={ onSendMessageClick } >Send</button> </div>
           </div>
         </div>
      </div>
   );
}

export default Dialogs;