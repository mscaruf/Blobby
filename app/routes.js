import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Overview from './components/App/Blobby/Walkthrough/Overview/Overview';
import GettingStarted from './components/App/Blobby/Walkthrough/GettingStarted/GettingStarted';
import Assets from './components/App/Blobby/Walkthrough/Assets/Assets';
import Forms from './components/App/Blobby/Walkthrough/Forms/Forms';
import Actions from './components/App/Blobby/Walkthrough/Actions/Actions';
import Redux from './components/App/Blobby/Walkthrough/Redux/Redux';
import Connect from './components/App/Blobby/Walkthrough/Connect/Connect';

export default (
		<Switch>
				<Route exact path="/" component={Overview} />
				<Route path="/getting-started" component={GettingStarted} />
				<Route path="/assets" component={Assets} />
				<Route path="/forms" component={Forms} />
				<Route path="/actions" component={Actions} />
				<Route path="/redux" component={Redux} />
				<Route path="/connect" component={Connect} />
		</Switch>
);
