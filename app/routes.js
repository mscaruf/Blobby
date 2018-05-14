import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './components/FilterableTable';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
	</Switch>
);
