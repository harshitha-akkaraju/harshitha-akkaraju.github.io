import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import './index.css';
import App from './ui/containers/App';
import registerServiceWorker from './registerServiceWorker';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
		<Router history={hashHistory}>
			<App />
		</Router>,
		document.getElementById('root')
);
registerServiceWorker();
