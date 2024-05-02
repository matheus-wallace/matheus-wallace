import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const Icon = ({ path, alt }) => {
  return <ReactSVG src={path} alt={alt} />;
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
