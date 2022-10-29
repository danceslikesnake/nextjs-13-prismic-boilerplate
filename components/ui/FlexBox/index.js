import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import BaseElement from '../BaseElement';
import styles from './FlexBox.module.scss';

function FlexBox({
  children,
  className,
  renderAs,
  isInlineFlex,
  flexGrow,
  flexShrink,
  flexWrap,
  flexBasis,
  flex,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingVertical,
  paddingHorizontal,
  style,
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
      renderAs={renderAs}
      className={classnames(
        {
          [styles[`gap-${gap}`]]: gap,
          [styles[`padding-${padding}`]]: padding,
          [styles[`padding-top-${paddingTop}`]]: paddingTop,
          [styles[`padding-right-${paddingRight}`]]: paddingRight,
          [styles[`padding-bottom-${paddingBottom}`]]: paddingBottom,
          [styles[`padding-left-${paddingLeft}`]]: paddingLeft,
          [styles[`padding-vertical-${paddingVertical}`]]: paddingVertical,
          [styles[`padding-horizontal-${paddingHorizontal}`]]:
            paddingHorizontal,
          [styles.minWidth]: flexGrow,
        },
        className
      )}
      display={isInlineFlex ? 'inline-flex' : 'flex'}
      flexGrow={flexGrow}
      flexWrap={flexWrap}
      flexShrink={flexShrink}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      {...props}
      style={styleObject}
    >
      {children}
    </BaseElement>
  );
}

FlexBox.propTypes = {
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flexGrow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  flexShrink: PropTypes.oneOf(['0', '1', '2', '3', '4', '5']),
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  gap: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  isInlineFlex: PropTypes.bool,
  padding: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingTop: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingRight: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingBottom: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingLeft: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingVertical: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  paddingHorizontal: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']),
  renderAs: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

FlexBox.defaultProps = {
  isInlineFlex: false,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
};

export default FlexBox;
