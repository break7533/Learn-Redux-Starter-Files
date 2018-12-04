import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

export default class BRouter extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={PhotoGrid} />
					<Route path="/view/:postId" component={Single} />
				</Route>
			</Router>
		);
	}
}
