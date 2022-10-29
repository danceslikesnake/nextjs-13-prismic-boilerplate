import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BaseElement from '../BaseElement';
import styles from './Box.module.scss';

function Box({
  children,
  display,
  className,
  renderAs,
  padding,
  flex,
  flexBasis,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingVertical,
  paddingHorizontal,
  style,
  setPositionRelative,
  ...props
}) {
  let styleObject = { ...style };
  if (flexBasis) {
    styleObject = {
      ...styleObject,
      flexBasis: `${flexBasis}`,
    };
  }
  if (flex) {
    styleObject = {
      ...styleObject,
      flex: `${flex}`,
    };
  }
  return (
    <BaseElement
      className={classnames(
        {
          [styles[`padding-${padding}`]]: padding,
          [styles[`padding-top-${paddingTop}`]]: paddingTop,
          [styles[`padding-right-${paddingRight}`]]: paddingRight,
          [styles[`padding-bottom-${paddingBottom}`]]: paddingBottom,
          [styles[`padding-left-${paddingLeft}`]]: paddingLeft,
          [styles[`padding-vertical-${paddingVertical}`]]: paddingVertical,
          [styles[`padding-horizontal-${paddingHorizontal}`]]:
            paddingHorizontal,
        },
        className
      )}
      display={display}
      renderAs={renderAs}
      setPositionRelative={setPositionRelative}
      {...props}
      style={styleObject}
    >
      {children}
    </BaseElement>
  );
}

Box.propTypes = {
  children: PropTypes.any,
  /**
   This sets the CSS box model for a `<Box />` component
   */
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  padding: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingTop: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingRight: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingBottom: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingLeft: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingVertical: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingHorizontal: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  /**
   Set this to whatever HTML element you want a `<Box />` to render as. A `<Box />` will accept any props applicable to the HTML element.
   */
  renderAs: PropTypes.string,
  setPositionRelative: PropTypes.bool,
};

Box.defaultProps = {
  display: 'block',
  renderAs: 'div',
};

export default Box;
