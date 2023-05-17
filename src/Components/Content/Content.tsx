import React from 'react';
import {ActionType, RootStateType} from '../../redux/store';
import {Routes,Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
type ContentPropsType={
    state:RootStateType,
    dispatch:(action:ActionType)=>void
}
const Content = (props:ContentPropsType) => {
    return (
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                             messagesData={props.state.dialogsPage.messagesData}
                                                             newMessagesBody={props.state.dialogsPage.newMessagesBody}
                                                             dispatch={props.dispatch.bind(props.state)}
                    />}/>
                    <Route path="/profile" element={<Profile
                        posts={props.state.profilePage.posts}
                        message={props.state.profilePage.newPostText}
                        dispatch={props.dispatch.bind(props.state)}
                    />
                    }/>
                </Routes>
            </div>
    );
};

export default Content;