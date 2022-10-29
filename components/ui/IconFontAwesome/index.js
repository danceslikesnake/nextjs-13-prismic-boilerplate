import PropTypes from 'prop-types';
import React from 'react';

import { iconMap, styleMap } from './maps';

function IconFontAwesome({ iconStyle, name, spin }) {
  const Component = iconMap[`${name}`];
  return <Component style={iconStyle} spin={spin} />;
}

IconFontAwesome.propTypes = {
  iconStyle: PropTypes.oneOf(styleMap),
  name: PropTypes.oneOf(Object.keys(iconMap)),
  spin: PropTypes.bool,
};

IconFontAwesome.defaultProps = {
  iconStyle: styleMap[0],
  name: Object.keys(iconMap)[0],
};

export default IconFontAwesome;
