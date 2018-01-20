import React from 'react';
import ReactDOM from 'react-dom/server';
import JspReplace from 'frontend/jsp_replace';
import path from 'path';
import configureStore from 'store';
import { Provider } from 'react-redux';
import App from 'frontend/App.jsx';

module.exports = (req, res) => {
    const store = configureStore();
    const JspVars = new JspReplace({
        entry: path.resolve(__dirname, '../../frontend/template', 'index.html')
    });
    const version = require('../../../package.json').version;
    JspVars.replace('{version}',  version);
    let publicPath = '/assets';

    JspVars
        .replace('${js-path}', publicPath + '/js/')
        .replace('${link-path}', '');

    const componentHTML = ReactDOM.renderToString(
        <Provider store={store}>
            <App />
        </Provider>  
    );   

    JspVars.replace('${content}', componentHTML);
    res.end(JspVars.getText());
};