import {ActionType, DialogPageType} from './store';
import {v1} from 'uuid';

const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';
export const dialogsReducer = (state:DialogPageType, action:ActionType)=>{
    switch (action.type){
        case 'SEND-MESSAGE':{
            let body = state.newMessagesBody;
            state.newMessagesBody='';
            state.messagesData.push(
                {
                    id:v1(),
                    message:body
                });
            return state;
        }
        case 'UPDATE-NEW-MESSAGE-BODY':{
             state.newMessagesBody = action.payload.newMessagesBody;
             return state;
        }
        default:return state;
    }
}

export type DialogsType = UpdateNewMessageBodyType | SendMessageType;
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>;
export type SendMessageType = ReturnType<typeof sendMessageAC>;
export const updateNewMessageBodyAC = (newMessagesBody:string)=>{
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        payload:{
            newMessagesBody
        }
    } as const
}
export const sendMessageAC =()=>{
    return {
        type:SEND_MESSAGE
    } as const
}