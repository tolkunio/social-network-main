import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerActionType} from './profileReducer';
import {dialogsReducer, DialogsReducerActionType} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type StoreType = typeof store;

export type AppRootStateType = ReturnType<typeof rootReducer>



