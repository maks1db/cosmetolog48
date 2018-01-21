import React, { Component } from 'react';
import scrollTo from 'helpers/scrollTo';
import CarouselScreen from 'Screens/CarouselScreen.jsx';
import ServiceScreen from 'Screens/ServiceScreen.jsx';
import AboutScreen from 'Screens/AboutScreen.jsx';
import GalleryScreen from 'Screens/GalleryScreen.jsx';
import ContactsScreen from 'Screens/ContactsScreen.jsx';
import { getGalleryItems as getGalleryItemsAction } from 'actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        gallery: state.app.gallery
    };
}

function mapDispatcToProps(dispatch) {
    return {
        getGalleryItems: () => dispatch(getGalleryItemsAction())
    };
}

@connect(mapStateToProps, mapDispatcToProps)
export default class Main extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        if (this.props.gallery.items.length === 0)
            this.props.getGalleryItems();        
    }

    componentDidMount() {
        setTimeout(() => {
            if (location.hash) {
                scrollTo(location.hash);
            }   
        }, 1000);   
    }

    render() {

        const { gallery } = this.props;
        return (
            <div>
                <CarouselScreen />
                <ServiceScreen />
                <AboutScreen />
                <GalleryScreen 
                    gallery={ gallery }
                />
                <ContactsScreen />
            </div>
        );
    }
}