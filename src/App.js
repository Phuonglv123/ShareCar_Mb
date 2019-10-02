import React, {Component} from 'react';
import AuthStore from './stores/authStore';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import promiseFinally from 'promise.prototype.finally';
import LoginScene from "./Scene/LoginScene";
import {PrivateRoute} from "./component/AppRoute/PrivateRoute";
import HomeScene from "./Scene/HomeScene";

const stores = {
    AuthStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <HashRouter>
                    <Switch>
                        <Route path='/login' component={LoginScene} exact={true}/>
                        <PrivateRoute path='/' component={HomeScene}/>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
