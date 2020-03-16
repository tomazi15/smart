import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });


const mockStore = configureMockStore();
const store = mockStore({});


describe('Does App Component Render', () => {

    let app = shallow(<Provider store={store}><App /></Provider>);

    it('App component renders', () => {
        expect(app.find('Connect(App)')).toHaveLength(1);
    });
});

describe('App should dispatch action', () => {

  const middlewares = [];
  const mockStore = configureStore(middlewares);

  const getProductsData = () => ({
    type: 'SET_IMAGES'
  })

  it('is SET_IMAGES action dispatched', () => {
      const initialState = {}
      const store = mockStore(initialState)
  
      store.dispatch(getProductsData())

      const actions = store.getActions();

      const expectedPayload = { type: 'SET_IMAGES' }
      expect(actions).toEqual([expectedPayload]);
  });
});