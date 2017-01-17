import React from 'react';
import classnames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';
import Box from '../Box';

import './Screentwo.css';

const style = {
    margin : 12,
};

/*
* Stateless components
* */
const ActionBtns = ({ selectedBox, onBtnClick }) => (
    <nav className={classnames('nav')}>
        <RaisedButton
            label="Red"
            style={style}
            onClick={() => onBtnClick('red', selectedBox)}/>
        <RaisedButton
            label="Green"
            style={style}
            onClick={() => onBtnClick('green', selectedBox)}/>
    </nav>
);

export const Screentwo = ( {selectedBox, onBtnClick } ) => {

    if( !selectedBox ) {
        return (
            <h2>Haven't select anything yet.</h2>
        );
    }
    return (
        <div className={classnames('Screentwo')}>
            <ActionBtns
                onBtnClick={onBtnClick}
                selectedBox={selectedBox}/>
            <hr/>
            <Box color={selectedBox.color}></Box>
            <pre className={classnames('desc')}>
                    Current selected box is {selectedBox.color}
                </pre>
        </div>
    );
};