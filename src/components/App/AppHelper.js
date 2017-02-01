export const addBox = (boxes, newBox) => boxes.concat(newBox);

export const removeLast = (boxes) => boxes.slice(0, -1);

export const removeSelected = (boxes, box) => boxes.filter(b => b.id !== box.id);

export const updateSelectedBoxColor = (color, selected, boxes) => {
    return boxes.map((box) => {
        if( selected.id === box.id ) {
            box.color = color;
        }
        return box;
    });
};

