
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
});