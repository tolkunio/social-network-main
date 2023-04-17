type Post = {
    id: number,
    message: string,
    likesCount: number
}
type Dialog = {
    id: number,
    name: string,
};
type MessageType = {
    id:number;
    message: string;
};
type ProfilePageType={
    posts:Post[],
};
type DialogPageType={
    dialogsData:Dialog[],
    messagesData:MessageType[]
}
type SidebarType={

};
type RootStateType={
    profilePage:ProfilePageType,
    dialogsPage:DialogPageType,
    sidebar:SidebarType
}

let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi,how are you', likesCount: 12},
            {id: 2, message: 'hi! Its my first post', likesCount: 20},
        ]
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
            {id:1,message: 'Hi'},
            {id:2,message: 'Good day'},
            {id:3,message: 'Hello'},
        ],
    },
    sidebar:'',
}
export default state;