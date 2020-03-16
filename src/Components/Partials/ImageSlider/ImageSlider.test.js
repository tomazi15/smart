import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImageSlider } from './ImageSlider';

configure({ adapter: new Adapter() });

const props = {
    images: [
        {id: 1, img_url: 'someUrl'}
    ]
}

describe('Does ImageSlider Component Render', () => {

    let wrapper = shallow(<ImageSlider {...props}/>);

    it('ImageSlider render its css class', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('.ImageSlider').length).toBe(1);
    });
});