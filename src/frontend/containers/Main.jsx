import React, { Component } from 'react';
import scrollTo from 'helpers/scrollTo';
import CarouselScreen from 'Screens/CarouselScreen.jsx';
import ServiceScreen from 'Screens/ServiceScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import GalleryScreen from 'Screens/GalleryScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import { galleryItems } from 'api';

export default class Main extends Component {

    constructor() {
        super();

        this.state = {
            galleryItems: []
        };
    }

    componentWillMount() {
        galleryItems()
            .then(x => {
                this.setState({
                    galleryItems: x.data
                });
            });
            
    }

    componentDidMount() {
        setTimeout(() => {
            if (location.hash) {
                scrollTo(location.hash);
            }   
        }, 1000);   
    }

    render() {

        const { galleryItems } = this.state;
        return (
            <div>
                <CarouselScreen />
                <ServiceScreen />
                <AboutScreen />
                <GalleryScreen 
                    items={galleryItems}
                />
                <ContactsScreen />
            </div>
        );
    }
}