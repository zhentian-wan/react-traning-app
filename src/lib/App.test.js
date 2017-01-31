import {addBox} from '../components/App/AppHelper';

const boxes = [
    {
        id    : 0,
        color : 'red'
    },
    {
        id    : 1,
        color : 'red'
    }
];

const newBox = {
    id: 2,
    color: 'green'
};

test('Should be able to add new box', () => {
   const expected = [
       {
           id    : 0,
           color : 'red'
       },
       {
           id    : 1,
           color : 'red'
       },
       {
           id: 2,
           color: 'green'
       }
   ];
   const result = addBox(boxes, newBox);
   expect(result).toEqual(expected);
});

test('addBox should be immutable', () => {
    const result = addBox(boxes, newBox);
    expect(result).not.toBe(boxes);
});