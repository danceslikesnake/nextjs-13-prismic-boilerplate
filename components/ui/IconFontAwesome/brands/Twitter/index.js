import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function FaTwitter({ spin }) {
  return <FontAwesomeIcon icon={faTwitter} spin={spin} />;
}

FaTwitter.propTypes = {
  spin: PropTypes.bool,
};

export default FaTwitter;
