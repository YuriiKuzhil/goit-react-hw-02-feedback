import PropTypes from 'prop-types';
import { ButtonsContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {options.map(option => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          key={option}
          data-key={option}
        >
          {option}
        </Button>
      ))}
    </ButtonsContainer>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
