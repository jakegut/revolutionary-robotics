import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureAnchors } from 'react-scrollable-anchor';
import 'bootstrap';


configureAnchors({offset: -50, scrollDuration: 500});

ReactDOM.render(<App />, document.getElementById('root'));