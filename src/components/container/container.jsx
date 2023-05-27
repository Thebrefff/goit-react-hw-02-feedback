import PropTypes from 'prop-types';

import React from 'react';
import css from './container.module.css';

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
