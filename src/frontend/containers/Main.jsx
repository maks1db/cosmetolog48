import React, { Component } from 'react';
import scrollTo from 'helpers/scrollTo';
import CarouselScreen from 'Screens/CarouselScreen.jsx';

export default class Main extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        if (location.hash) {
            scrollTo(location.hash);
        }
    }

    render() {
        return (
            <div>
                <CarouselScreen />
            </div>
        );
    }
}