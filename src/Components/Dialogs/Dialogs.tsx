import React from 'react';
import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>);

}
const Message = (props: any) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}
const Dialogs = () => {
    const dialogsData = [
        {name: 'Dimych', id: 1},
        {name: 'Sasha', id: 2},
        {name: 'Valera', id: 3},
        {name: 'Valera', id: 4},
        {name: 'Biktor', id: 5},
    ];
    let dialogsDataElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesData = [
        {message: 'Hi'},
        {message: 'Good day'},
        {message: 'Hello'},
    ];
    let messagesDataElement = messagesData.map(msg => <Message message={msg.message}/>);
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