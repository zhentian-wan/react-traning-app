import React from 'react';
import {setDisplayName, componentFromProp, mapProps, defaultProps, compose} from 'recompose';
import Radium from 'radium';

const addStyle = style => mapProps(props => ({
    ...props,
    style: [
        props.style,
        style
    ]
}));

const style = {
    backgroundColor: 'black',
    color: 'white',
    transform: 'rotate(-13deg)',
    transition: 'all ease 0.43s',
    ':hover': {
        backgroundColor: 'orange',
        color: 'lightGreen',
        transform: 'rotate(0deg)'
    }
};

const enhance = compose(
    addStyle(style),
    setDisplayName('Button'),
    defaultProps({
        element: 'button'
                 }),
    Radium
);

export default enhance(componentFromProp('element'));