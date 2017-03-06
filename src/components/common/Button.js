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
    ':hover': {
        backgroundColor: 'orange'
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