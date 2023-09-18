import React from 'react';
import ReactDOM from 'react-dom/client';
import {RootFunction} from './App';
import { BrowserRouter} from "react-router-dom"; // Router


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <BrowserRouter>
            <RootFunction/>
        </BrowserRouter>
    );


