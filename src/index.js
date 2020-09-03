import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {initialState, StateProvider} from "./context/StateProvider";
import App from "./component/app/App";
import reducer from "./context/reducer";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
            <App/>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
