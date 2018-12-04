import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from './Main';
import Single from './Single';
import PhotoGrid from './PhotoGrid';
import { Provider } from 'react-redux';
import store, { history } from '../store';

export default class BRouter extends React.Component {
	render() {
		return (
			<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={Main}>
					<IndexRoute component={PhotoGrid} />
					<Route path="/view/:postId" component={Single} />
				</Route>
			</Router>
			</Provider>
		);
	}
}
