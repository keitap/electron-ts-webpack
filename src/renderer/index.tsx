import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './logo.svg';

ReactDOM.render(
    (
        <div>
            <img src={Logo} alt="React Logo"/>
        </div>
    ),
    document.getElementById('app'),
);
