import React, { Component } from 'react';

import MainNavigation from './MainNavigation';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<MainNavigation />
				<div className="app-contents">
					{this.props.children}
				</div>
			</div>
		);
	}
}