//importing documents in to be used in this page
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import LandingPage from './LandingPage';
import ResumePage from './ResumePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
//creates route path for pages to connect
ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="about" component={AboutPage}/>
                <Route path="project" component={ProjectPage}/>
                <Route path="resume" component={ResumePage}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
  document.getElementById('root')
);
