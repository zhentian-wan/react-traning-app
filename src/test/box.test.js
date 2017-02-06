
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import Box from '../components/Box';

expect.extend(expectJSX);

describe('box component', () => {

    test('box should be a div type', () => {
       const renderer = TestUtils.createRenderer();
       renderer.render(<Box color="red" id="0"/>);
       const result = renderer.getRenderOutput().type;
       expect(result).toEqual('div');
    });

    test('box should be rendered correctly: red', () => {
       const renderer = TestUtils.createRenderer();
       renderer.render(<Box color="red" id="0"/>);
       const result = renderer.getRenderOutput().props.className.includes('red');
       const result2 = renderer.getRenderOutput().props.className.includes('green');
       const expected = true;
       const expected2 = false;
       expect(result).toEqual(expected);
       expect(result2).toEqual(expected2);
    });

    test('box should be rendered correctly: green', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Box color="green" id="0"/>);
        const result = renderer.getRenderOutput().props.className.includes('green');
        const result2 = renderer.getRenderOutput().props.className.includes('red');
        const expected = true;
        const expected2 = false;
        expect(result).toEqual(expected);
        expect(result2).toEqual(expected2);
    });
});