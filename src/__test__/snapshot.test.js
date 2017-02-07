import React from 'react'
import TestUtils from 'react-addons-test-utils';
import renderer from 'react-test-renderer'
import {makeSomeRequestAndGetSomeResponse, getFilteredStuff, MyComponent} from '../snapshot';

test('objects', async () => {
    const httpResponse = await makeSomeRequestAndGetSomeResponse();
    expect(httpResponse).toMatchSnapshot();
});


test('arrays', () => {
    const someFilteredList = getFilteredStuff('filter')
    expect(someFilteredList).toMatchSnapshot()
});

test('jsx', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<MyComponent name="John" />);
    const component = renderer.getRenderOutput();
    expect(component).toMatchSnapshot()
});

test('jsx: example2', () => {
    const component = renderer.create(<MyComponent name="John" />)
    expect(component).toMatchSnapshot()
})