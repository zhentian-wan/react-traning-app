//@flow

import React from 'react';
import ReactDOM from 'react-dom';
// import {Router} from './router';
import {
    BrowserRouter as Router,
    Route, NavLink
} from 'react-router-dom';

// provider required by material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// required by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';

import './index.css';

injectTapEventPlugin();

const isLinkActive = (match, location) => {
    return match
};

const Nav = () => (
  <nav>
      <NavLink to="/" exact activeStyle={{color: 'pink'}}>Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink replace
               to={{pathname: '/contact'}}
               isActive={isLinkActive}
               activeClassName="active"
      >Contact</NavLink>
      <NavLink to="/demo-react" activeClassName={'active'}>Demo</NavLink>
  </nav>
);

ReactDOM.render(
    <MuiThemeProvider>
        <Router>
            <div>
                <Nav></Nav>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route
                    strict
                    path="/about/"
                    render={() => <h2>About render</h2>}></Route>
                <Route
                    path="/:page-:sub"
                    children={({match}) => {
                        const page = match.params.page;
                        const sub = match.params.sub;
                        return match && <h2>demo: {page} -- {sub}</h2>
                    }}></Route>
            </div>
        </Router>
    </MuiThemeProvider>, document.getElementById('root'));
