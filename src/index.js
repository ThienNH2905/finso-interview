import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './router';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.headers.common['X-Api-Key'] = 'edd3503b0cd74852a25d3d638183b3bb';

ReactDOM.render(<MenuBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
