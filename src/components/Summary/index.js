import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Summary.css';

/*
*  Stateless components
* */

const ColorDiv = ({ selectedBox }) => {
    if( !selectedBox ) {
        return <h3>Haven't select anything yet.</h3>;
    }
    return (
        <pre>
            <h4>Current selected box is {selectedBox.color} color</h4>
        </pre>
    )
};

ColorDiv.propTypes = {
    selectedBox: PropTypes.object
};

export const Summary = ({ selectedBox, total }) => (
    <div className={classnames('Summary')}>
        <h2>User Preference</h2>
        <h3>There are {total} boxes</h3>
        <ColorDiv selectedBox={selectedBox}/>
    </div>
);

Summary.propTypes = {
    selectedBox: PropTypes.object,
    total: PropTypes.number
};




