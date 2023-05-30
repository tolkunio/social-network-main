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

export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: PostData[],
    newPostText: string
};
export type ChangeNewTextType = ReturnType<typeof changeNewTextAC>;
export type AddNewPostType = ReturnType<typeof addNewPostAC>;

export type ProfileReducerActionType = ChangeNewTextType | AddNewPostType;
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initializeState: ProfilePageType = {
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
}
export const profileReducer = (state: ProfilePageType = initializeState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.payload.newMsgText;
            return state;
        }
        case ADD_POST: {
            const newPost: PostData = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = '';
            state.posts.push(newPost);
            return state;
        }
        default:
            return state;
    }
}
export const changeNewTextAC = (newMsgText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: {
            newMsgText
        }
    } as const
}

export const addNewPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}