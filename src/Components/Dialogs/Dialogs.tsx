import React, {ChangeEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Dialog, MessageType} from '../../redux/state';
import {ProfileTypes} from '../../redux/profileReducer';
import {DialogsType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';

type DialogPropsType={
    dialogsData: Dialog[],
    messagesData: MessageType[],
    newMessagesBody: string,
    dispatch: (action:ProfileTypes |DialogsType) => void;
}
export const Dialogs = (props: DialogPropsType) => {
    let dialogsDataElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesDataElement = props.messagesData.map(msg => <Message message={msg.message}/>);
    const onMessageClickHandler =()=>{
        props.dispatch(sendMessageAC());
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(body));
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {dialogsDataElement}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message}/>*/}
                <div>
                    {messagesDataElement}
                </div>
                <div>
                    <div><textarea
                            value={props.newMessagesBody}
                            placeholder='enter your message'
                            onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onMessageClickHandler}>send</button></div>
                </div>
            </div>
        </div>
    );
};