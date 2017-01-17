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

export default Box;