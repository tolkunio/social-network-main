import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MyPosts from './Components/Profile/MyPosts/MyPosts';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

export type Post={
    id:number,
    message:string,
    likesCount:number
}
export type Dialog={
    name:string,
    id:number
};
export type MessageType={
    message:string;
}
export type AppPropsType={
    posts:Post[],
    dialogs:Dialog[],
    messages:MessageType[]
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" element={} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
