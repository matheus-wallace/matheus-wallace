import Icon from 'components/utils/Icon';
import 'css/styles/card.css';
import PropTypes from 'prop-types';

const CardMobile = ({ path, alt, tech }) => {
  return (
    <div>
      <li className="card background-dark">
        <div>
          <Icon path={path} alt={alt} />
        </div>
        <p className="white font_1_xs-b">{tech}</p>
      </li>
    </div>
  );
};

CardMobile.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default CardMobile;
