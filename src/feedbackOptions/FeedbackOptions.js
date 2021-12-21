import { ButtonsContainer, Button } from './FeedbackOptions.styled';
const FeedbackOptions = () => {
  return (
    <ButtonsContainer>
      <Button type="button">Good</Button>
      <Button type="button">Neutral</Button>
      <Button type="button">Bad</Button>
    </ButtonsContainer>
  );
};

export default FeedbackOptions;
