import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Content from './Components/Content/Content';
import {StoreType} from './redux/redux-store';

type AppPropsType = {
    store:StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">x
                <Header/>
                <Navbar/>
                <Content store={props.store}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
