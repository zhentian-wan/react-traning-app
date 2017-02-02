import {addBox, removeLast, removeSelected, updateSelectedBoxColor} from '../components/App/AppHelper';

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

test('should remove last box', () => {
    const result = removeLast(boxes);
    const expected = [
        {
            id    : 0,
            color : 'red'
        }
    ];
    expect(result).toEqual(expected);
});

test('removeLast should not mutate origin data', ()=> {
   const result = removeLast(boxes);
   expect(result).not.toBe(boxes);
});

test('should remove selected box', () => {
    const selected =        {
              id    : 0,
              color : 'red'
          };
    const result = removeSelected(boxes, selected);
    const expected = [
        {
            id    : 1,
            color : 'red'
        }
    ];
    expect(result).toEqual(expected);
});

test('removeSelected should not mutate origin data', () => {
    const selected =        {
        id    : 0,
        color : 'red'
    };
    const result = removeSelected(boxes, selected);
    expect(result).not.toBe(boxes);
});


test('should update selected box color', () => {
    const selected =        {
        id    : 1,
        color : 'red'
    };
    const color = 'green';
    const result = updateSelectedBoxColor(color, selected, boxes);
    const expected = [
        {
            id    : 0,
            color : 'red'
        },
        {
            id    : 1,
            color : 'green'
        }
    ];
    expect(result).toEqual(expected);
});