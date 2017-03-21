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
import Menu from './components/Menu';

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
      <NavLink to="/query?id=123">Demo123</NavLink>
      <NavLink to={{pathname: '/query', search: 'id=456'}}>Demo456</NavLink>
      <NavLink to="/menu">Menu</NavLink>
  </nav>
);

ReactDOM.render(
    <MuiThemeProvider>
        <Router>
            <div>
                <Nav></Nav>
                <Route exact path="/" component={App}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route
                    strict
                    path="/about/"
                    render={() => <h2>About render</h2>}></Route>
                <Route path="/query" render={({match, location}) => {
                    return (
                        <div>
                            <pre>
                               {JSON.stringify(match, null, 2)}
                            </pre>
                            <pre>
                                {JSON.stringify(location, null, 2)}
                            </pre>
                            <h1>Search id: {new URLSearchParams(location.search).get('id')}</h1>
                            <h2>new URLSearchParams(location.search).get('id')</h2>
                        </div>
                    )
                }}></Route>
                <Route
                    path="/:date(\d{2}-\d{2}-\d{4}):ext(.[a-z]+)"
                    render={({match}) => {
                        const date = match.params.date;
                        const ext = match.params.ext;
                        return match && <h2>demo: {date}{ext}</h2>
                    }}></Route>
                <Route path="/menu" component={Menu}></Route>

            </div>
        </Router>
    </MuiThemeProvider>, document.getElementById('root'));
