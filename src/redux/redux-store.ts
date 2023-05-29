import {combineReducers, createStore} from 'redux';
import {ProfilePageType, profileReducer, ProfileReducerActionType} from './profileReducer';
import {DialogPageType, dialogsReducer, DialogsReducerActionType} from './dialogsReducer';
export type stateType={
    profilePage:ProfilePageType,
    dialogsPage:DialogPageType
}
export type StoreType = typeof store;

type actionType= ProfileReducerActionType | DialogsReducerActionType
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
});

export let store = createStore(reducers);

