export const addBox = (boxes, newBox) => boxes.concat(newBox);

export const removeLast = (boxes) => boxes.slice(0, -1);

export const removeSelected = (boxes, box) => boxes.filter(b => b.id !== box.id);

export const setColor = (color, box) => Object.assign({}, box, {color});

export const findById = (id, boxes) => boxes.filter((b) => b.id === id)[0];

export const updateBoxes = (updatedBox, boxes) => {
    const index = boxes.findIndex((b) => b.id === updatedBox.id);
    return [
        ...boxes.slice(0, index),
        updatedBox,
        ...boxes.slice(index + 1)
    ];
};