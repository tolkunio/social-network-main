import {combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogsReducer, DialogsReducerActionType} from './dialogsReducer';

export type StoreType = typeof store;

export type AppStateType = ReturnType<typeof rootReducer>

type actionType= ProfileReducerActionType | DialogsReducerActionType
export const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});

export const store = createStore(rootReducer);

