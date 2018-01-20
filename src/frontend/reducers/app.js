import constants from '../constants';

const initialState = {
    gallery: {
        isFetching: false,
        items: []
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case constants.GALLERY_REQUEST:
        return {...state, gallery: { isFetching: true, items: []}}; 
    case constants.GALLERY_RECEIVE:
        return {...state, gallery: { isFetching: false, items: action.items}};   
    }

    return state;
};