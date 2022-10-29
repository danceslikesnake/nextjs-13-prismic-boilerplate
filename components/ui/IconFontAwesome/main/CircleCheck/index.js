import { faCircleCheck as IconDuotone } from '@fortawesome/pro-duotone-svg-icons';
import { faCircleCheck as IconLight } from '@fortawesome/pro-light-svg-icons';
import { faCircleCheck as IconRegular } from '@fortawesome/pro-regular-svg-icons';
import { faCircleCheck as IconSolid } from '@fortawesome/pro-solid-svg-icons';
import { faCircleCheck as IconThin } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const FaCircleCheck = ({ style, spin }) => {
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

FaCircleCheck.propTypes = {
  spin: PropTypes.bool,
};

export default FaCircleCheck;
