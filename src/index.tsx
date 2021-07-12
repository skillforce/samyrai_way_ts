import React from 'react';
import './index.css';

import {rerenderEntireTree} from './render';
import state, {addPost} from './Redux/state';


rerenderEntireTree(state);
