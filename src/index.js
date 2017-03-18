//@flow

import React from 'react';
import ReactDOM from 'react-dom';
// import {Router} from './router';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// provider required by material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// required by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';

injectTapEventPlugin();

const Nav = () => (
  <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link replace to={{pathname: '/contact'}}>Contact</Link>
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
                {/*<Route
                    strict
                    path="/about/"
                    render={() => <h2>About render</h2>}></Route>
                <Route
                    path="/demo"
                    children={({match}) => {
                        console.log("match:", match)
                        return match && <h2>demo</h2>
                    }}></Route>*/}
            </div>
        </Router>
    </MuiThemeProvider>, document.getElementById('root'));
