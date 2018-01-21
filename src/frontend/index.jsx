import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'font-awesome/css/font-awesome.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'animate.css/animate.min.css';
import 'scss/index.scss';
import 'scss/default.scss';
import 'scss/theme.scss';
import 'scss/style.scss';
import 'scss/media.scss';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>
        ,
        document.getElementById('root')
    );
};
  
render(App);
  
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    });
}