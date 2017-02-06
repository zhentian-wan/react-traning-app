import React from 'react';
import TestUtils from 'react-addons-test-utils';

const CoolComponent = ({greeting}) => (
  <div>
      <h1>Greeting</h1>
      <div>{greeting}</div>
  </div>
);

describe('Cool Component', () => {
   test('it should ....', () => {
       const renderer = TestUtils.createRenderer();
       renderer.render(<CoolComponent greeting="hello world"/>);
       const output = renderer.getRenderOutput();
       const expected = (
           <div>
               <h1>Greeting</h1>
               <div>hello world</div>
           </div>
       );
       expect(output).toEqual(expected);
   })
});