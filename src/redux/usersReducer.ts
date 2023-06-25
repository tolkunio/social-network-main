export type UserType = {
    id: string,
    name: string,
    status: string,
    photos: Photo
    followed: boolean
}
export type Photo = {
    small?: string
    large?: string,
}
export type UserPage = {
    users: UserType[];
    pageSize: number,
    totalUserCount: number,
    currentPage:number
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USER = 'SET_USER';
const SET_TOTAL_PAGE = 'SET-TOTAL-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

export type FollowType = ReturnType<typeof followAC>;
export type UnFollowType = ReturnType<typeof unFollowAC>;
export type SetUserType = ReturnType<typeof setUserAC>;
export type SetTotalPage = ReturnType<typeof setTotalUserCountAC>;
export type SetCurrentPage = ReturnType<typeof setCurrentPageAC>;
export type UsersReducerActionType = FollowType | UnFollowType | SetUserType | SetTotalPage |SetCurrentPage;

let initalState: UserPage = {
    users: [],
    totalUserCount: 20,
    pageSize: 5,
    currentPage:3
}
export const usersReducer = (state: UserPage = initalState, action: UsersReducerActionType) => {
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
            return {...state, users:action.payload.users};
        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalUserCount:action.payload.totalUserCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.payload.currentPage
            }
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
export const setTotalUserCountAC = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_PAGE,
        payload: {totalUserCount }
    } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
};
