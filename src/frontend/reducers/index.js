import { combineReducers } from 'redux';
import {reducer as toastr} from 'react-redux-toastr';
import app from './app';

export default combineReducers({
    toastr,
    app
});