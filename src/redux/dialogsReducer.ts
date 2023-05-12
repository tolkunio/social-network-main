import {DialogPageType} from './state';
import {ProfileTypes} from './profileReducer';

const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';
export const dialogsReducer = (state:DialogPageType, action:DialogsType|ProfileTypes)=>{
    switch (action.type){
        case 'SEND-MESSAGE':{
            let body = state.newMessagesBody;
            state.newMessagesBody='';
            state.messagesData.push({id:6,message:body});
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