export type UserType = {
    id: string,
    isFollowed: boolean,
    fullName: string,
    status: string,
    location: Location,
    photoUrl:string

}
export type UserPage={
    users:UserType[];
}
export type Location = {
    country: string
    city: string,
}
let initalState:UserPage = {
    users: [
        {
            id: '1',
            isFollowed: false,
            fullName: 'Omurbekov Tolkun',
            status: 'junior',
            location: {country: 'KG', city: 'Bishkek'},
            photoUrl:'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
        },
        {
            id: '2',
            isFollowed: true,
            fullName: 'Petrov Petr',
            status: 'pre-junior',
            location: {country: 'RU', city: 'Moscow'},
            photoUrl:'https://static-prod.adweek.com/wp-content/uploads/2023/01/WhatsApp-Avatar-Profile-Photo-Hero-652x367.png'
        },
        {
            id: '3',
            isFollowed: false,
            fullName: 'Ivanov Ivan',
            status: 'strong-junior',
            location: {country: 'Belarus', city: 'Minsk'},
            photoUrl:'https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg'
        },
    ]
}
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USER = 'SET_USER';

export type FollowType = ReturnType<typeof followAC>;
export type UnFollowType = ReturnType<typeof unFollowAC>;
export type SetUserType = ReturnType<typeof setUserAC>;
export type UsersReducerActionType = FollowType | UnFollowType | SetUserType;
export const usersReducer = (state = initalState, action: UsersReducerActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollowed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, isFollowed: false} : u)
            };
        case SET_USER:
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUserAC = (users: UserType[]) => {
    return {
        type: SET_USER,
        payload: {
            users
        }
    } as const
}
