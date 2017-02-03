import {
    addBox, removeLast, removeSelected, setColor, findById, updateBoxes
} from '../components/App/AppHelper';

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
    id    : 2,
    color : 'green'
};

test.skip('Should be able to add new box', () => {
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
            id    : 2,
            color : 'green'
        }
    ];
    const result   = addBox(boxes, newBox);
    expect(result)
    .toEqual(expected);
});

test.skip('addBox should be immutable', () => {
    const result = addBox(boxes, newBox);
    expect(result)
    .not
    .toBe(boxes);
});

test.skip('should remove last box', () => {
    const result   = removeLast(boxes);
    const expected = [
        {
            id    : 0,
            color : 'red'
        }
    ];
    expect(result)
    .toEqual(expected);
});

test.skip('removeLast should not mutate origin data', () => {
    const result = removeLast(boxes);
    expect(result)
    .not
    .toBe(boxes);
});

test.skip('should remove selected box', () => {
    const selected = {
        id    : 0,
        color : 'red'
    };
    const result   = removeSelected(boxes, selected);
    const expected = [
        {
            id    : 1,
            color : 'red'
        }
    ];
    expect(result)
    .toEqual(expected);
});

test.skip('removeSelected should not mutate origin data', () => {
    const selected = {
        id    : 0,
        color : 'red'
    };
    const result   = removeSelected(boxes, selected);
    expect(result)
    .not
    .toBe(boxes);
});

test.skip('should update selected box color', () => {
    const selected = {
        id    : 1,
        color : 'red'
    };
    const color    = 'green';
    const result   = updateSelectedBoxColor(color, selected, boxes);
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
    expect(result)
    .toEqual(expected);
});

test('findById should return the right box', () => {
    const id  = 1;
    const box = findById(id, boxes);
    expect(box.id)
    .toEqual(id);
});

test.skip('setColor should change the selected box color', () => {
    const box           = {
        id    : 0,
        color : 'red'
    };
    const expectedColor = 'green';
    const updatedBox    = setColor(expectedColor, box);

    expect(updatedBox.color)
    .toEqual(expectedColor);
});

test('setColor should not mutate the origin data', () => {
    const box           = {
        id    : 0,
        color : 'red'
    };
    const expectedColor = 'green';
    const updatedBox    = setColor(expectedColor, box);
    expect(updatedBox)
    .not
    .toBe(box);
});

test('updateBoxes should update boxes', () => {
    const box     = {
        id    : 0,
        color : 'green'
    };
    const updated = updateBoxes(box, boxes);
    const expected = [
        {
            id: 0,
            color: 'green'
        }, {
            id: 1,
            color: 'red'
        }
    ];
    expect(updated).toEqual(expected);
});