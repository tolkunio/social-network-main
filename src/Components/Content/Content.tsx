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
    const state = props.state;
    return (
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs dialogs={state.dialogsPage}
                                                             dispatch={props.dispatch.bind(state)}
                    />}/>
                    <Route path="/profile" element={<Profile
                        profileData={state.profilePage}
                        dispatch={props.dispatch.bind(state)}
                    />
                    }/>
                </Routes>
            </div>
    );
};

export default Content;