import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/openiconic/font/css/open-iconic-bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ApplicationMainPage from './react/ApplicationMainPage';
import reducer from './redux/reducer';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ApplicationMainPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();

