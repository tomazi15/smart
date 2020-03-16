import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductInfo  from './ProductInfo';

configure({ adapter: new Adapter() });

describe('Does ProductInfo Component Render', () => {

    let wrapper = shallow(<ProductInfo />);

    it('ProductInfo render h4', () => {
        expect(wrapper.find('h4').text()).toEqual('Gym King Core Origin T-Shirt');
    }); 
    it('ProductInfo render price span', () => {
        expect(wrapper.find('span').text()).toEqual('£ 30');
    });
    it('ProductInfo render info description section', () => {
        expect(wrapper.find('.ProductInfo__desc').length).toBe(1);
    });
});