import PropTypes from "prop-types";

export const TextImageLayoutPropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool, // not required
};

export const GeneralComponentPropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
