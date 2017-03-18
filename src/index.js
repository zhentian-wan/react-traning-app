//@flow

import React from 'react';
import ReactDOM from 'react-dom';
// import {Router} from './router';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// provider required by material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// required by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import About from './components/About';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route
                    strict
                    path="/about/"
                    render={() => <h2>About render</h2>}></Route>
                <Route
                    path="/demo"
                    children={({match}) => {
                        console.log("match:", match)
                        return match && <h2>demo</h2>
                    }}></Route>
            </div>
        </Router>
    </MuiThemeProvider>, document.getElementById('root'));
