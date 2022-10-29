import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function FaYoutube({ spin }) {
  return <FontAwesomeIcon icon={faYoutube} spin={spin} />;
}

FaYoutube.propTypes = {
  spin: PropTypes.bool,
};

export default FaYoutube;
