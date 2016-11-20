// app -- what creates link between all page paths

//importing documents in to be used in this page
import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//main component that connects and links all pages together
var App = React.createClass({
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<div className = "navbar">
					<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
					<Link className="link" activeClassName='active' to="/about">About</Link>
					<Link className="link" activeClassName='active' to="/project">Portfolio</Link>
					<Link className="link" activeClassName='active' to="/resume">Resume</Link>
					</div>
					{this.props.children}
				</div>
		);
	}
});

//allows page to be accessed by other pages
export default App;
