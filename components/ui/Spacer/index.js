import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BaseElement from '../BaseElement';
import styles from './Spacer.module.scss';

function Spacer({ size, direction }) {
  return (
    <BaseElement
      className={classnames(styles.spacer, {
        [styles[`${direction}`]]: direction,
        [styles[`${size}`]]: size,
      })}
    />
  );
}

Spacer.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

Spacer.defaultProps = {
  size: 's',
  direction: 'vertical',
};

export default Spacer;
