import React from 'react';
import PropTypes from 'prop-types';
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
    onClick: PropTypes.func,
    color: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
    id: PropTypes.number
};

export default Box;