import React from 'react';
import classnames from 'classnames';

import './Box.css';

const Box = ({color, onClick, id, highlight}) => (
  <div
      className={classnames('Box', color, {'highlight': highlight})}
      onClick={onClick}
  >
      Box2 {color} - {id}
  </div>
);

Box.propTypes = {
    onClick: React.PropTypes.func,
    color: React.PropTypes.string.isRequired,
    highlight: React.PropTypes.bool,
    id: React.PropTypes.number
};

export default Box;