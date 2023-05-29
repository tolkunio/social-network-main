import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {StoreType} from '../../redux/redux-store';
import {DialogsContainer} from './Dialogs/DialogsContainer';

type ContentPropsType = {
    store: StoreType
}
const Content = (props: ContentPropsType) => {
    return (
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs" element={
                    <DialogsContainer store={props.store}/>
                }/>
                <Route path="/profile" element={
                    <Profile store={props.store}
                    />
                }/>
            </Routes>
        </div>
    );
};

export default Content;