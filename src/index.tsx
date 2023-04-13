import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData= [
    {name: 'Dimych', id: 1},
    {name: 'Sasha', id: 2},
    {name: 'Valera', id: 3},
    {name: 'Valera', id: 4},
    {name: 'Biktor', id: 5},
];
const messagesData= [
    {message: 'Hi'},
    {message: 'Good day'},
    {message: 'Hello'},
];
let posts=[
    {id:1,message:'hi,how are you',likesCount:12},
    {id:2,message:'hi! Its my first post',likesCount:20},
];
ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);