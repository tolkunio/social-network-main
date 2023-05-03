import exp from 'constants';

export type PostData = {
    id: number,
    message: string,
    likesCount: number
}
type Dialog = {
    id: number,
    name: string,
};
type MessageType = {
    id: number;
    message: string;
};
type ProfilePageType = {
    posts: PostData[],
    newPostText: string
};
export type DialogPageType = {
    dialogsData: Dialog[],
    messagesData: MessageType[],
    // newMessagesBody: string,
}
type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SidebarType,
}

export type ActionsTypes = ReturnType<typeof AddPostAction> | ReturnType<typeof ChangeNewTextAction>;
export const AddPostAction = (postText: string) => (
    {
        type: 'ADD-POST',
        postText: postText
    } as const
);
export const ChangeNewTextAction = (newMsgText: string) => (
    {
        type: 'CHANGE-NEW-TEXT',
        newMsgText: newMsgText
    } as const);
export type StoreType = {
    _state: RootStateType;
    _onChange: (state: RootStateType) => void,
    _subscribe: (observer: (state: RootStateType) => void) => void,
    getState: () => RootStateType;
    dispatch: (action: ActionsTypes) => void;
}
//main class
const store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi,how are you', likesCount: 12},
                {id: 2, message: 'hi! Its my first post', likesCount: 20},
            ],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
            dialogsData: [
                {name: 'Dimych', id: 1},
                {name: 'Sasha', id: 2},
                {name: 'Valera', id: 3},
                {name: 'Valera', id: 4},
                {name: 'Biktor', id: 5},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Good day'},
                {id: 3, message: 'Hello'},
            ],
            // newMessagesBody: ''
        },
        sidebar: '',
    },


    _onChange(state: RootStateType) {
        console.log('State changed');
    },
    _subscribe(observer) {
        this._onChange = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action): void {
        if (action.type === 'ADD-POST') {
            const newPost: PostData = {
                id: 3,
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._onChange(this._state);

        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newMsgText;
            this._onChange(this._state);
        }
    },
}
export default store;