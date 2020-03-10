import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MemoStore from './memo/Store';

// 表示をレンダリング
const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={MemoStore}>
        <App />
    </Provider>,
    root
);
