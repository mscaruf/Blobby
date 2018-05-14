import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './components/App/FilterableTable/FilterableTable';
import About from './components/App/About/About';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
	</Switch>
);
