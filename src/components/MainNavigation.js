import React from 'react';
import { Link, IndexLink } from 'react-router';

import './MainNavigation.css';

export default () => {
	return (
		<div className="main-navigation">
			<ul>
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/contact" activeClassName="active">Contact</Link></li>
			</ul>
		</div>		
	);
}