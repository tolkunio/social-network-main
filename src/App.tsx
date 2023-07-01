import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Content from './Components/Content/Content';
import HeaderContainer from './Components/Header/HeaderContainer';
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">x
                <HeaderContainer/>
                <Navbar/>
                <Content/>
            </div>
        </BrowserRouter>

    );
}
export default App;
