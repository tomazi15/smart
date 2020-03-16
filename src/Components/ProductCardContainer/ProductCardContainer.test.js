import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductCardContainer  from './ProductCardContainer';

configure({ adapter: new Adapter() });

describe('Does ProductCardContainer Component Render', () => {

    let wrapper = shallow(<ProductCardContainer />);

    it('ProductCardContainer render its css class', () => {
        expect(wrapper.find('.ProductCardContainer').length).toBe(1);
    }); 

    it('ProductCardContainer hass a trigger button', () => {
        expect(wrapper.find('Button').length).toBe(1);
    });

    it('ProductCardContainer has a modal', () => {
        expect(wrapper.find('Bootstrap(Modal)').length).toBe(1);
    });

    it('ProductCardContainer Child component imageSlider', () => {
        expect(wrapper.find('Connect(ImageSlider)').length).toBe(1);
    });

    it('ProductCardContainer Child component ProductInfo', () => {
        expect(wrapper.find('ProductInfo').length).toBe(1);
    });
});