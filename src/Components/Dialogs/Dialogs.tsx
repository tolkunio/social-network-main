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
const Message= (props:any)=>{
    return(
        <div className={s.message}>
            {props.message}
        </div>
    );
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Sasha" id={2}/>
                <DialogItem name="Valera" id={3}/>
                <DialogItem name="Igor" id={4}/>
                <DialogItem name="Biktor" id={5}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Good day!"/>
                <Message message="Hello"/>
            </div>
        </div>
    );
};

export default Dialogs;