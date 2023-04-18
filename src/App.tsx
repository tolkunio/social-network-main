import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import state from './redux/state';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}/>}/>
                        <Route path="/profile" element={<Profile posts={state.profilePage.posts} addPost={state}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
