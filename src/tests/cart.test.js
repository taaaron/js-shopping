import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Cart from "../cart/cart";

describe('Cart tests', () => {

   test('When initialized ensure the cart is empty.', () => {
      const wrapper = shallow(<Cart />);

      expect(wrapper.state().list.length).toBe(0);
    });

   test('Get items from api', done => {
       const wrapper = shallow(<Cart/>);

       setImmediate(() => {
           expect(wrapper.state().list.length).toBe(2);
           done();
       });
   });
});