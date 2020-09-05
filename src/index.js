import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./component/app/App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from "firebase";
import rootReducer from "./store/reducers/rootReducer";


const store = createStore(rootReducer, {}, applyMiddleware(thunk))

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Router>
                    <App/>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
