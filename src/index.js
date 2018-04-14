import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './routes/index';
import './assets/style/index.css';

// var FastClick = require('fastclick');
// import 'lodash'

//解决移动端300毫秒延迟
// FastClick.attach(document.body);

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.querySelector('#root')
);