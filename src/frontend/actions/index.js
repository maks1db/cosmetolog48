import { galleryItems  } from 'api';
import constants from '../constants';

export const getGalleryItems = () => dispatch => {
    dispatch({
        type: constants.GALLERY_REQUEST
    });

    galleryItems()
        .then(x => {
            dispatch({
                type: constants.GALLERY_RECEIVE,
                items: x.data
            });
        });
};

