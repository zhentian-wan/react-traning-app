import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Box from '../Box';
import {partial} from '../../lib/util';

import './Screentwo.css';

const style = {
    margin : 12,
};

/*
* Stateless components
* */
const ActionBtns = ({ selectedBox, onBtnClick }) => {
    const setGreenColor = partial(onBtnClick, 'green', selectedBox.id);
    const setRedColor = partial(onBtnClick, 'red', selectedBox.id);
    return (
        <nav className={classnames('nav')}>
            <RaisedButton
                label="Red"
                style={style}
                onClick={setRedColor}/>
            <RaisedButton
                label="Green"
                style={style}
                onClick={setGreenColor}/>
        </nav>
    );
};

ActionBtns.propTypes = {
    selectedBox : PropTypes.object.isRequired,
    onBtnClick  : PropTypes.func.isRequired
};

export const Screentwo = ({ selectedBox, onBtnClick }) => {

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
            <Box color={selectedBox.color} id={selectedBox.id}/>
            <pre className={classnames('desc')}>
                Current selected box is {selectedBox.color}
            </pre>
        </div>
    );
};

Screentwo.propTypes = {
    selectedBox : PropTypes.object,
    onBtnClick  : PropTypes.func
};