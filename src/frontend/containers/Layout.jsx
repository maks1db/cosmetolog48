import React, { Component } from 'react';
import Header from 'Layout/Header.jsx';
import Navigation from 'Layout/Navigation.jsx';

export default class Layout extends Component {

    render() {

        const { children } = this.props;
        return (
            <div>
                <Header />
                <Navigation />
                {children}
            </div>
        );
    }
}