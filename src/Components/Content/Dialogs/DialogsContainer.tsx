import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogsReducer';
import {StoreType} from '../../../redux/redux-store';

type DialogsContainerPropsType={
    store:StoreType
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let dialogs = props.store.getState().dialogsPage;
    let dialogsDataElement = dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesDataElement = dialogs.messagesData.map(msg => <Message message={msg.message}/>);
    const onMessageClickHandler =()=>{
        props.store.dispatch(sendMessageAC());
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyAC(body));
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
                            value={dialogs.newMessagesBody}
                            placeholder='enter your message'
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