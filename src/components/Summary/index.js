import React from 'react';
import classnames from 'classnames';

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

export const Summary = ({ selectedBox, total }) => (
    <div className={classnames('Summary')}>
        <h2>User Preference</h2>
        <h3>There are {total} boxes</h3>
        <ColorDiv selectedBox={selectedBox}/>
    </div>
);




