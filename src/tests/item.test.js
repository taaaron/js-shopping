import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Item from '../item/item';
import ItemModel from "../item/item.model";

describe('test for items', () => {

    test('When item is initialized it displays name, price, onSale, Delete', () => {
        let itemModel = new ItemModel('Thing',12);
        const wrapper = shallow(<Item item={itemModel}/>)

        expect(wrapper.find('td').at(0).text()).toEqual('Thing');
        expect(wrapper.find('td').at(1).text()).toEqual('$12.00 ');
        expect(wrapper.find('td').at(2).text()).toEqual('Delete');

        expect(wrapper.find('td').at(2).find('a').prop('href')).toEqual('#');
    });

    test('When we click the delete button validate that the onDelete function is called', () => {
        // Setup item
        let itemModel = new ItemModel('Thing',12);
        const onDeleteMock = jest.fn(() => {})

        // Create wrapper for item under test and capture the delete button
        const wrapper = shallow(<Item onDelete={onDeleteMock} item={itemModel}/>)
        const deleteButton = wrapper.find('a');

        // Simulate a click
        deleteButton.simulate('click')

        // Use set immediate to give priority to the on delete call on the stack.
        setImmediate(() => {
            expect(onDeleteMock.mock.calls.length).toBe(1);
        })
    });
});
