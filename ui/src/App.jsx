import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';
import "./style.css";

const element = (
	<Router>
		<Page />
	</Router>
);

ReactDOM.render(element, document.getElementById('root'));

if (module.hot) {
module.hot.accept();
}