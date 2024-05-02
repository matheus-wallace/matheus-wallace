import PropTypes from 'prop-types';

const Subtitle = ({ title }) => {
  return <h3 className="bio__subtitle font_1_xl-b subtitle">{title}</h3>;
};

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subtitle;
