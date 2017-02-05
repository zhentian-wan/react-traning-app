import {
    addBox, removeLast, removeSelected, setColor, findById, updateBoxes, filterBoxes
} from '../components/App/AppHelper';

describe('app tests', () => {

    let boxes, newBox;
    beforeEach(() => {
        boxes = [
            {
                id    : 0,
                color : 'red'
            },
            {
                id    : 1,
                color : 'red'
            }
        ];

        newBox = {
            id    : 2,
            color : 'green'
        };
    })

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
                id    : 2,
                color : 'green'
            }
        ];
        const result   = addBox(boxes, newBox);
        expect(result)
        .toEqual(expected);
    });

    test('addBox should be immutable', () => {
        const result = addBox(boxes, newBox);
        expect(result)
        .not
        .toBe(boxes);
    });

    test('should remove last box', () => {
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

    test('removeLast should not mutate origin data', () => {
        const result = removeLast(boxes);
        expect(result)
        .not
        .toBe(boxes);
    });

    test('should remove selected box', () => {
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

    test('removeSelected should not mutate origin data', () => {
        const selected = {
            id    : 0,
            color : 'red'
        };
        const result   = removeSelected(boxes, selected);
        expect(result)
        .not
        .toBe(boxes);
    });

    test('findById should return the right box', () => {
        const id  = 1;
        const box = findById(id, boxes);
        expect(box.id)
        .toEqual(id);
    });

    test('setColor should change the selected box color', () => {
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

    test('filterBoxes should filter boxes according to router state: /all', () => {
        const state = '/all';
        const result = filterBoxes(boxes, state);
        expect(result).toEqual(boxes);
    });

    test('filterBoxes should filter boxes according to router state: /allgreen', () => {
        const state = '/allgreen';
        const result = filterBoxes(boxes, state);
        expect(result).toEqual([]);
    });

    test('filterBoxes should filter boxes according to router state: /allred', () => {
        const state = '/allred';
        const result = filterBoxes(boxes, state);
        expect(result).toEqual(boxes);
    });

    test('filterBoxes should not mutate the origin data', () => {
        const state = '/allred';
        const result = filterBoxes(boxes, state);
        expect(result).not.toBe(boxes);
    });
});
