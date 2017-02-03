import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './router';

// provider required by material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// required by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router><App /></Router>
</MuiThemeProvider>, document.getElementById('root'));
