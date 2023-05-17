import {addNewPostAC, changeNewTextAC, profileReducer, ProfileTypes} from './profileReducer';
import {dialogsReducer, DialogsType, sendMessageAC, updateNewMessageBodyAC} from './dialogsReducer';
import {v1} from 'uuid';

export type ProfileInfoType = {
    avatarImg: string
    firstName: string
    lastName: string
    birthday: string
    city: string
}
export type PostData = {
    id: string,
    message: string,
    likesCount: number
}
export type Dialog = {
    id: string,
    name: string,
};
export type MessageType = {
    id: string;
    message: string;
};
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: PostData[],
    newPostText: string
};
export type DialogPageType = {
    dialogsData: Dialog[],
    messagesData: MessageType[],
    newMessagesBody: string,
}


type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SidebarType,
}

export type StoreType = {
    _state: RootStateType;
    _renderApp: (state: RootStateType) => void,
    _subscribe: (observer: (state: RootStateType) => void) => void,
    getState: () => RootStateType;
    dispatch: (action: ActionType) => void;
}
export type ActionType = ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof addNewPostAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>;

//main class
export const store: StoreType = {

    _state: {
        profilePage: {
            profileInfo: {
                avatarImg: 'https://99px.ru/sstorage/56/2012/12/mid_76508_1420.jpg',
                firstName: 'Tolkun',
                lastName: 'Omurbekova',
                birthday: 'September 25, 1995',
                city: 'Bishkek'
            },
            posts: [
                {
                    id: v1(),
                    message: 'hi,how are you',
                    likesCount: 12
                },
                {
                    id: v1(),
                    message: 'hi! Its my first post',
                    likesCount: 20
                },
            ],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
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
        },
        sidebar: '',
    },


    _renderApp(state: RootStateType) {
        console.log('State changed');
    },
    _subscribe(observer) {
        this._renderApp = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action): void {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._renderApp(this._state);
    },
}