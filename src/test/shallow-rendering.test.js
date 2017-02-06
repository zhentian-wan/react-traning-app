import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);


const CoolComponent = ({ greeting }) => (
    <div>
        <h1>Greeting</h1>
        <div>{greeting}</div>
    </div>
);

describe('Cool Component', () => {
    test('it should render correctly.', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<CoolComponent greeting="hello world"/>);
        const output = renderer.getRenderOutput();
        const expected = (
            <div>
                <h1>Greeting</h1>
                <div>hello world</div>
            </div>
        );
        expect(output)
            .toEqual(expected);
    });

    test('only piece of ui element', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<CoolComponent greeting="hello world"/>);
        const result = renderer.getRenderOutput();
        const expected = <div>hello world</div>;
        expect(result).toIncludeJSX(expected);
    });
});