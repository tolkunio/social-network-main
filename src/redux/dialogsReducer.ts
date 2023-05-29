import {v1} from 'uuid';

export type DialogPageType = {
    dialogsData: Dialog[],
    messagesData: MessageType[],
    newMessagesBody: string,
}
export type Dialog = {
    id: string,
    name: string,
};
export type MessageType = {
    id: string;
    message: string;
};
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>;
export type SendMessageType = ReturnType<typeof sendMessageAC>;

export type DialogsReducerActionType = UpdateNewMessageBodyType | SendMessageType;

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const initializeState:DialogPageType={
    dialogsData: [
                {name: 'Dimych', id: v1()},
                {name: 'Sasha', id: v1()},
                {name: 'Valera', id: v1()},
                {name: 'Valera', id: v1()},
                {name: 'Biktor', id: v1()},
            ],
            messagesData: [
                {id: v1(), message: 'Hi, I am Alex'},
                {id: v1(), message: 'Good day'},
                {id: v1(), message: 'Where are you'},
            ],
            newMessagesBody: ''
        };
export const dialogsReducer = (state: DialogPageType =initializeState, action: DialogsReducerActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messagesData.push(
                {
                    id: v1(),
                    message: body
                });
            return state;
        }
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessagesBody = action.payload.newMessagesBody;
            return state;
        }
        default:
            return state;
    }
}


export const updateNewMessageBodyAC = (newMessagesBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: {
            newMessagesBody
        }
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}