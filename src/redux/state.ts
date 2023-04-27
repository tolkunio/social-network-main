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
    messagesData: MessageType[]
}
type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SidebarType,
}

export type StoreType = {
    _state: RootStateType;
    changeNewText: (newText: string) => void,
    addPost: (postText: string) => void,
    _onChange:()=>void,
    subscribe:(observer: () => void)=>void,
    getState:()=>RootStateType;
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
        },
        sidebar: '',
    },

    changeNewText(newMsgText: string) {
        this._state.profilePage.newPostText = newMsgText;
        this._onChange();
    },

    addPost(postText: string) {
        const newPost: PostData = {
            id: 3,
            message: postText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    _onChange(){
        console.log('State changed');
    },
    subscribe(observer){
        this._onChange = observer;
    },
    getState(){
        return this._state;
    }
}
export default store;