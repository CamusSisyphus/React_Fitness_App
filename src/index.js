import React from "react";
import { ReactDOM } from "react";

const root = ReactDOM.createPortal(document.getElementById('root'));

import App from './App';

root.render(
    <App />
)