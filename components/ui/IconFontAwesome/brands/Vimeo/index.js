import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function FaVimeo({ spin }) {
  return <FontAwesomeIcon icon={faVimeo} spin={spin} />;
}

FaVimeo.propTypes = {
  spin: PropTypes.bool,
};

export default FaVimeo;
