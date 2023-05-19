import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ActionType, RootStateType} from './redux/store';
import Content from './Components/Content/Content';

type PropsType = {
    state: RootStateType,
    dispatch:(action:ActionType)=>void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">x
                <Header/>
                <Navbar/>
                <Content state={props.state} dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
