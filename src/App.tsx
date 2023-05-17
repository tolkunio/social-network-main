import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import {StoreType} from './redux/store';

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                                 messagesData={state.dialogsPage.messagesData}
                                                                 newMessagesBody={state.dialogsPage.newMessagesBody}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                        />}/>
                        <Route path="/profile" element={<Profile
                            posts={state.profilePage.posts}
                            message={state.profilePage.newPostText}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />
                        }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
