import React, { Component } from 'react';
import FeedbackSection from './feedbackSection';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <FeedbackSection>
        <FeedbackOptions />
        <Statistics />
      </FeedbackSection>
    );
  }
}
export default App;
