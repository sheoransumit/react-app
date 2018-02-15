import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Calculator from './Calculator';
import TwitterComp from './TwitterComp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		{/*<App /> 
		<Clock />
		<Calculator />*/}
		<TwitterComp />
	</div>, 
	document.getElementById('root'));

registerServiceWorker();