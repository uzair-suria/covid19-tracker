import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CovidDataStore from './context/CovidDataStore';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<CovidDataStore>
		<App />
		<h3 style={{ color: 'gray', textAlign: 'center' }}>
			The Graphs for this app are under development. Please visit later
		</h3>
	</CovidDataStore>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
