import React, { PureComponent } from 'react';
import ImageGallery from 'react-image-gallery';

export default class GalleryScreen extends PureComponent {

    constructor() {
        super();
    }

    render() {

        const { items } = this.props;

        return (
            <div className="enigma_service" id="certificates">
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
                    <ImageGallery 
                        items={items} 
                    />
                </div>
            </div>
  
        );
    }
}
