import React from 'react';
import s from './Dialogs.module.css';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogsReducer';
import {AppStateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogPageType
}
type MapDispatchPropsType = {
    changeNewMessageCallback: (messageDate: string) => void,
    sendMessageCallback: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;
let mapStateToProps = (state: AppStateType) :MapStatePropsType=> {
    return {
        dialogsPage: state.dialogsPage
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
 const DialogsContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;