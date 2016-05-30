import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

import contactRoutes from './contact';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		{ contactRoutes }
		<Route path="*" component={NotFound} />
	</Route>
)