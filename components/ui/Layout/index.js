import PropTypes from 'prop-types';

import Spacer from '../Spacer';

function Layout({ children, removeSpacing }) {
  return (
    <>
      <div id='top' />
      {!removeSpacing && (
        <>
          <Spacer size='l' />
          <Spacer size='l' />
        </>
      )}
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  removeSpacing: PropTypes.bool,
};

Layout.defaultProps = {
  removeSpacing: false,
};

export default Layout;
