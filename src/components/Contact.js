import React from 'react';
import { Link } from 'react-router';

export default ({ children }) => {
	return (
		<div className="contact">
			<h2>Contact us</h2>
			<ul>
				<li><Link to="/contact/offline">Offline</Link></li>
				<li><Link to="/contact/online">Online</Link></li>
			</ul>
			{children}
		</div>
	);
}