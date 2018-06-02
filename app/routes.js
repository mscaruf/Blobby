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
				<Route path="/walkthrough/overview" component={Overview} />
				<Route path="/walkthrough/getting-started" component={GettingStarted} />
				<Route path="/walkthrough/assets" component={Assets} />
				<Route path="/walkthrough/forms" component={Forms} />
				<Route path="/walkthrough/actions" component={Actions} />
				<Route path="/walkthrough/redux" component={Redux} />
				<Route path="/walkthrough/connect" component={Connect} />
		</Switch>
);
