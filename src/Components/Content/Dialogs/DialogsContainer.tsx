import React from 'react';
import s from './Dialogs.module.css';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogsReducer';
import {AppRootStateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Redirect} from 'react-router-dom';

type MapStatePropsType = {
    dialogsPage: DialogPageType,
    isAuth:boolean
}
type MapDispatchPropsType = {
    changeNewMessageCallback: (messageDate: string) => void,
    sendMessageCallback: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppRootStateType) :MapStatePropsType=> {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        changeNewMessageCallback: (messageData: string) => {
            dispatch( updateNewMessageBodyAC(messageData))
        },
        sendMessageCallback: () => {
           dispatch(sendMessageAC())
        }
    }
}
let AuthRedirectComponent=(props:DialogsPropsType)=>{
    if(!props.isAuth) return <Redirect to={"/login"}/>
    return <DialogsContainer {...props}/>
}
 const DialogsContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>
    (mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;