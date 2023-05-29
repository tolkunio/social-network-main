import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {StoreType} from '../../redux/redux-store';

type ContentPropsType = {
    store: StoreType
}
const Content = (props: ContentPropsType) => {
    return (
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs" element={
                    <Dialogs dialogs={props.store.getState().dialogsPage}
                             dispatch={props.store.dispatch.bind(props.store.getState)}
                />}/>
                <Route path="/profile" element={
                    <Profile store={props.store}
                />
                }/>
            </Routes>
        </div>
    );
};

export default Content;