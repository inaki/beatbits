import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import reducers from './reducers';

const beatbitsTheme = createMuiTheme({
    palette: {
        secondary: {
        main: orange[500],
        },
    },
    typography: { 
        useNextVariants: true,
        fontFamily: ['"Helvetica"',].join(',')
    },
});


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <MuiThemeProvider theme={beatbitsTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
