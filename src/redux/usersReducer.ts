export type UserType = {
    id: string,
    name: string,
    status: string,
    photos: Photo
    followed: boolean,
}
export type Photo = {
    small?: string
    large?: string,
}
export type UserPage = {
    users: UserType[];
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followedToggleUsersId: Array<string>
}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USER = 'SET_USER';
const SET_TOTAL_PAGE = 'SET-TOTAL-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_TOGGLE_IN_PROGRESS = 'FOLLOW_TOGGLE_IN_PROGRESS';

export type FollowType = ReturnType<typeof follow>;
export type UnFollowType = ReturnType<typeof unFollow>;
export type SetUserType = ReturnType<typeof setUsers>;
export type SetTotalPage = ReturnType<typeof setTotalUsersCount>;
export type SetCurrentPage = ReturnType<typeof setCurrentPage>;
export type ToggleIsFetching = ReturnType<typeof setToggleIsFetching>;
export type FollowToggleProgress = ReturnType<typeof setFollowToggleProgress>;
export type UsersReducerActionType =
    FollowType
    | UnFollowType
    | SetUserType
    | SetTotalPage
    | SetCurrentPage
    | ToggleIsFetching
    | FollowToggleProgress

let initalState: UserPage = {
    users: [],
    totalUserCount: 20,
    pageSize: 5,
    currentPage: 3,
    isFetching: true,
    followedToggleUsersId: []
}
export const usersReducer = (state: UserPage = initalState, action: UsersReducerActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            };
        case SET_USER:
            return {...state, users: action.payload.users};
        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalUserCount: action.payload.totalUserCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case FOLLOW_TOGGLE_IN_PROGRESS: {
            return {
                ...state,
                followedToggleUsersId:action.payload.isFetching
                    ? [...state.followedToggleUsersId, action.payload.followToggleUserId]
                    : state.followedToggleUsersId.filter(id => id !== action.payload.followToggleUserId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}
export const unFollow = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USER,
        payload: {
            users
        }
    } as const
}
export const setTotalUsersCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_PAGE,
        payload: {totalUserCount}
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
};
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {isFetching}
    } as const
};

export const setFollowToggleProgress = (followToggleUserId: string, isFetching: boolean) => {
    return {
        type: FOLLOW_TOGGLE_IN_PROGRESS,
        payload: {
            followToggleUserId,
            isFetching
        }
    } as const
};
export const getUsersThunkCreator =()=>{

}
