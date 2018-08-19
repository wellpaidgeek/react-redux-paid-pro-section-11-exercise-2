import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { searchSuccess } from './actions/search';

import App from './components/app';

const store = createStore(
    reducer
);

const results = [
    {
        full: 'https://media3.giphy.com/media/g5KhmX06Q0XBu/giphy.gif',
        thumbnail: 'https://media3.giphy.com/media/g5KhmX06Q0XBu/100_s.gif',
    },
    {
        full: 'https://media2.giphy.com/media/uw3fTCTNMbXAk/giphy.gif',
        thumbnail: 'https://media2.giphy.com/media/uw3fTCTNMbXAk/100_s.gif',
    },
];

window.setTimeout(() => {
    store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);