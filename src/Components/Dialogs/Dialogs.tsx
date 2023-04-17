import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogPropsType={
    dialogs:Dialog[],
    messages:MessageType[]
}
const Dialogs = (props:DialogPropsType) => {
    let dialogsDataElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesDataElement = props.messages.map(msg => <Message message={msg.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message}/>*/}
                {messagesDataElement}
            </div>
        </div>
    );
};

export default Dialogs;