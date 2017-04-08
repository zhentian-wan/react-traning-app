import React from 'react'
import TestUtils from 'react-dom/test-utils';
import { createRenderer as renderer }  from 'react-test-renderer/shallow';
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
    const component = renderer(<MyComponent name="John" />); //shadow renderer
    expect(component).toMatchSnapshot()
})