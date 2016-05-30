import React from 'react';
import { Route } from 'react-router';

import Contact from '../components/Contact';
import ContactOffline from '../components/ContactOffline';
import ContactOnline from '../components/ContactOnline';

export default (
	<Route path="contact" component={Contact}>
		<Route path="offline" component={ContactOffline} />
		<Route path="online" component={ContactOnline} />
	</Route>
)