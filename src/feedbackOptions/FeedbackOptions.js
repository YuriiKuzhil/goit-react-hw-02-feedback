import { ButtonsContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onIncrement }) => {
  return (
    <ButtonsContainer>
      <Button type="button" onClick={onIncrement} datd-key="good">
        Good
      </Button>
      <Button type="button" onClick={onIncrement} datd-key="neutral">
        Neutral
      </Button>
      <Button type="button" onClick={onIncrement} datd-key="bad">
        Bad
      </Button>
    </ButtonsContainer>
  );
};

export default FeedbackOptions;
