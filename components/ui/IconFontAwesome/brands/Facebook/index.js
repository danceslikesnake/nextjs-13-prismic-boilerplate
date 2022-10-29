import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function FaFacebook({ spin }) {
  return <FontAwesomeIcon icon={faFacebook} spin={spin} />;
}

FaFacebook.propTypes = {
  spin: PropTypes.bool,
};

export default FaFacebook;
