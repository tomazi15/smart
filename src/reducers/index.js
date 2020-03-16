import { combineReducers } from 'redux';
import setImagesReducer from './setImagesReducer';

const rootReducer = combineReducers ({
    images: setImagesReducer
});

export default rootReducer;