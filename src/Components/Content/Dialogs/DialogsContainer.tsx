import React from 'react';
import s from './Dialogs.module.css';
import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from '../../../redux/dialogsReducer';
import {AppRootStateType} from '../../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';

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
export default compose(connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>
(mapStateToProps, mapDispatchToProps))(Dialogs)