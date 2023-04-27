import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import {renderTree} from './render';

store.subscribe(renderTree);
renderTree();