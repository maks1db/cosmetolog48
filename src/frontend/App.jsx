import React from 'react';
import Main from 'containers/Main.jsx';
import Layout from 'containers/Layout.jsx';
import ReduxToastr from 'react-redux-toastr';

export default class App extends React.Component{

    constructor() {
        super();
    }

    render() { 
        return (
            <div>
                <Layout><Main /></Layout>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                /> 
            </div>);
    }
}