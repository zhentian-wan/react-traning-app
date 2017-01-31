import React from 'react';
import classnames from 'classnames';

import './Box.css';

const Box = ({color, onClick, id, highlight}) => (
  <div
      className={classnames('Box', color, {'highlight': highlight})}
      onClick={onClick}
  >
      Box {color} - {id}
  </div>
);

Box.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    color: React.PropTypes.string.isRequired,
    highlight: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number
};

export default Box;