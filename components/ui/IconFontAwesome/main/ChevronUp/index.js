import { faChevronUp as IconDuotone } from '@fortawesome/pro-duotone-svg-icons';
import { faChevronUp as IconLight } from '@fortawesome/pro-light-svg-icons';
import { faChevronUp as IconRegular } from '@fortawesome/pro-regular-svg-icons';
import { faChevronUp as IconSolid } from '@fortawesome/pro-solid-svg-icons';
import { faChevronUp as IconThin } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const FaChevronUp = ({ style, spin }) => {
  const renderIcon = () => {
    switch (style) {
      case 'duotone':
        return <FontAwesomeIcon icon={IconDuotone} spin={spin} />;
      case 'thin':
        return <FontAwesomeIcon icon={IconThin} spin={spin} />;
      case 'light':
        return <FontAwesomeIcon icon={IconLight} spin={spin} />;
      case 'regular':
        return <FontAwesomeIcon icon={IconRegular} spin={spin} />;
      case 'solid':
      default:
        return <FontAwesomeIcon icon={IconSolid} spin={spin} />;
    }
  };
  return renderIcon();
};

FaChevronUp.propTypes = {
  spin: PropTypes.bool,
};

export default FaChevronUp;
