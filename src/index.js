import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./component/app/App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";


const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
