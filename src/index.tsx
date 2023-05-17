import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import {renderTree} from './render';

store._subscribe(renderTree);
renderTree();