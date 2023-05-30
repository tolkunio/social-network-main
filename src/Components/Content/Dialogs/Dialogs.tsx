import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs = (props: DialogsPropsType) =>{

    let dialogsDataElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesDataElement =props.dialogsPage.messagesData.map(msg => <Message message={msg.message}/>);
    const onMessageClickHandler = () => {
        props.sendMessageCallback();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.changeNewMessageCallback(body);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesDataElement}
                </div>
                <div>
                    <div>
                        <textarea
                            value={props.dialogsPage.newMessagesBody}
                            placeholder="enter your message"
                            onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onMessageClickHandler}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};