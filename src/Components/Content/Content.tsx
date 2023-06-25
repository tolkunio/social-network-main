import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import {StoreType} from '../../redux/redux-store';
import DialogsContainer from './Dialogs/DialogsContainer';
import {UsersContainer} from './Users/UsersContainer';

type ContentPropsType = {
    store: StoreType
}
const Content = (props: ContentPropsType) => {
    return (
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/profile" element={
                    <Profile store={props.store}
                    />
                }/>
                <Route path="/users" element={
                    <UsersContainer onPageChanged={()=>{}}/>
                }/>
            </Routes>
        </div>
    );
};

export default Content;