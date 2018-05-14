import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Demo from './components/App/Demo/Demo'
import About from './components/App/About/About';

export default (
	<Switch>
		<Route exact path="/" component={Demo} />
		<Route path="/about" component={About} />
	</Switch>
);
