import {PostData, ProfilePageType} from './state';
import {DialogsType} from './dialogsReducer';
export const ADD_POST ='ADD-POST';
export const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
export const profileReducer=(state:ProfilePageType, action:ProfileTypes|DialogsType)=>{
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:{
             state.newPostText = action.payload.newMsgText;
             return state;
        }
        case ADD_POST:{
            const newPost: PostData = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = '';
            state.posts.push(newPost);
            return state;
        }
        default:return state;
    }
}

export type ProfileTypes = ChangeNewTextType | AddNewPostType;
export type ChangeNewTextType = ReturnType<typeof changeNewTextAC>;
export type AddNewPostType = ReturnType<typeof addNewPostAC>;
export const changeNewTextAC = (newMsgText: string)=>{
    return {
        type:UPDATE_NEW_POST_TEXT,
        payload:{
            newMsgText
        }
    } as const
}

export const addNewPostAC = ()=>{
    return {
        type:ADD_POST,
    } as const
}