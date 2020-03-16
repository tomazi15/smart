import { IMAGES } from '../helpers/images';
import { SET_IMAGES } from '../actions';

const setImagesReducer = (state=[...IMAGES], action) => {
    switch (action.type) {
        case SET_IMAGES:
            return state;    
        default:
            return state    
    }
}

export default setImagesReducer;