import PropTypes from 'prop-types';
import { Section, Title } from './FeedbackSection.styled';

const FeedbackSection = ({ children }) => {
  return (
    <Section>
      <Title>Please leave feedback</Title>
      {children}
    </Section>
  );
};
FeedbackSection.protoTypes = {
  children: PropTypes.node.isRequired,
};
export default FeedbackSection;
