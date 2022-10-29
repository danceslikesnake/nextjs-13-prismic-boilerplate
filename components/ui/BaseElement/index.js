import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './baseElement.module.scss';

export const useElementClassNames = ({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  flexGrow,
  flexShrink,
  display,
  ...properties
}) => {
  return [
    classnames({
      [styles[`is-flex-direction-${flexDirection}`]]: flexDirection,
      [styles[`is-flex-wrap-${flexWrap}`]]: flexWrap,
      [styles[`is-justify-content-${justifyContent}`]]: justifyContent,
      [styles[`is-align-items-${alignItems}`]]: alignItems,
      [styles[`is-flex-grow-${flexGrow}`]]: flexGrow,
      [styles[`is-flex-shrink-${flexShrink}`]]: flexShrink,
      [styles[`is-${display}`]]: display,
    }),
    properties,
  ];
};

function BaseElement({
  renderAs,
  children,
  domRef,
  className,
  ...allProperties
}) {
  const RenderAs = renderAs;
  const [classNames, properties] = useElementClassNames(allProperties);
  return (
    <RenderAs
      ref={domRef}
      className={classnames(className, classNames)}
      {...properties}
    >
      {children}
    </RenderAs>
  );
}

BaseElement.propTypes = {
  children: PropTypes.any,
  domRef: PropTypes.object,
  className: PropTypes.string,
  renderAs: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  display: PropTypes.oneOf([
    'block',
    'flex',
    'inline',
    'inline-block',
    'inline-flex',
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
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
    'start',
    'end',
    'left',
    'right',
  ]),
  style: PropTypes.object,
};

BaseElement.defaultProps = {
  renderAs: 'div',
};

export default BaseElement;
