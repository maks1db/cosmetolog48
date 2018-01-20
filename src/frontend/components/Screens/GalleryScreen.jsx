import React, { PureComponent } from 'react';
import ImageGallery from 'react-image-gallery';

export default class GalleryScreen extends PureComponent {

    constructor() {
        super();

        this.state = {
            show: false
        };
    }

    onScroll = () => {
        const scroll = window.scrollY;
        if (this.item.offsetTop <= scroll + 300) {
            this.setState({
                show: true
            });    
            window.removeEventListener('scroll', this.onScroll);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {

        const { gallery } = this.props;
        const { show } = this.state;

        return (
            <div className="enigma_service" id="certificates" ref={(e) => this.item = e } >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="enigma_heading_title">
                                <h3>Сертификаты</h3>		
                            </div>
                        </div>
                    </div>
                </div>	
                <div className="container">
                    { show && <ImageGallery 
                        items={gallery.items} 
                    /> }
                </div>
            </div>
  
        );
    }
}
