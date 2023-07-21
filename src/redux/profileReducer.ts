import {v1} from 'uuid';
import avatar from '../assets/images/Avatar.png';
import {Dispatch} from 'redux';
import {ProfileApi} from '../api/api';

export type ProfileInfoType = {
    userId:string,
    fullName:string,
    aboutMe:string,
    contacts:ProfileContactType,
    lookingForAJob:boolean,
    lookingForAJobDescription:string,
    photos:Photo,
}
export type ProfileContactType={
    facebook?:string,
    website?:string,
    vk?:string,
    twitter?:string,
    instagram?:string,
    youtube?:string,
    mainLink?:string|null
}

export type Photo = {
    small?: string
    large?: string,
}
export type PostData = {
    id: string,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: PostData[],
    newPostText: string,
    status:string
};
export type ChangeNewTextType = ReturnType<typeof changeNewTextAC>;
export type AddNewPostType = ReturnType<typeof addNewPostAC>;
export type SetUserProfileType = ReturnType<typeof setUserProfileAC>;
export type SetStatusType = ReturnType<typeof setStatusAC>;

export type ProfileReducerActionType = ChangeNewTextType | AddNewPostType | SetUserProfileType|SetStatusType;
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';
export const SET_STATUS = 'SET-STATUS';

const initializeState: ProfilePageType = {
    profileInfo: {
        userId:'klk',
        fullName:'Omurbekova Tolkun',
        aboutMe:'React Developer',
        lookingForAJobDescription:'js react redux',
        lookingForAJob:true,
        contacts:{
            mainLink:'tolkunio.github.io'
        },
        photos:{
            small:avatar,
            large:''
        }
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
    status:''
}
export const profileReducer = (state: ProfilePageType = initializeState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.payload.newMsgText;
            return stateCopy;
        }
        case ADD_POST: {
            const newPost: PostData = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts,]
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profileInfo: action.payload.profile}
        }
        case SET_STATUS:{
            return {...state,status:action.payload.status}
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

export const setUserProfileAC = (profile: ProfileInfoType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const;
}
export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const;
}
export const getProfileUserByIdTC=(userId:string)=>(dispatch:Dispatch)=>{
    ProfileApi.getProfileUserById(userId)
        .then((res) => {
            dispatch(setUserProfileAC(res.data));
        });
}
export const getStatusTC = (userId:string)=>(dispatch:Dispatch)=>{
    ProfileApi.getStatus(userId)
        .then((res)=>{
            dispatch(setStatusAC(res.data))
        });
}
export const updateStatusTC =(status:string)=>(dispatch:Dispatch)=>{
    ProfileApi.updateStatus(status)
        .then((res)=>{
            if(res.data.resultCode===0){
                dispatch(setStatusAC(status))
            }
        })
}