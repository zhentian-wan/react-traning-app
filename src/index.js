import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

// provider required by material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// required by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
    <App />
</MuiThemeProvider>, document.getElementById('root'));
