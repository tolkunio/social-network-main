import React from 'react';
import {Route} from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/Login';

const Content = () => {
    return (
        <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>
    );
};

export default Content;