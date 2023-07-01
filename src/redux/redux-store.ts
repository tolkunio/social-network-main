import {combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogsReducer, DialogsReducerActionType} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './auth-reducer';

export type StoreType = typeof store;

export type AppStateType = ReturnType<typeof rootReducer>

type actionType= ProfileReducerActionType | DialogsReducerActionType
export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer,
    auth:authReducer
});

export const store = createStore(rootReducer);
